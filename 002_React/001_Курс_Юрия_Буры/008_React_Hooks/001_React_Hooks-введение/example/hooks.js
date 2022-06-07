import React, { Component } from "react";

class Switcher extends Component {
  state = {
    color: "white",
  };

  setDark = () => {
    this.setState({ color: "black" });
  };
  setLight = () => {
    this.setState({ color: "white" });
  };

  render() {
    const { color } = this.state;
    return (
      <>
        <div style={{ padding: "10px", backgroundColor: color }}>
          <button onClick={this.setDark}>Dark</button>
          <button onClick={this.setLight}>Light</button>
        </div>
      </>
    );
  }
}

export default Switcher;
