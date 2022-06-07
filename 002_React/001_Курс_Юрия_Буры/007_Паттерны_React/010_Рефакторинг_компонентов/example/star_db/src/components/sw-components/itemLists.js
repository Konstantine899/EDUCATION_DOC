//src/sw-components/itemList
import React from "react";
import ItemList from "../itemList/itemList";
import { withData } from "../hoc-helpers";
import SwapiService from "../../services/SwapiService";

// инициализирую класс
const swapiService = new SwapiService();

// Деструктурирую нужные мне функции
const { getAllPeople, getAllPlanets, getAllStarShips } = swapiService;

const PersonList = withData(ItemList, getAllPeople);

const PlanetList = withData(ItemList, getAllPlanets);

const StarshipList = withData(ItemList, getAllStarShips);

export { PersonList, PlanetList, StarshipList };
