const events = require('../../constants/socketEvents');
const gameTypes = require('../../constants/gameTypes');

room = 1;
module.exports = (io) => {
    io.on('connection', (socket) => {
        console.log(`Client ${socket.client.id} connected`);
        socket.on(events.USER_AUTH, (data) => {
            if (data.name) {
                console.log(`Client ${socket.client.id} is user ${data.name}`);
            } else {
                console.log(`Client ${socket.client.id} is a guest user`);
            }
        });
        
        socket.on(events.START_GAME, (data) => {
            if (data === gameTypes.TIC_TAC_TOE) {
                require('./games/tictactoe')(io, socket, room);
            }
        });

        socket.on('disconnect', () => {
            console.log(`Client ${socket.client.id} disconnected`);
        });
    });

}