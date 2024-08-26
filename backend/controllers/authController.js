const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.register = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const user = await User.create({ username, email, password });
        const token = jwt.sign({ id: user._id }, 'your_jwt_secret');
        res.json({ token });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user || !await bcrypt.compare(password, user.password)) {
            throw new Error('Invalid credentials');
        }
        const token = jwt.sign({ id: user._id }, 'your_jwt_secret');
        res.json({ token });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
