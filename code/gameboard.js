import { shipFactory } from "./ship";

const gameboardFactory = (name) => {
  // create array of 100 cells
  let cells = [];
  for (let x = 1; x < 11; x++) {
    for (let y = 1; y< 11; y++) {
      cells.push([x,y]);
    }
  }

  // check if location is on board

  

  // create array of missed shots
  let missed = [];

  // create carrier - 5 long
  const carrier = shipFactory(carrier, 5);
  let placedCarrier = {
    ship: carrier,
    location: [[1,1], [1,2],[1,3],[1,4],[1,5]],
  }

  // create battleship - 4 long
  const battleship = shipFactory(battleship, 4);
  let battleshipArray = [[2,1],[2,2],[2,3],[2,4]];

  // create destroyer - 3 long
  const destroyer = shipFactory(destroyer, 3);
  let destroyerArray = [[3,1],[3,2],[3,3]];

  // create submarine - 3 long
  const submarine = shipFactory(submarine, 3);
  let submarineArray = [[4,1],[4,2],[4,3]];

  // create patrol boat - 2 long
  const patrolBoat = shipFactory(patrolBoat, 2);
  let patrolBoatArray = [[5,1],[5,2]];

  let shipsArray = [battleshipArray,destroyerArray, submarineArray, patrolBoatArray];

  const receiveAttack = (x, y) => {
    if (patrolBoatArray.some(element => {
      element[0] === x})) {
        return 'hit!'
      } else {
        return 'miss!'
      }
    }
    

    // shipsArray.forEach(array => {
    //   array.forEach(location => {
    //     if (location[0] === x && location[1] === y) {
    //       hit = true;
    //       return 'hit!'
    //     }
    //   })
    // })
    // if (hit = false) {
    //   return 'miss!';
    // }
  

  const areAllSunk = () => {
    // if all ships are sunk return true
    // else return false
  }

  const getCells = () => cells;
  const getMissed = () => missed;

  return { name, getCells, getMissed, receiveAttack }
}

export { gameboardFactory };



  


// does a cell need to know if it has a battleship on it? i think not... the locations are stored in the battleship.