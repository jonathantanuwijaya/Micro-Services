const express = require('express');
const router = express.Router();
const UsersHandler = require('./handler/users')
const verifyToken = require('../middlewares/verifyToken')
router.post('/register',UsersHandler.register)

router.post('/login',UsersHandler.login)
router.put('/',verifyToken,UsersHandler.update)
router.get('/',verifyToken,UsersHandler.getUser)
router.post('/logout',verifyToken,UsersHandler.logout)

module.exports = router