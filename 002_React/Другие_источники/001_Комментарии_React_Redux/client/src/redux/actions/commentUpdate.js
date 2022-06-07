import { COMMENT_UPDATE } from "../types/types";

export const commentUpdate = (text, id) => {
  return {
    type: COMMENT_UPDATE,
    data: { text, id },
  };
};
