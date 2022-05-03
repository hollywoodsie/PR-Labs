var s_port = 3000;
var dgram = require('dgram');
var server = dgram.createSocket('udp4');


server.on('listening', function() {
  var address = server.address();
  console.log(`Server listening on ${address.address}:${address.port}`);  //address 0.0.0.0
});


server.on('message', function(msg, rinfo) {
  console.log(`Server got a message from ${rinfo.address}:${rinfo.port}`);
  console.log('  HEX  : ' + msg.toString('hex'));
  console.log('  ASCII: ' + msg);
  var serverMessage = new Buffer.from('Covali');
  server.send(serverMessage, 0, serverMessage.length, rinfo.port, rinfo.address, function(err, bytes) {
      console.log(`Sent a message to ${rinfo.address}:${rinfo.port}`);
  }); 
});

server.on('error', function(err) {
  console.log('server error: \n' + err.stack);
  server.close();
});


server.on('close', function() {
  console.log('Closed.');
});

process.on('SIGINT', function() {
  server.close();                           //ctr+c signal to close server.
});

server.bind(s_port);