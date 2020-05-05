const express = require('express');
const router = express.Router();
// controller
const { messages } = require('./../controllers/Messages')

router.get('/', (req, res) => res.send('ok'))

module.exports = router;