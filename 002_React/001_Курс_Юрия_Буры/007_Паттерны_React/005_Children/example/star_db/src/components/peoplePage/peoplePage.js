import React, { Component } from "react";
import ItemList from "../itemList/itemList";
import PersonDetails from "../personDetails/personDetails";
import "./peoplePage.css";
import SwapiService from "../../services/SwapiService";
import Row from "../row/row";
import ErrorBoundary from "../errorBoundary/errorBoundary";

export default class PeoplePage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedPerson: 3,
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
        <PersonDetails personId={this.state.selectedPerson} />
      </ErrorBoundary>
    );

    return (
      <>
        <Row left={itemList} right={personDetails} />
      </>
    );
  }
}
