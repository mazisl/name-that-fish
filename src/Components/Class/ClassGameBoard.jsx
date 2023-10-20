import { Component } from "react";
import "./styles/game-board.css";

export class ClassGameBoard extends Component {
  state = {
    fishNameInput: "",
  };

  render() {
    const { fishNameInput } = this.state;
    const { fishData, handleCount } = this.props;

    const onSubmitHandler = (e) => {
      e.preventDefault();
      handleCount(fishNameInput);
      this.setState(() => {
        return { fishNameInput: "" };
      });
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
              this.setState(() => {
                return { fishNameInput: e.target.value };
              });
            }}
          />

          <input type="submit" />
        </form>
      </div>
    );
  }
}
