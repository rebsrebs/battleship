// Players can take turns playing the game by attacking the enemy Gameboard.
// The game is played against the computer, so make ‘computer’ players capable of making random plays. The AI does not have to be smart, but it should know whether or not a given move is legal. (i.e. it shouldn’t shoot the same coordinate twice).

import { gameboardFactory } from "./gameboard";

class HumanPlayer {
  // class methods
  constructor(name) { 
    this.name = name;
    this.category = 'human';
    // this.gameboard = gameboardFactory(`${name}GB`);
   }
  attack(a, b, board) { 
    // check that (0 < a < 11 && b < 0 < 11)
      board.receiveAttack(a,b);
      return 'attacked'
  }
}

class AIPlayer {
  // class methods
  constructor(name) { 
    this.name = name;
    this.category = 'robot';
    // this.gameboard = gameboardFactory(`${name}GB`);
   }
  attack(board) { 
    // if there is a ship that is not sunk but
    // has hits above 0
    // guess adjacent to it

    //pick random location from enemy board possible array
    // do i have to expand this?
    let possibleMoves = board.getPossible();
    let shot = possibleMoves[Math.floor(Math.random()*possibleMoves.length)];
    let a = shot[0];
    let b = shot[1];

    // let a = Math.floor(Math.random() * 10) + 1;
    // let b = Math.floor(Math.random() * 10) + 1;
    board.receiveAttack(a,b);
    return 'attacked';
  }


}

export { HumanPlayer, AIPlayer }