import React, { Component } from 'react';
import ErrorMessage from './ErrorMessage';
import Buttons from './Buttons'

export default class Application extends Component {
  constructor() {
    super();
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
  setUserGuess(e) {
    let userGuess = e.target.value
    this.setState({ userNumber: userGuess });
  }

  resetGame() {
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

  render() {

    return(
      <div>
        <input  id="numberInput" placeholder="Guess a number" min='1' max='100' onLoad={this.toggleDisable} onChange={(e) => this.setUserGuess(e)}></input>
        <div className="numberDisplay">{ this.state.userNumber }</div>
        <div id="messageDisplay"></div>
        <ErrorMessage userGuess={this.state.userNumber} randomNumber={this.state.randomNumber} />
        <Buttons clearInput={this.clearInput} input={this.state.userNumber} resetGame={this.resetGame} setUserGuess={this.setUserGuess} />
      </div>
    )
  }
}
