import React from "react";
import { useSelector } from "react-redux";

const UserList = () => {
  const users = useSelector((state) => state.users);
  return <div>Users: {users.length}</div>;
};

export default UserList;
