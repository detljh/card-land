const serverEvents = require('../../../constants/serverEvents');
const mongoose = require('mongoose');
const BattleshipsState = mongoose.model('BattleshipsState');

const updateGame = (io, data, roomId) => {
    let update = {
        
    }
    BattleshipsState.updateState(roomId, update, (err, state) => {
        if (err) return console.log(err);
        io.in(roomId).emit(serverEvents.UPDATE_GAME, { state: state });
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