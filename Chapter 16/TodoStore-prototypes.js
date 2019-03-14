class TodoStore{
  constructor(){
    this.list = [];
  }

  push(todo){
    this.list.push(todo);
  }

  getBy(text){
    return this.list.filter(todo => todo.title.includes(text));
  }
}

class Todo{
  constructor(id, title){
    this.id = id;
    this.title = title;
  }
}

(function startApplication(){
  const todoStore = new TodoStore();

  todoStore.push(new Todo(1, "find"));
  todoStore.push(new Todo(2, "read"));
  todoStore.push(new Todo(3, "share"));

  const filterTodos = todoStore.getBy("read");
  console.log("Count:" + filterTodos.length);
})();