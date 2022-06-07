//src/store/theme-actions.js
export const SET_THEME = "@@theme/SET_THEME";

export const setTheme = (theme) => ({
  type: SET_THEME,
  payload: theme,
});
