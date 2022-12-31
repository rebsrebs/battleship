import { humanPlayerFactory, AIPlayerFactory } from "./player";
import { gameboardFactory } from "./gameboard";

const yourMoveWrapper = document.getElementById('yourmovewrapper');
const enemyMoveWrapper = document.getElementById('enemymovewrapper');
const gameOverWrapper = document.getElementById('gameoverwrapper');
const gbcontainer1 = document.getElementById('gbcontainer1');
const gbcontainer2 = document.getElementById('gbcontainer2');
const yourmovep1 = document.getElementById('yourmovep1');
const yourmovep2 = document.getElementById('yourmovep2');
const yourmovep3 = document.getElementById('yourmovep3');
const enemymovep1 = document.getElementById('enemymovep1');
const enemymovep2 = document.getElementById('enemymovep2');
const enemymovep3 = document.getElementById('enemymovep3');
const gameoverp1 = document.getElementById('gameoverp1');
const gameoverp2 = document.getElementById('gameoverp2');
const gameoverp3 = document.getElementById('gameoverp3');


const gameLoop = (p1name) => {

  // set up players
  let playerOne = humanPlayerFactory(p1name);
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
