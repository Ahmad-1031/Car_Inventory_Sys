
const mongoose = require('mongoose');
const dbURI = process.env.MONGODB_URI;

mongoose.connect(dbURI)
  .then(() => {
    console.log('Mongoose is connected');
  })
  .catch(err => {
    console.error('Mongoose connection error:', err.message);
  });

require('./cars');
require('./user');
