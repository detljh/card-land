const serverEvents = require('../../constants/serverEvents');
const clientEvents = require('../../constants/clientEvents');
const gameTypes = require('../../constants/gameTypes');
const mongoose = require('mongoose');
const Room = mongoose.model('Room');
const Player = mongoose.model('Player');
const tictactoe = require('./games/tictactoe');

let queue = {};

const disconnect = (io, socket) => {
    Player.getRoom(socket.client.id, (err, player) => {
        if (err) return console.log(err);
        if (!player) return;
        let room = player.currentRoom;

        player.destroy((err) => {
            if (err) return console.log(err);
            if (!room) {
                queue[player.gameType] = queue[player.gameType].filter(p => p.socket.client.id != player.socketId);
            } else {
                room.players = room.players.filter(p => p.socket != player.socketId);
                socket.leave(room._id);
                socket.emit(serverEvents.UPDATE_ROOM, { room: null });
                socket.emit(serverEvents.UPDATE_GAME, { state: null, gameType: room.gameType });
                room.save((err, room) => {
                    if (err) return console.log(err);
                    if (!room.started) {
                        io.in(room._id).emit(serverEvents.UPDATE_ROOM, { room: null });
                        room.destroy((err) => {
                            if (err) return console.log(err);
                            io.of('/').in(room._id).clients((err, sockets) => {
                                if (err) return console.log(err);
                                sockets.forEach(socketId => {
                                    Player.findBySocket(socketId, (err, player) => {
                                        if (err) return console.log(err);
                                        player.destroy((err) => {
                                            if (err) return console.log(err);
                                            io.sockets.sockets[socketId].leave(room._id);
                                            io.sockets.sockets[socketId].emit(serverEvents.REJOIN_QUEUE, { gameType: room.gameType });
                                        });
                                    });
                                    
                                });
                            });
                        });
                    } else if (room.players.length === 0) {
                        room.destroy((err) => {
                            if (err) return console.log(err);
                            switch(room.gameType) {
                                case gameTypes.TIC_TAC_TOE:
                                    tictactoe.destroy(room);
                                    break;
                                default:
                                    return;
                            }
                        });
                    } else {
                        io.in(room._id).emit(serverEvents.UPDATE_ROOM, { room: room });
                    }
                });
            }
        }); 
    });
}

const resetRoom = (room, cb) => {
    room.currentPlayerIndex = Math.floor(Math.random() * room.players.length);
    room.gameState = {
        finished: false,
        winner: null
    };
    room.finished = false;
    room.winner = null;
    room.save(cb);
}

module.exports = (io, socket) => {
    socket.on(clientEvents.JOIN_QUEUE, (data) => {
        if (!queue[data.gameType]) {
            queue[data.gameType] = [{ socket: socket, username: data.username }];
        } else {
            queue[data.gameType].push({ socket: socket, username: data.username });
        }

        Player.createPlayer(socket.client.id, null, data.gameType, (err) => {
            if (err) return console.log(err);
            if (queue[data.gameType].length >= 2) {
                let p1 = queue[data.gameType].shift();
                let p2 = queue[data.gameType].shift();
                let players = [{ socket: p1.socket.client.id, username: p1.username },
                    { socket: p2.socket.client.id, username: p2.username }];
                Room.createRoom(data.gameType, players, (err, room) => {
                    if (err) return console.log(err);
                    Player.assignRoom(p1.socket.client.id, room._id, (err) => {
                        if (err) return console.log(err);
                        Player.assignRoom(p2.socket.client.id, room._id, (err) => {
                            if (err) return console.log(err);
                            p1.socket.join(room._id);
                            p2.socket.join(room._id);
                            io.in(room._id).emit(serverEvents.UPDATE_ROOM, { room: room });
                            io.in(room._id).emit(serverEvents.READY);
                        });
                    });
                });
            }
        });
    });

    socket.on(clientEvents.START_GAME, () => {
        Player.getRoom(socket.client.id, (err, player) => {
            if (err) return console.log(err);
            if (player) {
                let room = player.currentRoom;
                if (room) {
                    let opponent = room.players.filter(p => p.socket != player.socketId)[0];
                    Player.findBySocket(opponent.socket, (err, player) => {
                        if (err) return console.log(err);
                        if (!player || String(player.currentRoom) !== String(room._id)) {
                            room.players = room.players.filter(p => p.socket != opponent.socket);
                            room.save((err) => {
                                if (err) return console.log(err);
                                io.in(room._id).emit(serverEvents.UPDATE_ROOM, { room: room });
                            })
                        } else {
                            room.started = true;
                            room.save((err) => {
                                if (err) return console.log(err);
                            });
                        }
                    });       
                }
            }
        });
    });

    socket.on(clientEvents.UPDATE_GAME_STATE, (data) => {
        Player.getRoom(socket.client.id, (err, player) => {
            if (err) return console.log(err);
            let room = player.currentRoom;
            if (room) {
                switch(room.gameType) {
                    case gameTypes.TIC_TAC_TOE:
                        tictactoe.updateGame(io, data, room);
                        break;
                    default:
                        return;
                }
            }
        });
    });

    socket.on(clientEvents.END_TURN, () => {
        Player.getRoom(socket.client.id, (err, player) => {
            if (err) return console.log(err);
            let room = player.currentRoom;
            if (room) {
                room.currentPlayerIndex = (room.currentPlayerIndex + 1) % room.players.length;
                room.save((err, room) => {
                    if (err) return console.log(err);
                    io.in(room._id).emit(serverEvents.UPDATE_ROOM, { room: room });
                });
            }
        });
    });

    socket.on(clientEvents.END_GAME, (data) => {
        Player.getRoom(socket.client.id, (err, player) => {
            if (err) return console.log(err);
            let room = player.currentRoom;
            if (room) {
                room.winner = room.players[data.winner];
                room.finished = true;
                room.save((err, room) => {
                    if (err) return console.log(err);
                    io.in(room._id).emit(serverEvents.UPDATE_GAME, { state: room });
                });
            }
        });
    });

    socket.on(clientEvents.REQUEST_RESET, () => {
        Player.getRoom(socket.client.id, (err, player) => {
            if (err) return console.log(err);
            let room = player.currentRoom;
            if (room) {
                socket.to(room._id).emit(serverEvents.SEND_RESET_REQUEST);
                socket.emit(serverEvents.WAITING_RESPONSE);
            }
        });
        
    });

    socket.on(clientEvents.DECLINE_RESET, () => {
        Player.getRoom(socket.client.id, (err, player) => {
            if (err) return console.log(err);
            let room = player.currentRoom;
            if (room) {
                io.in(room._id).emit(serverEvents.DECLINED_RESET);
            }
        });
    });

    socket.on(clientEvents.ACCEPT_RESET, () => { 
        Player.getRoom(socket.client.id, (err, player) => {
            if (err) return console.log(err);
            let room = player.currentRoom;
            if (room) {
                resetRoom(room, (err, room) => {
                    if (err) return console.log(err);
                    io.in(room._id).emit(serverEvents.UPDATE_ROOM, { room: room });
                    io.in(room._id).emit(serverEvents.ACCEPTED_RESET);
                });
            }
        });        
    });

    socket.on(clientEvents.LEAVE_ROOM, () => {
        disconnect(io, socket);
    });

    socket.on('disconnect', () => {
        disconnect(io, socket);
    });

}