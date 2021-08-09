const express = require('express');
const router = express.Router();
const MediaHandler = require('./handler/media')

router.post('/',MediaHandler.create)
router.get('/',MediaHandler.getAll)
router.delete('/:id',MediaHandler.deleteImg)
module.exports = router