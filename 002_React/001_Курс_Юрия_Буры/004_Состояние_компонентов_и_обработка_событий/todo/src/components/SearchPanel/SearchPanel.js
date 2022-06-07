// src/components/SearchPanel.js
import React, { Component } from "react";
import "./SearchPanel.css";

export default class SearchPanel extends Component {
  state = {
    term: "",
  };

  onSearch = (event) => {
    const term = event.target.value;
    this.setState({
      term: term,
    });
    //вызываю eventListener который передает App
    this.props.onSearch(term);
  };

  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="type to search"
        value={this.state.term}
        onChange={this.onSearch}
      />
    );
  }
}
