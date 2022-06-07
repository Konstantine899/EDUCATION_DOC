import React from "react";
import NewTodo from "./components/Todo/NewTodo";
import TodoList from "./components/Todo/TodoList";
import Filters from "./components/Filters";
import ResetApp from "./components/resetApp";

function App() {
  return (
    <>
      <NewTodo />
      <Filters />
      <ResetApp />
      <TodoList />
    </>
  );
}

export default App;
