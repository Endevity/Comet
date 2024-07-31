const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    _id: {
        type: Number,
        required: true
    },
    username: {
        type: String,
        required: true
    }
});

const User = mongoose.model('userData', userSchema);

module.exports = User;