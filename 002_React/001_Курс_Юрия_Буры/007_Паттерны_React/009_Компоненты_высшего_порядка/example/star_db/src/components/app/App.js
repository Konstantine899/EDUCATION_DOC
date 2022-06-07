//src/component/app?App.js
import React, { Component } from "react";
import Header from "../header/header";
import RandomPlanet from "../randomPlanet/randomPlanet";
import "./App.css";
import SwapiService from "../../services/SwapiService";
import ErrorBoundary from "../errorBoundary/errorBoundary";
import Row from "../row/row";
import ItemDetails, { Record } from "../itemDetails/itemDetails";
import ItemList from "../itemList/itemList";

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
    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

    const {
      getPerson,
      getStarship,
      getPersonImage,
      getStarshipImage,
      getAllPeople,
      getAllStarShips,
    } = this.swapiService;

    const personDetails = (
      <ItemDetails itemId={11} getData={getPerson} getImageUrl={getPersonImage}>
        {" "}
        <Record field="gender" label="Gender" />
        <Record field="eyeColor" label="Eye Color" />
      </ItemDetails>
    );
    const starshipDetails = (
      <ItemDetails
        itemId={5}
        getData={getStarship}
        getImageUrl={getStarshipImage}
      >
        <Record field="model" label="Model" />
        <Record field="length" label="Length" />
        <Record field="costInCredits" label="Cost" />
      </ItemDetails>
    );
    const peopleList = (
      <ItemList getData={getAllPeople} onItemSelected={() => {}}>
        {({ name }) => <span>{name}</span>}
      </ItemList>
    );

    const startShipList = (
      <ItemList getData={getAllStarShips} onItemSelected={() => {}}>
        {({ name }) => <span>{name}</span>}
      </ItemList>
    );
    return (
      <ErrorBoundary>
        <div className="stardb-app">
          <Header />
          <Row left={peopleList} right={personDetails} />
          <Row left={startShipList} right={starshipDetails} />
        </div>
      </ErrorBoundary>
    );
  }
}

export default App;
