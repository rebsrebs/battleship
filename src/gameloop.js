import { humanPlayerFactory, AIPlayerFactory } from "./player";
import { gameboardFactory } from "./gameboard";
import { welcome, showWrapper, hide, updateText } from "./UI";

const id = (ID) => document.getElementById(ID);
const moveWrapper = id('movewrapper');
const gameOverWrapper = id('gameoverwrapper');
const gbcontainer1 = id('gbcontainer1');
const gbcontainer2 = id('gbcontainer2');
const movep1 = id('movep1');
const movep2 = id('movep2');
const movep3 = id('movep3');
const gameoverp1 = id('gameoverp1');
const gameoverp2 = id('gameoverp2');
const gameoverp3 = id('gameoverp3');


const gameLoop = (p1name, gameboardOne) => {

  console.log('gameloop is running.')

  // set up players
  let playerOne = humanPlayerFactory(p1name);
  let playerTwo = AIPlayerFactory('Computer');
  // set up AI gameboard
  let gameboardTwo = gameboardFactory('gameboardTwo');
  console.log('about to update movewrapper classList');
  moveWrapper.classList = 'shown wrappergrid';
  movep1.textContent = 'Your move admiral.'

  // gameboardTwo.getPlacedShips()[0][1] = [[1,2],[1,3],[1,4],[1,5],[1,6]]
  // gameboardTwo.getPlacedShips()[1][1] = [[2,2],[2,3],[2,4],[2,5]]
  var winner = '';

  // define gameplaying function
  const playGame = (currentPlayer = playerOne, enemyGameboard = gameboardTwo) => {

    // BASE CASES
    if (gameboardOne.areAllSunk() == true) {
      // function to show gameover wrapper, maybe UI.showWinner(winner);
      winner = 'Player 2 wins!';
      return;
    } else if (gameboardTwo.areAllSunk() == true) {
      // UI gameover wrapper
      winner = 'Player 1 wins!';
      return;
    } else {
      // NOT BASE CASE
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
  // playGame(); // why was this here?
  return winner;
}

export { gameLoop }
