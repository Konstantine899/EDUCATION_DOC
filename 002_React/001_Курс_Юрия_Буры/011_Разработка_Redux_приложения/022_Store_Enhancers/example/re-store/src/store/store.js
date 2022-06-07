//src/components.store/store.js
import { createStore, compose } from "redux";
import reducer from "../reducers/index";

//Собственная реализация createStore
const stringEnhancer =
  (createStore) =>
  (...args) => {
    const store = createStore(...args);
    //Сохраняю оригинальный метод dispatch
    const originalDispatch = store.dispatch;
    //Наша реализация функции dispatch
    store.dispatch = (action) => {
      if (typeof action === "string") {
        return originalDispatch({
          type: action,
        });
      } else {
        return originalDispatch(action);
      }
    };
    return store;
  };

const logEnhancer =
  (createStore) =>
  (...args) => {
    const store = createStore(...args);
    //Сохраняю оригинальный метод dispatch
    const originalDispatch = store.dispatch;
    //Наша реализация функции dispatch
    store.dispatch = (action) => {
      console.log(action.type);
      return originalDispatch(action);
    };
    return store;
  };

//Создаю store
const store = createStore(reducer, compose(stringEnhancer, logEnhancer));

store.dispatch("HELLO_WORLD");

export default store;
