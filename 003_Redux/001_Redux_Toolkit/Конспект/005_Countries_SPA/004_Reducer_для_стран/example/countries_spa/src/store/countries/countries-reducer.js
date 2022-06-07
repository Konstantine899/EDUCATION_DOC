//src/store/countries-reducer.js

import { SET_COUNTRIES, SET_ERROR, SET_LOADING } from "./countries-actions";

const initialState = {
  status: "idle", //loading | received | reject
  list: [],
  error: null,
};

export const countriesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOADING:
      return { ...state, status: "loading", error: null };
    case SET_COUNTRIES:
      return { ...state, status: "received", list: [...state.list, payload] };
    case SET_ERROR:
      return { ...state, status: "reject", list: [], error: payload };
    default:
      return state;
  }
};
