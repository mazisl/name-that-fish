import { Component } from "react";

import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";

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

export class ClassApp extends Component {
  state = {
    incorrectCount: 0,
    correctCount: 0,
  };

  render() {
    const { incorrectCount, correctCount } = this.state;

    const showFinalScore =
      correctCount + incorrectCount === initialFishes.length;
    const fishIndex = correctCount + incorrectCount;
    const answersLeft = initialFishes.map((fish) => fish.name);
    const answersLeftOnSubmit = answersLeft.slice(fishIndex);

    const handleCount = (answer) => {
      answer === initialFishes[fishIndex].name
        ? this.setState(() => {
            return { correctCount: correctCount + 1 };
          })
        : this.setState(() => {
            return { incorrectCount: incorrectCount + 1 };
          });
    };

    return (
      <>
        {!showFinalScore && (
          <>
            <ClassScoreBoard
              incorrectCount={incorrectCount}
              correctCount={correctCount}
              answersLeftOnSubmit={answersLeftOnSubmit}
            />
            <ClassGameBoard
              fishData={initialFishes[fishIndex]}
              handleCount={handleCount}
            />
          </>
        )}
        {showFinalScore && (
          <ClassFinalScore
            correctCount={correctCount}
            totalCount={initialFishes.length}
          />
        )}
      </>
    );
  }
}
