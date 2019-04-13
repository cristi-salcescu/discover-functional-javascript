function partial(fn, ...leftArgs) {
  return function(...rightArgs) {
    return fn(...leftArgs, ...rightArgs);
  }
}

function curry(f, length, leftArgs = []){
  let noArguments = f.length;
  if(length) {
    noArguments = length;
  }
  
  return function(...args){
    const allArgs = [...leftArgs, ...args];
    if (allArgs.length >= noArguments){
      return f(...allArgs);
    } else{
      return curry(f, length, allArgs);
    }
  }
}

function thunk(fn, ...args){
  return function(){
    return fn(...args);
  }
}

function thunkify(fn) {
  return function(...args) {
    return function() {
      return fn(...args);
    };
  };
}