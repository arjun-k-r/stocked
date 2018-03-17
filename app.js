'use strict';


let express = require('express');
let path = require('path');
let bodyParser = require('body-parser');
let logger = require('./bin/logger');


// initialize app
let app = express();


// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('./public'));
app.use(express.static('./public/stylesheets'));
app.use(express.static('./public/images'));
app.use(express.static('./public/javascripts'));


// react views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());


// routes
app.use('/', require('./routes/index'));


// default response
app.use(function(req, res) {
  logger.warn('Sending', req.connection.remoteAddress, 'to lost.');
  res.status(404).send('Looks like you\'re lost...');
});


// error response
app.use(function (err, req, res, next) {
  logger.error(err.stack)
  res.status(500).send('Uh oh! It broke /:')
})


module.exports = app;
