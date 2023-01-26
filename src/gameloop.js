import { humanPlayerFactory, AIPlayerFactory } from "./player";
import { gameboardFactory } from "./gameboard";
import { resetMessageArea } from "./UI";

const delay = ms => new Promise(res => setTimeout(res, ms));

const id = (ID) => document.getElementById(ID);
const moveWrapper = id('movewrapper');
const gameOverWrapper = id('gameoverwrapper');
const gbcontainer1 = id('gbcontainer1');
const gbcontainer2 = id('gbcontainer2');
const gameoverp1 = id('gameoverp1');
const gameoverp2 = id('gameoverp2');
const gameoverp3 = id('gameoverp3');
const p1move = id('p1move');
const p2move = id('p2move');
const movePrompt = id('moveprompt')
const scoreContainer = id('scorecontainer');

// Outer function that launches the game
const playGame = (p1name, gb1) => {
  console.log('playGame function has started.')
  // set up players
  let playerOne = humanPlayerFactory(p1name);
  let playerTwo = AIPlayerFactory('The Enemy');
  // set up AI gameboard object
  let gb2 = gameboardFactory('gb2', `the enemy's`);
  // place AI ships
  playerTwo.placeAIships(gb2);
  scoreContainer.classList = 'shown';
  // show move message area
  moveWrapper.classList = 'shown wrappergrid';
  movePrompt.textContent = `Your move, Admiral ${p1name}.`
  var winner = '';

  // remove tabbability from friendly waters
  gbcontainer1.removeAttribute("tabindex");
  const gb1cells = Array.from(gbcontainer1.querySelectorAll(".cell"));
  gb1cells.forEach(e => e.removeAttribute('tabindex'));
  gb1cells.forEach(e => e.setAttribute("disabled","true"));


  gbcontainer2.setAttribute("tabindex","0");
  const gb2cells = Array.from(gbcontainer2.querySelectorAll(".cell"));
  gb2cells.forEach(element => element.addEventListener('keydown', function(ev) {
    if (ev.key === "Enter") {
      ev.preventDefault()
    }
  }));
  gbcontainer2.keyup = null;
  gbcontainer2.keydown = null;


  // define gameplaying function
  const gameLoop = async(currentPlayer = playerOne, enemyGameboard = gb2) => {
    console.log('gameLoop is running.')



    // BASE CASES
    if (gb1.areAllSunk() == true) {
      gbcontainer2.classList.remove('crosshair');
      gbcontainer2.removeAttribute('tabindex');
      gb2cells.forEach(e => e.removeAttribute('tabindex'));

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
      gbcontainer2.removeAttribute('tabindex');
      gb2cells.forEach(e => e.removeAttribute('tabindex'));
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
        console.log(`currentPlayer.name is ${currentPlayer.name}`)
        // make enemy gameboard look active

        gbcontainer2.classList.add('crosshair');
        gbcontainer2.classList.add('firehere');
        // make gb2 cells tabbable
        console.log('about to make the gb2 cells tabbable')
        gb2cells.forEach(e => e.setAttribute('tabindex','0'));
        // gb2cells.forEach(e => e.setAttribute("disabled","false"));

        console.log('about to define the aimhandler')
        // define aimHandler - highlights cells you hover over before attacking
        var aimHandler = function(e) {
          let target = e.target;
          if (target.classList.contains('cell')) {
            target.classList.add('cell-aim');
          }
        }

        console.log('about to define the unaim handler')
        // define unAimHandler - removes highlight
        var unAimHandler = function(e) {
          let target = e.target;
          if (target.classList.contains('cell')) {
            target.classList.remove('cell-aim');
          }
        }

        console.log('about to define the attack handler')
        // DEFINE ATTACK HANDLER
        var attackHandler = async function(e) {
          console.log('HUMAN ATTACK HANDLER IS RUNNING')
          console.log(`currentPlayer.name is ${currentPlayer.name}`)

          console.log('STEP 1: about to disable tabbing for gb2cells')
          console.log(`currentPlayer.name is ${currentPlayer.name}`)
          // remove tabbing of gb2cells right after attack is launched
          gb2cells.forEach(el => el.onkeyup = null);

          console.log('STEP 2: about to remove mouse click and movement listeners from gb2')
          // remove mouse click and moving handlers from gameboard2 right after attack
          gbcontainer2.removeEventListener('click', attackHandler);
          gbcontainer2.removeEventListener('mouseover', aimHandler);
          gbcontainer2.removeEventListener('mouseout', unAimHandler);

          console.log('STEP 3: about to remove active styles from gb2')
          console.log(`currentPlayer.name is ${currentPlayer.name}`)
          // remove active styles from gameboard2 right after attack
          gbcontainer2.classList.remove('crosshair');
          gbcontainer2.classList.remove('firehere');

          console.log('STEP 4: about to reset message area')
          resetMessageArea();
          console.log(`currentPlayer.name is ${currentPlayer.name}`)

          console.log('STEP 5: about to put you fired in the message area')
          // Fill in beginning of message area
          p1move.textContent = 'You fired ...'

          
          // Get data for attack
          console.log('STEP 6: about to get target event and id')
          let target = e.target;
          console.log(`target.id is ${target.id}`)
          console.log(`currentPlayer.name is ${currentPlayer.name}`)

          console.log('STEP 7: about to check if target classlist contained cell')
          if (target.classList.contains('cell')) {
            console.log('STEP 8: target classlist DID have cell, about to add cell-fire to classlist')
            // style fired upon cell - scales up and makes dark blue
            target.classList.add('cell-fire');
            console.log(`currentPlayer.name is ${currentPlayer.name}`)
            // get coords of target cell
            console.log('STEP 9: about to get relevant coords based on target cell id')
            var cellID = target.id;
            var locatorIdx = cellID.slice(4);
            var coords = gb2.getCells()[locatorIdx];
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
              // remove tabbability of gb2 cells
              gb2cells.forEach(e => e.removeAttribute('tabindex'));
              // haven't tested this below yet  - remove keyup trigger for gb2 cells
              gb2cells.forEach(e => e.keyup = null);
              gbcontainer2.classList.add('crosshair');
              return gameLoop(currentPlayer, enemyGameboard);
            } else {
              console.log(`about to switch currentPlayer from human to robot`)
              currentPlayer = playerTwo;
              enemyGameboard = gb1;
              console.log('the human attackhandler is about to end by calling gameLoop with the AI player as the player.')
              return gameLoop(currentPlayer, enemyGameboard);
            }
          } // end if target is cell
        } // END ATTACK HANDLER

        // add mouse click and movement handlers for human's turn
        gbcontainer2.addEventListener('mouseover', aimHandler);
        gbcontainer2.addEventListener('mouseout', unAimHandler);
        gbcontainer2.addEventListener('click', attackHandler);

        // add keyup handlers for human's turn
        gb2cells.forEach(element => element.addEventListener('keyup', (ev) => {
          
          ev.preventDefault();
          
          // trying a bandaid with the line below - this works!!
          currentPlayer = playerOne;
          
          if (ev.key === 'Enter') {
            console.log('Enter was pressed.')
            console.log(`is event cancelable? ${ev.cancelable}`);
            delay(500);
          gb2cells.forEach(e => e.setAttribute("disabled","true"));
          gb2cells.forEach(e => e.keyup = null);
          gb2cells.forEach(e => e.removeAttribute('tabindex'));
            console.log(`ev.key is ${ev.key}`)
            console.log(`ev.target.id is ${ev.target.id}`);
            // does adding return here stop the loop??
            return attackHandler(ev);
          }
        }))

        // gbcontainer2.addEventListener('keyup', async function(ev) {
        //   if (ev.key === 'Enter') {
        //     // if these were buttons ...
        //     // document.getElementById("myBtn").click();
        //     await attackHandler();
        //   }
        // })



        // PLAYER 2 TURN
      } else if (currentPlayer.category === 'robot') {
        console.log('currentPlayer.category is robot')
        // should I remove the keyup handlers?
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
