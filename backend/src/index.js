const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();

app.use(bodyParser.urlencoded({extended : true}));

//routes

const Subscriber = require('./routes/subscriber');
const newTopic = require('./routes/topic');
const Content = require('./routes/content');
const mailing = require('./controller/scheduler');
let url = "mongodb+srv://ankit:"+process.env.PASSWORD+"@cluster0.zrfo4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(url , {useNewUrlParser : true}).then(function(){
    console.log('Databse Connected');
});

app.use('/api' , Subscriber);
app.use('/api' , newTopic);
app.use('/api' , Content);

mailing;
app.get('/' , (req , res) => {
    res.send('hello');
})

app.listen(3000 , function(){
    console.log("Server is running on port 3000");
    
})