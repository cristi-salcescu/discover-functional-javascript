import { decorateMethods } from "./tools";

function Store(storeConfig) {
  return function() {
    let state = storeConfig.state;

    function setter(fn) {
      return function(...args) {
        state = fn(state, ...args);
      };
    }

    function getter(fn) {
      return function(...args) {
        return fn(state, ...args);
      };
    }

    return Object.freeze({
      ...decorateMethods(storeConfig.getters, getter),
      ...decorateMethods(storeConfig.setters, setter)
    });
  };
}
export default Store;
