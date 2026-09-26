/* GET home page */
const about = function(req, res){
  res.render('index', { title: 'About' });
};


/* Get Login Page */
const login = function(req,res){
    res.render('login',{ title: 'Login'});
}

module.exports = {
  about,
  login
};
