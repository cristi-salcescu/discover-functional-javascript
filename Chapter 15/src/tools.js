export function compose(...functions) {
  return function(x) {
    return functions.reduceRight((value, f) => f(value), x);
  };
}

function decorateMethods(obj, ...decorators) {
  const newObject = { ...obj };
  Object.keys(newObject).forEach(function decorateMethod(fnName) {
    if (typeof newObject[fnName] === "function") {
      newObject[fnName] = compose(...decorators)(newObject[fnName]);
    }
  });
  return newObject;
}

export function decorate(factory, ...decorators) {
  return function(...args) {
    const newObject = decorateMethods(factory(...args), ...decorators);
    return Object.freeze(newObject);
  };
}

export { decorateMethods };
