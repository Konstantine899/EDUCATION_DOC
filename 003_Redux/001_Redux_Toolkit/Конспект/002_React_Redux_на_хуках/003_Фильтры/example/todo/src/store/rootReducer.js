//src/store/rootReducer.js
import { combineReducers } from "redux";
import { todoReducer } from "./todo/reducers/todoReducer/todoReducer";
import { filters } from "./filters/reducers/filter-reducer";

export const rootReducer = combineReducers({
  todoReducer,
  filters,
});
