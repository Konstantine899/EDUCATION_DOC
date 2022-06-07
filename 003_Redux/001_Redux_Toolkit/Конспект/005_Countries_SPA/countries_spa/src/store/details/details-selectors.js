//src/store/details/details-selectors.js

//Выбор текущей страны
export const selectCurrentCountry = (state) => state.details.currentCountry;

//Выбор всей детальной информации
export const selectDetails = (state) => state.details;

// Получаю соседей
export const selectNeighbors = (state) => state.details.neighbors;
