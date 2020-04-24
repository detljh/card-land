const serverEvents = require('../../../constants/serverEvents');
const mongoose = require('mongoose');
const BattleshipsState = mongoose.model('BattleshipsState');

const updateGame = (io, data, room) => {
    let update = {};
    if (data.placedShips) {
        let currentPlayer = room.players[room.currentPlayerIndex];
        if (data.username === currentPlayer.username) {
            // player one
            update.playerOneState = {
                username: data.username,
                placedShips: {...data.placedShips}
            }
        } else {
            // player two
            update.playerTwoState = {
                username: data.username,
                placedShips: {...data.placedShips}
            }
        }
    }
    
    BattleshipsState.updateState(room._id, update, (err, state) => {
        if (err) return console.log(err);
        if (state.playerOneState && state.playerTwoState) {
            state.shipArrangeScreen = false;
        }
        io.in(room._id).emit(serverEvents.UPDATE_GAME, { state: state });
    });
}

const destroy = (roomId) => {
    BattleshipsState.destroy(roomId, (err) => {
        if (err) return console.log(err);
    });
}

module.exports = {
    updateGame,
    destroy
}