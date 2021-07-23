import { Component } from 'react';

class OmgEverythingWentWrong extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorInfo: '' };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, errorInfo: error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <main>
          <h1>OMG! Something went wrong.</h1>
          <p>Here is what we know:</p>
          <p>{this.state.errorInfo.message}</p>
        </main>
      );
    }

    return this.props.children;
  }
}

export default OmgEverythingWentWrong;
