const express = require('express');
const router = express.Router();
const {APP_NAME} = process.env

router.get('/', function(req, res, next) {
    res.send('orders');
});

module.exports = router