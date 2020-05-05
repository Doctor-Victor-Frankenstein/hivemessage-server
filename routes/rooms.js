const express = require('express');
const router = express.Router();
// controller
const { rooms } = require('./../controllers/Rooms')

router.get('/', (req, res) => res.send('ok'))

module.exports = router;