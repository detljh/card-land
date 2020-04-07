const serverEvents = require('../../constants/serverEvents');
const clientEvents = require('../../constants/clientEvents');
const gameTypes = require('../../constants/gameTypes');
const mongoose = require('mongoose');
const Room = mongoose.model('Room');
const Player = mongoose.model('Player');

let rooms = {};
rooms['0'] = {
    id: 0,
    players: [],
    started: false,
    ready: false,
    currentPlayerIndex: null,
    type: gameTypes.TIC_TAC_TOE,
    gameState: {
        finished: false,
        winner: null
    }
};
let players = {};

const disconnect = (io, socket) => {
    Player.getRoom(socket.client.id, (err, player) => {
        if (err) return console.log(err);
        if (!player) return;
        let room = player.currentRoom;
        if (!room) {
            return;
        }
        player.removeRoom((err, player) => {
            if (err) return console.log(err);
            room.players = room.players.filter(p => p.socket != player.socketId);

            if (room.players.length === 0) {
                room.destroy((err) => {
                    if (err) return console.log(err);
                    console.log(`${player.username} exited tic tac toe`);
                });
            } else {
                room.ready = false;
                room.started = false;
                room.save((err, room) => {
                    if (err) return console.log(err);
                    socket.leave(room._id);
                    io.in(room._id).emit(serverEvents.UPDATE_ROOM_STATE, { room: room });
                    socket.emit(serverEvents.UPDATE_ROOM_STATE, { room: null });
                    console.log(`${player.username} exited tic tac toe`);
                });
            }
        });
    });
}

const resetRoom = (room) => {
    room.currentPlayerIndex = Math.floor(Math.random() * room.players.length);
    room.gameState = {
        finished: false,
        winner: null
    };
}

module.exports = (io, socket) => {
    socket.on(clientEvents.GET_ROOM, (type) => {
        Room.getRoom(type, (err, room) => {
            if (err) return console.log(err);
            if (room) {
                Player.assignRoom(socket.client.id, room._id, (err, player) => {
                    if (err) return console.log(err);
                    if (!player) return;
                    socket.emit(serverEvents.ASSIGN_ROOM, { roomId: room._id });
                });
            } else {
                Room.createRoom(type, (err, room) => {
                    if (err) return console.log(err);
                    Player.assignRoom(socket.client.id, room._id, (err, player) => {
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
            if (!room) return res.status(400).redirect('/');
            Player.getRoom(socket.client.id, (err, player) => {
                if (err) return console.log(err);
                let room = player.currentRoom;
                room.addPlayer(player.username, socket.client.id, (err, room) => {
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
                    console.log(`${player.username} joined ${room.gameType}`);
                });
            });
        });
        

        socket.on(clientEvents.START_GAME, (data) => {
            let room = rooms[data.roomId];
            room.started = true;
        });

        socket.on(clientEvents.UPDATE_GAME_STATE, (data) => {
            let room = players[socket.client.id].currentRoom;
            room.gameState.currentIcon = data.currentIcon;
            room.gameState.squares = [...data.squares];
            room.gameState.turns = data.turns;
            room.gameState.boardStatus = [...data.boardStatus];
            room.gameState.winSquares = [...data.winSquares];
            io.in(room.id).emit(serverEvents.UPDATE_GAME, { room: room.gameState });
        });

        socket.on(clientEvents.END_TURN, () => {
            let room = players[socket.client.id].currentRoom;
            room.currentPlayerIndex = (room.currentPlayerIndex + 1) % room.players.length;
            io.in(room.id).emit(serverEvents.UPDATE_ROOM_STATE, { room: room });
        });

        socket.on(clientEvents.END_GAME, (data) => {
            let room = players[socket.client.id].currentRoom;
            room.gameState.finished = true;
            room.gameState.winner = room.players[data.winner];
            io.in(room.id).emit(serverEvents.UPDATE_GAME, { room: room.gameState });
        });

        socket.on(clientEvents.REQUEST_RESET, () => {
            let room = players[socket.client.id].currentRoom;
            socket.to(room.id).emit(serverEvents.SEND_RESET_REQUEST);
            socket.emit(serverEvents.WAITING_RESPONSE);
        });

        socket.on(clientEvents.DECLINE_RESET, () => {
            let room = players[socket.client.id].currentRoom;
            io.in(room.id).emit(serverEvents.DECLINED_RESET);
        });

        socket.on(clientEvents.ACCEPT_RESET, () => {
            let room = players[socket.client.id].currentRoom;
            resetRoom(room);
            io.in(room.id).emit(serverEvents.UPDATE_ROOM_STATE, { room: room });
            io.in(room.id).emit(serverEvents.ACCEPTED_RESET);
        });

        socket.on(clientEvents.LEAVE_ROOM, () => {
            disconnect(io, socket);
        });
            
        socket.on('disconnect', () => {
            disconnect(io, socket);
        });
    });
}