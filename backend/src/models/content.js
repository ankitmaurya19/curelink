const mongoose = require('mongoose');

const contentSchema = mongoose.Schema({
    topic : {
        type : mongoose.Schema.Types.ObjectId , ref : 'topic',
        required : true
    },
    content : {
        type : String,
        required : true
    },
    time : {
        type : String ,
        required : true
    }
} , {timestamps : true});


module.exports = mongoose.model('content' , contentSchema);
