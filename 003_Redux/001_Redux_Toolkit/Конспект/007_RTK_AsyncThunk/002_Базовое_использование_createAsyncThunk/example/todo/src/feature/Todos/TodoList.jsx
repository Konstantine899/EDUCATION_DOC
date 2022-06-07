import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { toggleTodo, removeTodo } from "./todo-slice";
import { selectVisibleTodos } from "./todo-selectors";

const TodoList = () => {
  //Получаю активный фильтр
  const activeFilter = useSelector((state) => state.filter);
  //передаю активный фильтр
  const todos = useSelector((state) => selectVisibleTodos(state, activeFilter));
  const dispatch = useDispatch();
  console.log(todos);
  return (
    <ul>
      {todos === undefined
        ? null
        : todos.map((todo) => (
            <li key={todo.title.id}>
              <input
                type="checkbox"
                checked={todo.title.completed}
                onChange={() => dispatch(toggleTodo(todo.title.id))}
              />
              {todo.title.title}
              <button onClick={() => dispatch(removeTodo(todo.title.id))}>
                удалить
              </button>
            </li>
          ))}
    </ul>
  );
};

export default TodoList;
