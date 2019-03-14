import partial from "lodash/partial";

function EventEmitter(){
  const subscribers = [];

  function subscribe(type, callback){
    subscribers[type] = subscribers[type] || [];
    subscribers[type].push(callback); 
  }

  function notify(value, fn){
    try {
      fn(value);
    }
    catch(e) { console.error(e); }
  }

  function publish(type, value){
    if(subscribers[type]){
      subscribers[type].forEach(partial(notify, value));
    }
  }

  return Object.freeze({
    subscribe,
    publish
  });
}