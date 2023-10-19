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

const clonedFishArr = structuredClone(initialFishes);

export class ClassApp extends Component {

  state = {
    answersLeft: clonedFishArr,
    incorrectCount: 0,
    correctCount: 0,
    showScore: true,
    showFinalScore: false
  };

  removeFishNameOnSubmit = () => {
    if (this.state.answersLeft.length > 1) {
      this.state.answersLeft.shift()
      this.setState(() => {
        return {answersLeft: this.state.answersLeft}
      })
    } else {
      this.setState(() => {
        return {showScore: false, showFinalScore: true}
      })
    }
  }

  handleCount = (answer) => {
    answer === this.state.answersLeft[0].name ? this.setState(() => {
      return {correctCount: this.state.correctCount + 1}
    }) : this.setState(() => {
      return {incorrectCount: this.state.incorrectCount + 1}
    })
  } 

  render() {

    const {answersLeft, incorrectCount, correctCount, showScore, showFinalScore} = this.state;
    const {removeFishNameOnSubmit, handleCount} = this;

    return (
      <>
        {showScore && <ClassScoreBoard answersLeft={answersLeft} incorrectCount={incorrectCount} correctCount={correctCount} />}
        {showScore && <ClassGameBoard fishGameBoard={answersLeft} handleCount={handleCount} handleAnswersLeft={removeFishNameOnSubmit} />}
        {showFinalScore && <ClassFinalScore correctCount={correctCount} />}
      </>
    );
  }
}
