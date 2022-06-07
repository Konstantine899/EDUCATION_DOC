import React from "react";
import { StarshipList } from "../../sw-components/itemLists";
import { withRouter } from "react-router-dom";

const StarshipPage = ({ match, location, history }) => {
  return (
    <StarshipList
      onItemSelected={(itemId) => {
        history.push(`/starships/${itemId}`);
      }}
    />
  );
};

export default withRouter(StarshipPage);
