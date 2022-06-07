//src/component/app?App.js
import React, { Component } from "react";
import Header from "../header/header";
import ItemList from "../itemList/itemList";
import PersonDetails from "../personDetails/personDetails";
import RandomPlanet from "../randomPlanet/randomPlanet";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <RandomPlanet />
        <div className="row mb2">
          <div className="col-md-6">
            <ItemList />
          </div>
          <div className="col-md-6">
            <PersonDetails />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
