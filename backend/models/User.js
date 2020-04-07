const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username: String,
    password: String
});

UserSchema.statics.checkUserExists = function(username, cb) {
    return this.findOne({
        username: username
    }, cb);
}

UserSchema.statics.createUser = function(username, password, cb) {
    return this.create({
        username: username,
        password: password
    }, cb);
}

const User = mongoose.model('User', UserSchema);