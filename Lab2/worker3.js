const {
  workerData,
  threadId,
  parentPort,
  BroadcastChannel,
} = require('worker_threads');

console.log('I am worker', threadId, ', my name is', workerData);

parentPort.on('message', (msg) => {
  console.log('Message from parent:', msg);
});

setTimeout(() => {
  parentPort.postMessage('Hello parent! 16 seconds passed!(w3)');
}, 16000);
