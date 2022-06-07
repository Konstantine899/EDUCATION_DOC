//src/store/todo/todo-actions/todo-actions.js
import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
} from "../constants/todo-constants";
export const addTodo = (title) => {
  console.log(title);
  return {
    type: ADD_TODO,
    title,
  };
};

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  id,
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id,
});
