const events = require('../../../constants/socketEvents');
let players = [];

module.exports = (io, socket, room) => {
    console.log(`Client ${socket.client.id} joined tic tac toe`);
    socket.join(room);
    players.push(socket.client.id);
    
    if (players.length != 2) {
        io.in(room).emit(events.LOAD_PLAYERS, players);

    } else {
        io.in(room).emit(events.READY);
    }

    socket.on(events.LEAVE_ROOM, () => {
        players.splice(players.indexOf(socket.client.id), 1);
        socket.leave(room);
        console.log(`Client ${socket.client.id} exited tic tac toe`);
    });
    
    socket.on('disconnect', () => {
        players.splice(players.indexOf(socket.client.id), 1);
        socket.leave(room);
        console.log(`Client ${socket.client.id} exited tic tac toe`);
    });
}

    

