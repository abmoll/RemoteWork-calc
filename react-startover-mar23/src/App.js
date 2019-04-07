import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput';
import UserInput from './UserInput';

class App extends Component {

  state = {
    //persons: [
    userOutput: [
      { id: '0', name: 'Alexander', age: 49, length: 2 },
      { id: '1', name: 'David', age: 46, length: 4 },
      { id: '2', name: 'Matthew', age: 47, length: 7 },
    ],
    showPeople: false
  }

  nameChangedHandler = (event) => {
    this.setState({
      userOutput: [
        { name: 'Alex!', age: 50 },
        { name: event.target.value, age: 45 },
        { name: 'Matt!', age: 47 }
      ],
      currentName: 'Alexio'
    })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPeople;
    this.setState({ showPeople: !doesShow })
  }

  render() {

    const mystyle = {
      border: '1px solid blue',
      padding: '2px',
      backgroundColor: 'grey',
    };

    let persons = null;

    if (this.state.showPeople) {

      persons = (
        <div>
          <UserOutput name='Alex' age='45' />
          <UserOutput name={this.state.userOutput[1].name} age='47' />
          <UserOutput name={this.state.userOutput[2].name} age='48' />
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Completely Amazing Component</h1>
        <button onClick={this.togglePersonHandler}> Switch</button>

        <UserInput style={mystyle}
          changed={this.nameChangedHandler}
          currentName={this.state.userOutput[1].name} />
        {persons}
      </div>
    );
  }
}

export default App;
