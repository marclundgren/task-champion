let nextTodoId = 0;
export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text,
});

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter,
});
export const setInputValue = (val) => ({
  type: 'SET_INPUT_VALUE',
  val,
});
export const clearCompleted = () => ({
  type: 'REMOVE_COMPLETED_TODOS',
});
export const toggleAllTodos = () => ({
  type: 'TOGGLE_ALL_TODOS',
});
export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id,
});
export const toggleAllCompleted = () => ({
  type: 'TOGGLE_ALL_TODOS_COMPLETED',
});
export const toggleAllInProgress = () => ({
  type: 'TOGGLE_ALL_TODOS_IN_PROGRESS',
});

export const removeTodo = (id) => ({
  type: 'REMOVE_TODO',
  id,
});
