//reducers action-creators.ts все action-creators
import { AuthActionCreators } from "./auth/action-creators";
import { EventActionCreators } from "./event/action-creator";

export const allActionCreators = {
  ...AuthActionCreators,
  ...EventActionCreators,
};
