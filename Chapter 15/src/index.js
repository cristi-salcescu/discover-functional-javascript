import TodoStore from "./TodoStore";
import PureTodoStore from "./PureTodoStore";

const todoStore = TodoStore();

todoStore.add({ title: "todo1" });
todoStore.add({ title: "todo2" });
todoStore.add({ title: "todo3" });

const pureTodoStore = PureTodoStore();
pureTodoStore.add({ title: "todo1" });
pureTodoStore.add({ title: "todo2" });
pureTodoStore.add({ title: "todo3" });
