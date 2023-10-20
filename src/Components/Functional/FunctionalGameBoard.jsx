import { useState } from "react";

import "./styles/game-board.css";

export function FunctionalGameBoard({ fishData, handleCount }) {
  const [fishNameInput, setFishNameInput] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    handleCount(fishNameInput);
    setFishNameInput("");
  };

  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={fishData.url} alt={fishData.name} />
      </div>
      <form id="fish-guess-form" onSubmit={onSubmitHandler}>
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input
          type="text"
          name="fish-guess"
          value={fishNameInput}
          onChange={(e) => {
            setFishNameInput(e.target.value);
          }}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
