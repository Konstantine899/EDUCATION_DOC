import React from "react";
import { PersonList } from "../../sw-components/itemLists";
import { withRouter } from "react-router-dom";
import PersonDetails from "../../sw-components/personDetails";
import Row from "../../row/row";

const PeoplePage = ({ history, match }) => {
  const { id } = match.params;
  return (
    <Row
      left={<PersonList onItemSelected={(id) => history.push(`${id}`)} />}
      right={<PersonDetails itemId={id} />}
    />
  );
};

export default withRouter(PeoplePage);
