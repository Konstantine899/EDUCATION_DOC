import React, { Component } from "react";
import { StarshipList } from "../../sw-components/itemLists";
import StarshipDetails from "../../sw-components/starshipDetails";
import Row from "../../row/row";

class StarshipPage extends Component {
  state = { selectedItem: null };

  onItemSelected = (selectedItem) => {
    this.setState({ selectedItem });
  };
  render() {
    const { selectedItem } = this.state;
    return (
      <Row
        left={<StarshipList onItemSelected={this.onItemSelected} />}
        right={<StarshipDetails itemId={selectedItem} />}
      />
    );
  }
}

export default StarshipPage;
