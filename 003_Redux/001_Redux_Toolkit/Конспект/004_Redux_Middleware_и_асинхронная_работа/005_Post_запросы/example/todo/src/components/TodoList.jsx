import React from "react";
import { useSelector } from "react-redux";

const TodoList = () => {
  const { list: todos, status, error } = useSelector((state) => state.todos);
  return (
    <div>
      <div>
        Todos: {todos.length}. Status: {status}
        {error && <h4>{error}</h4>}
      </div>
    </div>
  );
};

export default TodoList;
