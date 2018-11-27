import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Input from './Components/Input/Input';

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <Input />
      </div>
    );
  }


}


export default App;
