import { shipFactory } from "./ship";

const gameboardFactory = (name) => {

  let numShipsToPlace = 5;

   // create array of 100 cells
   let cells = [];
   for (let y = 1; y < 11; y++) {
     for (let x = 1; x< 11; x++) {
       cells.push([x,y]);
     }
   }

  // create array of possible moves
  let possible = [...cells];
  // create array of misses
  let missed = [];
  // create array of shots
  let firedShots = [];
  // how many ships are sunk on board
  let sunk = 0;

   // create ships
   const carrier = shipFactory('carrier', 5);
   const battleship = shipFactory('battleship', 4);
   const destroyer = shipFactory('destroyer', 3);
   const submarine = shipFactory('submarine', 3);
   const patrolBoat = shipFactory('patrolBoat', 2);

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


  // returns true or undefined
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
  }

  // not working, returns false no matter what
  function hasConflict(coords) { 
    return placedShips.some(ship => ship.location.includes(coords)) 
  }


  const receiveAttack = (x, y) => {
    console.log(`${name} is receiving attack at ${x}, ${y}`);

      // Check if this shot was already fired
      var alreadyFired = firedShots.find(arr=> arr[0] ===x && arr[1] ===y);
      if (alreadyFired != undefined) {
        return 'Already tried this spot.'

      // if shot has not yet been fired in this game
      } else {

        // record shot in firedShots array
        const firedShot = [x,y];
        firedShots.push(firedShot);


        if (isThereAShipHere(x,y) != '') {
          console.log('there is a ship here.')
          let currentShip = isThereAShipHere(x,y);
          currentShip.hit();
          if (currentShip.isSunk() == true) {
            sunk += 1;
          }
            return 'hit!';
            // updateUI
        } else {
          console.log('no ship here.')
          missed.push(firedShot);
          // updateUI
          return 'miss!';
        }
      } // end if shot was not previously fired
  }
  
  const areAllSunk = () => {
    if (sunk >= 5) {
      console.log(`All ${name} ships are sunk.`)
      return true;
    } else {
      // console.log(`There are ${possible.length} moves left on ${name} gameboard`)
      return false;
    }
  }

  const getCells = () => cells;
  const getMissed = () => missed;
  const getFiredShots = () => firedShots;
  const getSunk = () => sunk;
  const getPossible = () => possible;
  const getPlacedShips = () => placedShips;
  const getNumShipsToPlace = () => numShipsToPlace;

  return { name, getCells, getMissed, receiveAttack, getSunk, areAllSunk,  getPossible, getPlacedShips, getNumShipsToPlace, getFiredShots, isThereAShipHere, hasConflict }
}

export { gameboardFactory };
