function once(fn){
  let returnValue;
  let canRun = true;
  return function(...args){
     if(canRun) {
         returnValue = fn(...args);
         canRun = false;
     }
     return returnValue;
  }
}

function after(fn, startCount){
  let count = 0;
  return function(...args){
     count = count + 1;
     if (count >= startCount) {
         return fn(...args);
     }
  }
}

function throttle(fn, interval) {
  let lastTime;
  return function throttled(...args) {
    if(!lastTime || (Date.now() - lastTime >= interval)) {
      fn(...args);
      lastTime = Date.now();
    }
  }
}

function debounce(fn, interval) {
  let timer;
  return function debounced(...args) {
    clearTimeout(timer);
    timer = setTimeout(function(){
      fn(...args);
    }, interval);
  }
}

function memoize(fn) {
  const map = Object.create(null);
  return function (x) {
    if (!map[x]){
      map[x] = fn(x);
    }

    return map[x];
  }
}

function unary(fn){
  return function(first){
    return fn(first);
  }
}

function binary(fn){
  return function(a, b){
    return fn(a, b);
  }
}