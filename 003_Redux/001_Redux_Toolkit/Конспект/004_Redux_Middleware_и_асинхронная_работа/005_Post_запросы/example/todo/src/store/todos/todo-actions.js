//src/store/entities/todo-actions.js
import { client } from "../../api";
import NewTodo from "../../components/NewTodo";

export const ADD_TODOS = "@@entities/ADD_TODOS";
export const SET_LOADING = "@@entities/SET_LOADING";
export const SET_ERROR = "@@entities/SET_ERROR";

export const ADD_TODO = "@@entities/ADD_TODO";

const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});

const addTodos = (todos) => ({
  type: ADD_TODOS,
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
// Создаю todo
export const createTodo = (title) => (dispatch) => {
  client
    .post(`https://jsonplaceholder.typicode.com/todos`, {
      title,
      completed: false,
      userId: 1,
    })
    .then((NewTodo) => dispatch(addTodo(NewTodo)))
    .catch((error) => dispatch(setError(error)));
};
