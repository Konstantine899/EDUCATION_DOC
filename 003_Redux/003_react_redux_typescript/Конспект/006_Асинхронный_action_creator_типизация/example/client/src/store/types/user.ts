//src/store/types/user.ts
//Типизирую состояние
export interface UserState {
  users: any[];
  loading: boolean;
  error: null | string;
}

// Перечисления типов экшенов
export enum UsersActionTypes {
  FETCH_USERS = "FETCH_USERS",
  FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
  FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
}

//Типизирую action FETCH_USERS
interface FetchUsersAction {
  type: UsersActionTypes.FETCH_USERS;
}

//Типизирую action FETCH_USERS_SUCCESS
interface FetchUsersSuccessAction {
  type: UsersActionTypes.FETCH_USERS_SUCCESS;
  payload: any[];
}

//Типизирую action FETCH_USERS
interface FetchUsersErrorAction {
  type: UsersActionTypes.FETCH_USERS_ERROR;
  payload: string;
}

//Объеденяю экшены
export type UserAction =
  | FetchUsersAction
  | FetchUsersSuccessAction
  | FetchUsersErrorAction;
