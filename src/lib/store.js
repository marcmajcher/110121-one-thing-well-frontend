import { createStore } from 'redux';

const defaultStore = {
  todos: [],
};

function reducer(store = defaultStore, action) {
  console.log('in reducer: action', action.type, 'with payload', action.payload)

  switch (action.type) {
    case 'ADD_TODO':
      return { ...store, todos: [...store.todos, action.payload] };
    case 'SET_TODOS':
      return { ...store, todos: action.payload };
    default:
      return store;
  }
}

export const store = createStore(reducer, defaultStore);
