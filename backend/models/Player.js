const mongoose = require('mongoose');

const PlayerSchema = mongoose.Schema({
    socketId: String,
    currentRoom: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room'
    }
});

PlayerSchema.statics.createPlayer = function(socketId, roomId, cb) {
    return this.create({
        socketId: socketId,
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

PlayerSchema.methods.destroy = function(cb) {
    this.remove(cb);
}

const Player = mongoose.model('Player', PlayerSchema);