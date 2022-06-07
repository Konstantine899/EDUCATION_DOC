//store reducers auth ��������� ����
import { IUser } from "../../../models/IUser";

export interface AuthState {
  isAuth: boolean;

  user: IUser;
  isLoading: boolean; // ��������� ��������
  error: string;
}

//������������ �����
export enum AuthActionsEnum {
  SET_AUTH = "SET_AUTH",
  SET_ERROR = "SET_ERROR",
  SET_USER = "SET_USER",
  SET_IS_LOADING = "SET_IS_LOADING",
}

//interface ������� ��������� ���� action
export interface SetAuthAction {
  type: AuthActionsEnum.SET_AUTH; // ������������ ���� ��� action
  payload: boolean; // ��������� ������ ������� ���� action ���������
}

export interface SetErrorAction {
  type: AuthActionsEnum.SET_ERROR;
  payload: string; // ��������� �� ������
}

export interface SetUserAction {
  type: AuthActionsEnum.SET_USER;
  payload: IUser; // ������ ������ ��������� � interface IUser
}

export interface SetIsLoadingAction {
  type: AuthActionsEnum.SET_IS_LOADING;
  payload: boolean;
}

// ��������� interfaces
export type AuthAction =
  | SetAuthAction
  | SetErrorAction
  | SetUserAction
  | SetIsLoadingAction; // ��������� ���������� ����� ��� |
