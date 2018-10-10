import React, { Component } from 'react'
import SubmitButton from './SubmitButton'

export default class Form extends Component {
  state = {
      nameInput: "",
      luckyNumber: ""
  }

  onChangeName = (e) => {
      this.setState({nameInput: e.target.value})
  }

  onChangeNumber = (e) => {
      this.setState({luckyNumber: e.target.value})
  }

  render() {
    return (
      <div>
        <h2>Name</h2>
        <input value={this.state.nameInput} onChange={this.onChangeName}/>
        <h2>Lucky Number</h2>
        <input value={this.state.luckyNumber} onChange={this.onChangeNumber}/>
        <br />
        <SubmitButton payload={this.state}/>
      </div>
    )
  }
}
