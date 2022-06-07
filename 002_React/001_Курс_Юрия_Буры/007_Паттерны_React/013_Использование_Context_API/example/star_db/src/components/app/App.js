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
import { SwapiServiceProvider } from "../swapiServiceContext/swapiServiceContext";

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
    return (
      <ErrorBoundary>
        <SwapiServiceProvider value={this.swapiService}>
          <div className="stardb-app">
            <Header />
            <Row left={<PersonList />} right={PersonDetails} />
            <Row left={<StarshipList />} right={StarshipDetails} />
            <Row left={<PlanetList />} right={PlanetDetails} />
          </div>
        </SwapiServiceProvider>
      </ErrorBoundary>
    );
  }
}

export default App;
