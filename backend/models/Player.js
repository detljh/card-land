const mongoose = require('mongoose');

const PlayerSchema = mongoose.Schema({
    socketId: String,
    gameType: String
});

PlayerSchema.statics.createPlayer = function(socketId, gameType, cb) {
    return this.findOneAndUpdate({
        socketId: socketId
    },{
        gameType: gameType
    }, {
        upsert: true,
        new: true
    }, cb);
}

PlayerSchema.statics.findBySocket = function(id, cb) {
    return this.findOne({
        socketId: id
    }, cb);
}

PlayerSchema.statics.destroy = function(id, cb) {
    return this.findOneAndDelete({
        socketId: id
    }, cb);
}

const Player = mongoose.model('Player', PlayerSchema);