const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/verifyToken')
const LessonHandler = require('./handler/lessons')

router.get('/',LessonHandler.getAll)
router.post('/', LessonHandler.create)
router.get('/:id',LessonHandler.get)
router.put('/:id',LessonHandler.update)
router.delete('/:id',LessonHandler.destroy)
module.exports = router