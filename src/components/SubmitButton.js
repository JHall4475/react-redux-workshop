import React from 'react'
import { connect } from 'react-redux'
import { submitNameAndNumber } from '../redux/actions'

const SubmitButton = (props) => {
    return (
        <button onClick={() => props.submitNameAndNumber(props.payload)}>
          Submit
        </button>
      )
}


export default connect(null,{submitNameAndNumber})(SubmitButton)
