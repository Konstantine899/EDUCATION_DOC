//src/store/action-creator/user.ts

import { UserAction, UsersActionTypes } from "../types/user";
import { Dispatch } from "redux";
import axios from "axios";

export const fetchUsers = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UsersActionTypes.FETCH_USERS });
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users`
      );
      dispatch({
        type: UsersActionTypes.FETCH_USERS_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: UsersActionTypes.FETCH_USERS_ERROR,
        payload: "Произошла ошибка при загрузке пользователей",
      });
    }
  };
};
