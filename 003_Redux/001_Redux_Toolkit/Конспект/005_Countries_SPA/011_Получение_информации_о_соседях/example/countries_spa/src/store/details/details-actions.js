//src/store/details/details-actions.js

import { filterByCode } from "../../config";

export const SET_LOADING = "@@details/SET_LOADING";
export const SET_ERROR = "@@details/SET_ERROR";
export const SET_COUNTRY = "@@details/SET_COUNTRY";
export const CLEAR_DETAILS = "@@details/CLEAR_DETAILS";
export const SET_NEIGHBORS = "@@details/SET_NEIGHBORS"; // константа соседей

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

//Получение соседей
const setNeighbors = (countries) => ({
  type: SET_NEIGHBORS,
  payload: countries,
});

//Сброс подробной информации о стране
export const clearDetails = () => ({
  type: CLEAR_DETAILS,
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

//Загрузка соседей
export const loadNeighborsByBorder =
  (borders) =>
  (dispatch, _, { client, api }) => {
    client
      .get(api.filterByCode(borders))
      .then(({ data }) =>
        dispatch(setNeighbors(data.map((country) => country.name))).catch(
          (error) => console.error(error)
        )
      );
  };
