const mongoose = require('mongoose');
const User = mongoose.model('User');


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

module.exports = {
    userCreateOne,
    userReadOne,
    userUpdateOne,
    userDeleteOne
};
