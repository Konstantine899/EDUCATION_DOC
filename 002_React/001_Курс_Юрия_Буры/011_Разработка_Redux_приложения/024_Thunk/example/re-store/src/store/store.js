//src/components.store/store.js
import { createStore, applyMiddleware } from "redux";
import reducer from "../reducers/index";
import thunkMiddleware from "redux-thunk";

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
  applyMiddleware(thunkMiddleware, stringMiddleware, logMiddleware)
);

//Как будет выглядеть action creator в thunk
const delayedActionCreator = (timeout) => (dispatch) => {
  setTimeout(
    () =>
      dispatch({
        type: "DELAYED_ACTION",
      }),
    timeout
  );
};

store.dispatch(delayedActionCreator(7000));

export default store;
