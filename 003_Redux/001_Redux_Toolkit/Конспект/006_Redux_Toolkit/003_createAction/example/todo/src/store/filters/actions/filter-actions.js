//src/filters/actions/filter-actions.js
import { SET_FILTER } from "../const/filter-const";

export const setFilter = (filter) => ({
  type: SET_FILTER,
  filter,
});
