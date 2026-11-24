const passport = require('passport');

//POST Login/
const login = function(req,res,next){

        
    const email = req.body.email;
    const password = req.body.password;

    //TODO: validate login details

    passport.authenticate('local',function (err, user, info){

        if(err){
            return next(err);
        }

        if(!user){
            return res.status(401).render('login',{
                title: 'Login',
                error: 'Invalid email or password'
            });
        }

        //Login session
        req.login(user,function(err){
                
            if(err){
                return next(err);
            }

            return res.redirect('/inventory');
        });
    })(req,res,next);



}

const logout = function(req,res,next){

    req.logout(function(err){
        if(err){
            return next(err);
        }

        req.session.destroy(function(err){
            if(err){
                return next(err);
            }

            res.clearCookie('connect.sid');

            return res.redirect('/login');
        });
    });
};

module.exports = {
    login,
    logout
};