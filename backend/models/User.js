const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const UserSchema = new Schema({
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

const User = mongoose.model('user', UserSchema);