//Authentication middleware for web pages

const requiredAuth = function(req,res,next){

    if(req.isAuthenticated()){
        return next();
    }

    return res.redirect('/login');
};


//Authentication for Api endpoints

const requiredApiAuth = function(req,res,next){

    if(req.isAuthenticated()){
        return next();
    }

    return res.status(401).json({
        message: 'User is not authenticated'
    });
}

module.exports = {
    requiredAuth,
    requiredApiAuth
};