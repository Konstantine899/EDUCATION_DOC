//src/store/details/details-actions.js

import { type } from "@testing-library/user-event/dist/type";

export const SET_LOADING = "@@details/SET_LOADING";
export const SET_ERROR = "@@details/SET_ERROR";
export const SET_COUNTRY = "@@details/SET_COUNTRY";

const setLoading = () => ({
  type: "SET_LOADING",
});

const serError = (error) => ({
  type: SET_ERROR,
  payload: error,
});

const setCountry = (country) => ({
  type: SET_COUNTRY,
  payload: country,
});

export const loadCountryByName =
  (name) =>
  (dispatch, _, { client, api }) => {
    dispatch(setLoading());
    client
      .get(api.searchByCountry(name))
      .then(({ data }) => {
        return dispatch(setCountry(data[0]));
      })
      .catch((error) => dispatch(serError(error)));
  };
