//store reducers auth ��������� ����
export interface AuthState {
  isAuth: boolean;
}

//������������ �����
export enum AuthActionsEnum {
  SET_AUTH = "SET_AUTH",
}

//interface ������� ��������� ���� action
export interface SetAuthAction {
  type: AuthActionsEnum.SET_AUTH; // ������������ ���� ��� action
  payload: boolean; // ��������� ������ ������� ���� action ���������
}

// ��������� interfaces
export type AuthAction = SetAuthAction; // ��������� ���������� ����� ��� |
