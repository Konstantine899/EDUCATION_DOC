import React, { useEffect } from "react";
import UserList from "./components/UserList";
import TodoList from "./components/TodoList";
import { loadUsers } from "./store/users/user-actions";
import { useDispatch } from "react-redux";
import { loadTodos } from "./store/todos/todo-actions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUsers());
    dispatch(loadTodos());
  }, []);
  return (
    <div>
      <UserList />
      <TodoList />
    </div>
  );
}

export default App;
