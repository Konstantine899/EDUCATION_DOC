import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleTodo,
  removeTodo,
} from "../../store/todo/todo-actions/todo-actions";
import { allTodos } from "../../store/todo/selectors/todo-selectors";

const TodoList = () => {
  const { todos } = useSelector(allTodos);
  const dispatch = useDispatch();
  return (
    <ul>
      {todos === undefined
        ? null
        : todos.map((todo) => (
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => dispatch(toggleTodo(todo.id))}
              />
              {todo.title}
              <button onClick={() => dispatch(removeTodo(todo.id))}>
                удалить
              </button>
            </li>
          ))}
    </ul>
  );
};

export default TodoList;
