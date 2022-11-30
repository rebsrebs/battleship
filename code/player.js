// Players can take turns playing the game by attacking the enemy Gameboard.
// The game is played against the computer, so make ‘computer’ players capable of making random plays. The AI does not have to be smart, but it should know whether or not a given move is legal. (i.e. it shouldn’t shoot the same coordinate twice).

import { gameboardFactory } from "./gameboard";

class HumanPlayer {
  // class methods
  constructor(name) { 
    this.name = name;
    this.gameboard = gameboardFactory(`${name}GB`);
   }
  attack(a, b, board) { 
    // if (0 < a < 11 && b < 0 < 11) {
      board.receiveAttack(a,b);
      return 'attacked'
    // }
    // does this just call gameBoardOne.receiveAttack(a,b)?
  }
}

export { HumanPlayer }