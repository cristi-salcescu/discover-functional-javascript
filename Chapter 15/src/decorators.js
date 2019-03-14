import currentUser from "./CurrentUser";

function logDuration(fn) {
  return function(...args) {
    const start = Date.now();
    const result = fn(...args);
    const duration = Date.now() - start;
    console.log(fn.name + "() duration : " + duration);
    return result;
  };
}

function createAuthorizeDecorator(currentUser) {
  return function authorize(fn) {
    return function(...args) {
      if (currentUser.isAuthenticated()) {
        return fn(...args);
      } else {
        throw new Error("Not authorized");
      }
    };
  };
}

const authorize = createAuthorizeDecorator(currentUser);
export { logDuration, authorize };
