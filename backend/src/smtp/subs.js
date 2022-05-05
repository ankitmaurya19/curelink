const Subscriber = require("../models/subscriber");
const { mailto } = require("./mail");


exports.allSubs = function(topc , content){
    
    Subscriber.find({topic : topc} , 'subscriber' , (err , res) => {
        if(err) {
            console.log(err);
        } else {
            // res.forEach( (e) => {
            //     mailto(e.subscriber , content);
            // })
            mailto(res , content);
        }
    })
}