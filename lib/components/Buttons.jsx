import React, { Component } from 'react';

class Buttons extends React.Component {

  // componentDidMount() {
  //   toggleDisable()
  // }

  // toggleDisable() {
  //   if (this.props.input) {
  //     submitButton.disabled = false;
  //     clearButton.disabled = false;
  //     resetButton.disabled = false;
  //   } else {
  //     submitButton.disabled = true;
  //     clearButton.disabled = true;
  //     resetButton.disabled = true;
  //   }
  // }



  render() {

    let submitButton = (<button id="submitButton"  onClick={this.props.setUserGuess}> Submit</button>);
    let clearButton = (<button id='clearButton'  onClick={this.props.clearInput}>Clear</button>);
    let resetButton = (<button id="resetButton"  onClick={this.props.resetGame}>Reset</button>);

    return(
      <div>
        {submitButton}
        {clearButton}
        {resetButton}
      </div>
    )
  }
}

module.exports = Buttons;
