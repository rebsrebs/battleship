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



// change to 
// if hzbtn is active, direction = hz, if vtbtn is active, direction = vt
// function placeShips (gameboard, shipIdx = 0, direction) {

function placeShips (gameboard, shipIdx = 0) {

  // base case
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
          // target.classList = (`cell cell-hover`);
          var cellID = target.id;
          var locatorIdx = cellID.slice(4);
          var coords = gameboard.getCells()[locatorIdx];

          let shipLength = currentShip.ship.length;
          console.log(`shipLength is ${shipLength}`);

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
            if (coords[xOrY] + shipLength <= 11) {

              // make array of proposed ship locations
              let proposedShipLoc = [];
              for (let i=0; i < shipLength; i++) {
                if (dir === 'horizontal') {
                  proposedShipLoc.push(gameboard.getCells()[Number(locatorIdx)+Number(i)]);
                } else {
                  proposedShipLoc.push(gameboard.getCells()[Number(locatorIdx)+(Number(i)*10)]);
                }
              }

              for (let i=0; i < shipLength; i++) {
                if (gameboard.isThereAShipHere(proposedShipLoc[i][0], proposedShipLoc[i][1]) == true) {
                  console.log ('ship in the way');
                  return;
                }
              }
             
              if (gameboard.isThereAShipHere(coords[0], coords[1]) == true) {
                console.log('ship already here')
                return 'ship already here'
              } else {

              for (let i=0; i < shipLength; i++) {
                if (xOrY === 0) {
                  let currentCell = document.getElementById(`gb1-${Number(locatorIdx)+i}`);
                currentCell.classList = `cell cell-ship`
                currentShip.location.push([(Number(coords[0]) + Number(i)), coords[1]]);    
                } else if (xOrY === 1) {
                  let currentCell = document.getElementById(`gb1-${Number(locatorIdx)+(i*10)}`);
                currentCell.classList = `cell cell-ship`
                  currentShip.location.push([coords[0], (Number(coords[0]) + Number(i))]);  
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
  return 'done a cycle';
}

export { createBoards, placeShips }
