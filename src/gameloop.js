import { humanPlayerFactory, AIPlayerFactory } from "./player";
import { gameboardFactory } from "./gameboard";
import { showWrapper, hide, updateText, cellMiss, cellShip } from "./UI";

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

const gameLoop = (p1name, gb1) => {

  console.log('gameloop is running.')
  
  // set up players
  let playerOne = humanPlayerFactory(p1name);
  let playerTwo = AIPlayerFactory('Computer');
  
  // set up AI gameboard
  let gb2 = gameboardFactory('gb2');

  playerTwo.placeAIships(gb2);
  console.log('about to update movewrapper classList');
  moveWrapper.classList = 'shown wrappergrid';
  movep1.textContent = 'Your move admiral.'
 
  var winner = '';

  console.log(gb1.getPlacedShips());
  console.log(gb2.getPlacedShips());

  // define gameplaying function
  const playGame = (currentPlayer = playerOne, enemyGameboard = gb2) => {
    console.log('playGame is running.')

    // BASE CASES
    if (gb1.areAllSunk() == true) {
      moveWrapper.classList = 'hidden';
      gameOverWrapper.classList = 'shown wrappergrid';
      gameoverp1.textContent = 'game over. player 2 wins.'
      winner = 'Player 2 wins!';
      return;
    } else if (gb2.areAllSunk() == true) {
      moveWrapper.classList = 'hidden';
      gameOverWrapper.classList = 'shown wrappergrid';
      gameoverp1.textContent = 'game over. player 1 wins.'
      winner = 'Player 1 wins!';
      return;

    } else {

      // NOT BASE CASE
      console.log('not the base case.')

      // attack
      if (currentPlayer.category === 'human') {
        // define attackHandler
        var attackHandler = function(e) {
          let target = e.target;
          if (target.classList.contains('cell')) {
            var cellID = target.id;
            var locatorIdx = cellID.slice(4);
            var coords = gb2.getCells()[locatorIdx];
            // attack
            let result = currentPlayer.attack(coords[0],coords[1],enemyGameboard);
            // if result was already clicked, recurse without switching
            if (result === 'Already tried this spot.') {
              gbcontainer2.removeEventListener('click', attackHandler);
              return playGame(currentPlayer, enemyGameboard);
            } else {
            currentPlayer = playerTwo;
            enemyGameboard = gb1;
            gbcontainer2.removeEventListener('click', attackHandler);
            // wait before recursing
            return playGame(currentPlayer, enemyGameboard);
            }
          }
        } // end attackHandler
        // movep1.textContent = 'Please click on enemy waters.'
        gbcontainer2.addEventListener('click', attackHandler);
        
      } else if (currentPlayer.category === 'robot') {
        currentPlayer.attack(enemyGameboard);
        currentPlayer = playerOne;
        enemyGameboard = gb2;
        // wait before recursing
        return playGame(currentPlayer, enemyGameboard);
      }
    }
  }
  // run game playing loop
  playGame(); 
  return winner;
}

export { gameLoop }
