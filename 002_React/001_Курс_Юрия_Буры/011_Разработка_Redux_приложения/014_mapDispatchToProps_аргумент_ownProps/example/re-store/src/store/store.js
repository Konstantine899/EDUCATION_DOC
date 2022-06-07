//src/components.store/store.js
import { createStore } from "redux";
import reducer from "../reducers/index";

//Создаю store
const store = createStore(reducer);

export default store;
