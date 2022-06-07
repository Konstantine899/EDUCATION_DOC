import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const App = () => (
  <>
    <HookSwitcher />
  </>
);

const HookSwitcher = () => {
  const [color, setColor] = useState("white");

  const [fontSize, setFontSize] = useState(14);
  return (
    <div
      style={{
        padding: "10px",
        backgroundColor: color,
      }}
    >
      <p style={{ fontSize: `${fontSize}px` }}>
        Hello World: {`fontSize ${fontSize}`}
      </p>
      <button onClick={() => setColor("black")}>Black</button>
      <button onClick={() => setColor("white")}>Light</button>
      <button onClick={() => setFontSize((prevState) => prevState + 2)}>
        +
      </button>
      <button onClick={() => setFontSize((prevState) => prevState - 2)}>
        -
      </button>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
