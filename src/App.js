import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Casey", age: 33 },
      { name: "Stephen", age: 29 }
    ]
  };

  switchNameHandler = () => {
    // this.setState because this refers to the class that we're in, and setState
    // is a special function to change the state.
    this.setState({
      persons: [
        { name: "Maximillian", age: 28 },
        { name: "Casey", age: 33 },
        { name: "Stephen", age: 30 }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        {/* this.the function name but not calling it */}
        <button onClick={this.switchNameHandler}>Switch Name</button>

        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
