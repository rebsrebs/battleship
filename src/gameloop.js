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

const gameLoop = (p1name, gameboardOne) => {

  console.log('gameloop is running.')

  function switchTurns(currentPlayer, enemyGameboard){
    // switch players
    if (currentPlayer === playerOne) {
      currentPlayer = playerTwo;
      enemyGameboard = gameboardOne;
    } else {
      currentPlayer = playerOne;
      enemyGameboard = gameboardTwo;
    }
  }

  // set up players
  let playerOne = humanPlayerFactory(p1name);
  let playerTwo = AIPlayerFactory('Computer');
  // set up AI gameboard
  let gameboardTwo = gameboardFactory('gameboardTwo');
  console.log('about to update movewrapper classList');
  moveWrapper.classList = 'shown wrappergrid';
  movep1.textContent = 'Your move admiral.'
  // temp placing AI ships
  gameboardTwo.getPlacedShips()[0].location = [[1,2],[1,3],[1,4],[1,5],[1,6]]
  gameboardTwo.getPlacedShips()[1].location = [[2,2],[2,3],[2,4],[2,5]]
  gameboardTwo.getPlacedShips()[2].location = [[3,2],[3,3],[3,4]]
  gameboardTwo.getPlacedShips()[3].location = [[4,2],[4,3],[4,4]]
  gameboardTwo.getPlacedShips()[4].location = [[5,2],[5,3]]
  var winner = '';

  console.log(gameboardOne.getPlacedShips());
  console.log(gameboardTwo.getPlacedShips());

  // define gameplaying function
  const playGame = (currentPlayer = playerOne, enemyGameboard = gameboardTwo) => {
    console.log('playGame is running.')
    if (currentPlayer === playerOne) {
      console.log('your turn');
    } else if (currentPlayer === playerTwo) {
      console.log('Computers turn.')
    }

    // BASE CASES
    if (gameboardOne.areAllSunk() == true) {
      // function to show gameover wrapper, maybe UI.showWinner(winner);
      moveWrapper.classList = 'hidden';
      gameOverWrapper.classList = 'shown wrappergrid';
      gameoverp1.textContent = 'game over.'
      winner = 'Player 2 wins!';
      return;
    } else if (gameboardTwo.areAllSunk() == true) {
      // UI gameover wrapper
      winner = 'Player 1 wins!';
      return;
    } else {

      // NOT BASE CASE
      // show enemy gameboard
      console.log('not the base case.')

      // attack
      if (currentPlayer.category === 'human') {

        var attackHandler = function(e) {
          console.log('attackHandler is running');

          let target = e.target;
          console.log(`target is ${target}`)
          if (target.classList.contains('cell')) {
            var cellID = target.id;
            console.log(`cellID is ${cellID}`);
            var locatorIdx = cellID.slice(4);
            console.log(`locator index is ${locatorIdx}`)
            var coords = gameboardTwo.getCells()[locatorIdx];
            // attack
            let result = currentPlayer.attack(coords[0],coords[1],enemyGameboard);
            console.log(`result is ${result}`);
            if (result === 'hit!') {
              document.getElementById(cellID).classList = 'cell cell-ship';
            } else if (result === 'miss!') {
              document.getElementById(cellID).classList = 'cell cell-miss';
            }
            switchTurns(currentPlayer, enemyGameboard);
            gbcontainer2.removeEventListener('click', attackHandler);
            return playGame(currentPlayer, enemyGameboard);
          }
        } 

        movep1.textContent = 'Please click on enemy waters.'
        gbcontainer2.addEventListener('click', attackHandler);
        
      } else if (currentPlayer.category === 'robot') {
        movep1.textContent = 'The enemy is firing.'
        currentPlayer.attack(enemyGameboard);
        switchTurns();
        return playGame(currentPlayer, enemyGameboard);
      }
    }
  }
  // run game playing loop
  console.log('about to run the outer playGame()');
  playGame(); 
  return winner;
}

export { gameLoop }
