const twilio = require('twilio');
const config = require('../config');

const client = twilio(config.twilioAccountSid, config.twilioAuthToken);

exports.sendOtp = async (phoneNumber, otp) => {
    try {
        const message = await client.messages.create({
            body: `Your OTP code is ${otp}. It will expire in 10 minutes.`,
            from: config.twilioPhoneNumber, // Your Twilio number
            to: phoneNumber, // The recipient's phone number
        });
        
        console.log('OTP sent successfully:', message.sid);
    } catch (error) {
        console.error('Error sending OTP:', error.message);
        throw new Error('Failed to send OTP');
    }
};
