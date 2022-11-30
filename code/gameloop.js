// The game loop should set up a new game by creating Players and Gameboards. 
// The game loop should step through the game turn by turn using only methods from other objects. If at any point you are tempted to write a new function inside the game loop, step back and figure out which class or module that function should belong to.
// Create conditions so that the game ends once one players ships have all been sunk. This function is appropriate for the Game module.

import { HumanPlayer, AIPlayer } from "./player";
import { gameboardFactory } from "./gameboard";

const setUpGame = () => {

  const playerOne = new HumanPlayer('Rebecca');
  const playerTwo = new AIPlayer('Computer');
  
  const gameboardOne = gameboardFactory('gameboardOne');
  const gameboardTwo = gameboardFactory('gameboardTwo');

  return {
    playerOne, playerTwo, gameboardOne, gameboardTwo
  }

}

const playGame = (currentPlayer = playerOne, enemyGameboard = gameboardTwo) => {

  // base cases
  if (gameboardOne.areAllSunk() == true) {
    return 'player 2 wins!'
  } else if (gameboardTwo.areAllSunk() == true) {
    return 'player 1 wins!'
  } else {

    // attack
    if (currentPlayer.category === 'human') {
      currentPlayer.attack(1,2,enemyGameboard);
    }

    if (currentPlayer.category === 'robit') {
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

export { setUpGame, playGame }
