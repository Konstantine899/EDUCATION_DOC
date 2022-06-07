import React from "react";
import ReactDOM from "react-dom/client";
import { Root } from "./Root";
import { store } from "./store/store";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Root store={store} />);
