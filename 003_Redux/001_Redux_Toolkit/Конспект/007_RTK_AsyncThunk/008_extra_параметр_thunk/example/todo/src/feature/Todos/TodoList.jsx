import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { toggleTodo, removeTodo, loadTodos } from "./todo-slice";
import { selectVisibleTodos } from "./todo-selectors";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TodoList = () => {
  //Получаю активный фильтр
  const activeFilter = useSelector((state) => state.filter);
  //передаю активный фильтр
  const dispatch = useDispatch();
  const todos = useSelector((state) => selectVisibleTodos(state, activeFilter));
  const { error, loading } = useSelector((state) => state.todos);

  useEffect(() => {
    const promise = dispatch(loadTodos());
    //При размонтировании компонента
    return () => promise.abort(); //Отменяю повторный запрос
  }, [dispatch]);

  return (
    <>
      <ToastContainer />
      <ul>
        {error && <h2>{error}</h2>}
        {loading === "loading" && <h2>Loading...</h2>}
        {/*Если loading="idle" и нет ошибки*/}
        {loading === "idle" &&
          !error &&
          todos.map((todo) => (
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => dispatch(toggleTodo(todo.id))}
              />
              {todo.id}: {todo.title}
              <button onClick={() => dispatch(removeTodo(todo.id))}>
                удалить
              </button>
            </li>
          ))}
      </ul>
    </>
  );
};

export default TodoList;
