import React, { Component } from 'react'

const Contacts = ({ contacts }) => (
  <ul>
    {
      contacts.map(
        (contact, index) => 
        <li key={index}>{contact.name} - {contact.address}</li>
      )
    }
  </ul>
)

export default Contacts