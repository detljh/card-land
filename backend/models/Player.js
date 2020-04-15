const mongoose = require('mongoose');

const PlayerSchema = mongoose.Schema({
    socketId: String,
    gameType: String,
    currentRoom: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room'
    }
});

PlayerSchema.statics.createPlayer = function(socketId, roomId, gameType, cb) {
    return this.create({
        socketId: socketId,
        gameType: gameType,
        currentRoom: roomId
    }, cb);
}

PlayerSchema.statics.findBySocket = function(id, cb) {
    return this.findOne({
        socketId: id
    }, cb);
}

PlayerSchema.statics.getRoom = function(id, cb) {
    return this.findOne({
        socketId: id
    }).populate('currentRoom').exec(cb);
}

PlayerSchema.statics.assignRoom = function(id, room, cb) {
    return this.updateOne({
        socketId: id
    }, {
        currentRoom: room
    }, cb);
}

PlayerSchema.methods.destroy = function(cb) {
    return this.remove(cb);
}

const Player = mongoose.model('Player', PlayerSchema);