// src/store/index.js
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./reducers";

export const store = createStore(rootReducer, applyMiddleware(thunk));

//Получаю тип reducer
export type RootState = ReturnType<typeof rootReducer>;
