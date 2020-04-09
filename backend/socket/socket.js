const serverEvents = require('../../constants/serverEvents');
const clientEvents = require('../../constants/clientEvents');
const roomConnection = require('./roomConnection');

let count = 0;
module.exports = (io) => {
    io.on('connection', (socket) => {
        count++;
        io.sockets.emit(serverEvents.USERS_ONLINE, { online: count });
        socket.on(clientEvents.AUTH, (data) => {
            let username = data.username;
            if (!username) {
                username = `guest${socket.client.id}`.slice(0, 15);
                socket.emit(serverEvents.SET_GUEST_ID, { username: username });
            }
            console.log(`${socket.client.id} is connected`);
        });
        
        roomConnection(io, socket);

        socket.on('disconnect', () => {
            count--;
            io.sockets.emit(serverEvents.USERS_ONLINE, { online: count });
            console.log(`${socket.client.id} disconnected`);
        });
    });

}