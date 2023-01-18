import { shipFactory } from "./ship";
import { crossOutShip } from "./UI";

const id = (ID) => document.getElementById(ID);
const moveWrapper = id('movewrapper');

// get index from DOMgameboard ID and return location
function lookUpLocation(clickedCell) {
  let cellID = clickedCell.ID;
  let gb = cellID.slice(0,3);
  let idx = cellID.slice(4);
  let loc = gb.getCells()[idx];
  return loc;
}

const gameboardFactory = (name, posessive) => {
  let numShipsToPlace = 5;
  // create array of 100 cells
  let cells = [];
  for (let y = 1; y < 11; y++) {
    for (let x = 1; x< 11; x++) {
      cells.push([x,y]);
    }
  }
  // declare more arrays
  let possible = [...cells]; // possible moves
  let missed = [];
  let firedShots = []; 
  let sunk = 0; // sunk ships
   // create ships
   const carrier = shipFactory('carrier', 5);
   const battleship = shipFactory('battleship', 4);
   const destroyer = shipFactory('destroyer', 3);
   const submarine = shipFactory('submarine', 3);
   const patrolBoat = shipFactory('patrol boat', 2);
  // create placedShips object
  let placedShips = [
    {
      ship: carrier,
      location: []
    },
    {
      ship: battleship,
      location: []
    },
    {
      ship: destroyer,
      location: []
    },
    {
      ship: submarine,
      location: []
    },
    {
      ship: patrolBoat,
      location: []
    }
  ]
  // Is there a ship here function - returns true or undefined
  const isThereAShipHere = (x ,y) => {
    let result = '';
    for (let i = 0; i < placedShips.length; i++) {
      let currentLocArray = placedShips[i].location;
      var match = currentLocArray.find(arr => arr[0] === x && arr[1] === y);
      if (match != undefined) {
        return result = placedShips[i].ship;
      } else if (match === undefined) {
        continue;
      }
    } // end for loop
    return result;
  } // end isThereAShipHere method

  const delay = ms => new Promise(res => setTimeout(res, ms));

  // Receive Attack Method
  const receiveAttack = async (x, y) => {
    console.log(`${name}'s is receiveAttack is running at ${x}, ${y}`);
    await delay(500);
    // make variable of DOM element of attacked spot
    let targetCellNum = cells.indexOf((cells.find((el) => el[0] === x && el[1] === y)));
    let targetCell = document.getElementById(`${name}-${targetCellNum}`);
    // remove attacked spot from possible moves array
    let noLongerPossible = possible.indexOf((cells.find((el) => el[0] === x && el[1] === y)));
    if (noLongerPossible >= 0) {
    possible.splice(noLongerPossible,1);
    }
    // Check if this shot was already fired
    var alreadyFired = firedShots.find(arr=> arr[0] ===x && arr[1] ===y);
    if (alreadyFired != undefined) {
      return 'Already tried this spot.'
    // if shot has not yet been fired in this game
    } else {
      const firedShot = [x,y];
      firedShots.push(firedShot);
      // GET CORRECT DOM ELEMENT TO UPDATE
      let gbNum = name.slice(2);
      if (gbNum == 1) {
        var attackerNum = 2;
      } else if (gbNum == 2) {
        var attackerNum = 1;
      }
      let pCode = document.getElementById(`p${attackerNum}move`);
      // IF HIT
      if (isThereAShipHere(x,y) != '') {
        let currentShip = isThereAShipHere(x,y);
        currentShip.hit();
        targetCell.classList = 'cell cell-hit-ship'
        if (currentShip.isSunk() == true) {
          sunk += 1;
          // change classList of sunk ship cells to 'cell cell-sunk-ship'
          let sunkCells = placedShips.find((item) => item.ship.name === currentShip.name).location;
          for (let i = 0; i < sunkCells.length; i++) {
            let xx = sunkCells[i][0];
            let yy = sunkCells[i][1];
            // later write utility function to do this?
            let locId = cells.indexOf((cells.find((el) => el[0] === xx && el[1] === yy)));
            let tarCel = document.getElementById(`gb${gbNum}-${locId}`);
            tarCel.classList = 'cell cell-sunk-ship';
          }

          pCode.textContent += ` and sunk ${posessive} ${currentShip.name}!`
          crossOutShip(name, currentShip.name);
        } else {
          pCode.textContent += ` and hit ${posessive} ${currentShip.name}.`
        }
        // could i return all sunk info here?
        return 'hit!';
      // IF MISS
      } else {
        missed.push(firedShot);
        pCode.textContent += ` and missed.`
        targetCell.classList = 'cell cell-miss'
        return 'miss!';
      }
    } // end if shot was not previously fired
  } // end receiveAttack method
  
  // Are All Sunk Method
  const areAllSunk = () => {
    if (sunk >= 5) {
      console.log(`All ${name} ships are sunk.`)
      return true;
    } else {
      // console.log(`There are ${possible.length} moves left on ${name} gameboard`)
      console.log(`Not all ships on ${name} have been sunk yet.`)
      return false;
    }
  }

  // Getters
  const getCells = () => cells;
  const getMissed = () => missed;
  const getFiredShots = () => firedShots;
  const getSunk = () => sunk;
  const getPossible = () => possible;
  const getPlacedShips = () => placedShips;
  const getNumShipsToPlace = () => numShipsToPlace;

  return { name, posessive, getCells, getMissed, receiveAttack, getSunk, areAllSunk, getPossible, getPlacedShips, getNumShipsToPlace, getFiredShots, isThereAShipHere }
}

export { gameboardFactory };
