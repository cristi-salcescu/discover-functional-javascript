class Timer {
  constructor(callback, interval){
    this.callback = callback;
    this.interval = interval;
    this.timerId = 0;
  }

  executeAndStartTimer(){
    this.callback().then(() => {
      this.timerId = setTimeout(this.executeAndStartTimer, this.interval);
    });
  }

  start(){
    if(this.timerId === 0){
      this.executeAndStartTimer();
    }
  }

  stop(){
    if(this.timerId !== 0){
      clearTimeout(this.timerId);
      this.timerId = 0;
    }
  }
}

function getTodos(){
  return fetch("/todos");
}

const timer = new Timer(getTodos,2000);

timer.start = function() { 
  console.log("don't start"); 
}
timer.start(); //"don't start"