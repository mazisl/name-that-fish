import { useState } from "react";

import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";

import { Images } from "../../assets/Images";

const initialFishes = [
  {
    name: "trout",
    url: Images.trout,
  },
  {
    name: "salmon",
    url: Images.salmon,
  },
  {
    name: "tuna",
    url: Images.tuna,
  },
  {
    name: "shark",
    url: Images.shark,
  },
];

export function FunctionalApp() {
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);

  const showFinalScore = correctCount + incorrectCount === initialFishes.length;
  const fishIndex = correctCount + incorrectCount;
  const answersLeft = initialFishes.map((fish) => fish.name);
  const answersLeftOnSubmit = answersLeft.slice(fishIndex);

  const handleCount = (answer) => {
    answer === initialFishes[fishIndex].name
      ? setCorrectCount(correctCount + 1)
      : setIncorrectCount(incorrectCount + 1);
  };

  return (
    <>
      {!showFinalScore && (
        <>
          <FunctionalScoreBoard
            incorrectCount={incorrectCount}
            correctCount={correctCount}
            answersLeftOnSubmit={answersLeftOnSubmit}
          />
          <FunctionalGameBoard
            fishData={initialFishes[fishIndex]}
            handleCount={handleCount}
          />
        </>
      )}
      {showFinalScore && (
        <FunctionalFinalScore
          correctCount={correctCount}
          totalCount={initialFishes.length}
        />
      )}
    </>
  );
}
