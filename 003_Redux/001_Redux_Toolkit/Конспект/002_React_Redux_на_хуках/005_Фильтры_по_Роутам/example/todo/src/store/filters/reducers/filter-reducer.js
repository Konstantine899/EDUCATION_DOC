//src/filters/reducers/filter-reducer.js
import { SET_FILTER } from "../const/filter-const";

export const filters = (state = "all", action) => {
  switch (action.type) {
    case SET_FILTER: {
      return action.filter;
    }
    default: {
      return state;
    }
  }
};
