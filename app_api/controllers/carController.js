const mongoose = require('mongoose');
const Car = mongoose.model('Car');


const contentList = async function (req, res) {

    console.log('Content List function working');

    try {
        if(!req.isAuthenticated()) {
            return res.status(401).json({
                message: 'User is not authenticated'
            });
        }

        console.log("User ID:", req.user._id);
        console.log("Email:", req.user.email);
        console.log("Organisation ID:", req.user.organisationId);

        const organisationId = req.user.organisationId;

        if(!organisationId){
            return res.status(403).json({
                message: 'User does not belong to an organisation'
            });
        }

        

        //Retrieve cars 
        const cars = await Car.find({organisationId});

        return res.status(200).json(cars);


    }catch (err){
        console.error('Error retrieving cars:',err);

        return res.status(500).json({
            message: 'Error retrieving cars'
        });
    }

 };
const contentCreateOne = function (req, res) {
    res
    .status(200)
    .json({"status" : "success"});
 };
const contentReadOne = function (req, res) {
    res
    .status(200)
    .json({"status" : "success"});
 };
const contentUpdateOne = function (req, res) { 
    res
    .status(200)
    .json({"status" : "success"});
};
const contentDeleteOne = function (req, res) {
    res
    .status(200)
    .json({"status" : "success"});
 };

module.exports = {
    contentList,
    contentCreateOne,
    contentReadOne,
    contentUpdateOne,
    contentDeleteOne
};
