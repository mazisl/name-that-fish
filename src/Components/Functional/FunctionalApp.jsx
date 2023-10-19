import { useState } from 'react';

import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";

import { Images } from "../../assets/Images";

const initialFishes = [
  {
    name: "trout",
    url: Images.trout
  },
  {
    name: "salmon",
    url: Images.salmon
  },
  {
    name: "tuna",
    url: Images.tuna
  },
  {
    name: "shark",
    url: Images.shark
  }
];

export function FunctionalApp() {
  
  const clonedFishArr = structuredClone(initialFishes);

  const [answersLeft, setAnswersLeft] = useState(clonedFishArr);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);

  const [showScore, setShowScore] = useState(true);
  const [showFinalScore, setShowFinalScore] = useState(false);

  const removeFishNameOnSubmit = () => {
    if (answersLeft.length > 1) {
      answersLeft.shift()
      setAnswersLeft(answersLeft);
    } else {
      setShowScore(false)
      setShowFinalScore(true)
    }
  }

  const handleCount = (answer) => {
    answer === answersLeft[0].name ? setCorrectCount(correctCount + 1) : setIncorrectCount(incorrectCount + 1)
  }

  console.log(answersLeft);

  return (
    <>
      {showScore && <FunctionalScoreBoard fishScoreBoard={answersLeft} incorrectCount={incorrectCount} correctCount={correctCount} answersLeft={answersLeft} />}
      {showScore && <FunctionalGameBoard fishGameBoard={answersLeft} handleCount={handleCount} handleAnswersLeft={removeFishNameOnSubmit} />}
      {showFinalScore && <FunctionalFinalScore correctCount={correctCount} />}
    </>
  );
}
