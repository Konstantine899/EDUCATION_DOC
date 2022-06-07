import { COMMENT_CREATE, COMMENT_UPDATE } from "../types/types";

const initialState = {
  comments: [],
};

const commentsReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case COMMENT_CREATE:
      return { ...state, comments: [...state.comments, action.data] };
    case COMMENT_UPDATE:
      //получаю id обновленного комментария
      const { data } = action;
      //получаю массив comments из глобального state
      const { comments } = state;
      // Нахожу нужный index в массиве
      const itemIndex = comments.findIndex((item) => item.id === data.id);

      //Создаю новый массив с измененным элементом
      const nextComments = [
        ...comments.slice(0, itemIndex),
        data,
        ...comments.slice(itemIndex + 1),
      ];
      return { ...state, comments: nextComments };
    default:
      return state;
  }
};

export default commentsReducer;
