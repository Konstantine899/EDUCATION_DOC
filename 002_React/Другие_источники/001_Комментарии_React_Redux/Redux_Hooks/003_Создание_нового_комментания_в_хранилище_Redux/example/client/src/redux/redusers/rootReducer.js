import { combineReducers } from "redux";
import { counterReducer } from "./counterReducer";
import inputReducer from "./inputReducer";
import commentsReducer from "./commentsReducer";

export const rootReducer = combineReducers({
  counterReducer,
  inputReducer,
  commentsReducer,
});
