const mongoose = require('mongoose');

const rolesSchema = new mongoose.Schema({
    role:{
        type:String,
        required:true,
        unique:true,
        enum: ['staff','manager','admin']
    }
})

mongoose.model('Role',rolesSchema);