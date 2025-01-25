const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    clicks: { type: Number, default: 0 },
    scores: { type: Number, default: 0 },
    rewards: { type: Number, default: 0 }
});

module.exports = mongoose.model('User', userSchema);