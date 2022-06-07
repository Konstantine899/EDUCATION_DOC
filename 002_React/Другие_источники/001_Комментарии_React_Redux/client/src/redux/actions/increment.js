import { INCREMENT } from "../types/types";

export const increment = (dispatch) => {
  return () => dispatch({ type: INCREMENT });
};
