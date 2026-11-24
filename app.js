require('dotenv').config();
require('./app_api/models/db');
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var fs = require('fs');
var http = require('http');
var https = require('https');

const cors = require('cors');
const webRoutes = require('./app_server/routes/index');
const apiRoutes = require('./app_api/routes/index');

const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const User = mongoose.model('User');
const csrfMiddleware = require('./middleware/csrf');


var app = express();

var credentials;

if(process.env.NODE_ENV !== 'production'){
  
  var privateKey = fs.readFileSync('./sslcert/key.pem','utf8');
  var certificate = fs.readFileSync('./sslcert/cert.pem', 'utf8');

  var credentials = {
    key: privateKey,
    cert: certificate
  };

}

// view engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'pug');

app.use('/api',cors({
  origin: 'http://localhost:4200',
  methods: ['GET','POST','PUT','DELETE'],
  allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type','Accept']
}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24,
    httpOnly: true,
    secure: true,
    sameSite: 'lax'
  }
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(csrfMiddleware.generateCsrfToken);

passport.use(new LocalStrategy({
  usernameField: 'email'
}, User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'app_public')));

app.use('/api', apiRoutes);
app.use('/', webRoutes);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

if(process.env.NODE_ENV === 'production'){
  app.set('trust proxy',1);
}


if (process.env.NODE_ENV !== 'production'){

  var httpsServer = https.createServer(credentials,app);
  httpsServer.listen(443);

  console.log('HTTPS server running on https://localhost');
}else{

  var httpServer = http.createServer(app);
  httpServer.listen(process.env.PORT || 3000, '0.0.0.0');

  console.log('Http server running behind Render proxy');
}
