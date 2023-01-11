import { humanPlayerFactory, AIPlayerFactory } from "./player";
import { gameboardFactory } from "./gameboard";
import { gameLoop } from "./gameloop";

const id = (ID) => document.getElementById(ID);
const welcomeform = id('welcomeform');
const placementwrapper = id('placementwrapper');
const startGameWrapper = id('startgamebtnwrapper');
const moveWrapper = id('movewrapper');
const gameOverWrapper = id('gameoverwrapper');
const placeMsg = id('placemessage');
const gbcontainer1 = id('gbcontainer1');
const gbcontainer2 = id('gbcontainer2');
const rulesbtn = id('rulesbtn');
const startbtn = id('startbtn');
const rules = id('rules');
const movep2 = id('movep2');
const toggleBtn = id('togglebtn');
const directionDisplay = id('direction');
const startgamebtnwrapper = id('startgamebtnwrapper');

function updateText(ID, string) {
  const domElement = document.getElementById(ID);
  domElement.textContent = string;
}

function showWrapper(ID) {
  const domElement = document.getElementById(ID);
  domElement.classList = 'shown wrappergrid';
}

function hide(ID) {
  const domElement = document.getElementById(ID);
  domElement.classList = 'hidden';
}

// UI
// RULES EVENT LISTENER
rulesbtn.addEventListener("click", function() {
  if (rules.classList == 'hidden') {
    rules.classList = 'shown';
    rulesbtn.textContent = 'Hide Rules';
    // remove rules container from DOM?
  } else {
    rules.classList = 'hidden';
    rulesbtn.textContent = 'Show Rules';
  }
}) // END RULES EVENT LISTENER

// STAYS IN UI - CALLED BY INDEX.JS
// CREATE CELLS FOR TWO GAMEBOARDS
// DOM BOARDS ONLY
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
} // END CREATE BOARDS

// WELCOME FUNCTION
// When you submit your name, hide the welcome form, show the placement wrapper,
// create the gameboards
function welcome() {
  const nameBtn = id('namebtn');
  nameBtn.addEventListener('click', function(){
    const p1name = id('p1name').value;
    welcomeform.classList = 'hidden';
    welcomeform.remove();
    placementwrapper.classList = 'shown wrappergrid';
    let gb1 = gameboardFactory('gb1');
    // placeAIShips('Computer', gameboardTwo);
    placeShips(p1name, gb1); 

  });
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

// PLACE SHIPS RECURSIVE FUNCTION
function placeShips (name, gameboard, shipIdx = 0) {
  // base case - if all gameboard ships have been placed
  if (shipIdx >  gameboard.getPlacedShips().length-1) {
    console.log('base case - ships placed');
    placementwrapper.classList = 'hidden';
    gameLoop(name, gameboard)
    return;
  } else {
    let currentShip = gameboard.getPlacedShips()[shipIdx];
    placeMsg.textContent = `Admiral ${name}, please place your ${currentShip.ship.name}.`;
    // define clickHandler
    var clickHandler = function(e) {
    let target = e.target;
      if (target.classList.contains('cell')) {
        var cellID = target.id;
        var locatorIdx = cellID.slice(4);
        // console.log(`locator index is ${locatorIdx}`)
        // coords is the array x,y representation of the cell in the grid
        var coords = gameboard.getCells()[locatorIdx];
        let shipLength = currentShip.ship.length;
        // if dir is horizontal:
        let xOrY = undefined;
        let dir = directionDisplay.getAttribute("data-status");
        if (dir === 'horizontal') {
          xOrY = 0;
        } else {
          xOrY = 1;
        }
        // if it fits on board
        // console.log(`The coords[xOrY] is ${coords[xOrY]}`);
        if (coords[xOrY] + shipLength <= 11) {
          let proposedShipLoc = [];
          for (let i=0; i < shipLength; i++) {
            if (dir === 'horizontal') {
              proposedShipLoc.push(gameboard.getCells()[Number(locatorIdx)+Number(i)]);
            // if placing vertically
            } else {
              proposedShipLoc.push(gameboard.getCells()[Number(locatorIdx)+(Number(i)*10)]);
            }
          } // end for loop
          // check if there's a ship in the way of where you want to place ship
          for (let i=0; i < shipLength; i++) {
            if (gameboard.isThereAShipHere(proposedShipLoc[i][0], proposedShipLoc[i][1]) != '') {
              console.log ('ship in the way');
              return;
            }
          } // end for loop

          // for as many cells as the ship takes up
          for (let i=0; i < shipLength; i++) {
            if (dir === 'horizontal') {
              // make variable of cell DOM element
              let currentCell = id(`gb1-${Number(locatorIdx)+i}`);
              currentCell.classList = `cell cell-placed`
              // push coordinates of cell into ship's location array
              let currentCellCoords = [(Number(coords[0]) + Number(i)),coords[1]];
              // console.log('About to push cell location to current ship location');
              // console.log(currentCellCoords);
              currentShip.location.push(currentCellCoords);    
            } else if (dir === 'vertical') {
              let currentCell = document.getElementById(`gb1-${Number(locatorIdx)+(i*10)}`);
              currentCell.classList = `cell cell-placed`
              let currentCellCoords = [coords[0],(Number(coords[1]) + Number(i))];
              // console.log('About to push cell location to current ship location');
              // console.log(currentCellCoords);
              currentShip.location.push(currentCellCoords);  
            }
          }
          shipIdx += 1;
          console.log(`This many ships have been placed: ${shipIdx}`);
          gbcontainer1.removeEventListener('click', clickHandler);
          // recurse
          return placeShips(name, gameboard, shipIdx);
        // end if it fits on board
        } else {
          return;
        }
      } // end if target contains 'cell' class
    } // end clickhandler
    gbcontainer1.addEventListener('click', clickHandler)
  }  // end not base case
} // END PLACE SHIPS FUNCTION

function cellMiss(targ) {
  targ.classList = 'cell cell-miss'
}

function cellShip(targ) {
  targ.classList = 'cell cell-ship'
}

export { createBoards, placeShips, welcome, updateText, showWrapper, hide, cellMiss, cellShip }
