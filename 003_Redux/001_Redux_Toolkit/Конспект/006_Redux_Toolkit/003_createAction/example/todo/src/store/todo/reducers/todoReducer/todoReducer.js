//src/store/todo/reducers/todoReducer/todoReducer.js
import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
} from "../../constants/todo-constants";
import {
  addTodo,
  removeTodo,
  toggleTodo,
} from "../../todo-actions/todo-actions";
const initialState = {
  todos: [],
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case addTodo.toString():
      return {
        ...state,
        todos: [...state.todos, { ...action.payload }],
      };

    case removeTodo.toString():
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case toggleTodo.toString():
      const toggle = state.todos.map((todo) =>
        todo.id == action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
      return {
        ...state,
        todos: toggle,
      };
    default:
      return state;
  }
};
