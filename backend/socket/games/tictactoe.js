const serverEvents = require('../../../constants/serverEvents');
const mongoose = require('mongoose');
const TicTacToeState = mongoose.model('TicTacToeState');

const updateGame = (io, data, room) => {
    TicTacToeState.findByRoom(room._id, (err, state) => {
        if (err) return console.log(err);
        if (state) {
            state.currentIcon = data.currentIcon;
            state.squares = data.squares;
            state.turns = data.turns;
            state.boardStatus = data.boardStatus;
            state.winSquares = data.winSquares;
            state.save((err, state) => {
                if (err) return console.log(err);
                io.in(room._id).emit(serverEvents.UPDATE_GAME, { state: state });
            });
        } else {
            TicTacToeState.createState(room._id, data.currentIcon, data.squares, data.turns, data.boardStatus, data.winSquares, (err, state) => {
                if (err) return console.log(err);
                io.in(room._id).emit(serverEvents.UPDATE_GAME, { state: state });
            });
        }
    });
}

const destroy = (room) => {
    TicTacToeState.destroy(room._id, (err) => {
        if (err) return console.log(err);
    });
}

module.exports = {
    updateGame,
    destroy
}