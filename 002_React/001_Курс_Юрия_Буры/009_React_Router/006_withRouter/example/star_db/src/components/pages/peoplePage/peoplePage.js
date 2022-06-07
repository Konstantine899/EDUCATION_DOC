import React from "react";
import { PersonList } from "../../sw-components/itemLists";
import { withRouter } from "react-router-dom";

const PeoplePage = ({ history }) => {
  return (
    <PersonList
      onItemSelected={(itemId) => {
        history.push(`/people/${itemId}`);
      }}
    />
  );
};

export default withRouter(PeoplePage);
