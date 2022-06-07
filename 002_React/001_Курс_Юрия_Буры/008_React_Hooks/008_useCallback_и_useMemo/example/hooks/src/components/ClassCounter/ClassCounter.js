import React, { Component } from "react";

class ClassCounter extends Component {
  componentDidMount() {
    console.log(`class: mount`);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(`class: update`);
  }

  componentWillUnmount() {
    console.log(`class: unmount`);
  }

  component;

  render() {
    return <p>{this.props.value}</p>;
  }
}

export default ClassCounter;
