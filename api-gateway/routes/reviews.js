const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/verifyToken')
const ReviewHandler = require('./handler/reviews')

router.post('/',ReviewHandler.create)
router.put('/:id',ReviewHandler.update)
router.delete('/:id',ReviewHandler.destroy)
module.exports = router