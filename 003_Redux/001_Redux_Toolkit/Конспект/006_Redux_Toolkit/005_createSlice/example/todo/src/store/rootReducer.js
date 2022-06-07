//src/store/rootReducer.js
import { combineReducers } from "redux";
import todoSlice from "./todo/slices/todo-slice";

export const rootReducer = combineReducers({
  todoReducer: todoSlice,
});
