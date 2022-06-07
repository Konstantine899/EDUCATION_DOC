//src/store/entities/todo-actions.js
import { client } from "../../api";

export const ADD_TODO = "@@entities/ADD_TODO";
export const SET_LOADING = "@@entities/SET_LOADING";
export const SET_ERROR = "@@entities/SET_ERROR";

const addTodos = (todos) => ({
  type: ADD_TODO,
  payload: todos,
});

const setLoading = () => ({
  type: SET_LOADING,
});

const setError = (error) => ({
  type: SET_ERROR,
  payload: error,
});

export const loadTodos = () => (dispatch) => {
  dispatch(setLoading());
  client
    .get(`https://jsonplaceholder.typicode.com/todos`)
    .then((data) => dispatch(addTodos(data)))
    .catch((error) => dispatch(setError(error)));
};
