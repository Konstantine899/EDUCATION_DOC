import { Dispatch } from "redux";
import { TodoActions, TodoActionsTypes } from "../types/todo";
import axios from "axios";

export const fetchTodos = (page = 1, limit = 10) => {
  return async (dispatch: Dispatch<TodoActions>) => {
    try {
      dispatch({ type: TodoActionsTypes.FETCH_TODOS });
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/todos`,
        { params: { _page: page, _limit: limit } }
      );
      dispatch({
        type: TodoActionsTypes.FETCH_TODOS_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: TodoActionsTypes.FETCH_TODOS_ERROR,
        payload: `При загрузке списка дел произошла ошибка: ${error}`,
      });
    }
  };
};

//action creator для смены страницы
export function setTodoPage(page: number): TodoActions {
  return { type: TodoActionsTypes.SET_TODO_PAGE, payload: page };
}
