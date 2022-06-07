import React, { Component } from "react";
import ItemList from "../itemList/itemList";
import PersonDetails from "../personDetails/personDetails";
import "./peoplePage.css";
import ErrorIndicator from "../errorIndicator/errorIndicator";

class PeoplePage extends Component {
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
    return (
      <div className="row mb2">
        <div className="col-md-6">
          <ItemList onItemSelected={this.onPersonSelected} />
        </div>
        <div className="col-md-6">
          <PersonDetails personId={this.state.selectedPerson} />
        </div>
      </div>
    );
  }
}

export default PeoplePage;
