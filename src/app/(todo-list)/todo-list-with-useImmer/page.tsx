'use client';

import { useImmer } from 'use-immer';
import AddTodo from '../AddTodo.tsx';
import TaskList from '../TaskList.tsx';

let nextId = 3;
const initialTodos = [
  { id: 0, title: 'Buy milk', done: true },
  { id: 1, title: 'Eat tacos', done: false },
  { id: 2, title: 'Brew tea', done: false },
];

export default function TaskApp() {
  const [todos, setTodos] = useImmer(
    initialTodos
  );

  function handleAddTodo(title) {
    setTodos(todos => { // Note that without this curly bracket immer will complain
        todos.push({
          id: nextId++,
          title: title,
          done: false
        })
    });
  }

  function handleChangeTodo(nextTodo) {
    setTodos(todos => {
      const toEdit = todos.find(todo => todo.id == nextTodo.id);
      toEdit.title = nextTodo.title;
      toEdit.done = nextTodo.done;
    });
  }

  function handleDeleteTodo(todoId) {
    setTodos(draft => { // Note that without this curly bracket immer will complain
        draft.splice(todos.findIndex(t => t.id === todoId), 1);
    });
  }

  return (
    <>
      <AddTodo
        onAddTodo={handleAddTodo}
      />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}

