const EventEmitter = require('events');
const emitter = new EventEmitter();

var url=' abcd';

class Logger extends EventEmitter{
    log(message){
        console.log(message);
        this.emit('messagelogged',{id:1,url:'abcdddd'});
    }
}
 
module.exports = Logger;
