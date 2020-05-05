const express = require('express');
const router = express.Router();
// controller
const { channels } = require('./../controllers/Channels')

router.get('/:id', (req, res) => channels.findChannel(req, res))

module.exports = router;