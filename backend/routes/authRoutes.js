const express = require('express');
const router = express.Router();

const User = require('../models/User');

const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

// Register
router.post('/register', authController.register);

// Login
router.post('/login', authController.login);

// Logout
router.post('/logout', authMiddleware, authController.logout);

// Get Profile
router.get('/profile', authMiddleware, async (req, res) => {

    try {

        const user = await User.findById(
            req.user.userId
        ).select('-password');

        if (!user) {
            return res.status(404).json({
                message: 'User not found'
            });
        }

        res.status(200).json(user);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: 'Server Error'
        });

    }

});

// Update Profile
router.put('/profile', authMiddleware, async (req, res) => {

    try {

        const { username, email } = req.body;

        const updatedUser =
            await User.findByIdAndUpdate(
                req.user.userId,
                {
                    username,
                    email
                },
                {
                    returnDocument: 'after',
                    runValidators: true
                }
            ).select('-password');

        if (!updatedUser) {
            return res.status(404).json({
                message: 'User not found'
            });
        }

        res.status(200).json({
            message: 'Profile updated successfully',
            user: updatedUser
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: 'Server Error'
        });

    }

});

module.exports = router;