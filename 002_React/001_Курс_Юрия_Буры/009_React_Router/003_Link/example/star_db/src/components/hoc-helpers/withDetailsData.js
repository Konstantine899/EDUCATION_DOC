import React, { Component } from "react";

const withDetailsData = (View, getData) => {
  return class extends Component {
    state = {
      item: null,
      image: null,
    };

    componentDidMount() {
      this.updateDetails();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
      if (
        this.props.itemId !== prevProps.itemId ||
        this.props.getData !== prevProps.getData ||
        this.props.getImageUrl !== prevProps.getImageUrl
      ) {
        this.updateDetails();
      }
    }

    //Функция обновления
    updateDetails() {
      const { itemId, getImageUrl } = this.props;
      // в самом начале personId может быть null делаю проверку
      if (!itemId) {
        return;
      }
      //Получаю данные
      getData(itemId).then((item) => {
        this.setState({ item, image: getImageUrl(item) });
      });
    }
    render() {
      const { item, image } = this.state;

      return <View {...this.props} item={item} image={image} />;
    }
  };
};

export default withDetailsData;
