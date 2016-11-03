import React, { Component } from 'react';

class Buttons extends React.Component {

  render() {

    return(
      <div>
      <button id="submitButton"  onClick={this.props.setUserGuess} disabled={!this.props.input}>Submit</button>
      <button id="clearButton"onClick={this.props.clearInput} disabled={!this.props.input}>Clear</button>
      <button id="resetButton" onClick={this.props.resetGame} disabled={!this.props.input}>Reset</button>
      </div>
    )
  }
}

module.exports = Buttons;
