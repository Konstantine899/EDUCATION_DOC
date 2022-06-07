//src/store/store.js
import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./feature/Todos/todo-slice";
import filterSlice from "./feature/Filters/filter-slice";
import * as api from "./api/api";

export const store = configureStore({
  reducer: {
    todos: todoSlice,
    filter: filterSlice,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: { api: api },
      },
    }),
});
