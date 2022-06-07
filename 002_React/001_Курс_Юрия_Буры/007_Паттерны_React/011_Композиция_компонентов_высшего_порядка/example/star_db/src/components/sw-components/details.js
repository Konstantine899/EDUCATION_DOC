//src/sw-components/details
import React from "react";
import ItemDetails from "../itemDetails/itemDetails";
import SwapiService from "../../services/SwapiService";
import { DetailsData } from "../hoc-helpers/detailsData";

const swapiService = new SwapiService();

const { getPerson, getPlanet, getStarship } = swapiService;

const PersonDetails = DetailsData(ItemDetails, getPerson);

const PlanetDetails = DetailsData(ItemDetails, getPlanet);

const StarshipDetails = DetailsData(ItemDetails, getStarship);

export { PersonDetails, PlanetDetails, StarshipDetails };
