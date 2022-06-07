//src/sw-components/itemList
import React from "react";
import ItemList from "../itemList/itemList";
import withData from "../hoc-helpers/withDataHOC";
import withSwapiService from "../hoc-helpers/withSwapiService";
import withChildFunction from "../hoc-helpers/withChildFunction";
import compose from "../hoc-helpers/compose";

//Выношу render функцию
const renderName = ({ name }) => <span>{name}</span>;

// Модель коробля
const renderModelAndName = ({ model, name }) => (
  <span>
    {name} ({model})
  </span>
);

// Маппинг персонажей
const mapPersonMethodsToProps = (swapiService) => {
  return { getData: swapiService.getAllPeople };
};
// Маппинг планет
const mapPlanetMethodsToProps = (swapiService) => {
  return { getData: swapiService.getAllPlanets };
};
// Маппинг космических кораблей
const mapStarshipMethodsToProps = (swapiService) => {
  return { getData: swapiService.getAllStarships };
};

//Создаю компонент для render функции
const PersonList = compose(
  withSwapiService(mapPersonMethodsToProps),
  withData,
  withChildFunction(renderName)
)(ItemList);

const PlanetList = compose(
  withSwapiService(mapPlanetMethodsToProps),
  withData,
  withChildFunction(renderName)
)(ItemList);

const StarshipList = compose(
  withSwapiService(mapStarshipMethodsToProps),
  withData,
  withChildFunction(renderModelAndName)
)(ItemList);

export { PersonList, PlanetList, StarshipList };
