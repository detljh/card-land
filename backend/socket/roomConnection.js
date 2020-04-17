const serverEvents = require('../../constants/serverEvents');
const clientEvents = require('../../constants/clientEvents');
const gameTypes = require('../../constants/gameTypes');
const mongoose = require('mongoose');
const Room = mongoose.model('Room');
const Player = mongoose.model('Player');
const tictactoe = require('./games/tictactoe');

let queue = {};

const rejoinQueue = (io, room) => {
    io.in(room._id).emit(serverEvents.UPDATE_ROOM, { room: null });
    Room.destroy(room._id, (err) => {
        if (err) return console.log(err);
        io.of('/').in(room._id).clients((err, sockets) => {
            if (err) return console.log(err);
            sockets.forEach(socketId => {
                io.sockets.sockets[socketId].leave(room._id);
                io.sockets.sockets[socketId].emit(serverEvents.REJOIN_QUEUE, { gameType: room.gameType });
            });
        });
    });
}

const disconnect = (io, socket) => {
    Player.destroy(socket.client.id, (err, player) => {
        if (err) return console.log(err);
        if (!player) return;
        // remove player from queue if in
        queue[player.gameType] = queue[player.gameType].filter(p => p.socket.client.id != player.socketId);

        let rooms = Object.keys(socket.rooms);
        rooms.forEach(roomId => {
            if (roomId == socket.client.id) {
                return;
            }

            Room.findById(roomId, (err, room) => {
                if (err) return console.log(err); 
                if (room) {
                    // disconnecting after in waiting room and found match
                    let update = {
                        players: room.players.filter(p => p.socket != player.socketId)
                    }
                    socket.leave(room._id);
                    socket.emit(serverEvents.UPDATE_ROOM, { room: null });
                    socket.emit(serverEvents.UPDATE_GAME, { state: null, gameType: room.gameType });
                    Room.updateRoom(room._id, update, (err, room) => {
                        if (err) return console.log(err);
                        if (!room) return;
                        if (!room.started) {
                            // room has not started then rejoin all other opponents to queue
                            rejoinQueue(io, room);
                        } else if (room.players.length === 0) {
                            // room has started and this socket is last one to leave
                            Room.destroy(room._id, (err) => {
                                if (err) return console.log(err);
                                switch(room.gameType) {
                                    case gameTypes.TIC_TAC_TOE:
                                        tictactoe.destroy(room._id);
                                        break;
                                    default:
                                        return;
                                }
                            });
                        } else {
                            // room has started and this socket is not last one to leave
                            io.in(room._id).emit(serverEvents.UPDATE_ROOM, { room: room });
                        }
                    });
                }
            }); 
        });
    });
}

const resetRoom = (room, cb) => {
    let update = {
        currentPlayerIndex: Math.floor(Math.random() * room.players.length),
        finished: false,
        winner: null
    }
    Room.updateRoom(room._id, update, cb);
}

module.exports = (io, socket) => {
    socket.on(clientEvents.JOIN_QUEUE, (data) => {
        Player.createPlayer(socket.client.id, data.gameType, (err) => {
            if (err) return console.log(err);
            if (!queue[data.gameType]) {
                queue[data.gameType] = [{ socket: socket, username: data.username }];
            } else {
                queue[data.gameType].push({ socket: socket, username: data.username });
            }
            
            if (queue[data.gameType].length >= 2) {
                let p1 = queue[data.gameType].shift();
                let p2 = queue[data.gameType].shift();
                let players = [{ socket: p1.socket.client.id, username: p1.username },
                    { socket: p2.socket.client.id, username: p2.username }];
                    
                Room.createRoom(data.gameType, players, (err, room) => {
                    if (err) return console.log(err);
                    if (p1.socket.connected) {
                        p1.socket.join(room._id);
                    }

                    if (p2.socket.connected) {
                        p2.socket.join(room._id);

                    }

                    if (p1.socket.connected && p2.socket.connected) {
                        io.in(room._id).emit(serverEvents.UPDATE_ROOM, { room: room });
                        io.in(room._id).emit(serverEvents.READY);
                    } else {
                        rejoinQueue(io, room);
                    }
                });
            }
        });
    });

    socket.on(clientEvents.START_GAME, () => {
        let rooms = Object.keys(socket.rooms);
        rooms.forEach(roomId => {
            if (roomId == socket.client.id) {
                return;
            }
            let update = {
                started: true
            }
            Room.updateRoom(roomId, update, (err, room) => {
                if (err) return console.log(err);
                if (!room) {
                    disconnect(io, socket);
                } else {
                    io.in(room._id).emit(serverEvents.UPDATE_ROOM, { room: room });
                }
            });
        });
    });

    socket.on(clientEvents.UPDATE_GAME_STATE, (data) => {
        let rooms = Object.keys(socket.rooms);
        rooms.forEach(roomId => {
            if (roomId == socket.client.id) {
                return;
            }
            
            Room.findById(roomId, (err, room) => {
                if (err) return console.log(err);
                if (!room) return;
                switch(room.gameType) {
                    case gameTypes.TIC_TAC_TOE:
                        tictactoe.updateGame(io, data, room._id);
                        break;
                    default:
                        return;
                }
            });
        });
    });

    socket.on(clientEvents.END_TURN, () => {
        let rooms = Object.keys(socket.rooms);
        rooms.forEach(roomId => {
            if (roomId == socket.client.id) {
                return;
            }

            Room.findById(roomId, (err, room) => {
                if (err) return console.log(err);
                if (!room) return;
                let update = {
                    currentPlayerIndex: (room.currentPlayerIndex + 1) % room.players.length
                }
                Room.updateRoom(roomId, update, (err, room) => {
                    if (err) return console.log(err);
                    if (!room) {
                        disconnect(io, socket);
                    } else {
                        io.in(room._id).emit(serverEvents.UPDATE_ROOM, { room: room });
                    }
                });
            });
        });
    });

    socket.on(clientEvents.END_GAME, (data) => {
        let rooms = Object.keys(socket.rooms);
        rooms.forEach(roomId => {
            if (roomId == socket.client.id) {
                return;
            }

            Room.findById(roomId, (err, room) => {
                if (err) return console.log(err);
                if (!room) return;
                let update = {
                    winner: room.players[data.winner],
                    finished: true
                }
            
                Room.updateRoom(room._id, update, (err, room) => {
                    if (err) return console.log(err);
                    if (!room) {
                        disconnect(io, socket);
                    } else {
                        io.in(room._id).emit(serverEvents.UPDATE_GAME, { state: room });
                    }
                });
            });
        });
    });

    socket.on(clientEvents.REQUEST_RESET, () => {
        let rooms = Object.keys(socket.rooms);
        rooms.forEach(roomId => {
            if (roomId == socket.client.id) {
                return;
            }
            socket.to(roomId).emit(serverEvents.SEND_RESET_REQUEST);
            socket.emit(serverEvents.WAITING_RESPONSE);
        });
    });

    socket.on(clientEvents.DECLINE_RESET, () => {
        let rooms = Object.keys(socket.rooms);
        rooms.forEach(roomId => {
            if (roomId == socket.client.id) {
                return;
            }
            io.in(roomId).emit(serverEvents.DECLINED_RESET);
        });
    });

    socket.on(clientEvents.ACCEPT_RESET, () => { 
        let rooms = Object.keys(socket.rooms);
        rooms.forEach(roomId => {
            if (roomId == socket.client.id) {
                return;
            }
            Room.findById(roomId, (err, room) => {
                if (err) return console.log(err);
                if (!room) return;
                resetRoom(room, (err, room) => {
                    if (err) return console.log(err);
                    if (!room) {
                        disconnect(io, socket);
                    } else {
                        io.in(room._id).emit(serverEvents.UPDATE_ROOM, { room: room });
                        io.in(room._id).emit(serverEvents.ACCEPTED_RESET);
                    }
                });
            });
        });

    });

    socket.on(clientEvents.LEAVE_ROOM, () => {
        disconnect(io, socket);
    });

    socket.on('disconnecting', () => {
        disconnect(io, socket);
    });

}