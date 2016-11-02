import React, { Component } from 'react';
import ErrorMessage from './ErrorMessage';

export default class Application extends Component {
  constructor() {
    super();
    this.randomNumberGenerator = this.randomNumberGenerator.bind(this);
    this.setUserGuess = this.setUserGuess.bind(this);
    this.resetGame = this.resetGame.bind(this);
    this.state = {
      userNumber: null,
      randomNumber: this.randomNumberGenerator()
    };
  }
  componentDidMount() {
  }
  randomNumberGenerator() {
    let randomNumber = (Math.floor(Math.random() * 100) + 1);
    return randomNumber;
  }
  setUserGuess() {
    let userGuess = document.getElementById('numberInput').value;
    this.setState({ userNumber: userGuess });
  }

  resetGame() {
    let resetNumber = null;
    this.setState({ userNumber: resetNumber
    });
    this.clearInput();
    this.randomNumberGenerator();
  }

  clearInput() {
    let input = document.getElementById('numberInput');
    input.value = "";
  }

  toggleDisable() {
    let submitButton = document.getElementById('submitButton');
    let input = document.getElementById('numberInput');
    let clearButton = document.getElementById('clearButton');
    if (input.value) {
      submitButton.disabled = false;
      clearButton.disabled = false;
    } else {
      submitButton.disabled = true;
      clearButton.disabled = true;
    }


  }


  render() {

    return(
      <div>
        <input  id="numberInput" placeholder="Guess a number" min='1' max='100' onLoad={this.toggleDisable} onChange={this.toggleDisable}></input>
        <button id="submitButton" onClick={this.setUserGuess}> Submit</button>
        <div className="numberDisplay">{ this.state.userNumber }</div>
        <div id="messageDisplay"></div>
        <ErrorMessage userGuess={this.state.UserNumber} randomNumber={this.state.randomNumber} />
        <button id='clearButton' onClick={this.clearInput}>Clear</button>
        <button id="resetButton" onClick={this.resetGame}>Reset</button>
      </div>
    )
  }
}
