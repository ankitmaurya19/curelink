const express = require('express');

const {addContent} = require('../controller/content');


const router = express.Router();

router.post('/addcontent' , addContent);


module.exports = router;