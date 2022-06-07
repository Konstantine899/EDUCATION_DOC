//src/store/users/user-action.js
export const ADD_USER = "ADD_USER";

//action creator добавления пользователей
const addUsers = (users) => ({ type: ADD_USER, payload: users });

//Thunk Action
export const loadUsers = () => async (dispatch) => {
  await fetch(`https://jsonplaceholder.typicode.com/users`)
    .then((response) => response.json())
    .then((data) => dispatch(addUsers(data)));
};
