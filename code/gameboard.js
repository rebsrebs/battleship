import { shipFactory } from "./ship";

const gameboardFactory = (name) => {

   // create array of 100 cells
   let cells = [];
   for (let x = 1; x < 11; x++) {
     for (let y = 1; y< 11; y++) {
       cells.push([x,y]);
     }
   }

  // create array of possible moves
  let possible = [...cells];
  // create array of misses
  let missed = [];
  // how many ships are sunk on board
  let sunk = 0;

  // create ships
  const carrier = shipFactory('carrier', 5);
  const battleship = shipFactory('battleship', 4);
  const destroyer = shipFactory('destroyer', 3);
  const submarine = shipFactory('submarine', 3);
  const patrolBoat = shipFactory('patrolBoat', 2);

  // place ships
  let placedShips = [
    {
      ship: carrier,
      location: [[1,2], [1,3], [1,4], [1,5], [1,6]]
    },
    {
      ship: battleship,
      location: [[2,2], [2,3], [2,4], [2,5]]
    },
    {
      ship: destroyer,
      location: [[3,2], [3,3], [3,4]]
    },
    {
      ship: submarine,
      location: [[4,2], [4,3], [4,4]]
    },
    {
      ship: patrolBoat,
      location: [[5,2], [5,3]]
    }
  ]

  const receiveAttack = (x, y) => {

    // find index of [x,y] in possible moves array
    let idx = possible.findIndex(arr => (arr[0] === x && arr[1] === y));

    // if move is not in possible array
    if (idx === -1) {
      return 'impossible!'

    // if move is possible
    } else if (idx != undefined) {

      // remove [x,y] from possible moves array
      possible.splice(idx,1);

      // for every object in the placedShips array
      for (let i = 0; i < placedShips.length; i++) {
        let currentLocArray = placedShips[i].location;
        let currentShip = placedShips[i].ship;
        var match = currentLocArray.find(arr => arr[0] === x && arr[1] === y);
        if (match != undefined) {
          currentShip.hit();
          if (currentShip.isSunk() == true) {
            sunk += 1;
          }
          return 'hit!';
        } 
      }

      if (match === undefined) {
      const missedShot = [x,y];
      missed.push(missedShot);
      return 'miss!';
      }

    } // end if move is possible loop
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
  const getSunk = () => sunk;
  const getPossible = () => possible;

  return { name, getCells, getMissed, receiveAttack, getSunk, areAllSunk, carrier, getPossible}
}

export { gameboardFactory};
