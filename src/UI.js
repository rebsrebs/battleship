// import { globsToMatcher } from "jest-util";
import { gameboardFactory } from "./gameboard";
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



const testPlacement =  async (gameboard) => {

  //is this where the await goes?

  // for every ship in the gameboard's ship array
  for (let i = 0; i < gameboard.getPlacedShips().length; i++) {
    let currentShip = gameboard.getPlacedShips()[i];
    msgcontainer.textContent = `Please place your ${currentShip.ship.name}.`;

    // event listener for hover

    // put event listener on gameboard container
    // how to wait for the click before cycling through this outer for loop?

    gbcontainer1.addEventListener('click', function(event) {
      // find out which cell was clicked
      let target = event.target;
      // if a cell was clicked
      if (target.classList.contains('cell')) {
        // change the cell classlist
        target.classList = (`cell cell-hover`);
        // log the cell id
        var cellID = target.id;
        console.log(cellID);
        // get the locator number from cell id
        var locatorIdx = cellID.slice(4);
        console.log(locatorIdx);
        // use locator to get coords from cameboard cells array
        var coords = gameboard.getCells()[locatorIdx];
        console.log(coords);
        console.log(`coords[0] is ${coords[0]}`);
        // get ship length of ship being placed
        let shipLength = currentShip.ship.length;
        console.log(`shipLength is ${shipLength}`);

        // check if location can fit carrier
        // if X + length fits...
        if (coords[0] + shipLength <= 11) {
          for (let i=0; i < shipLength; i++) {
            // get current cell by id
            let currentCell = document.getElementById(`gb1-${Number(locatorIdx)+i}`);
            // change cell class
            currentCell.classList = `cell cell-ship`
            // push cell location coordinates to ship's location array
            currentShip.location.push([(Number(coords[0]) + Number(i)), coords[1]]);      // gameboard.setShipLocation(0,coords);
            
          }
        }
        console.log(`currentShip.location is:`)
        console.log(`${currentShip.location}`)
      } // end for loop that cycles through gameboard's ships
    }); // end eventListener

    // wait for click before going to the next one
  }  
}




// thinking out loud
// const cellClickHandler = async (event) => {
//   return coords;
// }
// const coordsToPass = await cellClickHandler();




export { createBoards, testPlacement }


// The game loop should set up a new game by creating Players and Gameboards. For now just populate each Gameboard with predetermined coordinates. You can implement a system for allowing players to place their ships later.
// We’ll leave the HTML implementation up to you for now, but you should display both the player’s boards and render them using information from the Gameboard class.
// You need methods to render the gameboards and to take user input for attacking. For attacks, let the user click on a coordinate in the enemy Gameboard.
