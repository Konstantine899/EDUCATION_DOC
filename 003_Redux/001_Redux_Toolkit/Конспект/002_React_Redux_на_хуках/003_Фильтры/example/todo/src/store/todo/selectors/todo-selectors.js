export const allTodos = (state) => state.todos;

export const selectVisibleTodos = (state, filter) => {
  switch (filter) {
    case "all": {
      console.log(state.todoReducer.todos);
      return state.todoReducer.todos;
    }
    case "active": {
      console.log(state.todoReducer.todos);

      return state.todoReducer.todos.filter((todo) => !todo.completed);
    }
    case "completed": {
      console.log(state.todoReducer.todos);

      return state.todoReducer.todos.filter((todo) => todo.completed);
    }
    default: {
      return state.todoReducer.todos;
    }
  }
};
