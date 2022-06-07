import React, { Component } from "react";
import SwapiService from "../../services/SwapiService";
import "./personDetails.css";
import ErrorButton from "../errorButton/errorButton";

class PersonDetails extends Component {
  swapiSerVice = new SwapiService();

  state = {
    person: null,
  };

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.personId !== prevProps.personId) {
      this.updatePerson();
    }
  }

  //Функция обновления персонажа
  updatePerson() {
    const { personId } = this.props;
    // в самом начале personId может быть null делаю проверку
    if (!personId) {
      return;
    }
    //Получаю детали персонажа
    this.swapiSerVice.getPerson(personId).then((person) => {
      this.setState({ person });
    });
  }

  render() {
    if (!this.state.person) {
      return <span>Select a person from a list</span>;
    }
    const { id, name, gender, birthYear, eyeColor } = this.state.person;

    return (
      <div className="person-details card">
        <img
          className="person-image"
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
        />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{eyeColor}</span>
            </li>
          </ul>
          <ErrorButton />
        </div>
      </div>
    );
  }
}

export default PersonDetails;
