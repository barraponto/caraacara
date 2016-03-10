var io = require('socket.io')();

io.on('connection', function(socket){
    console.log('new connection');
});

module.exports = io;
