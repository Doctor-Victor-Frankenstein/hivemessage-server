const express = require('express');
const router = express.Router();
// controller
const { directory } = require('./../controllers/Directory')

router.get('/', (req, res) => res.send('ok'))

module.exports = router;