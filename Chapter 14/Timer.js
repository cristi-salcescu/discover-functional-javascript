function Timer(callback, interval){
  let timerId;

  function executeAndStartTimer(){
    callback().then(function makeNewCall(){
      timerId = setTimeout(executeAndStartTimer, interval);
    });
  }

  function stop(){
    if(timerId){
      clearTimeout(timerId);
      timerId = 0;
    }
  }

  function start(){
    if(!timerId){
      executeAndStartTimer();
    }
  }

  return Object.freeze({
    start,
    stop
  });  
}

const timer = Timer(getTodos, 2000);
timer.start();