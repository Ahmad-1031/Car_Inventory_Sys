require('dotenv').config();
const mongoose = require('mongoose');
require('./app_api/models/user');
require('./app_api/models/organisation');

const User = mongoose.model('User');
const Organisation = mongoose.model('Organisation');

const updateTestUser = async function() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);

        const organisationId = new mongoose.Types.ObjectId(
            '6b0568291664ad0172fe3d32'
        );

        // Check that the organisation exists
        const organisation = await Organisation.findById(organisationId);

        if (!organisation) {
            console.log('Organisation not found');
            return;
        }

        // Update the existing user
        const user = await User.findOneAndUpdate(
            { email: 'test@autovault.com' },
            { $set: { organisationId } },
            { new: true, runValidators: true }
        );

        if (!user) {
            console.log('User not found');
            return;
        }

        console.log('Test user updated successfully');
        console.log('Organisation ID:', user.organisationId);

    } catch (err) {
        console.error(err.message);
    } finally {
        await mongoose.disconnect();
    }
};

updateTestUser();