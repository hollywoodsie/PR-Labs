const { Worker, BroadcastChannel } = require('worker_threads');
console.log('Output from index.js');

const worker = new Worker('./worker.js', {
  threadId: 1,
  workerData: 'Vanek',
});

const worker2 = new Worker('./worker2.js', {
  threadId: 2,
  workerData: 'Vasek',
});

const worker3 = new Worker('./worker3.js', {
  threadId: 3,
  workerData: 'Jorik',
});

worker.on('message', (msg) => {
  console.log('Message from worker:', msg);
});

setTimeout(() => {
  worker.postMessage('Hello worker 1!');
}, 2000);

worker2.on('message', (msg) => {
  console.log('Message from worker 2!', msg);
});

setTimeout(() => {
  worker2.postMessage('Hello worker 2!');
}, 4000);

worker3.on('message', (msg) => {
  console.log('Message from worker3!', msg);
});

setTimeout(() => {
  worker3.postMessage('Hello worker 3!');
}, 6000);
