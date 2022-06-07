//src/store/store.ts
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({});

//создаю и конфигурирую храниище
export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

//Типы для взаимодействия с хранилищем
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
