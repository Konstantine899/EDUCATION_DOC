//src/store/rootReducer.js
import { combineReducers } from "redux";
import { todoReducer } from "./todo/reducers/todoReducer/todoReducer";

export const rootReducer = combineReducers({
  todoReducer,
});
