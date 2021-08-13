const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/verifyToken')
const CoursesHandler = require('./handler/courses')

router.get('/',CoursesHandler.getAll)
router.post('/',verifyToken,CoursesHandler.create)
router.get('/:id',CoursesHandler.get)
router.put('/:id',verifyToken,CoursesHandler.update)
router.delete('/:id',verifyToken,CoursesHandler.destroy)
module.exports = router