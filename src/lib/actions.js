export function addTodo(payload) {
  return { type: 'ADD_TODO', payload };
}

export function setTodos(payload) {
  return { type: 'SET_TODOS', payload };
}
