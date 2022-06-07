export const allTodos = (state) => state.todos.entities;

export const selectVisibleTodos = (state, filter) => {
  switch (filter) {
    case "all": {
      return state.todos.entities;
    }
    case "active": {
      return state.todos.entities.filter((todo) => !todo.completed);
    }
    case "completed": {
      return state.todos.entities.filter((todo) => todo.completed);
    }
    default: {
      return state.todos.entities;
    }
  }
};
