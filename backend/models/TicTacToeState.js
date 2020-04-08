const mongoose = require('mongoose');

const TicTacToeStateSchema = mongoose.Schema({
    room: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room'
    },
    currentIcon: {
        type: String,
        default: null
    },
    squares: Array,
    turns: {
        type: Number,
        default: 0
    },
    boardStatus: Array,
    winSquares: Array
});

TicTacToeStateSchema.statics.findByRoom = function(id, cb) {
    return this.findOne({
        room: id
    }, cb);
}

TicTacToeStateSchema.statics.createState = function(room, currentIcon, squares, turns, boardStatus, winSquares, cb) {
    return this.create({
        room: room,
        currentIcon: currentIcon,
        squares: squares,
        turns: turns,
        boardStatus: boardStatus,
        winSquares: winSquares
    }, cb);
}

const TicTacToeState = mongoose.model('TicTacToeState', TicTacToeStateSchema);