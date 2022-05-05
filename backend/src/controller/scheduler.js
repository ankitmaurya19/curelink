const cron = require('node-cron');

const slot = require('../models/content');
const { allSubs } = require('../smtp/subs');


cron.schedule("*/1 * * * *" , function(){
    // console.log("hello");
    var date = new Date();
    slot.find({} , function(err , result) {
        if(err) {
            console.log(err);
        } else {
            var time;
            if(date.getHours() < 10) {
                if(date.getMinutes() < 10) {
                    time = '0' + date.getHours() + ':0' + date.getMinutes();
                } else {
                    time = '0' + date.getHours() + ':' + date.getMinutes();
                }
            } else {
                if(date.getMinutes() < 10) {
                    time = date.getHours() + ':0' + date.getMinutes();
                } else {
                    time = date.getHours() + ':' + date.getMinutes();
                }
            }
            
            console.log(time);
            result.forEach( (e) => {
                if(e.time == time) {
                   
                    allSubs(e.topic , e.content);
                }
            });
        }
    })
})