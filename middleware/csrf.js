const crypto = require('crypto');

const generateCsrfToken = function(req,res,next){

    if(!req.session.csrfToken){
        req.session.csrfToken = crypto.randomBytes(32).toString('hex');
    }

    res.locals.csrfToken = req.session.csrfToken;

    return next();
};

const validateCsrfToken = function(req,res,next){

    const sessionToken = req.session.csrfToken;
    const submittedToken = req.body?._csrf;

    if(
        typeof sessionToken !== 'string' ||
        typeof submittedToken !== 'string' ||
        sessionToken.length !== 64 ||
        !/^[a-f0-9]{64}$/.test(submittedToken)
    ){
        return res.status(403).send('Invalid CSRF token');
    }

    if(!crypto.timingSafeEqual(
        Buffer.from(sessionToken),
        Buffer.from(submittedToken)
    )){
        return res.status(403).send('Invalid CSRF token')
    }

    return next();
}


module.exports = {
    generateCsrfToken,
    validateCsrfToken
}