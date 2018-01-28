import React, { Component } from 'react'

class FormComponent extends Component {
  state = {
    name: '',
    address: ''
  }
  createContact = (e) => {
    e.preventDefault()
  
    console.log(this.addressInput.value, this.nameInput.value)
  }

 render() {
   return (
     <div>
      <h2>Address Form</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input 
          type="text" 
          className="form-control" 
          id="name"
          ref={input => this.nameInput = input} />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input 
          type="text" 
          className="form-control" 
          id="address"
          ref={input => this.addressInput = input} />
        </div>
        <button 
          type="submit" 
          className="btn btn-primary"
          onClick={this.createContact} >Create</button>
      </form>
     </div>
   )
 }
}

export default FormComponent