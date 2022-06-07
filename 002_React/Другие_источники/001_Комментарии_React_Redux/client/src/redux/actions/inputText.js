import { INPUT_TEXT } from "../types/types";
export const inputText = (text) => {
  return {
    type: INPUT_TEXT,
    text,
  };
};
