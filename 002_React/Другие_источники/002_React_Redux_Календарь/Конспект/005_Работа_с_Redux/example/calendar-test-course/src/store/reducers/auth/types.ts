//store reducers auth типизирую поля
export interface AuthState {
  isAuth: boolean;
}

//перечисления типов
export enum AuthActionsEnum {
  SET_AUTH = "SET_AUTH",
}

//interface который описывает поля action
export interface SetAuthAction {
  type: AuthActionsEnum.SET_AUTH; // обязательное поле для action
  payload: boolean; // некоторые данные которые этот action принимает
}

// объеденяю interfaces
export type AuthAction = SetAuthAction; // остальные перечисляю через или |
