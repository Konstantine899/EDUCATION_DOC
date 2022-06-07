//src/hoc-helpers/withDataHOC.js
import React, { Component } from "react";
import Spinner from "../spinner/spinner";
import ErrorIndicator from "../errorIndicator/errorIndicator";

const withData = (View) => {
  return class extends Component {
    state = {
      data: null,
      loading: true, //Всегда ставь по умолчанию что зарузка произошла
      error: false,
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
      //Обработка загрузки
      this.setState({
        loading: true,
        error: false,
      });
      //Получение данных
      this.props
        .getData()
        .then((data) => {
          this.setState({
            data: data,
            loading: false,
          });
        })
        .catch(() => {
          this.setState({
            loading: false,
            error: true,
          });
        });
    }
    render() {
      const { data, loading, error } = this.state;

      if (loading) {
        return <Spinner />;
      }

      if (error) {
        return <ErrorIndicator />;
      }

      return <View {...this.props} data={data} />;
    }
  };
};

export default withData;
