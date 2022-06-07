//src/store/todo/reducers/todoReducer/todoReducer.js
import { createReducer } from "@reduxjs/toolkit";
import {
  addTodo,
  removeTodo,
  toggleTodo,
} from "../../todo-actions/todo-actions";

const initialState = {
  todos: [],
};

export const todoReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(addTodo, (state, action) => void state.todos.push(action.payload))
    .addCase(toggleTodo, (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      //и просто мутирую
      todo.completed = !todo.completed;
    })
    .addCase(removeTodo, (state, action) => {
      const id = state.todos.findIndex((todo) => todo.id === action.payload);
      state.todos.splice(id, 1);
    })
);

// export const todoReducer = createReducer(initialState, {
//   [addTodo]: (state, action) => void state.entities.push(action.payload),
//   [toggleTodo]: (state, action) => {
//     const todo = state.entities.find((todo) => todo.id === action.payload);
//     //и просто мутирую
//     todo.completed = !todo.completed;
//   },
//   [removeTodo]: (state, action) => {
//     const id = state.entities.findIndex((todo) => todo.id === action.payload);
//     state.entities.splice(id, 1);
//   },
// });
