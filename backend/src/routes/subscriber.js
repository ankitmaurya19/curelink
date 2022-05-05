const express = require('express');
const { addSubscriber } = require('../controller/subscriber');


const router = express.Router();

router.post('/addsubscriber' , addSubscriber);


module.exports = router;