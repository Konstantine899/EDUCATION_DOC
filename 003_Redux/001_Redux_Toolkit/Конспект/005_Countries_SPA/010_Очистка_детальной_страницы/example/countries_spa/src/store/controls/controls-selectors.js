//src/store/controls-selectors.js
export const selectSearch = (state) => state.controls.search;

//Выбираю регион
export const selectRegion = (state) => state.controls.region;

//Выбираю все регионы
export const selectControls = (state) => state.controls;
