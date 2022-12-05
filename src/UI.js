// import { globsToMatcher } from "jest-util";
// import { gameboardFactory } from "./gameboard";
// import { gameLoop } from "./gameloop";
// import { shipFactory } from "./ship";

const msgcontainer = document.getElementById('msgcontainer');
const gbcontainer1 = document.getElementById('gbcontainer1');
const gbcontainer2 = document.getElementById('gbcontainer2');

// CREATE CELLS FOR TWO GAMEBOARDS
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
}



const testPlacement = (gameboard) => {
  // put event listener on gameboard container
  gbcontainer1.addEventListener('click', function(event) {
    // find out which cell was clicked
    let target = event.target;
    // if a cell was clicked
    if (target.classList.contains('cell')) {
      // change the cell classlist
      target.classList = (`cell cell-ship`);
      // log the cell id
      var cellID = target.id;
      console.log(cellID);

      var locatorIdx = cellID.slice(4);
      console.log(locatorIdx);

      var coords = gameboard.getCells()[locatorIdx];
      console.log(coords);
    }
  });
}

// const getShipPlacement = (gameboard) => {
//   for (let i=0; i < gameboard.placedShips.length; i++) {
//     console.log('Please place carrier');
//   }

//   const shipLocation = document.getElementById('shipLocation');
//   const shipLocationSubmit = document.getElementById('shipLocationSubmit');

//   shipLocationSubmit.addEventListener('click', () => {
//     gameboard.placedShips.carrier.location = shipLocation.value;
//   })

//   gbcontainer1.addEventListener('click', function () {
//     var currentCell = target.id;
//   })

//   for (let i = 0; i < shipsToPlace.length; i++) {
//     msgcontainer.textContent = `Please place your ${shipsToPlace[i].ship}.`;
//   }

//   // use index to look up location in array.
  
// }



export { createBoards, testPlacement }


// The game loop should set up a new game by creating Players and Gameboards. For now just populate each Gameboard with predetermined coordinates. You can implement a system for allowing players to place their ships later.
// We’ll leave the HTML implementation up to you for now, but you should display both the player’s boards and render them using information from the Gameboard class.
// You need methods to render the gameboards and to take user input for attacking. For attacks, let the user click on a coordinate in the enemy Gameboard.
