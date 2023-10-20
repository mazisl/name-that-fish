import { Component } from "react";
import "./styles/score-board.css";

export class ClassScoreBoard extends Component {

  render() {

    const {answersLeftOnSubmit, incorrectCount, correctCount} = this.props;

    return (
      <div id="score-board">
        <div>Incorrect 🔻: {incorrectCount}</div>
        <div id="choices-left">
          {answersLeftOnSubmit.map((answer) => (
            <div key={answer} className="choice">
              {answer}
            </div>
          ))}
        </div>
        <div>Correct ✅: {correctCount}</div>
      </div>
    );
  }
}
