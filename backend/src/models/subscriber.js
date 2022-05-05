const mongoose = require('mongoose');

const subsSchema = mongoose.Schema({
    subscriber : {
        type : String ,
        required : true
    },
    //user subscribe to specific topic only
    topic : {
        type : mongoose.Schema.Types.ObjectId , ref : 'topic' ,
        required : true
    }
} , {timestamps : true});


module.exports = mongoose.model('subscriber' , subsSchema);
