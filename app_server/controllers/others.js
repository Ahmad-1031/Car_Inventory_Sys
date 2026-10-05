/* GET home page */
const home = function(req, res){
  res.render('home', { title: 'Home' });
};


/* Get Login Page */
const login = function(req,res){
    res.render('login',{ title: 'Login'});
}

/* Get Register Page */
const register = function(req,res){
  res.render('register',{title:'Register'});
}

/*Get Inventory Page */
const inventory = function(req,res){
  res.render('inventory',{titie:'Inventory'})
}

module.exports = {
  home,
  login,
  register,
  inventory
};
