import React, { Component } from 'react';

export default class Application extends Component {
  constructor() {
    super();
    this.state = {
      userNumber: '',
      randomNumber: ''
    }

  }

  componentDidMount() {
    this.randomNumberGenerator();
  }

  inputnumber(userNumber) {
    this.setSate({ userNumber: { userNumber } });

  }

  randomNumberGenerator() {
    let randomNumber = (Math.floor(Math.random() * 100) + 1);
    this.setState({ randomNumber: randomNumber })

  }


  render() {

    return(
      <div>
        <div></div>
        <input id="numberInput" placeholder="Guess a number" onChange={(e)=> this.setState({ userNumber: e.target.value })}></input>
        <button>Submit</button>
        <div className="numberDisplay">{ this.state.userNumber }</div>
        <div className="messageDisplay"></div>
      </div>
    )
  }
}
