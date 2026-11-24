require('dotenv').config();
const mongoose = require('mongoose');
require('./app_api/models/user');

const User = mongoose.model('User');

const createTestUser = async function() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);

        const user = new User({
            organisationId: new mongoose.Types.ObjectId(
                '6b0568291664ad0172fe3d32'
            ),
            username: 'autovaultuser',
            email: 'user@autovault.com'
        });

        await User.register(user, process.env.TEST_USER_PASSWORD);

        console.log('Test user created successfully');

    } catch (err) {
        console.error(err.message);
    } finally {
        await mongoose.disconnect();
    }
};

createTestUser();