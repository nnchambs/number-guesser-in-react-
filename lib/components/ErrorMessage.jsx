import React, { Component } from 'react';

class ErrorMessage extends React.Component {

  checkGuess() {
    let userNumber = this.props.userGuess;
    let randomNumber = this.props.randomNumber;
    if (userNumber !== null) {
      userNumber = parseInt(userNumber);
      if (randomNumber === userNumber) {
        return "Yeaaaaahhhhhh boiiiiiiii!!!!!!!";
      } else if (userNumber < 0 || userNumber > 100) {
        return "There are boundaries and limitations here. Please obey them.";
      } else if (randomNumber > userNumber) {
        return "Too low, SON!";
      } else if (randomNumber < userNumber) {
        return "Too damn high!!";
      } else if (Number.isNaN(userNumber)) {
        return "Numbers, WHAT ARE THEY?!";
      } else if (userNumber === null) {
        return '';
      }
    }
  }
  render() {

    return(
      <div>{this.checkGuess}</div>
    )
  }
}

module.exports = ErrorMessage;
