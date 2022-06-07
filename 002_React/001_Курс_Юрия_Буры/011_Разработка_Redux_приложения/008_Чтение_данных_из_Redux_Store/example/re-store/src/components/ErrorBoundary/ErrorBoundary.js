import React, { Component } from "react";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";

class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };
  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError === true) {
      return <ErrorIndicator />;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
