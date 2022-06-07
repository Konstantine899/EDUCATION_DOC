import { combineReducers } from "redux";
import { counterReducer } from "./counterReducer";
import inputReducer from "./inputReducer";

export const rootReducer = combineReducers({
  counterReducer,
  inputReducer,
});
