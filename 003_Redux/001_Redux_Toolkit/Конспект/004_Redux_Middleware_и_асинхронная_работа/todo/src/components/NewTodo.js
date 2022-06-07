import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../store/todos/todo-actions";

const NewTodo = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createTodo(value));
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="new todo"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <input type="submit" value="New Todo" />
    </form>
  );
};

export default NewTodo;
