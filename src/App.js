import React, { Component } from 'react';
import Ninjas from './Ninjas'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My first React app</h1>
        <p>Welcome :D</p>
        <Ninjas name="Dragan" age="26" belt="green"/>
        <Ninjas name="Maja" age="25" belt="black"/>
      </div>
    );
  }
}

export default App;
