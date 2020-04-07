const mongoose = require('mongoose');

const PlayerSchema = mongoose.Schema({
    socketId: String,
    username: String,
    currentRoom: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room'
    }
});

PlayerSchema.statics.createPlayer = function(username, socketId, cb) {
    return this.create({
        username: username,
        socketId: socketId
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

PlayerSchema.statics.assignRoom = function(socketId, room, cb) {
    return this.updateOne({
        socketId: socketId,
        currentRoom: null
    }, {
        currentRoom: room
    }, cb);
}

PlayerSchema.methods.removeRoom = function(cb) {
    this.currentRoom = null;
    this.save(cb);
}

PlayerSchema.methods.destroy = function(cb) {
    this.remove(cb);
}

const Player = mongoose.model('Player', PlayerSchema);