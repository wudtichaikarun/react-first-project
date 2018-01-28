import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form'
import Contacts from './Contacts'

class App extends Component {
  state = {
    contacts: [
      { name: 'Romantic Haha', address: '123/456' }
    ]
  }

  render() {
    return (
      <div className="container">
        <Form /> 
        <hr />
        <Contacts {...this.state} />
      </div>
    );
  }
}

export default App;
