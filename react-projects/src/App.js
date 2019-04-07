import React, { Component } from 'react';
import './App.css';
import './UserInput';
import './UserOutput';

class App extends Component {

  state = {}

  render() {

    return (
      <div className='App' >
      <UserOutput/>
      <UserOutput/>
      </div>
        
    );
  }
}

export default App;
