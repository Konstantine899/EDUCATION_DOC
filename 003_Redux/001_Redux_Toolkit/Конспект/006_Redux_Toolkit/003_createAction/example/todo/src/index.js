import React from "react";
import ReactDOM from "react-dom/client";
import { Root } from "./Root";
import { configureStore } from "./store/store";
import "./index.css";

const store = configureStore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Root store={store} />);
