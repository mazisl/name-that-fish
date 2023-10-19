import { useState } from 'react';

import "./styles/game-board.css";

// initialFishes array moved to parent component

export function FunctionalGameBoard({fishGameBoard, handleCount, handleAnswersLeft}) {

  const [index, setIndex] = useState(0);
  const [fishNameInput, setFishNameInput] = useState('');

  const changeFishImage = () => {
    if (index < fishGameBoard.length - 1) {
      setIndex(index + 1)
    } else {
      setIndex(0)
    }
  }

  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={fishGameBoard[0].url} alt={fishGameBoard[0].name} />
      </div>
      <form id="fish-guess-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleCount(fishNameInput);
          handleAnswersLeft();
          changeFishImage();
          setFishNameInput('');
        }}>
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input type="text" name="fish-guess" value={fishNameInput} onChange={(e) => {
          setFishNameInput(e.target.value)
        }} />
        <input type="submit" />
      </form>
    </div>
  );
}
