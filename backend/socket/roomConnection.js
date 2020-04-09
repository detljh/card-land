const serverEvents = require('../../constants/serverEvents');
const clientEvents = require('../../constants/clientEvents');
const gameTypes = require('../../constants/gameTypes');
const mongoose = require('mongoose');
const Room = mongoose.model('Room');
const Player = mongoose.model('Player');
const tictactoe = require('./games/tictactoe');

const disconnect = (io, socket) => {
    Player.getRoom(socket.client.id, (err, player) => {
        if (err) return console.log(err);
        if (!player) return;
        let room = player.currentRoom;
        if (!room) return;

        player.destroy((err) => {
            if (err) return console.log(err);
            room.players = room.players.filter(p => p.socket != player.socketId);

            if (room.players.length === 0) {
                room.destroy((err) => {
                    if (err) return console.log(err);
                    socket.leave(room._id);
                    socket.emit(serverEvents.UPDATE_ROOM_STATE, { room: null });
                    socket.emit(serverEvents.UPDATE_GAME, { state: null, gameType: room.gameType });
                    socket.emit(serverEvents.ASSIGN_ROOM, { roomId: null });
                    console.log(`${socket.client.id} exited ${room.gameType}`)
                });
            } else {
                room.ready = false;
                room.save((err, room) => {
                    if (err) return console.log(err);
                    socket.leave(room._id);
                    io.in(room._id).emit(serverEvents.UPDATE_ROOM_STATE, { room: room });
                    socket.emit(serverEvents.UPDATE_ROOM_STATE, { room: null });
                    socket.emit(serverEvents.UPDATE_GAME, { state: null, gameType: room.gameType });
                    socket.emit(serverEvents.ASSIGN_ROOM, { roomId: null });
                    console.log(`${socket.client.id} exited ${room.gameType}`)
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
    socket.on(clientEvents.GET_ROOM, (gameType) => {
        Room.getRoom(gameType, (err, room) => {
            if (err) return console.log(err);
            if (room) {
                Player.createPlayer(socket.client.id, room._id, (err, player) => {
                    if (err) return console.log(err);
                    if (!player) return;
                    socket.emit(serverEvents.ASSIGN_ROOM, { roomId: room._id });
                });
            } else {
                Room.createRoom(gameType, (err, room) => {
                    if (err) return console.log(err);
                    Player.createPlayer(socket.client.id, room._id, (err, player) => {
                        if (err) return console.log(err);
                        if (!player) return;
                        socket.emit(serverEvents.ASSIGN_ROOM, { roomId: room._id });
                    });
                });
            }
        });
    });

    socket.on(clientEvents.JOIN_ROOM, (data) => {
        Room.findById(data.roomId, (err, room) => {
            if (err) return console.log(err);
            if (!room) return;
            room.addPlayer(data.username, socket.client.id, (err, room) => {
                if (err) return console.log(err);
                socket.join(room._id);
                if (room.players.length === 2) {
                    room.ready = true;
                    room.currentPlayerIndex = Math.floor(Math.random() * room.players.length);
                    room.save((err, room) => {
                        if (err) return console.log(err);
                        io.in(room._id).emit(serverEvents.UPDATE_ROOM_STATE, { room: room });
                        io.in(room._id).emit(serverEvents.READY);
                    });
                } else {
                    io.in(room._id).emit(serverEvents.UPDATE_ROOM_STATE, { room: room });
                }
                console.log(`${socket.client.id} joined ${room.gameType}`);
            });
        });
        

        socket.on(clientEvents.START_GAME, (data) => {
            Room.findById(data.roomId, (err, room) => {
                if (err) return console.log(err);
                if (room) {
                    room.started = true;
                    room.save((err) => {
                        if (err) return console.log(err);
                    });
                }
            });
        });

        socket.on(clientEvents.UPDATE_GAME_STATE, (data) => {
            Room.findById(data.roomId, (err, room) => {
                if (err) return console.log(err);
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

        socket.on(clientEvents.END_TURN, (data) => {
            Room.findById(data.roomId, (err, room) => {
                if (err) return console.log(err);
                if (room) {
                    room.currentPlayerIndex = (room.currentPlayerIndex + 1) % room.players.length;
                    room.save((err, room) => {
                        if (err) return console.log(err);
                        io.in(room._id).emit(serverEvents.UPDATE_ROOM_STATE, { room: room });
                    });
                }
            });
        });

        socket.on(clientEvents.END_GAME, (data) => {
            Room.findById(data.roomId, (err, room) => {
                if (err) return console.log(err);
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

        socket.on(clientEvents.REQUEST_RESET, (data) => {
            socket.to(data.roomId).emit(serverEvents.SEND_RESET_REQUEST);
            socket.emit(serverEvents.WAITING_RESPONSE);
        });

        socket.on(clientEvents.DECLINE_RESET, (data) => {
            io.in(data.roomId).emit(serverEvents.DECLINED_RESET);
        });

        socket.on(clientEvents.ACCEPT_RESET, (data) => {            
            Room.findById(data.roomId, (err, room) => {
                if (err) return console.log(err);
                if (room) {
                    resetRoom(room, (err, room) => {
                        if (err) return console.log(err);
                        io.in(room._id).emit(serverEvents.UPDATE_ROOM_STATE, { room: room });
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
    });
}