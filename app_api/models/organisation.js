const mongoose = require('mongoose');

const organisationSchema = new mongoose.Schema({

    name:{
        type: String,
        required: true
    },

    address:{
        type: String
    },

    email:{
        type:String
    },

    
})

mongoose.model('Organisation',organisationSchema);