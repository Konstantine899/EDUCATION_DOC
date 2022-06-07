import { COMMENT_CREATE } from "../types/types";

export const commentCreate = (text, id) => {
  return {
    type: COMMENT_CREATE,
    data: { text, id },
  };
};
