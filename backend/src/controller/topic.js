
const Topic = require('../models/topics');

exports.addTopic =  function(req , res){
    Topic.findOne({name : req.body.topic} , function(err , result){
        if(err) {
            res.send(err);
        } else if(result) {
            res.send('Topic already exist');
        } else {
            const new_topic = new Topic({
                name : req.body.topic
            });
            new_topic.save(function(error , _topic){
                if(error) {
                    res.save("User not added");
                } else {
                    res.send({Topic : _topic});
                }
            })
        }
    })

}