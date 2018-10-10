import React, { Component } from 'react'
import {connect} from 'react-redux'

class Page extends Component {
  render() {
    return (
      <div style={{borderTop: "1px solid black"}}>
        <h2>Name: {this.props.name}</h2>
        <h2>Luck Number: {this.props.number}</h2>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
      name: state.name,
      number: state.luckyNumber
    }
}

export default connect(mapStateToProps)(Page)
