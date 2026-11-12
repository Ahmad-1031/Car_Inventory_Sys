
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  organisation: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Organisation',
    required: true
  },
  
  username: {
    type: String,
    required: true,
    unique: true
  },

  role:{
    type: mongoose.Schema.Types.ObjectId,
    ref:'Role',
    required:true
  },

  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    select:false
  },

    isApproved: {
    type: Boolean,
    default: false
  }
});

userSchema.pre('save', async function(){
  if(!this.isModified('password')){
    return;
  }

  this.password = await bcrypt.hash(this.password, 12);

});

userSchema.methods.comparePassword = async function(password) {
    return bcrypt.compare(password, this.password);
};


mongoose.model('User', userSchema);
