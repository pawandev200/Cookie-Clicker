const express = require('express');
const { processClick } = require('../jobs/clickLogic');

const router = express.Router();

router.post('/click', processClick);

module.exports = router;