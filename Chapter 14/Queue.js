function Queue(){
  const list = [];

  function enqueue(value){
    list.push(value);
  }

  function dequeue(){
    return list.shift();
  }

  return Object.freeze({
    enqueue,
    dequeue
  });
}