import React, { Component } from 'react';
import './App.css';
import NavBar from './nav/NavBar';
import ApplicationViews from './ApplicationViews';

class App extends Component {
  render() {
    return (
      <div>
      <React.Fragment>
        <NavBar />
        <ApplicationViews />
      </React.Fragment>
      </div>
    );
  }
}

export default App;
