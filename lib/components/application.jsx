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
    let errorMessage;
    let userNumber = parseInt(this.state.userNumber);
    if (userNumber !== "") {
      if (userNumber !== "" && this.state.randomNumber === userNumber) {
        errorMessage = "Yeaaaaahhhhhh boiiiiiiii!!!!!!!";
      } else if (this.state.randomNumber > userNumber) {
        errorMessage = "Too low, SON!";
      } else if (this.state.randomNumber < userNumber) {
        errorMessage = "Too damn high!!";
      } else if (Number.isNaN(userNumber)) {
        errorMessage = "Numbers, WHAT ARE THEY?!";
      }
      else {
        errorMessage = '';
      }
    }




    return(
      <div>
        <input  id="numberInput" placeholder="Guess a number" min='1' max='100' onLoad={this.toggleDisable} onChange={this.toggleDisable}></input>
        <button id="submitButton" onClick={this.setUserGuess}> Submit</button>
        <div className="numberDisplay">{ this.state.userNumber }</div>
        <div id="messageDisplay"></div>
        <div>{ errorMessage }</div>
        <button id='clearButton' onClick={this.clearInput}>Clear</button>
      </div>
    )
  }
}
