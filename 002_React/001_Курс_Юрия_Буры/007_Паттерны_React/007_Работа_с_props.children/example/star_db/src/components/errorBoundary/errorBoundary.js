import React, { Component } from "react";
import ErrorIndicator from "../errorIndicator/errorIndicator";

class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };
  // Теперь этот компонент становится ErrorBoundary
  componentDidCatch(error, errorInfo) {
    debugger;
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
