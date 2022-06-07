//src/sw-components/itemList
import React from "react";
import ItemList from "../itemList/itemList";
import { withData } from "../hoc-helpers";
import SwapiService from "../../services/SwapiService";

// инициализирую класс
const swapiService = new SwapiService();

// Деструктурирую нужные мне функции
const { getAllPeople, getAllPlanets, getAllStarShips } = swapiService;

// Создаю функцию HOC, render функцию
const withChildFunction = (Wrapped, fn) => {
  return (props) => {
    return <Wrapped {...props}>{fn}</Wrapped>;
  };
};

//Выношу render функцию
const renderName = ({ name }) => <span>{name}</span>;

// Модель коробля
const renderModelAndName = ({ model, name }) => (
  <span>
    {name} ({model})
  </span>
);
//Создаю компонент для render функции
const PersonList = withData(
  withChildFunction(ItemList, renderName),
  getAllPeople
);

const PlanetList = withData(
  withChildFunction(ItemList, renderName),
  getAllPlanets
);

const StarshipList = withData(
  withChildFunction(ItemList, renderModelAndName),
  getAllStarShips
);

export { PersonList, PlanetList, StarshipList };
