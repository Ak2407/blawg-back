const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({

    name:{
        type:String, required : true
    },
    email:{
        type:String, required : true, unique : true
    },
    password:{
        type:String, required : true, min:6
    },
    job:{
        type:String, required : true
    },
    bio:{
        type:String, required : true
    },



});

module.exports = mongoose.model.Users || mongoose.model('Users', UserSchema);