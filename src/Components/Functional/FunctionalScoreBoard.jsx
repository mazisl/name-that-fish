// import { useState } from 'react';
import "./styles/score-board.css";
//  Where the score is presented

export function FunctionalScoreBoard({answersLeft, incorrectCount, correctCount}) {

  // const [incorrectCount, setIncorrectCount] = useState(0);
  // const [correctCount, setCorrectCount] = useState(0);

  return (
    <div id="score-board">
      <div>Incorrect 🔻: {incorrectCount}</div>
      <div id="choices-left">
        {answersLeft.map((answer) => (
          <div key={answer.name} className="choice">
            {answer.name}
          </div>
        ))}
      </div>
      <div>Correct ✅: {correctCount}</div>
    </div>
  );
}
