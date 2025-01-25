const express = require('express');
const User = require('../models/User');

const router = express.Router();

router.get('/:username', async (req, res) => {
    const user = await User.findOne({ username: req.params.username });
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

module.exports = router;