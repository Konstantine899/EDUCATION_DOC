import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

//инициализирую контекст
const MyContext = React.createContext();

const App = () => (
  <>
    <MyContext.Provider value="Hello World 123">
      <Child />
    </MyContext.Provider>
  </>
);

const Child = () => {
  const value = useContext(MyContext);

  return <p>{value}</p>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
