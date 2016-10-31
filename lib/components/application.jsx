import React, { Component } from 'react';

export default class Application extends Component {
  constructor() {
    super();
    this.setUserGuess = this.setUserGuess.bind(this);
    this.state = {
      userNumber: '',
      randomNumber: ''
    };
  }
  componentDidMount() {
    this.randomNumberGenerator();
  }
  randomNumberGenerator() {
    let randomNumber = (Math.floor(Math.random() * 100) + 1);
    this.setState({ randomNumber: randomNumber });
  }
  setUserGuess() {
    let userGuess = document.getElementById('numberInput').value;
    this.setState({ userNumber: userGuess });
  }

  checkGuess() {

  }

  clearInput() {
    let input = document.getElementById('numberInput');
    input.value = "";
  }



  render() {
    let errorMessage;
    if (this.state.userNumber !== "") {
      if (this.state.userNumber !== "" && this.state.randomNumber === this.state.userNumber) {
        errorMessage = "Yeaaaaahhhhhh boiiiiiiii!!!!!!!";
      } else if (this.state.randomNumber > this.state.userNumber) {
        errorMessage = "Too low, SON!";
      } else if (this.state.randomNumber < this.state.userNumber) {
        errorMessage = "Too damn high!!";
      } else {
        errorMessage = '';
      }
    }





    return(
      <div>
        <input id="numberInput" placeholder="Guess a number" type='number' min='1' max='100'></input>
        <button onClick={this.setUserGuess} disabled>Submit</button>
        <div className="numberDisplay">{ this.state.userNumber }</div>
        <div className="messageDisplay"></div>
        <div>{ errorMessage }</div>
        <button className='clearButton' onClick={this.clearInput} disabled>Clear</button>
      </div>
    )
  }
}
