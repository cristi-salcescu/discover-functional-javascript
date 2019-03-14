function Counter(){
  let state = 0;

  function increment(){
    state += 1;
    return state;
  }

  function decrement(){
    state -= 1;
    return state;
  }

  return Object.freeze({
    increment,
    decrement
  });
};

const counter = Counter();
counter.increment();//1
counter.increment();//2
counter.increment();//3

const otherCounter = Counter();
otherCounter.increment();//1