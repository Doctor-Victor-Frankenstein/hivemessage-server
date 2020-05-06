const express = require('express');
const router = express.Router();
// controller
const { rooms } = require('./../controllers/Rooms')

router.get('/channel/:id', (req, res) => rooms.channel(req, res))

module.exports = router;