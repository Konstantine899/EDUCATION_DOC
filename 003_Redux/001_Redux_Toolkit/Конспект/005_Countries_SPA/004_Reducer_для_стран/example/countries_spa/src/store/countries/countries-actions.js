//src/store/countries-actions.js
import { ALL_COUNTRIES } from "../../config";

export const SET_COUNTRIES = "@@country/SET_COUNTRIES";
export const SET_LOADING = "@@country/SET_LOADING";
export const SET_ERROR = "@@country/SET_ERROR";

//Получения списка стран
const setCountries = (countries) => ({
  type: SET_COUNTRIES,
  payload: countries,
});

const setLoading = () => ({
  type: SET_LOADING,
});

const setError = (error) => ({
  type: SET_ERROR,
  payload: error,
});

//Thunk action обрабатывается UI а не reducer
export const loadCountries =
  () =>
  (dispatch, _, { client, api }) => {
    dispatch(setLoading());
    client
      .get(api.ALL_COUNTRIES)
      .then(({ data }) => dispatch(setCountries(data)))
      .catch((error) => dispatch(setError(error)));
  };
