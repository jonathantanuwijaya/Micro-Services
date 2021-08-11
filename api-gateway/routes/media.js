const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/verifyToken')
const MediaHandler = require('./handler/media')

router.post('/',MediaHandler.create)
router.get('/',verifyToken,MediaHandler.getAll)
router.delete('/:id',MediaHandler.deleteImg)
module.exports = router