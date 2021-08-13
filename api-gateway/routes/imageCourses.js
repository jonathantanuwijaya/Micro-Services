const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/verifyToken')
const ImageCourseHandler = require('./handler/image-courses')

router.post('/', ImageCourseHandler.create)
router.delete('/:id',ImageCourseHandler.destroy)
module.exports = router