import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Today from './components/Today/Today';
import History from './components/History/History';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Navigation/> */}
        <Today/>
        <History/>
      </div>
    );
  }
}

export default App;
