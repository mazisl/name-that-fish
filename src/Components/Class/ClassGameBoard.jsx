import { Component } from "react";
import "./styles/game-board.css";

//initialFishes array moved to parent component 

export class ClassGameBoard extends Component {

  state = {
    index: 0,
    fishNameInput: ''
  }

  render() {

    const {index, fishNameInput} = this.state;
    const {fishGameBoard, handleCount, handleAnswersLeft} = this.props;

    const changeFishImage = () => {
      if (index < fishGameBoard.length - 1) {
        this.setState(() => {
          return {index: index + 1}
        })
      } else {
        this.setState(() => {
          return {index: 0}
        })
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
          handleCount(this.state.fishNameInput);
          handleAnswersLeft();
          changeFishImage();
          this.setState(() => {
            return {fishNameInput: ''};
          })
          }} >
          <label htmlFor="fish-guess">What kind of fish is this?</label>

          <input type="text" name="fish-guess" value={fishNameInput} onChange={(e) => {
            this.setState(() => {
              return {fishNameInput: e.target.value}
            })}
          } />

          <input type="submit" />
        </form>
      </div>
    );
  }
}
