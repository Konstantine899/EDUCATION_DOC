import React from "react";
import ReactDOM from "react-dom/client";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "./redux/redusers/rootReducer";
import App from "./App";
import "./index.css";

const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App className="App" />
  </Provider>
);
