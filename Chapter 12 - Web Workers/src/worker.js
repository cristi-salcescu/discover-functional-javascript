function computeValue() {
  for (let i = 0; i < 10000000000; i++) {}
  return 10000000000;
}

//receive message from main thread
onmessage = function(e) {
  const action = e.data;
  if (action === "start") {
    const result = computeValue();

    //send message to main thread
    postMessage(result);
  }
};
