// Get vehicles
const getAllCars = function(req,res){
    res.render('inventory',{title: 'inventory'});
};

module.exports = {
    getAllCars
};