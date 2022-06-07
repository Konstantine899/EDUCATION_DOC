import React, { Component } from "react";
import SwapiService from "../../services/SwapiService";
import "./itemDetails.css";
import ErrorButton from "../errorButton/errorButton";

const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{field}</span>
    </li>
  );
};

export { Record };

class ItemDetails extends Component {
  swapiSerVice = new SwapiService();

  state = {
    item: null,
    image: null,
  };

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updatePerson();
    }
  }

  //Функция обновления персонажа
  updatePerson() {
    const { itemId, getData, getImageUrl } = this.props;
    // в самом начале personId может быть null делаю проверку
    if (!itemId) {
      return;
    }
    //Получаю данные
    getData(itemId).then((item) => {
      this.setState({ item, image: getImageUrl(item) });
    });
  }

  render() {
    const { item, image } = this.state;
    if (!item) {
      return <span>Select a person from a list</span>;
    }
    const { id, name, gender, birthYear, eyeColor } = item;

    return (
      <div className="person-details card">
        <img className="person-image" src={image} />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            {React.Children.map(
              this.props.children,
              (child, indexChildArray) => {
                return <li>{indexChildArray}</li>;
              }
            )}
          </ul>
          <ErrorButton />
        </div>
      </div>
    );
  }
}

export default ItemDetails;
