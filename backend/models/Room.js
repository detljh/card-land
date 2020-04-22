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

RoomSchema.statics.destroy = function(id, cb) {
    return this.findOneAndDelete({
        _id: id
    }, cb);
}

RoomSchema.statics.updateRoom = function(id, update, cb) {
    return this.findOneAndUpdate({
        _id: id
    }, update, {
        new: true
    }, cb);
}

RoomSchema.statics.findById = function(id, cb) {
    return this.findOne({
        _id: id
    }, cb);
}

mongoose.model('Room', RoomSchema);