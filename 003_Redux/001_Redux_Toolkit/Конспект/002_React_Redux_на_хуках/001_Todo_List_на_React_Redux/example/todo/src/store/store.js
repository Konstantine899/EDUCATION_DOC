//src/store/store.js
import { createStore } from "redux";
import { rootReducer } from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

//npm install --save redux-devtools-extension

export const store = createStore(rootReducer, composeWithDevTools());
