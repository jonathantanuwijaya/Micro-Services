const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/verifyToken')
const ChaptersHandler = require('./handler/chapters')

router.get('/',ChaptersHandler.getAll)
router.post('/', ChaptersHandler.create)
router.get('/:id',ChaptersHandler.get)
router.put('/:id',ChaptersHandler.update)
router.delete('/:id',ChaptersHandler.destroy)
module.exports = router