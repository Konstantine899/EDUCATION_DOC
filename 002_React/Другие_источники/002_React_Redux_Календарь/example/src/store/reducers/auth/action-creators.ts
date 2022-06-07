//store reducers auth action-creators.ts
// ������ �������
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
  //���������� actionCreators
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
  //����������� actionCreators
  login:
    (username: string, password: string) => async (dispatch: AppDispatch) => {
      // ��������� ������ ������������ �������
      try {
        dispatch(AuthActionCreators.setIsLoading(true)); // �������� ��� ����� ��������
        // ��� ���� ��� �� ������� ��������� ��������
        setTimeout(async () => {
          //������� ������������
          const response = await UserService.getUsers();

          //��� ������������
          const mockUser = response.data.find(
            (user) => user.username === username && user.password === password
          );
          // �������� ������ �� ������������
          if (mockUser) {
            localStorage.setItem("auth", "true");
            localStorage.setItem("username", mockUser.username);
            //������� ���������� � ������������
            dispatch(AuthActionCreators.setUser(mockUser));
            //����� ��������� �� ��������������
            dispatch(AuthActionCreators.setIsAuth(true));
            // ������ ��������� ��������
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
    // ��������� ������ ������������ �������
    try {
      localStorage.removeItem("auth");
      localStorage.removeItem("username");
      dispatch(AuthActionCreators.setUser({} as IUser));
      dispatch(AuthActionCreators.setIsAuth(false));
    } catch (e) {
      // ����� ������� ��� ����� ��������� ������ ��������� �� �����
      dispatch(AuthActionCreators.setError("Error Logout"));
    }
  },
};
