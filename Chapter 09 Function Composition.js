function compose(...functions){
  return function(x){
	return functions.reduceRight((value,f) => f(value), x);
  }
}

function f(y){
  return y * y;
}

function g(x){
  return x + x;
}

f(g(2)) === compose(f,g)(2);

function pipe(...functions){
  return function(x){
	return functions.reduce((value, f) => f(value), x);
  }
}