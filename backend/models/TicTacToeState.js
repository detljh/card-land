const mongoose = require('mongoose');

const TicTacToeStateSchema = mongoose.Schema({
    room: {
        type: mongoose.Schema.Types.ObjectId,
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

TicTacToeStateSchema.statics.destroy = function(room, cb) {
    return this.findOneAndDelete({
        room: room
    }, cb);
}

TicTacToeStateSchema.statics.updateState = function(room, update, cb) {
    return this.findOneAndUpdate({
        room: room
    }, update, 
    {
        upsert: true,
        new: true
    }, cb);
}

mongoose.model('TicTacToeState', TicTacToeStateSchema);