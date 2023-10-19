import { Component } from "react";

const totalCount = 4;

export class ClassFinalScore extends Component {
  render() {

    const {correctCount} = this.props;

    return (
      <div id="final-score">
        <h1>Your Final Score Was</h1>
        <div id="score">
          <p>{correctCount}</p>
          <hr />
          <p>{totalCount}</p>
        </div>
      </div>
    );
  }
}
