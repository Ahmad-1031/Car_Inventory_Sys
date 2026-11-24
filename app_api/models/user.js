
const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose').default;


const userSchema = new mongoose.Schema({

  organisationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Organisation',
    required: true
  },

  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
 
});

userSchema.plugin(passportLocalMongoose,{
  usernameField: 'email'
});

mongoose.model('User', userSchema);
