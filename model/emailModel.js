const mongoose = require('mongoose');

const Schema = mongoose.Schema

const EmailSchema = new Schema({
    
    firstName:{
        type: String,
       
    },
    
    lastName: {
        type: String,
    },

    domainAddress:{
        type: String
       
    },



   
});

module.exports = Email = mongoose.model('email', EmailSchema);