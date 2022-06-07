import React from "react";
import NewTodo from "./feature/Todos/NewTodo";
import TodoList from "./feature/Todos/TodoList";
import Filter from "../src/feature/Filters/Filter";
import ResetApp from "./feature/Reset/resetApp";
import { useSelector } from "react-redux";

function App() {
  const { loading, error } = useSelector((state) => state.todos);
  return (
    <>
      {loading === "loading" || error ? null : (
        <>
          <NewTodo />
          <Filter />
          <ResetApp />
        </>
      )}

      <TodoList />
    </>
  );
}

export default App;
