
const Subscriber = require('../models/subscriber');
const Topic = require('../models/topics');

exports.addSubscriber =  function(req , res){
    Subscriber.findOne({subscriber : req.body.email} , function(err , user){
        if(err) {
            res.send(err);
        } else if(user) {
            res.send('User already exist');
        } else {
            
            Topic.findOne({name : req.body.topic} , (error , result) => {
                if(error) {
                    res.send(error);
                } else if(result) {
                    const subs = new Subscriber({
                        subscriber : req.body.email , 
                        topic : result._id
                    });
                    subs.save(function(error , _user){
                        if(error) {
                            res.send("User not added");
                        } else {
                            res.send({subscriber : _user});
                        }
                    })
                } else {
                    res.send('Topic not present');
                }
            });
            
        }
    })
}