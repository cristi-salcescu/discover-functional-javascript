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