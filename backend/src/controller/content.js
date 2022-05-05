
const Content = require('../models/content');
const Topic = require('../models/topics');

exports.addContent =  function(req , res){
    
    // Content.findOne({name : req.body.topic , content : req.body.content , time : req.body.content} , (err , result) => {

    // })

    Topic.findOne({name : req.body.topic} , (err , topc) => {
        if(err) {
            res.send(err);
        } else if(topc) {
            const txt = new Content({
                topic : topc._id,
                content : req.body.content,
                time : req.body.time
            })
            txt.save((err , con) => {
                if(err) {
                    res.send(err);
                } else {
                    res.send({Content : con});
                }
            })
        } else {
            res.send('Topic not present');
        }
    })
    

}