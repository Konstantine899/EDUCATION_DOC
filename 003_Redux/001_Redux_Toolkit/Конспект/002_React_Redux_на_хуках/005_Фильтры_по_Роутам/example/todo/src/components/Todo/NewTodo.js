import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/todo/todo-actions/todo-actions";

const NewTodo = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    if (value !== "") {
      event.preventDefault();
      dispatch(addTodo(value));
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
