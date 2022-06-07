//src/hoc-helpers/withDataHOC.js
import React, { Component } from "react";
import Spinner from "../spinner/spinner";

const withData = (View) => {
  return class extends Component {
    state = {
      data: null,
    };

    //инициализирую компонент
    componentDidMount() {
      this.update();
    }
    //Обновляю компонент
    componentDidUpdate(prevProps, prevState, snapshot) {
      //Проверяю прилетевший props с prevProps
      if (this.props.getData !== prevProps.getData) {
        this.update();
      }
    }

    //Функция обновления компонента
    update() {
      this.props.getData().then((data) => {
        this.setState({
          data: data,
        });
      });
    }
    render() {
      const { data } = this.state;

      if (!data) {
        return <Spinner />;
      }
      return <View {...this.props} data={data} />;
    }
  };
};

export default withData;
