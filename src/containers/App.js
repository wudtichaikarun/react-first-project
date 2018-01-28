import React, { Component } from 'react';
import Form from '../components/Form'
import Contacts from '../components/Contacts'

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
        <Form onSubmit={this.createContact}/> 
        <hr />
        <Contacts {...this.state} />
      </div>
    );
  }
}

export default App;
