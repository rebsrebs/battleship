import { humanPlayerFactory, AIPlayerFactory } from "./player";
import { gameboardFactory } from "./gameboard";
import { resetMessageArea } from "./UI";

const delay = ms => new Promise(res => setTimeout(res, ms));

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
const p1move = id('p1move');
const p2move = id('p2move');
const movePrompt = id('moveprompt')
const scoreContainer = id('scorecontainer');



const playGame = (p1name, gb1) => {
  console.log('gameloop is running.')
  // set up players
  let playerOne = humanPlayerFactory(p1name);
  let playerTwo = AIPlayerFactory('The Enemy');
  // set up AI gameboard 
  let gb2 = gameboardFactory('gb2', `the enemy's`);
  playerTwo.placeAIships(gb2);
  scoreContainer.classList = 'shown';
  // show move message area
  moveWrapper.classList = 'shown wrappergrid';
  movePrompt.textContent = `Your move, Admiral ${p1name}.`
  gbcontainer2.classList.add('crosshair');
  var winner = '';

  // remove tabbability from friendly waters
  gbcontainer1.removeAttribute("tabindex");
  const gb1cells = Array.from(gbcontainer1.querySelectorAll(".cell"));
  gb1cells.forEach(e => e.removeAttribute('tabindex'));

  // make enemy cells tabbale
  // should this only happen when it's also clickable? like when it is the humans turn?
  gbcontainer2.setAttribute("tabindex","0");
  const gb2cells = Array.from(gbcontainer2.querySelectorAll(".cell"));
  gb2cells.forEach(e => e.setAttribute('tabindex','0'));


  // define gameplaying function
  const gameLoop = async(currentPlayer = playerOne, enemyGameboard = gb2) => {
    console.log('gameLoop is running.')
    // BASE CASES
    if (gb1.areAllSunk() == true) {
      gbcontainer2.classList.remove('crosshair');
      moveWrapper.classList = 'hidden';
      gameOverWrapper.classList = 'shown wrappergrid';
      gameoverp2.textContent = 'Game over. The enemy won.'
      winner = 'Player 2 wins!';
      console.log(winner);
      // return;
    } else if (gb2.areAllSunk() == true) {
      gbcontainer2.classList.remove('crosshair');
      moveWrapper.classList = 'hidden';
      gameOverWrapper.classList = 'shown wrappergrid';
      gameoverp2.textContent = `Game over. Admiral ${p1name}'s fleet defeated the enemy.`
      winner = 'Player 1 wins!';
      console.log(winner);
      // return;

    } else {
      // NOT BASE CASE
      console.log('not the base case.')
      // IF HUMANS TURN
      if (currentPlayer.category === 'human') {
        console.log('currentPlayer.category is human');
        // make enemy gameboard look active
        gbcontainer2.classList.add('firehere');
        // define aimHandler - highlights cells you hover over before attacking
        var aimHandler = function(e) {
          let target = e.target;
          if (target.classList.contains('cell')) {
            target.classList.add('cell-aim');
          }
        }
        // define unAimHandler - removes highlight
        var unAimHandler = function(e) {
          let target = e.target;
          if (target.classList.contains('cell')) {
            target.classList.remove('cell-aim');
          }
        }
        // define attackHandler
        var attackHandler = async function(e) {
          console.log('Human attack handler is running.')
          gbcontainer2.removeEventListener('click', attackHandler);
          gbcontainer2.removeEventListener('mouseover', aimHandler);
        gbcontainer2.removeEventListener('mouseout', unAimHandler);
          gbcontainer2.classList.remove('crosshair');
          gbcontainer2.classList.remove('firehere');
          resetMessageArea();
          p1move.textContent = 'You fired ...'
          let target = e.target;
          if (target.classList.contains('cell')) {
            target.classList.add('cell-fire');
            var cellID = target.id;
            var locatorIdx = cellID.slice(4);
            var coords = gb2.getCells()[locatorIdx];
            // attack
            let result = await currentPlayer.attack(coords[0],coords[1],enemyGameboard);
            // if result was already clicked, recurse without switching
            if (result === 'Already tried this spot.') {
              target.classList.remove('cell-fire');
              p1move.textContent = p1move.textContent + ' false alarm, please fire again.'
              gbcontainer2.removeEventListener('click', attackHandler);
              gbcontainer2.removeEventListener('mouseover', aimHandler);
              gbcontainer2.removeEventListener('mouseout', unAimHandler);
              gbcontainer2.classList.add('crosshair');
              return gameLoop(currentPlayer, enemyGameboard);
            } else {
            currentPlayer = playerTwo;
            enemyGameboard = gb1;
            return gameLoop(currentPlayer, enemyGameboard);
            }
          } // end if target is cell
        } // end attackHandler
        // this should only add when current player is human
        gbcontainer2.addEventListener('mouseover', aimHandler);
        gbcontainer2.addEventListener('mouseout', unAimHandler);
        gbcontainer2.addEventListener('click', attackHandler);
        // PLAYER 2 TURN
      } else if (currentPlayer.category === 'robot') {
        console.log('currentPlayer.category is robot')
        // delay before saying the enemy fired
        await delay(500);
        // gbcontainer2.classList.remove('firehere');
        p2move.textContent = 'The enemy fired ...';
        // the follow await makes sure you can't fire again before the enemy finishes firing.
        await currentPlayer.attack(enemyGameboard);
        currentPlayer = playerOne;
        enemyGameboard = gb2;
        // delay befor saying your move admiral
        await delay(500);
        movePrompt.textContent = `Your move, Admiral ${p1name}.`
        gbcontainer2.classList.add('crosshair');
        return gameLoop(currentPlayer, enemyGameboard);
      } // end if current player is computer
    } // end if not base case
  } // end gameLoop

  gameLoop(); 
  return winner;
}

export { playGame }
