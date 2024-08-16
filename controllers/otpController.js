const Otp = require('../models/Otp');
const Person = require('../models/Person');
const jwt = require('jsonwebtoken');
const config = require('../config');

exports.verifyOtp = async (req, res) => {
    const { phoneNumber, otp } = req.body;

    try {
        // Find the OTP entry
        const validOtp = await Otp.findOne({ phoneNumber, otp });

        if (!validOtp) {
            return res.status(400).json({ error: 'Invalid OTP' });
        }

        // OTP is valid, delete it after use
        await Otp.deleteMany({ phoneNumber });

        // Find the person associated with the phone number
        const person = await Person.findOne({ phoneNumber });

        // Generate a JWT token (for example)
        const token = jwt.sign({ personId: person._id }, config.jwtSecret, {
            expiresIn: '24h',
        });

        res.status(200).json({ message: 'OTP verified successfully', token });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
