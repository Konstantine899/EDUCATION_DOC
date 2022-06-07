import { INPUT_TEXT } from "../types/types";
const initialState = {
  text: "",
};

const inputReducer = (state = initialState, action) => {
  switch (action.type) {
    case INPUT_TEXT:
      return {
        ...state,
        text: action.text,
      };
    default:
      return state;
  }
};

export default inputReducer;
