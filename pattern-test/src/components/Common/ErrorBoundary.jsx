import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(err) {
    return {
      hasError: true,
      error: err,
    };
  }

  componentDidCatch(err, errInfo) {
    console.log(`err::${err}`);
    console.log(`errInfo::${errInfo}`);
  }

  render() {
    const { hasError } = this.state;
    if (hasError) {
      return <div>Global Error...</div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
