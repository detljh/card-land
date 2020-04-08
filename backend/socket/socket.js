const serverEvents = require('../../constants/serverEvents');
const clientEvents = require('../../constants/clientEvents');
const mongoose = require('mongoose');
const Player = mongoose.model('Player');
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
            Player.createPlayer(username, socket.client.id, (err, player) => {
                if (err) return console.log(err);
                console.log(`${player.username} is connected`);
            });
        });
        
        roomConnection(io, socket);

        socket.on('disconnect', () => {
            count--;
            Player.findBySocket(socket.client.id, (err, player) => {
                if (err) return console.log(err);
                if (!player) return;
                player.destroy((err) => {
                    if (err) return console.log(err);
                    console.log(`${socket.username} disconnected`);
                })
            })
        });
    });

}