//src/component/app?App.js
import React, { Component } from "react";
import Header from "../header/header";
import "./App.css";
import SwapiService from "../../services/SwapiService";
import ErrorBoundary from "../errorBoundary/errorBoundary";
import Row from "../row/row";
import {
  PersonList,
  StarshipList,
  PlanetList,
} from "../sw-components/itemLists";
import {
  PersonDetails,
  StarshipDetails,
  PlanetDetails,
} from "../sw-components/details";
import { Record } from "../itemDetails/record/record";

class App extends Component {
  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true,
  };

  //Функция включения и выключения компонента рандомной планеты
  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet,
      };
    });
  };

  render() {
    const {
      getPerson,
      getPersonImage,
      getStarship,
      getStarshipImage,
      getPlanet,
      getPlanetImage,
    } = this.swapiService;
    const personDetails = (
      <PersonDetails
        itemId={11}
        getData={getPerson}
        getImageUrl={getPersonImage}
      >
        {" "}
        <Record field="gender" label="Gender" />
        <Record field="eyeColor" label="Eye Color" />
      </PersonDetails>
    );
    const starshipDetails = (
      <StarshipDetails
        itemId={5}
        getData={getStarship}
        getImageUrl={getStarshipImage}
      >
        <Record field="model" label="Model" />
        <Record field="length" label="Length" />
        <Record field="costInCredits" label="Cost" />
      </StarshipDetails>
    );
    const planetDetails = (
      <PlanetDetails
        itemId={5}
        getData={getPlanet}
        getImageUrl={getPlanetImage}
      >
        <Record field="planet" label="Planet" />
        <Record field="rotationPeriod" label="Rotation Period" />
        <Record field="diameter" label="Diameter" />
      </PlanetDetails>
    );

    const peopleList = (
      <PersonList onItemSelected={() => {}}>
        {({ name }) => <span>{name}</span>}
      </PersonList>
    );

    const startShipList = (
      <StarshipList onItemSelected={() => {}}>
        {({ name }) => <span>{name}</span>}
      </StarshipList>
    );
    const planetList = (
      <PlanetList onItemSelected={() => {}}>
        {({ name }) => <span>{name}</span>}
      </PlanetList>
    );
    return (
      <ErrorBoundary>
        <div className="stardb-app">
          <Header />
          <Row left={peopleList} right={personDetails} />
          <Row left={startShipList} right={starshipDetails} />
          <Row left={planetList} right={planetDetails} />
        </div>
      </ErrorBoundary>
    );
  }
}

export default App;
