import { humanPlayerFactory, AIPlayerFactory } from "./player";
import { gameboardFactory } from "./gameboard";
import { gameLoop } from "./gameloop";

const id = (ID) => document.getElementById(ID);
const welcomeform = id('welcomeform');
const placementwrapper = id('placementwrapper');
const startGameWrapper = id('startgamebtnwrapper');
const yourMoveWrapper = id('yourmovewrapper');
const enemyMoveWrapper = id('enemymovewrapper');
const gameOverWrapper = id('gameoverwrapper');
const placeMsg = id('placemessage');
const gbcontainer1 = id('gbcontainer1');
const gbcontainer2 = id('gbcontainer2');
const rulesbtn = id('rulesbtn');
const startbtn = id('startbtn');
const rules = id('rules');
const yourmovep2 = id('yourmovep2');
const toggleBtn = id('togglebtn');
const directionDisplay = id('direction');





startbtn.addEventListener('click', function() {
  playGame();
});

// PLAY GAME FUNCTION
// runs after you place ships and press start
// actually this doesn't go here!
function playGame() {
  console.log('playing game')
  startGameWrapper.classList = 'hidden';
  yourMoveWrapper.classList = 'shown wrappergrid';
  yourmovep2.textContent = '(Click on enemy waters to fire a shot.)'
  // what happens when you click on enemy board
  // gbcontainer2.addEventListener("click", function(e) {
  // let target = e.target;
  //   if (target.classList.contains('cell')) {
  //     var cellID = target.id;
  //     var locatorIdx = cellID.slice(4);
  //     var coords = gameboard.getCells()[locatorIdx];
  //     player.attack(coords[0],coords[y], gameboard)
  //   }
  // })
}
// END PLAY GAME FUNCTION











// function createRules() {
//   const rules2 = document.createElement('div');
//   rules2.id = 'rules';
//   rules2.innerHTML = <ol>
//   <li>Place your battleships in the water.</li>
//   <li>You and the computer will take turns firing at each other's water.</li>
//   <li>When a ship has been hit in each cell, it sinks.</li>
//   <li>The winner is the first to sink all of their enemy's boats.</li>
// </ol>;
// }

// UI interactions for attack time
// fireWhenReady function
// set yellow glowing box shadow around enemy gameboard
// await 1 second with ... before reporting back
// You hit the enemy's (shipName);
// Miss! 

// enemysTurn
// The enemy fired into your waters and ... 
// hit your (shipName)
// missed! 



rulesbtn.addEventListener("click", function() {
  if (rules.classList == 'hidden') {
    rules.classList = 'shown';
    rulesbtn.textContent = 'Hide Rules';
    // remove rules container from DOM?
  } else {
    rules.classList = 'hidden';
    rulesbtn.textContent = 'Show Rules';
  }
})


// CREATE CELLS FOR TWO GAMEBOARDS
const createBoards = () => {
  for (let i = 0; i < 100; i++) {
    var cell = document.createElement('div');
    cell.className = (`cell cell-plain`);
    cell.id = (`gb1-${i}`);
    gbcontainer1.appendChild(cell);
    // console.log(`cell class is ${cell.className} and cell id is ${cell.id}`);
  }

  for (let i = 0; i < 100; i++) {
    var cell = document.createElement('div');
    cell.className = (`cell cell-plain`)
    cell.id = (`gb2-${i}`);
    gbcontainer2.appendChild(cell);
    // console.log(`cell class is ${cell.className} and cell id is ${cell.id}`);
  }
}








toggleBtn.addEventListener('click', function() {
  if (directionDisplay.getAttribute("data-status") === 'horizontal') {
    directionDisplay.setAttribute("data-status", "vertical");
    directionDisplay.textContent="vertical";
  } else {
    directionDisplay.setAttribute("data-status", "horizontal");
    directionDisplay.textContent="horizontal";
  }
})

// PLACE SHIPS RECURSIVE FUNCTION
function placeShips (name, gameboard, shipIdx = 0) {
  // base case
  // if all gameboard ships have been placed
  if (shipIdx >  gameboard.getPlacedShips().length-1) {
    // hide placement area
    placementwrapper.classList = 'hidden';
    // show start wrapper
    document.getElementById('startgamebtnwrapper').classList='shown wrappergrid';
    console.log('base case');
    console.log(`The gameboards placed ships are`);
    console.log(gameboard.getPlacedShips());
    return;
  } else {
      let currentShip = gameboard.getPlacedShips()[shipIdx];
      // place message content
      placeMsg.textContent = `Admiral ${name}, please place your ${currentShip.ship.name}.`;
      // define clickHandler
      var clickHandler = function(e) {
        let target = e.target;
        if (target.classList.contains('cell')) {
          var cellID = target.id;
          var locatorIdx = cellID.slice(4);
          console.log(`locator index is ${locatorIdx}`)
          // coords is the array x,y representation of the cell in the grid
          var coords = gameboard.getCells()[locatorIdx];
          let shipLength = currentShip.ship.length;
          // if dir is horizontal:
          let xOrY = undefined;
          let dir = directionDisplay.getAttribute("data-status");
          if (dir === 'horizontal') {
            xOrY = 0;
            console.log(`xOrY is ${xOrY}`);
          } else {
            xOrY = 1;
            console.log(`xOrY is ${xOrY}`);
          }
            // if it fits on board
            console.log(`The coords[xOrY] is ${coords[xOrY]}`);
            if (coords[xOrY] + shipLength <= 11) {
              // necessary for loop
              // make array of proposed ship locations
              let proposedShipLoc = [];
              for (let i=0; i < shipLength; i++) {
                // if placing horizontally
                if (dir === 'horizontal') {
                  proposedShipLoc.push(gameboard.getCells()[Number(locatorIdx)+Number(i)]);
                  // if placing vertically
                } else {
                  proposedShipLoc.push(gameboard.getCells()[Number(locatorIdx)+(Number(i)*10)]);
                }
              }
              // check if there's a ship in the way of where you want to place ship
              for (let i=0; i < shipLength; i++) {
                if (gameboard.isThereAShipHere(proposedShipLoc[i][0], proposedShipLoc[i][1]) == true) {
                  console.log ('ship in the way');
                  return;
                }
              }
              // this never returns true...
              if (gameboard.isThereAShipHere(coords[0], coords[1]) == true) {
                console.log('ship already here')
                return 'ship already here'
              } else {

              // here should I instead create each ship?
              // for as many cells as the ship takes up
              for (let i=0; i < shipLength; i++) {
                if (dir === 'horizontal') {
                  // make variable of cell DOM element
                  let currentCell = document.getElementById(`gb1-${Number(locatorIdx)+i}`);
                  // change color of cell to show a ship
                  currentCell.classList = `cell cell-ship`
                  // push coordinates of cell into ship's location array
                  let currentCellCoords = [(Number(coords[0]) + Number(i)),coords[1]];
                  console.log('About to push cell location to current ship location');
                  console.log(currentCellCoords);
                  currentShip.location.push(currentCellCoords);    
                } else if (dir === 'vertical') {
                  let currentCell = document.getElementById(`gb1-${Number(locatorIdx)+(i*10)}`);
                  currentCell.classList = `cell cell-ship`
                  let currentCellCoords = [coords[0],(Number(coords[1]) + Number(i))];
                  console.log('About to push cell location to current ship location');
                  console.log(currentCellCoords);
                  currentShip.location.push(currentCellCoords);  
                }
              }
              shipIdx += 1;
              console.log(`This many ships have been placed: ${shipIdx}`);
              gbcontainer1.removeEventListener('click', clickHandler);

              // recurse
              return placeShips(name, gameboard, shipIdx);
            } // end if there is no ship there
            }// end if it fits on board
            else {
              return;
            }
        }
      }  // end clickhandler
    gbcontainer1.addEventListener('click', clickHandler)
  }
} // END PLACE SHIPS FUNCTION

// WELCOME FUNCTION
function welcome() {
  // the button to submit name
  const nameBtn = document.getElementById('namebtn');
  nameBtn.addEventListener('click',function(){
    // get player 1 name from form
    const p1name = document.getElementById('p1name').value;
    // create gameboard
    let gameboardOne = gameboardFactory('gameboardOne');
    // hide name start form
    welcomeform.classList = 'hidden';
    // show placement stuff
    placementwrapper.classList = 'shown wrappergrid';
    // let player one place ships
    placeShips(p1name, gameboardOne);
    // remove name start form
    welcomeform.remove();
  });
}

export { createBoards, placeShips, welcome }
