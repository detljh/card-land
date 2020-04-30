const serverEvents = require('../../../constants/serverEvents');
const mongoose = require('mongoose');
const TicTacToeState = mongoose.model('TicTacToeState');

const updateGame = (io, data, room) => {
    let update = {
        currentIcon: data.currentIcon,
        squares: data.squares,
        turns: data.turns,
        boardStatus: data.boardStatus,
        winSquares: data.winSquares
    }
    TicTacToeState.updateState(room._id, update, (err, state) => {
        if (err) return console.log(err);
        io.in(room._id).emit(serverEvents.UPDATE_GAME, { state: state });
    });
}

const destroy = (roomId) => {
    TicTacToeState.destroy(roomId, (err) => {
        if (err) return console.log(err);
    });
}

const reset = (roomId, io) => {
    TicTacToeState.destroy(roomId, (err) => {
        if (err) return console.log(err);
        io.in(roomId).emit(serverEvents.ACCEPTED_RESET);
    });
}

module.exports = {
    updateGame,
    destroy,
    reset
}