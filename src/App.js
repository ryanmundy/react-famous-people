import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state =
      {
        famousPerson: {
          name: '',
          role: ''
        }
      }
  }

  render() {
    return (
      <div>
      <h1 className="Header">React-Famous-People</h1>
      <input type="text" placeholder="name" onChange={this.handleNameChange}/>
      <input type="text" placeholder="role" onChange={this.handleRoleChange} />
        <p>{this.state.famousPerson.name} is famous for "{this.state.famousPerson.role}"</p>
      </div>
    );
  }

handleNameChange=(event)=>{
  this.setState(
    {
      famousPerson: {
        ...this.state.famousPerson,
        name: event.target.value
      }
    }
  )
}

  handleRoleChange = (event) => {
    this.setState(
      {
        famousPerson: {
          ...this.state.famousPerson,
          role: event.target.value
        }
      }
    )
  }


}


export default App;
