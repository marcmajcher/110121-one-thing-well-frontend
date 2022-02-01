import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from './lib/actions';

export default function TodoList() {
  const todos = useSelector((s) => s.todos);
  const [newTodo, setNewTodo] = useState('');
  const dispatch = useDispatch();

  function dispatchAddTodo(e) {
    e.preventDefault();
    dispatch(addTodo(newTodo));
    setNewTodo('');
  }

  return (
    <div>
      <h2>Todos</h2>
      <ul>
        {todos.map((todo) => (
          <li key={Math.random()}>{todo}</li>
        ))}
      </ul>

      <form onSubmit={dispatchAddTodo}>
        <input
          type="text"
          onChange={(e) => setNewTodo(e.target.value)}
          value={newTodo}
        />
      </form>
    </div>
  );
}
