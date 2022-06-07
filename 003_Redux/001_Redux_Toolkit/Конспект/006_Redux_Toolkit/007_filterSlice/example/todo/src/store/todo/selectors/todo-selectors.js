export const allTodos = (state) => state.todoReducer.todos;

export const selectVisibleTodos = (state, filter) => {
  switch (filter) {
    case "all": {
      return state.todoReducer.todos;
    }
    case "active": {
      return state.todoReducer.todos.filter((todo) => !todo.completed);
    }
    case "completed": {
      return state.todoReducer.todos.filter((todo) => todo.completed);
    }
    default: {
      return state.todoReducer.todos;
    }
  }
};
