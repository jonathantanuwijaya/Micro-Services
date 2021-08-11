const express = require('express');
const router = express.Router();
const RefreshTokensandler = require('./handler/refresh-tokens')

router.post('/',RefreshTokensandler.refreshToken)


module.exports = router