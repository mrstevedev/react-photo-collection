const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: 'First name is required'
    },
    password: {
        type: String,
        required: 'Passport is required'
    },
    email: {
        type: String
    },
    location: {
        type: String
    },
    avatarIcon: {
        type: String
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
