import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodo, removeTodo } from "../../store/todo/slices/todo-slice";
import { selectVisibleTodos } from "../../store/todo/selectors/todo-selectors";

const TodoList = () => {
  //Получаю активный фильтр
  const { filter } = useParams();
  //Передаю state и активный фильтр
  const todos = useSelector((state) => selectVisibleTodos(state, filter));
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
