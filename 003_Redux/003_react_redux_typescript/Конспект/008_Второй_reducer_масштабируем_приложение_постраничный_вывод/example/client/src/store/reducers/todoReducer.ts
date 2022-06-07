//src/store/reducers/todoReducer.ts

import { TodoActions, TodoActionsTypes, TodoState } from "../types/todo";

const initialState: TodoState = {
  todos: [],
  page: 1,
  limit: 10,
  error: null,
  loading: false,
};

export const todoReducer = (
  state = initialState,
  action: TodoActions
): TodoState => {
  switch (action.type) {
    case TodoActionsTypes.FETCH_TODOS:
      return { ...state, loading: true, error: null };
    case TodoActionsTypes.FETCH_TODOS_SUCCESS:
      return { ...state, loading: false, error: null, todos: action.payload };
    case TodoActionsTypes.FETCH_TODOS_ERROR:
      return { ...state, loading: false, error: action.payload };
    case TodoActionsTypes.SET_TODO_PAGE:
      return { ...state, page: action.payload };
    default:
      return state;
  }
};
