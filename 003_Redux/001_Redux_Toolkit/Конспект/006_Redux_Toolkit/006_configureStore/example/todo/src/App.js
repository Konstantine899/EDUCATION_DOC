import React from "react";
import NewTodo from "./components/Todo/NewTodo";
import TodoList from "./components/Todo/TodoList";
import Filters from "./components/Filters";

function App() {
  return (
    <>
      <NewTodo />
      <Filters />
      <TodoList />
    </>
  );
}

export default App;
