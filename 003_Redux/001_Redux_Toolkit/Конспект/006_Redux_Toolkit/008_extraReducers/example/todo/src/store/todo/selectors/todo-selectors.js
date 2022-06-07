export const allTodos = (state) => state.todos.todos;

export const selectVisibleTodos = (state, filter) => {
  switch (filter) {
    case "all": {
      return state.todos.todos;
    }
    case "active": {
      return state.todos.todos.filter((todo) => !todo.completed);
    }
    case "completed": {
      return state.todos.todos.filter((todo) => todo.completed);
    }
    default: {
      return state.todos.todos;
    }
  }
};
