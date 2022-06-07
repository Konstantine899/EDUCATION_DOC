//src/store/store.js
import { createStore } from "redux";
import { rootReducer } from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { loadState, saveState } from "../local-storage";
import { throttle } from "lodash";

//npm install --save redux-devtools-extension

export const configureStore = () => {
  //загружаю данные из localStorage
  const persistedState = loadState();
  const store = createStore(rootReducer, persistedState, composeWithDevTools());

  store.subscribe(
    throttle(() => {
      saveState({ todoReducer: store.getState().todoReducer });
    }, 1000)
  );

  return store;
};
