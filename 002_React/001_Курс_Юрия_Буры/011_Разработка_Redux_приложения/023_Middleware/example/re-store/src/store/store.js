//src/components.store/store.js
import { createStore, applyMiddleware } from "redux";
import reducer from "../reducers/index";

const logMiddleware =
  ({ getState, dispatch }) =>
  (next) =>
  (action) => {
    console.log(action.type, getState());
    return next(action);
  };

const stringMiddleware = () => (next) => (action) => {
  if (typeof action === "string") {
    return next({
      type: action,
    });
  } else {
    return next(action);
  }
};

//Создаю store
const store = createStore(
  reducer,
  applyMiddleware(stringMiddleware, logMiddleware)
);

store.dispatch("HELLO_WORLD");

export default store;
