const express = require('express');
const router = express.Router();
// controller
const { globals } = require('./../controllers/Globals')

router.get('/', (req, res) => globals.all(req, res))

module.exports = router;