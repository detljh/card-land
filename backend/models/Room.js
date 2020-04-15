const mongoose = require('mongoose');

const RoomSchema = mongoose.Schema({
    players: Array,
    started: {
        type: Boolean,
        default: false
    },
    ready: {
        type: Boolean,
        default: false
    },
    currentPlayerIndex: {
        type: Number,
        default: null
    },
    gameType: {
        type: String,
        default: null
    },
    finished: {
        type: Boolean,
        default: false
    },
    winner: {
        type: Object,
        default: null
    }
});

RoomSchema.statics.createRoom = function(gameType, players, cb) {
    return this.create({
        gameType: gameType,
        players: players,
        ready: true,
        currentPlayerIndex: Math.floor(Math.random() * players.length)
    }, cb);
}

RoomSchema.methods.destroy = function(cb) {
    return this.remove(cb);
}

const Room = mongoose.model('Room', RoomSchema);