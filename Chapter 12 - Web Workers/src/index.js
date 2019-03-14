console.log("start application");

const worker = new Worker("/src/worker.js");

//send message to worker
worker.postMessage("start");

//receive message from worker
worker.onmessage = function(e) {
  console.log(e.data);
  worker.terminate();
};
