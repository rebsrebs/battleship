const humanPlayerFactory = (name) => {
  const category = 'human';

  const attack = (a,b,board) => {
    board.receiveAttack(a,b);
    return 'attacked';
  }

    // PLACE SHIPS RECURSIVE FUNCTION
  function placeShips (name, gameboard, shipIdx = 0) {
    // base case
    if (shipIdx >  gameboard.getPlacedShips().length-1) {
      document.getElementById('placementwrapper').classList = 'hidden';
      document.getElementById('startgamebtnwrapper').classList='shown wrappergrid';
      return;
    } else {
        let currentShip = gameboard.getPlacedShips()[shipIdx];
        document.getElementById('placemessage').textContent = `Admiral ${name}, please place your ${currentShip.ship.name}.`;
        var clickHandler = function(e) {
          let target = e.target;
          if (target.classList.contains('cell')) {
            var cellID = target.id;
            var locatorIdx = cellID.slice(4);
            var coords = gameboard.getCells()[locatorIdx];
            let shipLength = currentShip.ship.length;
            let xOrY = undefined;
            let dir = directionDisplay.getAttribute("data-status");
            if (dir === 'horizontal') {
              xOrY = 0;
            } else {
              xOrY = 1;
            }
              // if it fits on board
              console.log(`The coords[xOrY] is ${coords[xOrY]}`);
              if (coords[xOrY] + shipLength <= 11) {
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
                // check if there's a ship in the way of where you want to place ship
                for (let i=0; i < shipLength; i++) {
                  if (gameboard.isThereAShipHere(proposedShipLoc[i][0], proposedShipLoc[i][1]) == true) {
                    console.log ('ship in the way');
                    return;
                  }
                }

                for (let i=0; i < shipLength; i++) {
                  if (dir === 'horizontal') {
                    let currentCell = id(`gb1-${Number(locatorIdx)+i}`);
                    currentCell.classList = `cell cell-ship`
                    let currentCellCoords = [(Number(coords[0]) + Number(i)),coords[1]];
                    currentShip.location.push(currentCellCoords);    
                  } else if (dir === 'vertical') {
                    let currentCell = document.getElementById(`gb1-${Number(locatorIdx)+(i*10)}`);
                    currentCell.classList = `cell cell-ship`
                    let currentCellCoords = [coords[0],(Number(coords[1]) + Number(i))];
                    currentShip.location.push(currentCellCoords);  
                  }
                }
                shipIdx += 1;
                gbcontainer1.removeEventListener('click', clickHandler);

                // recurse
                return placeShips(name, gameboard, shipIdx);
              }// end if it fits on board
              else {
                return;
              }
          }
        }  // end clickhandler
      gbcontainer1.addEventListener('click', clickHandler)
    }
  } // END PLACE SHIPS FUNCTION

  return {name, category, attack, placeShips};
};

const AIPlayerFactory = (name) => {
  const category = 'robot';
  const placeAIships = (board) => {
    console.log('Placing AI ships');
  }
  const attack = (board) => {
    let possibleMoves = board.getPossible();
    let shot = possibleMoves[Math.floor(Math.random()*possibleMoves.length)];
    let a = shot[0];
    let b = shot[1];
    board.receiveAttack(a,b);
    return 'attacked';
  }
  return {name, category, attack};
};

export { humanPlayerFactory, AIPlayerFactory }
