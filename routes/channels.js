const express = require('express');
const router = express.Router();
// controller
const { channels } = require('./../controllers/Channels')

router.get('/', (req, res) => res.send('ok'))

module.exports = router;