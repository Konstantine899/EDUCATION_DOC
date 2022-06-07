import React, { useEffect } from "react";
import UserList from "./components/UserList";
import TodoList from "./components/TodoList";
import { loadUsers } from "./store/users/user-actions";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUsers());
  }, []);
  return (
    <div>
      <UserList />
      <TodoList />
    </div>
  );
}

export default App;
