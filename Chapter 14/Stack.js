function Stack(){
  const list = [];

  function push(value){ 
    list.push(value); 
  }

  function pop(){ 
    return list.pop(); 
  }

  return Object.freeze({
    push,
    pop
  });
}

const stack = Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop(); //3
stack.pop(); //2