const express = require('express');
const router = express.Router();
// controller
const { directory } = require('./../controllers/Directory')

router.get('/user/:username', (req, res) => directory.user(req, res))
router.get('/channel/:id', (req, res) => directory.channel(req, res))

module.exports = router;