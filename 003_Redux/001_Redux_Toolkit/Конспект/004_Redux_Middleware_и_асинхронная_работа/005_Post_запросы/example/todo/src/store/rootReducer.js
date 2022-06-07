import { combineReducers } from "redux";
import { userReducer } from "./users/user-reducer";
import { todoReducer } from "./todos/todo-reducer";

export const rootReducer = combineReducers({
  users: userReducer,
  todos: todoReducer,
});
