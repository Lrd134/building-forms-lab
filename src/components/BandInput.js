// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  handleInput = event => {
    
  }
  render() {
    return(
      <form onSubmit={this.handleInput}>
        <input> </input>
      </form>
    )
  }
}

export default BandInput
