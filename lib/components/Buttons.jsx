import React, { Component } from 'react';

class Buttons extends React.Component {

  render() {


    return(
    <div>
      <button id="submitButton"  onClick={this.props.setUserGuess}> Submit</button>
      <button id='clearButton'  onClick={this.props.clearInput}>Clear</button>
      <button id="resetButton"  onClick={this.props.resetGame}>Reset</button>
    </div>
    )
  }
}

module.exports = Buttons;
