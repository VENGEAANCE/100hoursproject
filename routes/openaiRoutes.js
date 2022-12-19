const express = require('express');
const { generateImage } = require('../controllers/openaiController');
const router = express.Router();


// when using this route, use generateImage function
router.post('/generateimage', generateImage);

module.exports = router;