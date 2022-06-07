import React, { Component } from "react";
import ItemList from "../itemList/itemList";
import PersonDetails from "../personDetails/personDetails";
import "./peoplePage.css";
import ErrorIndicator from "../errorIndicator/errorIndicator";
import SwapiService from "../../services/SwapiService";
import Row from "../row/row";

class PeoplePage extends Component {
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
  // Теперь этот компонент становится ErrorBoundary
  componentDidCatch(error, errorInfo) {
    debugger;
    this.setState({ hasError: true });
  }

  render() {
    //Если ошибка есть рендерю компонент ErrorIndicator
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}
        renderItem={({ name, gender, birthYear }) =>
          `${name} (${gender}, ${birthYear})`
        }
      />
    );

    const personDetails = (
      <PersonDetails personId={this.state.selectedPerson} />
    );

    return (
      <>
        <Row left={itemList} right={personDetails} />
        <Row left="Foo" right="Bar" />
      </>
    );
  }
}

export default PeoplePage;
