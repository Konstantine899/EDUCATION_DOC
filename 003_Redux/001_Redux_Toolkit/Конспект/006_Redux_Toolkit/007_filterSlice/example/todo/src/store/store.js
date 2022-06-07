//src/store/store.js
import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todo/slices/todo-slice";
import { logger } from "redux-logger/src";
import filterSlice from "./filters/slices/filter-slice";

export const store = configureStore({
  reducer: {
    todoReducer: todoSlice,
    filter: filterSlice,
  },

  devTools: true,
  middleware: (getDefaultMiddleware) => {
    //getDefaultMiddleware это middleware Toolkit
    return getDefaultMiddleware().concat(logger);
  },
  preloadedState: {
    todoReducer: {
      todos: [{ id: 1, title: "Redux Toolkit", completed: true }],
    },
  },
  enhancers: [
    //Дополнительные усилители библиотеки
  ],
});
