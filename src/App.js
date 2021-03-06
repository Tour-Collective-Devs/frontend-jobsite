import React, { Component } from 'react';
import './App.css';
import NavBar from './nav/NavBar';
import ApplicationViews from './ApplicationViews';
import { Provider } from './Provider';

class App extends Component {
  render() {
    return (
      <div>
      <React.Fragment>
        <Provider>
          <NavBar />
          <ApplicationViews />
        </Provider>
      </React.Fragment>
      </div>
    );
  }
}

export default App;
