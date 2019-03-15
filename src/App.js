import React, { Component } from 'react';

import Insert from './container/Insert/Insert';

class App extends Component {

  style={
    backgroundColor: '#b4e9e2'
  }

  render() {
    return (
      <div className="container-fluid min-vh-100" style={this.style}>
          <Insert />
      </div>
    );
  }
}

export default App;
