function TodoStore(){
  const list = [];

  function push(todo){
    list.push(todo);
  }

  function getBy(text){
    return list.filter(todo => todo.title.includes(text));
  }

  return Object.freeze({
    push,
    getBy
  })
}

function Todo(id, title){
  return Object.freeze({id, title});
}

(function startApplication(){
  const todoStore = TodoStore();

  todoStore.push(Todo(1, "find"));
  todoStore.push(Todo(2, "read"));
  todoStore.push(Todo(3, "share"));

  const filterTodos = todoStore.getBy("read");
  console.log("Count:" + filterTodos.length);
})();