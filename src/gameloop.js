import { humanPlayerFactory, AIPlayerFactory } from "./player";
import { gameboardFactory } from "./gameboard";

const gameLoop = () => {

  // set up players
  let playerOne = humanPlayerFactory('Rebecca');
  let playerTwo = AIPlayerFactory('Computer');
  var winner = '';

  // ask player to place ships
  let playerOneShips = [];
  let playerTwoShips = [];
  




  // set up gameboards
  // change to accept placedShips object as a parameter
  let gameboardOne = gameboardFactory('gameboardOne');
  let gameboardTwo = gameboardFactory('gameboardTwo');
  

  // define gameplaying function
  const playGame = (currentPlayer = playerOne, enemyGameboard = gameboardTwo) => {

    // base cases
    if (gameboardOne.areAllSunk() == true) {
      winner = 'Player 2 wins!';
      return;
    } else if (gameboardTwo.areAllSunk() == true) {
      winner = 'Player 1 wins!';
      return;
    } else {

      // show enemy gameboard

      // attack
      if (currentPlayer.category === 'human') {
        currentPlayer.attack(1,2,enemyGameboard);
      }
  
      if (currentPlayer.category === 'robot') {
        currentPlayer.attack(enemyGameboard);
      }
  
      // switch players
      if (currentPlayer === playerOne) {
        currentPlayer = playerTwo;
        enemyGameboard = gameboardOne;
      } else {
        currentPlayer = playerOne;
        enemyGameboard = gameboardTwo;
      }
      //recurse
      playGame(currentPlayer, enemyGameboard);
    }
  }
  // run game playing loop
  playGame();
  return winner;
}

export { gameLoop }
