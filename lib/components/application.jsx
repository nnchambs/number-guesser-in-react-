import React, { Component } from 'react';
import ErrorMessage from './ErrorMessage';
import Buttons from './Buttons'

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
    this.toggleDisable();
  }
  randomNumberGenerator() {
    let randomNumber = (Math.floor(Math.random() * 100) + 1);
    return randomNumber;
  }
  setUserGuess(e) {
    let userGuess = document.getElementById('numberInput').value;
    this.setState({ userNumber: userGuess });
  }

  resetGame() {
    debugger;
    let resetNumber = null;
    this.setState({ userNumber: resetNumber, randomNumber: this.randomNumberGenerator()
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
        <input  id="numberInput" placeholder="Guess a number" min='1' max='100' onLoad={this.toggleDisable} onKeyUp={this.toggleDisable}></input>
        <div className="numberDisplay">{ this.state.userNumber }</div>
        <div id="messageDisplay"></div>
        <ErrorMessage userGuess={this.state.userNumber} randomNumber={this.state.randomNumber} />
        <Buttons clearInput={this.clearInput} resetGame={this.resetGame} setUserGuess={this.setUserGuess} />
      </div>
    )
  }
}
