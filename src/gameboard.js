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
    for (let i = 0; i < placedShips.length; i++) {
      let currentLocArray = placedShips[i].location;
      var match = currentLocArray.find(arr => arr[0] === x && arr[1] === y);
      if (match != undefined) {
        return true;
      } else if (match === undefined) {
        continue;
      }
    }
  }

  // not working, returns false no matter what
  function hasConflict(coords) { 
    return placedShips.some(ship => ship.location.includes(coords)) 
  }


  const receiveAttack = (x, y) => {

      // Check if this shot was already fired
      var alreadyFired = firedShots.find(arr=> arr[0] ===x && arr[1] ===y);
      if (alreadyFired != undefined) {
        return 'Already tried this spot.'

      // if shot has not yet been fired in this game
      } else {

        const firedShot = [x,y];
        firedShots.push(firedShot);

        if (isThereAShipHere(x,y) == true) {
          currentShip.hit();
          if (currentShip.isSunk() == true) {
            sunk += 1;
          }
            return 'hit!';
        } else {
          missed.push(firedShot);
          return 'miss!';
        }

        // for every object in the placedShips array
        // for (let i = 0; i < placedShips.length; i++) {
        //   let currentLocArray = placedShips[i].location;
        //   let currentShip = placedShips[i].ship;
        //   var match = currentLocArray.find(arr => arr[0] === x && arr[1] === y);

          // if the shot hit a ship
        //   if (match != undefined) {
        //     currentShip.hit();
        //     if (currentShip.isSunk() == true) {
        //       sunk += 1;
        //     }
        //     return 'hit!';
        //   } 
        // }

        // if the shot did not hit a ship
        // if (match === undefined) {
        // missed.push(firedShots);
        // return 'miss!';
        // }
      } // end if shot was not previously fired
   
    return;
  }
  
  const areAllSunk = () => {
    if (sunk >= 5) {
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
