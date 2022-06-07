import { combineReducers } from "redux";
import { userReducer } from "./users/user-reducer";

export const rootReducer = combineReducers({
  users: userReducer,
});
