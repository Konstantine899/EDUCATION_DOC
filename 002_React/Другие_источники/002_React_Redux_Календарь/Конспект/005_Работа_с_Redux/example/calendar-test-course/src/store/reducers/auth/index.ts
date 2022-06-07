//store reducers auth index.ts
import { AuthAction, AuthActionsEnum, AuthState } from "./types";

const initialState: AuthState = {
  isAuth: true,
};

export default function authReducer(
  state = initialState,
  action: AuthAction
): AuthState {
  switch (action.type) {
    case AuthActionsEnum.SET_AUTH:
      return { ...state, isAuth: action.payload };
    default:
      return state;
  }
}
