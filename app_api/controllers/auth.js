const mongoose = require('mongoose');
const User = mongoose.model('User');
const Organisation = mongoose.model('Organisation')


const userCreateOne = function (req, res) { 
    res
    .status(200)
    .json({"status" : "success"});
};
const userReadOne = function (req, res) { 
    res
    .status(200)
    .json({"status" : "success"});
};
const userUpdateOne = function (req, res) { 
    res
    .status(200)
    .json({"status" : "success"});
};
const userDeleteOne = function (req, res) {
    res
    .status(200)
    .json({"status" : "success"});
 };

const organisationNames = {
    '1': 'AutoVault Tralee',
    '2': 'Killarney Auto Sales'
} 

const userLogin = async function(req,res){

    try{

        //Retrieve values
        const {organisation, email, password} = req.body;

        //Check fields are provided
        if(!organisation || !email || !password){
            return res.status(400).send('All fields are required');
        }

        //Matching dropdown values
        const organisationName = organisationNames[organisation];

        if(!organisationName){
            return res.status(401).send("Invalid login credentials");
        }

        //Find the organisation in db
        const selectedOrganisation = await Organisation.findOne({
            name: organisationName
        });

        if(!selectedOrganisation){
            return res.status(401).send('Invalid login credentials');
        }


        //Find user in db
        const user = await User.findOne({
            email:email
        }).select('+password');

        if(!user){
            return res.status(401).send('invalid login credentials');
        }

        //Verify password matches 
        const passwordMatch = await user.comparePassword(password);
        if(!passwordMatch){
            return res.status(401).send('Invalid login credentials');
        }

        //Verify user's organisation
        if(!user.organisation || user.organisation.toString() !== selectedOrganisation._id.toString()){
            return res.status(401).send('Invalid login credentials')
        }

    

        //Create Session
        req.session.regenerate(function(err){

            if(err){
                return res.status(500).send('Session Error');
            }

            req.session.userId = user._id.toString();
            req.session.organisationId = user.organisation.toString();

            req.session.save(function(err){
                if(err){
                    return res.status(500).send('Session Error');
                }

                return res.redirect('/api/inventory');
            });
        });

    } catch(err){
        console.error('Login error:', err);
        return res.status(500).send('Error during Login');
    }
    



};



module.exports = {
    userCreateOne,
    userReadOne,
    userUpdateOne,
    userDeleteOne,
    userLogin
};
