var host = 'localhost';
var c_port = 3000;
var dgram = require('dgram');
var client = dgram.createSocket('udp4');



var clientMessage = new Buffer.from('004c004100420035005500440050', 'hex');


client.on('message', function(msg, rinfo) {
  console.log('Recieved: ' + msg.toString('hex'));
  client.close();
});


client.on('err', function(err) {
  console.log('client error: \n' + err.stack);
  console.close();
});


client.on('close', function() {
  console.log('Closed.');
});


send(clientMessage, host, c_port);
function send(clientMessage, host, port) {
  client.send(clientMessage, 0, clientMessage.length, port, host, function(err, bytes) {
    console.log('Sent.');
  });
}