// The game loop should set up a new game by creating Players and Gameboards. 
// The game loop should step through the game turn by turn using only methods from other objects. If at any point you are tempted to write a new function inside the game loop, step back and figure out which class or module that function should belong to.
// Create conditions so that the game ends once one players ships have all been sunk. This function is appropriate for the Game module.

import { HumanPlayer, AIPlayer } from "./player";
import { gameboardFactory } from "./gameboard";

const playGame = () => {

  const playerOne = new HumanPlayer('Rebecca');
  const playerTwo = new AIPlayer('Computer');
  // should player's create their own gameboards? I'm going to say no for now.
  const gameboardOne = gameboardFactory('gameboardOne');
  const gameboardTwo = gameboardFactory('gameboardTwo');

  if (gameboardOne.areAllSunk() == true) {
    return 'player 2 wins!'
  } else if (gameboardTwo.areAllSunk() == true) {
    return 'player 1 wins!'
  }

}

export { playGame }
