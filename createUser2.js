require('dotenv').config();
const mongoose = require('mongoose');
require('./app_api/models/user');

const User = mongoose.model('User');

const createTestUser = async function() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);

        const user = new User({
            organisationId: new mongoose.Types.ObjectId(
                '6af614e3c87054f28a51c47e'
            ),
            username: 'Ahmad',
            email: 'ahmad@autovault.com'
        });

        await User.register(user, process.env.TEST_USER_PASSWORD);

        console.log('Ahmad created successfully');

    } catch (err) {
        console.error(err.message);
    } finally {
        await mongoose.disconnect();
    }
};

createTestUser();