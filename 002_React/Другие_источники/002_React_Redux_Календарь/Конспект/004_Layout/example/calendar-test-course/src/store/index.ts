/*store index.ts*/
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({});

export const store = createStore(rootReducer, applyMiddleware(thunk));

//типизирую store
export type RootState = ReturnType<typeof store.getState>; // получаю тип нашего состояния
// получаю тип dispatch
export type AppDispatch = typeof store.dispatch;
