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


  render() {

    return(
      <div>
        <div></div>
        <input id="numberInput" placeholder="Guess a number"></input>
        <button onClick={this.setUserGuess}>Submit</button>
        <div className="numberDisplay">{ this.state.userNumber }</div>
        <div className="messageDisplay"></div>
      </div>
    )
  }
}
