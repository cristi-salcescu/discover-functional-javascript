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

const queue = Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.dequeue(); //1
queue.dequeue(); //2