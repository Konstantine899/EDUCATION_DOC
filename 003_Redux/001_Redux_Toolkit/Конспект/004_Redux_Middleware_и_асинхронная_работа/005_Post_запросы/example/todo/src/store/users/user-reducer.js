//src/store/users/user-reducer.js
import { ADD_USER } from "./user-actions";

export const userReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_USER:
      return action.payload;
    default:
      return state;
  }
};
