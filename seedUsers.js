require('dotenv').config();

const mongoose = require('mongoose');


require('./app_api/models/organisation');
require('./app_api/models/roles');
require('./app_api/models/user');

const Organisation = mongoose.model('Organisation');
const Roles = mongoose.model('Role');
const Users = mongoose.model('User');


async function createUsers(){
    try{
        await mongoose.connect(process.env.MONGODB_URI);

        const adminRole = await Roles.findOne({name:'admin'});

        const org1 = await Organisation.findOne({name:'AutoVault Tralee'});

        const org2 = await Organisation.findOne({name:'Killarney Auto Sales'}); 



        if(!adminRole || !org1 || !org2){
            throw new Error("Role or organization not found");
        }

        if(!process.env.TEST_ADMIN1_PASSWORD || !process.env.TEST_ADMIN2_PASSWORD){
            throw new Error("Test admin passwords are missing")
        }

        await Users.create({
            username: 'admin1',
            email: 'admin1@example.com',
            password: process.env.TEST_ADMIN1_PASSWORD,
            role:adminRole._id,
            organisation:org1._id,
        });

        await Users.create({
            username:'admin2',
            email:'admin2@example.com',
            password:process.env.TEST_ADMIN2_PASSWORD,
            role:adminRole._id,
            organisation:org2._id,
        });

        console.log('Two admin users created successfully');

    } catch(err){
        console.error('Error creating users:', err.message);
    }finally{
        await mongoose.disconnect();
    }
}

createUsers();
