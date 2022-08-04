// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useState, useEffect } from 'react';

interface Todo {
  title: string;
}

export function App() {
  const [todos, setTodos] = useState<Todo[]>([
    { title: 'Learn TypeScript' },
    { title: 'Learn React' },
  ]);

  function addTodo() {
    fetch('/api/addTodo', {
      method: 'POST',
      body: '',
    })
      .then((response) => response.json())
      .then((newTodo) => {
        setTodos([...todos, newTodo]);
      })
  }

  useEffect(() => {
    fetch('/api/todos')
      .then((response) => response.json())
      .then(setTodos);
  }, [])
  
  return (
    <>
      <h1>Todos</h1>
      <ul>
        {todos.map((todo, index) => (
          <li className={'todo'}>{todo.title}</li>
        ))}
      </ul>
      <button id={'add-todo'} onClick={addTodo}>
        Add Todo
      </button>
    </>
  );
}

export default App;
