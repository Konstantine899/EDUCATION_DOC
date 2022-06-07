//store reducers auth action-creators.ts
// Объект обертка
import {
  AuthActionsEnum,
  SetAuthAction,
  SetUserAction,
  SetIsLoadingAction,
  SetErrorAction,
} from "./types";
import { IUser } from "../../../models/IUser";
import { AppDispatch } from "../../index";
import axios from "axios";
import UserService from "../../../api/UserService";

export const AuthActionCreators = {
  //синхронные actionCreators
  setUser: (user: IUser): SetUserAction => ({
    type: AuthActionsEnum.SET_USER,
    payload: user,
  }),
  setIsAuth: (auth: boolean): SetAuthAction => ({
    type: AuthActionsEnum.SET_AUTH,
    payload: auth,
  }),
  setIsLoading: (payload: boolean): SetIsLoadingAction => ({
    type: AuthActionsEnum.SET_IS_LOADING,
    payload,
  }),
  setError: (payload: string): SetErrorAction => ({
    type: AuthActionsEnum.SET_ERROR,
    payload,
  }),
  //асинхронные actionCreators
  login:
    (username: string, password: string) => async (dispatch: AppDispatch) => {
      // описываем логику возвращаемой функции
      try {
        dispatch(AuthActionCreators.setIsLoading(true)); // указываю что пошла загрузка
        // для того что бы увидить индикацию загрузки
        setTimeout(async () => {
          //Получаю пользователя
          const response = await UserService.getUsers();

          //ищу пользователя
          const mockUser = response.data.find(
            (user) => user.username === username && user.password === password
          );
          // Проверяю найден ли пользователь
          if (mockUser) {
            localStorage.setItem("auth", "true");
            localStorage.setItem("username", mockUser.username);
            //Помещаю информацию о пользователе
            dispatch(AuthActionCreators.setUser(mockUser));
            //Меняю состояние на авторизованное
            dispatch(AuthActionCreators.setIsAuth(true));
            // убираю индикацию загрузки
            dispatch(AuthActionCreators.setIsLoading(false));
          } else {
            dispatch(
              AuthActionCreators.setError(`Incorrect username or password`)
            );
          }
        }, 1000);
      } catch (e) {
        dispatch(AuthActionCreators.setError("Error Login"));
      }
    },
  logout: () => async (dispatch: AppDispatch) => {
    // описываем логику возвращаемой функции
    try {
      localStorage.removeItem("auth");
      localStorage.removeItem("username");
      dispatch(AuthActionCreators.setUser({} as IUser));
      dispatch(AuthActionCreators.setIsAuth(false));
    } catch (e) {
      // Автор говорит что здесь впринципе ошибки произойти не может
      dispatch(AuthActionCreators.setError("Error Logout"));
    }
  },
};
