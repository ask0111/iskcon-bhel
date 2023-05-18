const mongoose = require('mongoose');

 const schema = mongoose.Schema({
    fName: {
        type: String,
        required: true
    }
    ,
    mName: {
        type: String
    },
    lName: {
        type: String,
        required: true
    },
    mobile:{
        type: Number,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
    },
    pledge:{
        type: Number,
        required: true
    },
    smonth:{
        type: Number,
        required: true
    },
    dob:{
        type: String,
        required: true
    },
    words:{
        type: String,
    },
    tc:{
        type: String,
        required: true
    }
    
 });

 module.exports = schema