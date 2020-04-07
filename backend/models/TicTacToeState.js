const mongoose = require('mongoose');

const TicTacToeStateSchema = mongoose.Schema({
    room: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room'
    },
    finished: {
        type: Boolean,
        default: false
    },
    winner: {
        type: String,
        default: null
    },
    currentIcon: {
        type: String,
        default: null
    },
    squares: [String],
    turns: {
        type: Number,
        default: 0
    },
    boardStatus: [String],
    winSquares: [String]
});

const TicTacToeState = mongoose.model('TictacToeState', TicTacToeStateSchema);