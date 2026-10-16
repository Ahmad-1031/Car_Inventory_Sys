const mongoose = require('mongoose');
const Car = mongoose.model('Car');


const contentList = async function (req, res) {

    try {
        const cars = await Car.find({});
        res.status(200).json(cars);

    } catch (err){
        res.status(500).json({
            message: "Error retrieving cars",
            error: err.message
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
