const express = require('express');
const { addTopic } = require('../controller/topic');



const router = express.Router();

router.post('/addtopic' , addTopic);


module.exports = router;