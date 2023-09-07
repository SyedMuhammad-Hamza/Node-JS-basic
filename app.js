//const logger = require('./logger');
//logger.log('messageabcdefg');

const EventEmitter = require('events');
//const emitter = new EventEmitter();

const Logger = require('./logger');
const logger = new Logger();

logger.on('messagelogged', (arg) => {
    console.log('listner called' , arg);
});


logger.log('message');

