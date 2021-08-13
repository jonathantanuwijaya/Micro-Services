const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/verifyToken')
const myCoursesHandler = require('./handler/my-courses')

router.post('/', myCoursesHandler.create)
router.get('/',myCoursesHandler.get)
module.exports = router