const mongoose = require('mongoose');

const BattleshipsStateSchema = mongoose.Schema({
    room: {
        type: mongoose.Schema.Types.ObjectId,
    },
    playerOneBoard: Array,
    playerTwoBoard: Array
});

BattleshipsStateSchema.statics.destroy = function(room, cb) {
    return this.findOneAndDelete({
        room: room
    }, cb);
}

BattleshipsStateSchema.statics.updateState = function(room, update, cb) {
    return this.findOneAndUpdate({
        room: room
    }, update, 
    {
        upsert: true,
        new: true
    }, cb);
}

mongoose.model('BattleshipsState', BattleshipsStateSchema);