/* GET 'home' page */
const homelist = function(req, res){
res.render('home', { title: 'Home' });
};
/* GET 'Location info' page */
const locationInfo = function(req, res){
res.render('home', { title: 'Location info' });
};
/* GET 'Add review' page */
const addReview = function(req, res){
res.render('home', { title: 'Add review' });
};
module.exports = {
homelist,
locationInfo,
addReview
};
