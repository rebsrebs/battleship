import { shipFactory } from "./ship";

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

const gameboardFactory = (name) => {

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
   const patrolBoat = shipFactory('patrolBoat', 2);

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
    console.log(`isThereAShipHere method is running, checking if ${x}, ${y} already has a ship.` )
    let result = '';
    for (let i = 0; i < placedShips.length; i++) {
      let currentLocArray = placedShips[i].location;
      // console.log(`currentLocArray is ${currentLocArray}`);
      var match = currentLocArray.find(arr => arr[0] === x && arr[1] === y);
      if (match != undefined) {
        return result = placedShips[i].ship;
      } else if (match === undefined) {
        continue;
      }
    } // end for loop
    return result;
  }

  const delay = ms => new Promise(res => setTimeout(res, ms));

  // Receive Attack Method
  const receiveAttack = async (x, y) => {
    await delay(800);
    console.log(`${name} is receiving attack at ${x}, ${y}`);
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
      console.log(`gbNum is ${gbNum} and attackerNum is ${attackerNum}`)
      let pCode = document.getElementById(`p${attackerNum}move`);
      
      // IF HIT
      if (isThereAShipHere(x,y) != '') {
        let currentShip = isThereAShipHere(x,y);
        currentShip.hit();
        pCode.textContent += ` and hit ${name}'s ${currentShip.name}.`
        targetCell.classList = 'cell cell-ship'
        if (currentShip.isSunk() == true) {
          sunk += 1;
        }
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
      console.log(`There are ${possible.length} moves left on ${name} gameboard`)
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

  return { name, getCells, getMissed, receiveAttack, getSunk, areAllSunk,  getPossible, getPlacedShips, getNumShipsToPlace, getFiredShots, isThereAShipHere }
}

export { gameboardFactory };
