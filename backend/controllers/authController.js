const user = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req,res) => {
    try {
        const { username, email, password, role } = req.body;
        const existingUser = await user.findOne({ email });

        if(existingUser) {
            return res.status(400).json({ message: 'Email already in use' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new user({
            username,
            email,
            password: hashedPassword,
            role
        });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });

    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.login = async (req,res) => {
    try {
        const { email, password } = req.body;
        const existingUser = await user.findOne({ email }).select('+password');

        if(!existingUser) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, existingUser.password);

        if(!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({
            userId: existingUser._id,
            role: existingUser.role
        }, 
        process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ token });

    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.logout = (req,res) => {
    res.status(200).json({ message: 'Logged out successfully' });
}