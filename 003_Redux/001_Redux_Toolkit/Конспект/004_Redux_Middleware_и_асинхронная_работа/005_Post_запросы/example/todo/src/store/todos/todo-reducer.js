//src/store/entities/todo-reducers.js
import { ADD_TODO, ADD_TODOS, SET_ERROR, SET_LOADING } from "./todo-actions";

const initialState = {
  status: "idle",
  list: [],
  error: null,
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, list: [...state.list, action.payload] };
    case ADD_TODOS:
      return { ...state, list: action.type, status: "fulfilled" };
    case SET_LOADING:
      return { ...state, status: "loading", error: null };
    case SET_ERROR:
      return { ...state, status: "rejected", error: action.payload };
    default:
      return state;
  }
};
