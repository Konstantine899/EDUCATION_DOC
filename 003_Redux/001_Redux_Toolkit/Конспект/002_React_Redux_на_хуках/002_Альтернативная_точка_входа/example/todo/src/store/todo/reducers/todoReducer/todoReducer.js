//src/store/todo/reducers/todoReducer/todoReducer.js
import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
} from "../../constants/todo-constants";
const initialState = {
  todos: [],
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: Date.now(), title: action.title, completed: false },
        ],
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    case TOGGLE_TODO:
      const toggle = state.todos.map((todo) =>
        todo.id == action.id ? { ...todo, completed: !todo.completed } : todo
      );
      return {
        ...state,
        todos: toggle,
      };
    default:
      return state;
  }
};
