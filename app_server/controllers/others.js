/* GET home page */
const about = function(req, res){
  res.render('index', { title: 'About' });
};


/* Get Login Page */
const login = function(req,res){
    res.render('login',{ title: 'Login'});
}

/* Get Register Page */
const register = function(req,res){
  res.render('register',{title:'Register'});
}

module.exports = {
  about,
  login,
  register
};
