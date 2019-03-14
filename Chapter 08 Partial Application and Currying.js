function partial(fn, ...leftArgs) {
  return function(...rightArgs) {
    return fn(...leftArgs, ...rightArgs);
  }
}

function curry(f, leftArgs = []){
  return function(...args){
    const allArgs = [...leftArgs, ...args];
    if (allArgs.length >= f.length) {
      return f(...allArgs);
    } else{
      return curry(f, allArgs);
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