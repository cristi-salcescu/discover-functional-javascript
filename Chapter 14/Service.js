function Service() {
  function doSomething(){ 
    console.log("do-something"); 
  }

  return Object.freeze({
    doSomething
  });
}

function SpecialService({ service }){  
  function doSomethingElse(){ 
    console.log("do-something-else"); 
  }

  return Object.freeze({
    doSomething : service.doSomething,
    doSomethingElse
  });
}

const specialService = SpecialService({
  service : Service()
});

specialService.doSomething(); 
//"do-something"

specialService.doSomethingElse();
//"do-something-else"