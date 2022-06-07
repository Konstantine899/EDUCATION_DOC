import React, { useCallback, useState } from "react";
import SomeComponent from "./components/SomeComponent";

function App() {
  const [count, setCount] = useState(0);
  console.log(`Render App`);
  const increment = useCallback(() => setCount((prev) => prev + 1), []);

  return (
    <div>
      <h1>{count}</h1>
      <SomeComponent increment={increment} />
    </div>
  );
}

export default App;
