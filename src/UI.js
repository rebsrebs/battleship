import { gameboardFactory } from "./gameboard";
import { playGame } from "./gameloop";

const id = (ID) => document.getElementById(ID);
const welcomeform = id('welcomeform');
const placementwrapper = id('placementwrapper');
const placeMsg = id('placemessage');
const gbcontainer1 = id('gbcontainer1');
const gbcontainer2 = id('gbcontainer2');
// const rulesbtn = id('rulesbtn');
// const rules = id('rules');
const toggleBtn = id('togglebtn');
const directionDisplay = id('direction');
const p1move = id('p1move');
const p2move = id('p2move');
const movePrompt = id('moveprompt');
const messagearea = id('messagearea');
const playAgainBtn = id('playagainbtn');
const colorKeyExpandIcon = id('colorkeyexpandicon');
const rulesExpandIcon = id('rulesexpandicon');

const delay = ms => new Promise(res => setTimeout(res, ms));

function showHide(e) {
  let ariaExpValue = e.target.getAttribute("aria-expanded");
  let ariaCtrlValue = e.target.getAttribute("aria-controls");
  let controlled = document.getElementById(ariaCtrlValue);
 
  if (ariaExpValue === 'false') {
    e.target.setAttribute("aria-expanded","true");
    e.target.setAttribute("src", "../src/images/minus-square.svg")
    e.target.setAttribute("title","hide");
    controlled.classList = 'shown';
  } else {
    e.target.setAttribute("aria-expanded", "false");
    e.target.setAttribute("src", "../src/images/plus-square.svg")
    e.target.setAttribute("title","expand");
    controlled.classList = 'hidden';
  }
}

colorKeyExpandIcon.addEventListener('click', showHide);
rulesExpandIcon.addEventListener('click', showHide);


function crossOutShip(board, ship) {
  if (ship === 'patrol boat') {
    ship = 'patrolboat';
  }
  const targ = document.getElementById(`${board}-${ship}`);
  targ.classList.add('scoresunkship');
}

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

// CREATE CELLS FOR TWO DOM GAMEBOARDS - called by index.js
const createBoards = () => {
  for (let i = 0; i < 100; i++) {
    // var cell = document.createElement('button');
    var cell = document.createElement('div');
    // cell.setAttribute("type", "button")
    cell.className = (`cell cell-plain`);
    cell.id = (`gb1-${i}`);
    cell.setAttribute("tabindex","0");
    gbcontainer1.appendChild(cell);
  }

  for (let i = 0; i < 100; i++) {
    // var cell = document.createElement('button');
    var cell = document.createElement('div');
    // cell.setAttribute("type", "button")
    cell.className = (`cell cell-plain`)
    cell.id = (`gb2-${i}`);
    gbcontainer2.appendChild(cell);
  }
} // END CREATE BOARDS

// WELCOME FUNCTION
// When you submit your name, hide the welcome form, show the placement wrapper,
// create the gameboards pbjects
function welcome() {
  const nameBtn = id('namebtn');
  nameBtn.addEventListener('click', function(){
    messagearea.classList.remove('firehere');
    const p1name = id('p1name').value;
    welcomeform.classList = 'hidden';
    welcomeform.remove();
    // placementwrapper.classList = 'shown wrappergrid';
    placementwrapper.classList = 'shown flexing';
    // create human's gameboard object
    let gb1 = gameboardFactory('gb1', 'your');
    gbcontainer1.classList.add('placeshipshere');
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


// PLACE SHIPS RECURSIVE FUNCTION
function placeShips (name, gameboard, shipIdx = 0) {
  // BASE CASE - if all gameboard ships have been placed
  if (shipIdx >  gameboard.getPlacedShips().length-1) {
    console.log('base case - human ships placed');
    placementwrapper.classList = 'hidden';
    gbcontainer1.classList.remove('placeshipshere');
    playGame(name, gameboard)
    return;
  // NOT BASE CASE
  } else {
    

    let currentShip = gameboard.getPlacedShips()[shipIdx];
    placeMsg.textContent = `Admiral ${name}, please place your ${currentShip.ship.name}.`;

    // define hoverHandler
    var hoverHandler = function(e) {
      // console.log('hovered!');
      let target = e.target;
      if (target.classList.contains('cell')) {
        var cellID = target.id;
        var locatorIdx = cellID.slice(4);
        var coords = gameboard.getCells()[locatorIdx];
        let shipLength = currentShip.ship.length;
        let xOrY = undefined;
        let dir = directionDisplay.getAttribute("data-status");
        if (dir === 'horizontal') {
          xOrY = 0;
        } else {
          xOrY = 1;
        }
        if (coords[xOrY] + shipLength <= 11) {
          for (let i=0; i < shipLength; i++) {
            if (dir === 'horizontal') {
              let currentCell = document.getElementById(`${gameboard.name}-${Number(locatorIdx) + Number(i)}`)
              if (!currentCell.classList.contains('cell-placed')) {
                // console.log('no ship class')
              currentCell.classList = 'cell cell-hover'
              }
            } else if (dir === 'vertical') {
              let currentCell = document.getElementById(`${gameboard.name}-${Number(locatorIdx) + Number(i)*10}`)
              if (!currentCell.classList.contains('cell-placed')) {
                // console.log('no ship class')
                currentCell.classList = 'cell cell-hover'
                }
            }
          } // end for loop
        }
      }
    } // end hover handler

    // define unhoverHandler
    var unhoverHandler = function(e) {
      // console.log('unhovered!')
      let target = e.target;
      if (target.classList.contains('cell')) {
        var cellID = target.id;
        var locatorIdx = cellID.slice(4);
        var coords = gameboard.getCells()[locatorIdx];
        let shipLength = currentShip.ship.length;
        let xOrY = undefined;
        let dir = directionDisplay.getAttribute("data-status");
        if (dir === 'horizontal') {
          xOrY = 0;
        } else {
          xOrY = 1;
        }
        if (coords[xOrY] + shipLength <= 11) {
          for (let i=0; i < shipLength; i++) {
            if (dir === 'horizontal') {
              let currentCell = document.getElementById(`${gameboard.name}-${Number(locatorIdx) + Number(i)}`)
              if (currentCell.classList.contains('cell-hover')) {
                currentCell.classList.remove('cell-hover');
              }
            } else if (dir === 'vertical') {
              let currentCell = document.getElementById(`${gameboard.name}-${Number(locatorIdx) + Number(i)*10}`)
              if (currentCell.classList.contains('cell-hover')) {
                currentCell.classList.remove('cell-hover');
              }
            }
          } // end for loop
        }
      }
    } // end unhover handler

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
              // console.log ('ship in the way');
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
              currentShip.location.push(currentCellCoords);    
            } else if (dir === 'vertical') {
              let currentCell = document.getElementById(`gb1-${Number(locatorIdx)+(i*10)}`);
              currentCell.classList = `cell cell-placed`
              let currentCellCoords = [coords[0],(Number(coords[1]) + Number(i))];
              currentShip.location.push(currentCellCoords);  
            }
          }
          shipIdx += 1;
          console.log(`This many ships have been placed: ${shipIdx}`);
          gbcontainer1.removeEventListener('click', clickHandler);
          gbcontainer1.removeEventListener('mouseover', hoverHandler);
          gbcontainer1.removeEventListener('mouseout', unhoverHandler);
          // recurse
          return placeShips(name, gameboard, shipIdx);
        // end if it fits on board
        } else {
          return;
        }
      } // end if target contains 'cell' class
    } // end clickhandler
    gbcontainer1.addEventListener('click', clickHandler)
    gbcontainer1.addEventListener('mouseout', unhoverHandler);
    gbcontainer1.addEventListener('mouseover', hoverHandler);
  }  // end not base case
} // END PLACE SHIPS FUNCTION

function cellMiss(targ) {
  targ.classList = 'cell cell-miss'
}



function resetMessageArea() {
  p1move.textContent = '';
  p2move.textContent = '';
  movePrompt.textContent = '';
}

function playAgainHandler() {
  console.log('Play again button was clicked.')
}

playAgainBtn.addEventListener('click', playAgainHandler);







export { createBoards, placeShips, welcome, updateText, showWrapper, hide, cellMiss, resetMessageArea, delay, crossOutShip }
