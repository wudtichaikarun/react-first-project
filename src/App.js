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

  createContact = (contact) => {
    this.setState({
      contacts: [...this.state.contacts, contact]
    })
  }

  render() {
    return (
      <div className="container">
        <Form createContact={this.createContact}/> 
        <hr />
        <Contacts {...this.state} />
      </div>
    );
  }
}

export default App;
