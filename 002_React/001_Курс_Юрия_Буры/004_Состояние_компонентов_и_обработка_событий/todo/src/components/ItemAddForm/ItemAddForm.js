import React, { Component } from "react";
import "./ItemAddForm.css";

export default class ItemAddForm extends Component {
  state = {
    label: "",
  };

  //Обработка события ввода input, меняю state
  onLabelChange = (event) => {
    this.setState({
      label: event.target.value.toUpperCase(),
    });
  };

  //Обработка отправки формы
  submit = (event) => {
    event.preventDefault(); // отмена перезагрузки страницы
    this.props.onItemAdded(this.state.label);
    this.setState({
      label: "",
    });
  };

  render() {
    return (
      <>
        <form className="item-add-form d-flex" onSubmit={this.submit}>
          <input
            type="text"
            className="form-control"
            onChange={this.onLabelChange}
            placeholder="Whats need to be done"
            value={this.state.label} // делаю компонент контролируемым
          />
          <button className="btn btn-online-secondary">Add Item</button>
        </form>
      </>
    );
  }
}
