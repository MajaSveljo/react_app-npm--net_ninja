import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component {
  state = {
    ninjas : [
      {name: 'Maja', age:25, belt: 'black', id:1},
      {name: 'Dragan', age:26, belt: 'green', id:2},
      {name: 'Pepsi', age:2, belt: 'brown', id:3}
    ]
  }
  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja]
    this.setState({
      ninjas: ninjas
    })
  }
  render() {
    return (
      <div className="App">
        <h1>My first React app</h1>
        <p>Welcome :D</p>
        <Ninjas ninjas={this.state.ninjas}/>
        <AddNinja addNinja={this.addNinja}/>
      </div>
    );
  }
}

export default App;
