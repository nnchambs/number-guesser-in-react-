import React, { Component } from 'react';

class ErrorMessage extends React.Component {
  componentWillReceiveProps(newProps){

  }
  render() {
      let errorMessage;
      let userNumber = this.props.userGuess;
      let randomNumber = this.props.randomNumber;
      if (userNumber !== "") {
        if (userNumber !== "" && randomNumber === userNumber) {
          errorMessage = "Yeaaaaahhhhhh boiiiiiiii!!!!!!!";
        } else if (randomNumber > userNumber) {
          errorMessage = "Too low, SON!";
        } else if (randomNumber < userNumber) {
          errorMessage = "Too damn high!!";
        } else if (Number.isNaN(userNumber)) {
          errorMessage = "Numbers, WHAT ARE THEY?!";
        } else if (userNumber === null) {
          errorMessage = '';
        }
      } else {
        errorMessage = '';
      }

    return(
      <div>{errorMessage}</div>
    )
  }
}

module.exports = ErrorMessage;
