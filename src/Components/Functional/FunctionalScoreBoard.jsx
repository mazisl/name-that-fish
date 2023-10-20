import "./styles/score-board.css";

export function FunctionalScoreBoard({
  answersLeftOnSubmit,
  incorrectCount,
  correctCount,
  }) {

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
