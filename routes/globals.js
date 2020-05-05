const express = require('express');
const router = express.Router();
// controller
const { globals } = require('./../controllers/Globals')

router.get('/', (req, res) => res.send('ok'))

module.exports = router;