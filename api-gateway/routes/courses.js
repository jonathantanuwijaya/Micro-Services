const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/verifyToken')
const CoursesHandler = require('./handler/courses')
const can = require('../middlewares/permission')

router.get('/', CoursesHandler.getAll)
router.post('/', verifyToken, can('admin'), CoursesHandler.create)
router.get('/:id', CoursesHandler.get)
router.put('/:id', verifyToken, can('admin'), CoursesHandler.update)
router.delete('/:id', verifyToken, can('admin'), CoursesHandler.destroy)
module.exports = router