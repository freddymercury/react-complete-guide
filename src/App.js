import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id: 'afgadf', name: 'Dennis', hobby: "jiujitsu"},
      {id: 'dfjhs',name: 'Minkyung', hobby: "pilates"},
      {id: 'wgdf',name: 'David', hobby: "basketball"}
    ],
    showPersons: false
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons});
  }

  togglePersonsHandler = () => {
    this.setState({showPersons: !this.state.showPersons})
  }

   nameChangedHandler = (event, id) => {
    const index = this.state.persons.findIndex(p=>{return p.id === id});
    const person = {...this.state.persons[index]};
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[index] = person;
    this.setState({persons});
   }
  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
          <div>
            {this.state.persons.map((person, index) => {
              return (
                <Person
                  key={person.id}
                  hobby={person.hobby}
                  name={person.name}
                  changed={ (event) => this.nameChangedHandler(event, person.id) }
                  click={()=> this.deletePersonHandler(index)}
                />
              );
            })}
          </div>
      );
      style.backgroundColor = 'red';
    }

    const classes = [];
    if(this.state.persons.length <=2) {
      classes.push('red');
      
    }
    if(this.state.persons.length <=1) {
      classes.push('bold');
    }
   
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <p className={classes.join(' ')}>
            This is really working!
          </p>
          <button 
            style = {style}
            onClick={this.togglePersonsHandler.bind(this)}>
              Toggle Persons
          </button>
          {persons}
        </div>
    );
  }
}

export default App;
