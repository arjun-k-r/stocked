'use strict';

let app = require('../app');
let express = require('express');
let checkInput = require('../bin/validator').checkInput;
let logger = require('../bin/logger');

let router = express.Router();

router.get('/', function(req, res) {
  logger.info('Returning index to', req.connection.remoteAddress)
  res.render('index');
});

module.exports = router;
