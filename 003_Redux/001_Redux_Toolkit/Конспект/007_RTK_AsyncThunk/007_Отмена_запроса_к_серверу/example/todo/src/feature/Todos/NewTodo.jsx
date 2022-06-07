import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, createTodo } from "./todo-slice";

const NewTodo = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    if (value) {
      event.preventDefault();
      dispatch(createTodo(value));
      setValue("");
    } else {
      event.preventDefault();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Новая задача"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <input type="submit" value="Добавить" />
    </form>
  );
};

export default NewTodo;
