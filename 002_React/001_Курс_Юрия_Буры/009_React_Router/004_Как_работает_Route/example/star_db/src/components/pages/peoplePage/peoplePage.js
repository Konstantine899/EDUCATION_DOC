import React, { Component } from "react";
import Row from "../../row/row";
import { PersonList } from "../../sw-components/itemLists";
import PersonDetails from "../../sw-components/personDetails";

class PeoplePage extends Component {
  state = { selectedItem: null };

  onItemSelected = (selectedItem) => {
    this.setState({
      selectedItem,
    });
  };
  render() {
    const { selectedItem } = this.state;
    return (
      <Row
        left={<PersonList onItemSelected={this.onItemSelected} />}
        right={<PersonDetails itemId={selectedItem} />}
      />
    );
  }
}

export default PeoplePage;
