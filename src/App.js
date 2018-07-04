import React, { Component } from 'react';

import './App.css';
import Navigation from './components/Navigation/Navigation';
import Today from './components/Today/Today';
import History from './components/History/History';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation/>
        <section className="results--section">
          <div className="container">
              <h1>PusherCoins is a realtime price information about<br></br> BTC, ETH and LTC.</h1>
          </div>
          <div className="results--section__inner">
              <Today />
              <History />
          </div>
          </section>
      </div>
    );
  }
}

export default App;
