export const allTodos = (state) => state.todos.entities;

export const selectVisibleTodos = (todos = [], filter) => {
  switch (filter) {
    case "all": {
      return todos;
    }
    case "active": {
      return todos.filter((todo) => !todo.completed);
    }
    case "completed": {
      return todos.filter((todo) => todo.completed);
    }
    default: {
      return todos;
    }
  }
};
