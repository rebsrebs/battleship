import { gameboardFactory } from "./gameboard";
import { playGame } from "./gameloop";
import { id } from "./helpers";

const welcomeform = id('welcomeform');
const placementwrapper = id('placementwrapper');
const placeMsg = id('placemessage');
const gbcontainer1 = id('gbcontainer1');
const gbcontainer2 = id('gbcontainer2');
const toggleBtn = id('togglebtn');
const directionDisplay = id('axis');
const p1move = id('p1move');
const p2move = id('p2move');
const movePrompt = id('moveprompt');
const messagearea = id('messagearea');
const playAgainBtn = id('playagainbtn');
const colorKeyExpandIcon = id('colorkeyexpandicon');
const rulesExpandIcon = id('rulesexpandicon');
const gameOverOverlay = id('gameoveroverlay');
const moveWrapper = id('movewrapper');

const theGameObject = {
  gb1object: null,
  gb2object: null,
  p1object: null,
  p2object: null,
  destroy() {
    this.gb1object = null;
    this.gb2object = null;
    this.p1object = null;
    this.p2object = null;
  }
}

const gb1cells = Array.from(gbcontainer1.querySelectorAll(".cell"));


// SIDEBAR UI

// expand or hide element using aria controls
function showHide(e) {
  console.log('running showHide function')
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

// cross out ship on scoreboard - use when sunk
function crossOutShip(board, ship) {
  if (ship === 'patrol boat') {
    ship = 'patrolboat';
  }
  const targ = document.getElementById(`${board}-${ship}`);
  targ.classList.add('scoresunkship');
}

function resetScoreBoard() {
  const scoreShips = Array.from(document.querySelectorAll('.scoreli'));
  scoreShips.forEach((ship) => ship.classList.remove('scoresunkship'));
}

// END SIDEBAR UI



// HEADER UI

// WELCOME FUNCTION
function welcome() {
  const nameBtn = id('namebtn');
  nameBtn.addEventListener('click', function(){
    messagearea.classList.remove('firehere');
    let p1name = id('p1name').value;
    console.log(`p1name is ${p1name}`);
    welcomeform.classList = 'hidden';
    welcomeform.reset();
    placementwrapper.classList = 'shown msgwrapper';
    // create human's gameboard object
    // CREATING gb1object
    if (gb1) {
      gb1 = gameboardFactory('gb1', 'your');
    } else {
    var gb1 = gameboardFactory('gb1', 'your');
    }
    console.log('gb1 is');
    console.log(gb1);
    theGameObject.gb1object = gb1;
    gbcontainer1.classList.add('placeshipshere');
    placeShips(p1name, theGameObject.gb1object);
  });
}

function toggleShipAxis() {
  if (directionDisplay.getAttribute("data-status") === 'horizontal') {
    directionDisplay.setAttribute("data-status", "vertical");
    directionDisplay.textContent="vertical";
  } else {
    directionDisplay.setAttribute("data-status", "horizontal");
    directionDisplay.textContent="horizontal";
  }
}

toggleBtn.addEventListener('click', toggleShipAxis);

function resetMessageArea() {
  p1move.textContent = '';
  p2move.textContent = '';
  movePrompt.textContent = '';
}

// in progress
function playAgainHandler() {
  // theGameObject.destroy();
  // gameOverOverlay.classList = 'hidden';
  // moveWrapper.classList = 'hidden';
  // welcomeform.classList = 'shown msgwrapper firehere';
  // p1move.textContent = '';
  // p2move.textContent = '';
  // movePrompt.textContent = '';
  // resetScoreBoard();
  // emptyBoards();
  // createBoards();
  // welcome();
  location.reload();
}

playAgainBtn.addEventListener('click', playAgainHandler);

// END HEADER UI



// MAIN AREA UI

// CREATE CELLS FOR TWO DOM GAMEBOARDS - called by index.js
const createBoards = () => {
  for (let i = 0; i < 100; i++) {
    // var cell = document.createElement('button');
    let cell = document.createElement('div');
    // cell.setAttribute("type", "button")
    cell.className = (`cell cell-plain`);
    cell.id = (`gb1-${i}`);
    cell.setAttribute("tabindex","0");
    cell.setAttribute("z-index","5");
    gbcontainer1.appendChild(cell);
  }

  for (let i = 0; i < 100; i++) {
    // var cell = document.createElement('button');
    let cell = document.createElement('div');
    // cell.setAttribute("type", "button")
    cell.className = (`cell cell-plain`)
    cell.id = (`gb2-${i}`);
    cell.setAttribute("z-index","5");
    gbcontainer2.appendChild(cell);
  }
} // END CREATE BOARDS


// EMPTY BOARDS
function emptyBoards() {
  while (gbcontainer1.firstChild) {
    gbcontainer1.removeChild(gbcontainer1.firstChild);
  }
  while (gbcontainer2.firstChild) {
    gbcontainer2.removeChild(gbcontainer2.firstChild);
  }
}
// END EMPTY BOARDS


// PLACE SHIPS RECURSIVE FUNCTION
function placeShips (name, gameboard, shipIdx = 0) {
  console.log('placeShips is running, gameboard.getPlacedShips():')
  console.log(gameboard.getPlacedShips());
  // BASE CASE - if all gameboard ships have been placed
  if (shipIdx >  gameboard.getPlacedShips().length-1) {
    console.log('base case - human ships placed');
    placementwrapper.classList = 'hidden';
    gbcontainer1.classList.remove('placeshipshere');
    rulesExpandIcon.click();
    colorKeyExpandIcon.click();
    playGame(name, gameboard)
    return;
  // NOT BASE CASE
  } else {
    // KEYBOARD STUFF
    
    gbcontainer1.setAttribute("tabindex","0");
    gbcontainer1.addEventListener('keydown', function(ev){
      if (ev.key === "Enter") {
        ev.preventDefault()
      }
    })
    gb1cells.forEach(element => element.addEventListener('keydown', function(ev){
      if (ev.key === "Enter") {
        ev.preventDefault()
      }
    }))
    document.addEventListener('keyup', function(e) {
      if (e.key === 'a') {
        console.log('a was pressed');
        toggleShipAxis();
      }
    })
    // end keyboard stuff

    let currentShip = gameboard.getPlacedShips()[shipIdx];
    // placeMsg.textContent = `Admiral ${name}, please place your ${currentShip.ship.name}.`;
    placeMsg.innerHTML = "Admiral " + name + ", please place your <span class='shipname'> " + currentShip.ship.name + ".</span>";

    // define hoverHandler
    let hoverHandler = function(e) {
      // console.log('hovered!');
      let target = e.target;
      if (target.classList.contains('cell')) {
       let cellID = target.id;
       let locatorIdx = cellID.slice(4);
       let coords = gameboard.getCells()[locatorIdx];
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
                currentCell.classList = 'cell cell-hover'
              }
            } else if (dir === 'vertical') {
                let currentCell = document.getElementById(`${gameboard.name}-${Number(locatorIdx) + Number(i)*10}`)
                if (!currentCell.classList.contains('cell-placed')) {
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
        let cellID = target.id;
        let locatorIdx = cellID.slice(4);
        let coords = gameboard.getCells()[locatorIdx];
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
      //KEYBOARD STUFF
      gb1cells.forEach(el => el.onkeyup = null);
      // gb1cells.forEach(el => el.focusin = null);
      // gb1cells.forEach(el => el.focusout = null);
      // end keyboard stuff

    let target = e.target;
      if (target.classList.contains('cell')) {
        let cellID = target.id;
        let locatorIdx = cellID.slice(4);
        // console.log(`locator index is ${locatorIdx}`)
        // coords is the array x,y representation of the cell in the grid
        let coords = gameboard.getCells()[locatorIdx];
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

    // KEYBOARD STUFF
    function handleEnter(event) {
      event.preventDefault;
      if (event.key === 'Enter') {
        event.target.removeEventListener('keyup',handleEnter)
        console.log('Enter was pressed.')
        return event.target.click();
      }
    }
    // add handleEnter listener
    gb1cells.forEach(element => element.addEventListener('keyup', handleEnter))
    // gb1cells.forEach(element => element.addEventListener('focusin', hoverHandler));
    // gb1cells.forEach(element => element.addEventListener('focusout', unhoverHandler));
    // end keyboard stuff

  }  // end not base case
} // END PLACE SHIPS FUNCTION



export { createBoards, placeShips, welcome, resetMessageArea, crossOutShip, theGameObject }
