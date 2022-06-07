import React from "react";
import SwapiService from "../../services/SwapiService";
import ErrorButton from "../errorButton/errorButton";
import "./itemDetails.css";
import withDetailsData from "../hoc-helpers/withDetailsData";
import Spinner from "../spinner/spinner";

const ItemDetails = (props) => {
  const { item, image } = props;

  if (!item) {
    return <Spinner />;
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

const { getPerson } = new SwapiService();
export default withDetailsData(ItemDetails, getPerson);
// export default ItemDetails;
