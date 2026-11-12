const mongoose = require('mongoose');
const Car = mongoose.model('Car');


const retrieveCars = async function (organisationId) {

    const cars = await Car.find({
        organisation: organisationId
    });

    return cars

 };

 const inventoryPage = async function (req,res){
    try{
        if (!req.session || !req.session.userId || !req.session.organisationId) {
            return res.redirect('/login');
        }

        const cars = await retrieveCars(
            req.session.organisationId
        );

        return res.render('inventory',{
            title:'AutoVault Inventory',
            cars: cars
        });


    } catch(err){
        console.error('Error loading inventory page', err);
        return res.status(500).send('Error Loading inventory page');
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
    inventoryPage,
    contentCreateOne,
    contentReadOne,
    contentUpdateOne,
    contentDeleteOne
};
