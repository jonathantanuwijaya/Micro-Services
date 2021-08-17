const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/verifyToken')
const orderPaymentHandler = require('./handler/order-payment')

router.get('/',orderPaymentHandler.getOrders)
module.exports = router