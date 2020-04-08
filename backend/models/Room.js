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

RoomSchema.statics.getRoom = function(gameType, cb) {
    return this.findOne({
        gameType: gameType,
        ready: false
    }, cb);
}

RoomSchema.statics.createRoom = function(gameType, cb) {
    return this.create({
        gameType: gameType
    }, cb);
}

RoomSchema.statics.findById = function(id, cb) {
    return this.findOne({
        _id: id
    }, cb);
}

RoomSchema.methods.addPlayer = function(username, socket, cb) {
    this.players.push({ username:username, socket: socket });
    this.save(cb);
}

RoomSchema.methods.destroy = function(cb) {
    this.remove(cb);
}

const Room = mongoose.model('Room', RoomSchema);