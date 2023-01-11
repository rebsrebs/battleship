const humanPlayerFactory = (name) => {
  const category = 'human';

  const attack = (a,b,board) => {
    return board.receiveAttack(a,b);
  }

  return {name, category, attack};
};

const AIPlayerFactory = (name) => {

  const category = 'robot';

  // PLACE AI SHIPS
  const placeAIships = (board, shipIdx = 0) => {
    // BASE CASE
    if (shipIdx > board.getPlacedShips().length-1) {
      console.log('base case - AI ships placed');
      return; 
    // NOT BASE CASE
    } else {
      console.log('Not base case. Still placing AI ships');
      let presentShip = board.getPlacedShips()[shipIdx];
      var choice = Math.round(Math.random());
      if (choice === 0) {
        var axis = 'horizontal';
      } else {
        var axis = 'vertical';
      }
      let shipLength = presentShip.ship.length;
      let randomIndex = Math.floor(Math.random() * 100);
      let coords = [...(board.getCells()[randomIndex])];
      // if it fits
      if (coords[choice] + shipLength <= 11 ) {
        console.log('coords[choice] + shipLength was <= 11, the ship fits!')
        var proposedShipLoc = [];
        for (let i = 0; i < shipLength; i++) {
          if (axis === 'horizontal') {
            proposedShipLoc.push(board.getCells()[Number(randomIndex)+Number(i)]);
          // if placing vertically
          } else {
            proposedShipLoc.push(board.getCells()[Number(randomIndex)+(Number(i)*10)]);
          }
        } // end for loop
        // checking if ship is in the way
        for (let i=0; i < shipLength; i++) {
          let tempLoc = [...(proposedShipLoc[i])];
          if (board.isThereAShipHere(tempLoc[0], tempLoc[1]) != '') {
            console.log ('SHIP IN THE WAY');
            presentShip.location = [];
            return placeAIships(board, shipIdx);
          } else {
            console.log('Apparently there is no ship in the way.')
            console.log('About to push tempLoc to presentShip location:');
            presentShip.location.push(tempLoc); 
          }
        } // end for loop for checking if ships are in the way
        shipIdx = shipIdx + 1;
        return placeAIships(board, shipIdx);
      } // end if it fits 
      else {
        console.log('The ship did not fit, running recursively again without increasing shipIdx')
        return placeAIships(board, shipIdx);
      }
    } // end not base case
  } // END PLACE AI SHIPS
  
  const attack = (board) => {
    console.log('AI is attacking')
    let possibleMoves = board.getPossible();
    let shot = possibleMoves[Math.floor(Math.random()*possibleMoves.length)];
    let a = shot[0];
    let b = shot[1];
    return board.receiveAttack(a,b);
  }
  return {name, category, attack, placeAIships};
};

export { humanPlayerFactory, AIPlayerFactory }
