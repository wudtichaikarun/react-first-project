import React, { Component } from 'react'

class FormComponent extends Component {
  state = {
    name: '',
    address: ''
  }
  handleSubmit = (e) => {
    e.preventDefault()
    
    const { name, address } = this.state
    // onSubmit set from App.js
    this.props.onSubmit({
      name,
      address
    })

    this.clearForm()
  }

  changeState = state => e => (
    this.setState({ [state]: e.target.value })
  )

  clearForm = () => {
    this.setState({ name: '', address: '' })
  }

 render() {
   const { name, address } = this.state
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
          value={name} 
          onChange={this.changeState('name')}/>
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input 
          type="text" 
          className="form-control" 
          id="address"
          value={address} 
          onChange={this.changeState('address')}/>
        </div>
        <button 
          type="submit" 
          className="btn btn-primary"
          onClick={this.handleSubmit} >Create</button>
      </form>
     </div>
   )
 }
}

export default FormComponent