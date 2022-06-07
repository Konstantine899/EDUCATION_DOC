//src/store/todo/todo-actions/todo-actions.js
import { createAction, nanoid } from "@reduxjs/toolkit";

import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
} from "../constants/todo-constants";

export const addTodo = createAction(ADD_TODO, (title) => ({
  payload: { title, id: nanoid(), completed: false },
}));

export const removeTodo = createAction(REMOVE_TODO);

export const toggleTodo = createAction(TOGGLE_TODO);
