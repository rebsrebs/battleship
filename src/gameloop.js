import { humanPlayerFactory, AIPlayerFactory } from "./player";
import { gameboardFactory } from "./gameboard";
import { resetMessageArea, theGameObject } from "./UI";
import { id, waitTime, delay } from "./helpers"

const moveWrapper = id('movewrapper');
const gameOverOverlay = id('gameoveroverlay');
const gbcontainer1 = id('gbcontainer1');
const gbcontainer2 = id('gbcontainer2');
const p1move = id('p1move');
const p2move = id('p2move');
const movePrompt = id('moveprompt')
const scoreContainer = id('scorecontainer');




// Outer function that launches the game
const playGame = (p1name, gb1) => {
  console.log('playGame function has started.')
  gb1 = theGameObject.gb1object;
  // CREATE PLAYERS
  let playerOne = humanPlayerFactory(p1name);
  theGameObject.p1object = playerOne;
  let playerTwo = AIPlayerFactory('The Enemy');
  theGameObject.p2object = playerTwo;
  // set up AI gameboard object
  let gb2 = gameboardFactory('gb2', `the enemy's`);
  theGameObject.gb2object = gb2;
  // place AI ships
  theGameObject.p2object.placeAIships(theGameObject.gb2object);
  scoreContainer.classList = 'shown';
  // show move message area
  moveWrapper.classList = 'shown msgwrapper';
  movePrompt.textContent = `Your move, Admiral ${p1name}.`
  var winner = '';

  // make variables of cells
  const gb1cells = Array.from(gbcontainer1.querySelectorAll(".cell"));
  const gb2cells = Array.from(gbcontainer2.querySelectorAll(".cell"));

  // KEYBOARD STUFF
  // remove tabbability and disable friendly waters
  gbcontainer1.removeAttribute("tabindex");
  gb1cells.forEach(e => e.removeAttribute("tabindex"));
  gb1cells.forEach(e => e.setAttribute("disabled","true"));
  // make gb2 tabbable
  gbcontainer2.setAttribute("tabindex","0");
  // prevent default on gb2 keydown
  gbcontainer2.addEventListener('keydown', function(ev){
    if (ev.key === "Enter") {
      ev.preventDefault()
    }
  })
  // prevent default on gb2 cells
  gb2cells.forEach(element => element.addEventListener('keydown', function(ev) {
    if (ev.key === "Enter") {
      ev.preventDefault()
    }
  }));

  // define gameplaying function
  const gameLoop = async(currentPlayer = theGameObject.p1object, enemyGameboard = theGameObject.gb2object) => {
    console.log('gameLoop is running.')



    // BASE CASES
    if (theGameObject.gb1object.areAllSunk() == true) {
      console.log(`waitTime is ${waitTime}`);
      await delay(waitTime);
      gbcontainer2.classList.remove('crosshair');
      gbcontainer2.removeAttribute('tabindex');
      gb2cells.forEach(e => e.removeAttribute('tabindex'));
      gameOverOverlay.classList = 'shown firehere'
      movePrompt.textContent = 'The enemy won!'
      winner = 'Player 2 wins!';
      console.log(winner);
      // return;
    } else if (theGameObject.gb2object.areAllSunk() == true) {
      await delay(waitTime);
      gbcontainer2.classList.remove('crosshair');
      gameOverOverlay.classList = 'shown firehere'
      gbcontainer2.removeAttribute('tabindex');
      gb2cells.forEach(e => e.removeAttribute('tabindex'));
      p2move.textContent = `Admiral ${p1name}'s fleet defeated the enemy!`
      winner = 'Player 1 wins!';
      console.log(winner);
      // return;




    } else {
      // NOT BASE CASE
      console.log('not the base case.')

      // IF HUMANS TURN
      if (currentPlayer.category === 'human') {
        console.log(`currentPlayer.name is human named ${currentPlayer.name}`)
        // make enemy gameboard look active
        gbcontainer2.classList.add('crosshair');
        gbcontainer2.classList.add('firehere');

        // KEYBOARD STUFF
        // make gb2 cells tabbable
        gb2cells.forEach(e => e.setAttribute('tabindex','0'));


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
        // DEFINE ATTACK HANDLER
        var attackHandler = async function(e) {
          console.log('HUMAN ATTACK HANDLER IS RUNNING')
          console.log(`currentPlayer.name is ${currentPlayer.name}`)

          // KEYBOARD STUFF
          // remove tabbing of gb2cells right after attack is launched
          gb2cells.forEach(el => el.onkeyup = null);

          // remove mouse click and moving handlers from gb2
          gbcontainer2.removeEventListener('click', attackHandler);
          gbcontainer2.removeEventListener('mouseover', aimHandler);
          gbcontainer2.removeEventListener('mouseout', unAimHandler);
          // remove active styles from gameboard2 right after attack
          gbcontainer2.classList.remove('crosshair');
          gbcontainer2.classList.remove('firehere');

          resetMessageArea();
          
          // Fill in beginning of message area
          p1move.textContent = 'You fired ...'

          // Get data for attack
          let target = e.target;
          console.log(`target.id is ${target.id}`)
          console.log(`currentPlayer.name is ${currentPlayer.name}`)

          if (target.classList.contains('cell')) {
            console.log('STEP 8: target classlist DID have cell, about to add cell-fire to classlist')
            // style fired upon cell - scales up and makes dark blue
            target.classList.add('cell-fire');
            console.log(`currentPlayer.name is ${currentPlayer.name}`)
            // get coords of target cell
            console.log('STEP 9: about to get relevant coords based on target cell id')
            var cellID = target.id;
            var locatorIdx = cellID.slice(4);
            var coords = theGameObject.gb2object.getCells()[locatorIdx];
            console.log(`STEP 10: got the coords, about to attack and the currentPlayer should be the human but is actually ${currentPlayer.name}`)

            // Attack!!!!!!!!!!!
            // does this work? why is this happening twice on keyup?
            let result = await currentPlayer.attack(coords[0],coords[1],enemyGameboard);
            console.log(`STEP 11: Got the result from attacking and it is ${result}`)

            //something going wrong here.
            // if result was already clicked, recurse without switching
            if (result === 'Already tried this spot.') {
              target.classList.remove('cell-fire');
              p1move.textContent = p1move.textContent + ' false alarm, please fire again.'
              // remove mouse click and movement handlers
              gbcontainer2.removeEventListener('click', attackHandler);
              gbcontainer2.removeEventListener('mouseover', aimHandler);
              gbcontainer2.removeEventListener('mouseout', unAimHandler);

              // KEYBOARD STUFF
              // remove tabbability of gb2 cells
              gb2cells.forEach(e => e.removeAttribute('tabindex'));
              gb2cells.forEach(e => e.keyup = null);
              
              gbcontainer2.classList.add('crosshair');
              return gameLoop(currentPlayer, enemyGameboard);
            } else {
              console.log(`about to switch currentPlayer from human to robot`)
              currentPlayer = theGameObject.p2object;
              enemyGameboard = theGameObject.gb1object;
              console.log('the human attackhandler is about to end by calling gameLoop with the AI player as the player.')
              return gameLoop(currentPlayer, enemyGameboard);
            }
          } // end if target is cell
        } // END ATTACK HANDLER

        // add mouse click and movement handlers for human's turn
        gbcontainer2.addEventListener('mouseover', aimHandler);
        gbcontainer2.addEventListener('mouseout', unAimHandler);
        gbcontainer2.addEventListener('click', attackHandler);

        // KEYBOARD STUFF
        // define keyup handler for human's turn
        function handleEnter(event) {
          event.preventDefault;
          if (event.key === 'Enter') {
            event.target.removeEventListener('keyup',handleEnter)
            console.log('Enter was pressed.')
            return event.target.click();
          }
        }

        // add handleEnter listener
        gb2cells.forEach(element => element.addEventListener('keyup', handleEnter))




        // PLAYER 2 TURN
      } else if (currentPlayer.category === 'robot') {
          console.log('currentPlayer.category is robot')
          // should I remove the keyup handlers?
          // delay before saying the enemy fired
          await delay((waitTime/2));
          // gbcontainer2.classList.remove('firehere');
          p2move.textContent = 'The enemy fired ...';
          // the follow await makes sure you can't fire again before the enemy finishes firing.
          await currentPlayer.attack(enemyGameboard);
          // delay befor saying your move admiral or game over
          await delay(waitTime/2);
          // check if AI won before saying 'Your move, Admiral
          if (enemyGameboard.areAllSunk() == false) {
            console.log('not all enemy ships are sunk')
            movePrompt.textContent = `Your move, Admiral ${p1name}.`
            gbcontainer2.classList.add('crosshair');
          }
          // switch current player and gameboard
          currentPlayer = theGameObject.p1object;
          enemyGameboard = theGameObject.gb2object;
          console.log('at the very end of AI turn about to return gameLoop')
          return gameLoop(currentPlayer, enemyGameboard);
      } // end if current player is computer
    } // end if not base case
  } // end gameLoop

  gameLoop(); 
  return winner;
}

export { playGame }
