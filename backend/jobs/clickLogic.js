const User = require('../models/User');

const processClick = async (req, res) => {
    const { username } = req.body;
    
    // Find user or create a new one if not found
    let user = await User.findOne({ username });

    if (!user) {
        user = new User({ username, clicks: 0, rewards: 0, scores: 0 });  // Initialize scores as well
    }

    user.clicks += 1;
    
    // 50% chance for 10 points, 25% chance for a reward, 25% chance for 1 point
    const random = Math.random();
    let message = '';

    if (random < 0.25) {
        // 25% chance for a reward
        user.rewards += 1;
        message = '🎉 You won a prize!';
    } else if (random < 0.75) {
        // 50% chance for 10 points
        user.scores += 10;
        message = '🎁 You earned 10 points!';
    } else {
        // 25% chance for 1 point
        user.scores += 1;
        message = 'You earned 1 point!';
    }

    // Save updated user data
    await user.save();

    // Return the updated data and the message
    res.json({
        message,
        clicks: user.clicks,
        scores: user.scores,
        rewards: user.rewards,
    });
};

module.exports = { processClick };