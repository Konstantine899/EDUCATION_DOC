import { DECREMENT } from "../types/types";

export const decrement = (dispatch) => {
  return () => dispatch({ type: DECREMENT });
};
