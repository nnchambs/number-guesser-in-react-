import React, { Component } from 'react';

class ErrorMessage extends React.Component {


render() {
    let errorMessage;
    let userNumber = this.props.userGuess;
    let randomNumber = this.props.randomNumber;
    if (userNumber) {
      userNumber = parseInt(userNumber);
      if (randomNumber === userNumber) {
        errorMessage = "Yeaaaaahhhhhh boiiiiiiii!!!!!!!";
      } else if (userNumber < 0 || userNumber > 100) {
        errorMessage =  "There are boundaries and limitations here. Please obey them."
      } else if (randomNumber > userNumber) {
        errorMessage = "Too low, SON!";
      } else if (randomNumber < userNumber) {
        errorMessage =  "Too damn high!!";
      } else if (Number.isNaN(userNumber)) {
        errorMessage =  "Numbers, WHAT ARE THEY?!";
      } else if (userNumber === null) {
        errorMessage =  '';
      }
    }

    return(
      <div>{errorMessage}</div>
    )
  }
}

module.exports = ErrorMessage;
