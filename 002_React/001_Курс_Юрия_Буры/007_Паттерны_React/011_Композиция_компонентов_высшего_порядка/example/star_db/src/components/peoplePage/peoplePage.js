import React, { Component } from "react";
import ItemList from "../itemList/itemList";
import ItemDetails from "../itemDetails/itemDetails";
import "./peoplePage.css";
import SwapiService from "../../services/SwapiService";
import Row from "../row/row";
import ErrorBoundary from "../errorBoundary/errorBoundary";

export default class PeoplePage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedPerson: 11,
  };
  //Функция выбора персонажа
  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id,
      hasError: false,
    });
  };

  render() {
    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}
      >
        {(item) => `${item.name} (${item.birthYear})`}
      </ItemList>
    );

    const personDetails = (
      <ErrorBoundary>
        <ItemDetails itemId={this.state.selectedPerson} />
      </ErrorBoundary>
    );

    return (
      <>
        <Row left={itemList} right={personDetails} />
      </>
    );
  }
}
