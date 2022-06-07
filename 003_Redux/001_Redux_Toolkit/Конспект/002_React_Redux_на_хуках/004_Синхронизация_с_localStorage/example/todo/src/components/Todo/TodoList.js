import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleTodo,
  removeTodo,
} from "../../store/todo/todo-actions/todo-actions";
import { selectVisibleTodos } from "../../store/todo/selectors/todo-selectors";
import { selectActiveFilter } from "../../store/filters/selectors/filter-selectors";

const TodoList = () => {
  //Получаю активный фильтр
  const activeFilter = useSelector(selectActiveFilter);
  //Передаю state и активный фильтр
  const todos = useSelector((state) => selectVisibleTodos(state, activeFilter));
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
