// src/store/index.js
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const store = createStore({}, applyMiddleware(thunk));
