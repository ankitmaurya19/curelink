const mongoose = require('mongoose');

const topicSchema = mongoose.Schema({
    name : {
        type: String,
        required : true,
        trim : true
    }
})


module.exports = mongoose.model('topic' , topicSchema);
