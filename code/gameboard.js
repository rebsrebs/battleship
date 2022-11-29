import { emit } from "process";
import { shipFactory } from "./ship";

const gameboardFactory = (name) => {

   // create array of 100 cells
   let cells = [];
   for (let x = 1; x < 11; x++) {
     for (let y = 1; y< 11; y++) {
       cells.push([x,y]);
     }
   }

  // create ships
  const carrier = shipFactory('carrier', 5);
  const battleship = shipFactory('battleship', 4);
  const destroyer = shipFactory('destroyer', 3);
  const submarine = shipFactory('submarine', 3);
  const patrolBoat = shipFactory('patrolBoat', 2);


  // placedShips.push({
  //   'ship': carrier,
  //   'location': [[1,2], [1,3], [1,4], [1,5], [1,6]]
  // })

  // array of placed ships
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

    for (let i = 0; i < placedShips.length; i++) {
      let currentLocArray = placedShips[i].location;
      let match = currentLocArray.find(arr => arr[0] === x && arr[1] === y);
      if (match != undefined) {
        return 'hit!';
      } else {
        continue
      }
    }
    
  }
 


  
  

  

  

  // let shipsArray = [battleshipArray,destroyerArray, submarineArray, patrolBoatArray];

  // const receiveAttack = (x, y) => {
  //   if (patrolBoatArray.some(element => {
  //     element[0] === x})) {
  //       return 'hit!'
  //     } else {
  //       return 'miss!'
  //     }
  //   }
    

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
  

  // const areAllSunk = () => {
    // if all ships are sunk return true
    // else return false
  // }

  const getCells = () => cells;
  const getMissed = () => missed;

  return { name, getCells, getMissed, receiveAttack}
}

export { gameboardFactory};