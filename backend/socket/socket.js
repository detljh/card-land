const serverEvents = require('../../constants/serverEvents');
const clientEvents = require('../../constants/clientEvents');
const gameTypes = require('../../constants/gameTypes');

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

let count = 0;

const disconnect = (io, socket) => {
    let room = players[socket.client.id].currentRoom;
    rooms[room.id].players = room.players.filter(player => player != socket.username);
    rooms[room.id].started = false;
    rooms[room.id].ready = false;
    socket.leave(room.id);
    io.in(room.id).emit(serverEvents.UPDATE_ROOM_STATE, { room: rooms[room.id] });
    socket.emit(serverEvents.UPDATE_ROOM_STATE, { room: null });
    console.log(`${socket.username} exited tic tac toe`);
}

const resetRoom = (room) => {
    room.currentPlayerIndex = Math.floor(Math.random() * room.players.length);
    room.gameState = {
        finished: false,
        winner: null
    };
}

module.exports = (io) => {
    io.on('connection', (socket) => {
        count++;
        io.sockets.emit(serverEvents.USERS_ONLINE, { online: count });
        socket.on(clientEvents.AUTH, (data) => {
            if (data.name) {
                socket.username = data.name;
                console.log(`${data.name} is connected`);
            } else {
                socket.username = `guest${socket.client.id}`;
                socket.emit(serverEvents.SET_GUEST_ID, { username: socket.username });
                console.log(`${socket.username} is connected`);
            }
        });
        
        socket.on(clientEvents.GET_ROOM, (type) => {
            let roomIndex = Object.keys(rooms).find((key) => {
                if (rooms[key].ready === false && rooms[key].type === type) {
                    return true; 
                }
            });
            socket.emit(serverEvents.ASSIGN_ROOM, { roomId: rooms[roomIndex].id });
        });

        socket.on(clientEvents.JOIN_ROOM, (data) => {
            let room = rooms[data.roomId];
            let newPlayer = {
                name: socket.username,
                currentRoom: room
            }
            players[socket.client.id] = newPlayer;
            room.players.push(socket.username);
            socket.join(data.roomId);
            console.log(`${socket.username} joined ${room.type}`);
            if (room.players.length === 2) {
                room.ready = true;
                room.currentPlayerIndex = Math.floor(Math.random() * room.players.length);
                io.in(data.roomId).emit(serverEvents.UPDATE_ROOM_STATE, { room: room });
                io.in(data.roomId).emit(serverEvents.READY);
            } else {
                io.in(data.roomId).emit(serverEvents.UPDATE_ROOM_STATE, { room: room });
            }

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

        socket.on('disconnect', () => {
            count--;
            console.log(`${socket.username} disconnected`);
        });
    });

}