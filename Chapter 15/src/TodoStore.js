import { compose, decorate } from "./tools";
import { logDuration, authorize } from "./decorators";

export function TodoStore_() {
  const todos = [];

  function add(todo) {
    todos.push(todo);
  }

  return Object.freeze({
    add: compose(
      logDuration,
      authorize
    )(add)
  });
}

function TodoStore() {
  let todos = [];

  function add(todo) {
    todos.push(todo);
  }

  return Object.freeze({
    add
  });
}

export default decorate(TodoStore, logDuration, authorize);
