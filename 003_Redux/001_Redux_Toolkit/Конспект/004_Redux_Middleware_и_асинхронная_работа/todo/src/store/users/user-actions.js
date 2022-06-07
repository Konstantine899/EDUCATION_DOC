//src/store/users/user-action.js

export const ADD_USER = "ADD_USER";

//action creator добавления пользователей
const addUsers = (users) => ({ type: ADD_USER, payload: users });

//Thunk Action
export const loadUsers = () => (dispatch, _, client) => {
  client
    .get(`https://jsonplaceholder.typicode.com/users`)
    .then((data) => dispatch(addUsers(data)))
    .catch((error) => {
      //Сдесь я могу получить текст ошибки с сервера и обработать ее
      console.error(error);
    });
};
