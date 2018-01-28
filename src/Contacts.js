import React, { Component } from 'react'

const ContactsComponent = ({ contacts }) => (
  <ul>
    {
      contacts.map(
        (contact, index) => 
        <li key={index}>{contact.name} - {contact.address}</li>
      )
    }
  </ul>
)

export default ContactsComponent