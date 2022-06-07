//src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import "./main.scss";

const App = () => {
  return <h1>This is Webpack React App</h1>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
