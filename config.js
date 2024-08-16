



require('dotenv').config();

module.exports = {
    port: process.env.PORT || 3000,
    dbUri: process.env.MONGO_URI,
    jwtSecret: process.env.JWT_SECRET,
    otpExpiry: 10 * 60 * 1000, // 10 minutes
    otpLength: 6,
    twilioAccountSid: process.env.accountSid,
    twilioAuthToken: process.env.authToken,
    twilioPhoneNumber: process.env.phone,
    emailService: process.env.EMAIL_SERVICE,
    emailUser: process.env.EMAIL_USER,
    emailPass: process.env.EMAIL_PASS,
};
