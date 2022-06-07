//reducers action-creators.ts ��� action-creators
import { AuthActionCreators } from "./auth/action-creators";
import { EventActionCreators } from "./event/action-creator";

export const allActionCreators = {
  ...AuthActionCreators,
  ...EventActionCreators,
};
