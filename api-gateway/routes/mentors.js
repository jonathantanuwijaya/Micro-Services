const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/verifyToken')
const MentorsHandler = require('./handler/mentors')

router.get('/',MentorsHandler.getAll)
router.post('/',MentorsHandler.create)
router.get('/:id',MentorsHandler.get)
router.put('/:id',MentorsHandler.update)
router.delete('/:id',MentorsHandler.destroy)
module.exports = router