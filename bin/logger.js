'use strict';


const winston = require('winston');


const loggingLevel = process.env.LOG_LEVEL || 'info';


winston.configure({
  transports: [
    new winston.transports.Console({
      timestamp: true,
      level: loggingLevel,
      showLevel: true,
      stderrLevels: ['warn', 'error']
    })
  ]
});


winston.info('Winston logger initialized.')


module.exports = winston;
