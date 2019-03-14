import Store from "./Store";

export function TodoStore() {
  let todos = [];

  function add(todos, todo) {
    return todos.concat([todo]);
  }

  function addAndMutate(todo) {
    todos = add(todos, todo);
  }

  return Object.freeze({
    add: addAndMutate
  });
}

function add(todos, todo) {
  return todos.concat([todo]);
}

export default Store({
  state: [],
  setters: { add }
});
