import React from "react";
import NewTodo from "./feature/Todos/NewTodo";
import TodoList from "./feature/Todos/TodoList";
import Filter from "../src/feature/Filters/Filter";
import ResetApp from "./feature/Reset/resetApp";

function App() {
  return (
    <>
      <NewTodo />
      <Filter />
      <ResetApp />
      <TodoList />
    </>
  );
}

export default App;
