const express = require('express');
const router = express.Router();
// controller
const { messages } = require('./../controllers/Messages')

router.get('/room/:id', (req, res) => messages.room(req, res))

module.exports = router;