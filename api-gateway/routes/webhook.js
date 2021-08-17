const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/verifyToken')
const webhookHandler = require('./handler/webhook')

router.post('/',webhookHandler.webhook)
module.exports = router