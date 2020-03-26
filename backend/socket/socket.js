const events = require('../../constants/socketEvents');
const gameTypes = require('../../constants/gameTypes');

let room = 0;
let players = [];

let count = 0;
let guest= 0;

const disconnect = (io, socket) => {
    players.splice(players.indexOf(socket.username), 1);
    io.in(room).emit(events.LOAD_PLAYERS, {players: players });
    socket.leave(room);
    console.log(`${socket.username} exited tic tac toe`);
}

module.exports = (io) => {
    io.on('connection', (socket) => {
        count++;
        io.sockets.emit(events.USERS_ONLINE, { online: count });
        socket.on(events.USER_AUTH, (data) => {
            if (data.name) {
                socket.username = data.name;
                console.log(`${data.name} is connected`);
            } else {
                guest++;
                socket.username = `guest${guest}`;
                console.log(`${socket.username} is connected`);
            }
        });
        
        socket.on(events.GET_ROOM, (data) => {
            if (players.length === 2) {
                room++;
                players = [];
            }
            
            socket.emit(events.ASSIGN_ROOM, { room: room, gameType: data });
        });

        socket.on(events.JOIN_ROOM, (data) => {
            players.push(socket.username);
            socket.join(room);

            if (data === gameTypes.TIC_TAC_TOE) {
                console.log(`${socket.username} joined tic tac toe`);
                io.in(room).emit(events.LOAD_PLAYERS, { players: players });
                if (players.length === 2) {
                    io.in(room).emit(events.READY);
                }
            }

            socket.on(events.LEAVE_ROOM, () => {
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