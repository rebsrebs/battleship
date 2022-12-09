const msg = document.getElementById('gb1msg');
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



const toggleBtn = document.getElementById('togglebtn');
const directionDisplay = document.getElementById('direction');

toggleBtn.addEventListener('click', function() {
  if (directionDisplay.getAttribute("data-status") === 'horizontal') {
    directionDisplay.setAttribute("data-status", "vertical");
    directionDisplay.textContent="vertical";
  } else {
    directionDisplay.setAttribute("data-status", "horizontal");
    directionDisplay.textContent="horizontal";
  }
})



function placeShips (gameboard, shipIdx = 0) {

  // base case
  // if all gameboard ships have been placed
  if (shipIdx >  gameboard.getPlacedShips().length-1) {
    msg.textContent = `Ships have all been placed.`;
    console.log('base case');
    console.log(`The gameboards placed ships are`);
    console.log(gameboard.getPlacedShips());
    return;
  } else {

      let currentShip = gameboard.getPlacedShips()[shipIdx];
      msg.textContent = `Please place your ${currentShip.ship.name}.`;

      // define clickHandler
      var clickHandler = function(e) {
        let target = e.target;
        if (target.classList.contains('cell')) {

          var cellID = target.id;
          var locatorIdx = cellID.slice(4);
          console.log(`locator index is ${locatorIdx}`)
          // coords is the array x,y representation of the cell in the grid
          var coords = gameboard.getCells()[locatorIdx];
          let shipLength = currentShip.ship.length;

          // if dir is horizontal:
          let xOrY = undefined;
          let dir = directionDisplay.getAttribute("data-status");
          if (dir === 'horizontal') {
            xOrY = 0;
            console.log(`xOrY is ${xOrY}`);
          } else {
            xOrY = 1;
            console.log(`xOrY is ${xOrY}`);
          }
        
            // if it fits on board
            // why isn't this logging?
            console.log(`The coords[xOrY] is ${coords[xOrY]}`);
            if (coords[xOrY] + shipLength <= 11) {

              // necessary for loop
              // make array of proposed ship locations
              let proposedShipLoc = [];
              for (let i=0; i < shipLength; i++) {
                // if placing horizontally
                if (dir === 'horizontal') {
                  proposedShipLoc.push(gameboard.getCells()[Number(locatorIdx)+Number(i)]);
                  // if placing vertically
                } else {
                  proposedShipLoc.push(gameboard.getCells()[Number(locatorIdx)+(Number(i)*10)]);
                }
              }

              // this is working itself
              for (let i=0; i < shipLength; i++) {
                if (gameboard.isThereAShipHere(proposedShipLoc[i][0], proposedShipLoc[i][1]) == true) {
                  console.log ('ship in the way');
                  return;
                }
              }
             
              // this never returns true...
              if (gameboard.isThereAShipHere(coords[0], coords[1]) == true) {
                console.log('ship already here')
                return 'ship already here'


              } else {

              // for as many cells as the ship takes up
              for (let i=0; i < shipLength; i++) {
                if (dir === 'horizontal') {
                  // make variable of cell DOM element
                  let currentCell = document.getElementById(`gb1-${Number(locatorIdx)+i}`);
                  // change color of cell to show a ship
                  currentCell.classList = `cell cell-ship`
                  // push coordinates of cell into ship's location array
                  let currentCellCoords = [(Number(coords[0]) + Number(i)),coords[1]];
                  console.log('About to push cell location to current ship location');
                  console.log(currentCellCoords);
                  currentShip.location.push(currentCellCoords);    
                } else if (dir === 'vertical') {
                  let currentCell = document.getElementById(`gb1-${Number(locatorIdx)+(i*10)}`);
                  currentCell.classList = `cell cell-ship`
                  let currentCellCoords = [coords[0],(Number(coords[1]) + Number(i))];
                  console.log('About to push cell location to current ship location');
                  console.log(currentCellCoords);
                  currentShip.location.push(currentCellCoords);  
                }
              }
              shipIdx += 1;
              console.log(`shipIdx is ${shipIdx}`);
              gbcontainer1.removeEventListener('click', clickHandler);

              // recurse
              return placeShips(gameboard, shipIdx);
            } // end if there is no ship there
            }// end if it fits on board
            else {
              return;
            }
        }
      }  // end clickhandler
    gbcontainer1.addEventListener('click', clickHandler)
  }
}

export { createBoards, placeShips }
