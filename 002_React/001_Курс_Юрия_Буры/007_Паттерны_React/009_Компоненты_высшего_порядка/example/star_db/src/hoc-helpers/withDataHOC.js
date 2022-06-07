//src/hoc-helpers/withDataHOC.js
import React, { Component } from "react";
import Spinner from "../components/spinner/spinner";
import ErrorIndicator from "../components/errorIndicator/errorIndicator";

const withData = (View, getData) => {
  return class extends Component {
    state = {
      data: null,
    };

    componentDidMount() {
      getData().then((data) => {
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
