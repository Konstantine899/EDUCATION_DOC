import React, { Component } from "react";
import Row from "../../row/row";
import { PlanetList } from "../../sw-components/itemLists";
import PlanetDetails from "../../sw-components/planetDetails";

class PlanetsPage extends Component {
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
        left={<PlanetList onItemSelected={this.onItemSelected} />}
        right={<PlanetDetails itemId={selectedItem} />}
      />
    );
  }
}

export default PlanetsPage;
