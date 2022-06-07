//store reducers auth типизирую поля
import { IUser } from "../../../models/IUser";

export interface AuthState {
  isAuth: boolean;

  user: IUser;
  isLoading: boolean; // индикация загрузки
  error: string;
}

//перечисления типов
export enum AuthActionsEnum {
  SET_AUTH = "SET_AUTH",
  SET_ERROR = "SET_ERROR",
  SET_USER = "SET_USER",
  SET_IS_LOADING = "SET_IS_LOADING",
}

//interface который описывает поля action
export interface SetAuthAction {
  type: AuthActionsEnum.SET_AUTH; // обязательное поле для action
  payload: boolean; // некоторые данные которые этот action принимает
}

export interface SetErrorAction {
  type: AuthActionsEnum.SET_ERROR;
  payload: string; // сообщение об ошибке
}

export interface SetUserAction {
  type: AuthActionsEnum.SET_USER;
  payload: IUser; // Ожидаю данные описанные в interface IUser
}

export interface SetIsLoadingAction {
  type: AuthActionsEnum.SET_IS_LOADING;
  payload: boolean;
}

// объеденяю interfaces
export type AuthAction =
  | SetAuthAction
  | SetErrorAction
  | SetUserAction
  | SetIsLoadingAction; // остальные перечисляю через или |
