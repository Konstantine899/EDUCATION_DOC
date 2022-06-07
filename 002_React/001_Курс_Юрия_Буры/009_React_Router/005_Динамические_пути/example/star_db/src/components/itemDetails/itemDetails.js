import React from "react";
import SwapiService from "../../services/SwapiService";
import ErrorButton from "../errorButton/errorButton";
import "./itemDetails.css";
import withDetailsData from "../hoc-helpers/withDetailsData";

const ItemDetails = (props) => {
  const { item, image } = props;
  if (!item) {
    return <span>Select a item from a list</span>;
  }
  return (
    <div className="person-details card">
      <img className="person-image" src={image} alt="item" />
      <div className="card-body">
        <h4>{item.name}</h4>
        <ul className="list-group list-group-flush">
          {React.Children.map(props.children, (child) => {
            //Если прилетает строка а не объект, то ничего не делать
            if (typeof child === "string") {
              return;
            }
            return React.cloneElement(child, { item });
          })}
        </ul>
        <ErrorButton />
      </div>
    </div>
  );
};

const { getPerson, getPlanet, getStarship } = new SwapiService();

const Person = withDetailsData(ItemDetails)(getPerson);
const Planet = withDetailsData(ItemDetails)(getPlanet);
const Starship = withDetailsData(ItemDetails)(getStarship);
export { Person, Planet, Starship };
