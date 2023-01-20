const humanPlayerFactory = (name) => {

  const category = 'human';

  const attack = (a,b,board) => {
    return board.receiveAttack(a,b);
  }

  return {name, category, attack};
};

const gbcontainer1 = document.getElementById('gbcontainer1');

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
  

  // AI Attack
  const attack = (otherBoard) => {
    console.log('AI is attacking')
    let possibleMoves = otherBoard.getPossible();
    let hitCell = gbcontainer1.querySelector('.cell-hit-ship');

    // if there are no hit cells
    if (hitCell == null) {
      console.log('There are no hit cells, so making a random move.')
      let shot = possibleMoves[Math.floor(Math.random()*possibleMoves.length)];

      // if I were trying to make the random move smarter
      // get the index number out of 100 of that shot
      let gbIdx = Number(otherBoard.getCells().indexOf(shot));
      // get the id of that cell in the DOM
      let gbId = `${otherBoard.name}-${gbIdx}`;
      let gbIdxAbove = +gbIdx-10;
      console.log(`${gbIdxAbove} is gbIdxAbove`);
      let gbIdxBelow = +gbIdx+10;
      console.log(`${gbIdxBelow} is gbIdxBelow`);
      let gbIdxRight = +gbIdx+1;
      console.log(`${gbIdxRight} is gbIdxRight`);
      let gbIdxLeft = +gbIdx-1;
      console.log(`${gbIdxLeft} is gbIdxLeft`);
      


      let a = shot[0];
      let b = shot[1];
      return otherBoard.receiveAttack(a,b);

    // if there is a hit but not sunk cell - find adjacent cell to fire on
    } else if (hitCell != null) {
      console.log('There is a hit cell.')
      let hitCells = Array.from(gbcontainer1.querySelectorAll('.cell-hit-ship'));

      // figure out which direction hit cells are going in
      let hitDirection = '';
      // if there is more than one hit cell
      if (hitCells.length > 1) {
        console.log('there is more than one hit cell');
        let hitCellIds = hitCells.map((item) => (item.id).slice(4))
        console.log('hitCellIds is:')
        console.log(hitCellIds);
        if (Math.abs(hitCellIds[0] - hitCellIds[1]) === 1) {
          console.log('gonna save hitDirection as horizontal');
          hitDirection = 'horizontal';
        } else {
          console.log('gonna save hitDirection as vertical');
          hitDirection = 'vertical';
        }
      }
      console.log(`okay, so now hitDirection is ${hitDirection}`);

      // this is ridiculous but here goes
      if (hitDirection === 'horizontal' || hitDirection === '') {
        console.log('hitDirection is horizontal or blank');
        console.log(`hitDirection is ${hitDirection}`);

        // LOOP THRU HIT CELLS HORIZONTALLY
        for (let i = 0; i < hitCells.length; i++) {
          console.log('in the first for loop - going horizontally')
          let hitCellID = hitCells[i].id; //example gb1-74
          let hitCoords = otherBoard.getCells()[hitCellID.slice(4)]; // example [1,2]
          console.log(`hitCoords is:`)
          console.log(hitCoords);
          let hitX = Number(hitCoords[0]);
          let hitY = Number(hitCoords[1]);

          // HORIZONTAL
          // check if you can try X + 1 - to the right
          if (hitX + 1 < 11) {
            console.log('hitX + 1 is < 11')
            let adjCoords = [hitX + 1, hitY];
            // if its a possible move
            if (possibleMoves.some((item) => (item[0] === adjCoords[0] && item[1] === adjCoords[1])) == true) {
              console.log('Adjacent cell found in possible moves.')
              return otherBoard.receiveAttack(adjCoords[0],adjCoords[1]);
            } 
          }
          // check if you can try X - 1 - to the left
          if (hitX - 1 > 0) {
            console.log('hitX - 1 is > 0')
            let adjCoords = [hitX - 1, hitY];
            if (possibleMoves.some((item) => (item[0] === adjCoords[0] && item[1] === adjCoords[1])) == true) {
              console.log('Adjacent cell found in possible moves.')
              return otherBoard.receiveAttack(adjCoords[0],adjCoords[1]);
            } 
          }
        } // end for loop

        // LOOP THRU HIT CELLS VERTICALLY
        for (let i = 0; i < hitCells.length; i++) {
          console.log('in the second for loop - going vertically')
          let hitCellID = hitCells[i].id; //example gb1-74
          let hitCoords = otherBoard.getCells()[hitCellID.slice(4)]; // example [1,2]
          console.log(`hitCoords is:`)
          console.log(hitCoords);
          let hitX = Number(hitCoords[0]);
          let hitY = Number(hitCoords[1]);

          // VERTICAL
          // check if you can try Y + 1 - up
          if (hitY + 1 < 11) {
            console.log('hitY + 1 is < 11')
            let adjCoords = [hitX, hitY + 1];
            if (possibleMoves.some((item) => (item[0] === adjCoords[0] && item[1] === adjCoords[1])) == true) {
              console.log('Adjacent cell found in possible moves.')
              return otherBoard.receiveAttack(adjCoords[0],adjCoords[1]);
            }
          }
          // check if you can try Y - 1 - to the left - down
          if (hitY - 1 > 0) {
            console.log('hitY - 1 is > 0')
            let adjCoords = [hitX, hitY -1];
            if (possibleMoves.some((item) => (item[0] === adjCoords[0] && item[1] === adjCoords[1])) == true) {
              console.log('Adjacent cell found in possible moves.')
              return otherBoard.receiveAttack(adjCoords[0],adjCoords[1]);
            }
          } // end possible adjacent moves
        } // end for loop vertically

        // if there are no adjacent moves - make a random move
        console.log('gave up on smart move, gonna do a random attack.')
        let shot = possibleMoves[Math.floor(Math.random()*possibleMoves.length)];
        let a = shot[0];
        let b = shot[1];
        return otherBoard.receiveAttack(a,b);


      // end if hitDirection is horizontal or blank
      } else {

      // vertical for loops
      // LOOP THRU HIT CELLS VERTICALLY
      for (let i = 0; i < hitCells.length; i++) {
        console.log('in the second for loop - going vertically')
        let hitCellID = hitCells[i].id; //example gb1-74
        let hitCoords = otherBoard.getCells()[hitCellID.slice(4)]; // example [1,2]
        console.log(`hitCoords is:`)
        console.log(hitCoords);
        let hitX = Number(hitCoords[0]);
        let hitY = Number(hitCoords[1]);

        // VERTICAL
        // check if you can try Y + 1 - up
        if (hitY + 1 < 11) {
          console.log('hitY + 1 is < 11')
          let adjCoords = [hitX, hitY + 1];
          if (possibleMoves.some((item) => (item[0] === adjCoords[0] && item[1] === adjCoords[1])) == true) {
            console.log('Adjacent cell found in possible moves.')
            return otherBoard.receiveAttack(adjCoords[0],adjCoords[1]);
          }
        }
        // check if you can try Y - 1 - to the left - down
        if (hitY - 1 > 0) {
          console.log('hitY - 1 is > 0')
          let adjCoords = [hitX, hitY -1];
          if (possibleMoves.some((item) => (item[0] === adjCoords[0] && item[1] === adjCoords[1])) == true) {
            console.log('Adjacent cell found in possible moves.')
            return otherBoard.receiveAttack(adjCoords[0],adjCoords[1]);
          }
        } // end possible adjacent moves
      } // end for loop vertically

      // LOOP THRU HIT CELLS HORIZONTALLY
      for (let i = 0; i < hitCells.length; i++) {
        console.log('in the first for loop - going horizontally')
        let hitCellID = hitCells[i].id; //example gb1-74
        let hitCoords = otherBoard.getCells()[hitCellID.slice(4)]; // example [1,2]
        console.log(`hitCoords is:`)
        console.log(hitCoords);
        let hitX = Number(hitCoords[0]);
        let hitY = Number(hitCoords[1]);

        // HORIZONTAL
        // check if you can try X + 1 - to the right
        if (hitX + 1 < 11) {
          console.log('hitX + 1 is < 11')
          let adjCoords = [hitX + 1, hitY];
          // if its a possible move
          if (possibleMoves.some((item) => (item[0] === adjCoords[0] && item[1] === adjCoords[1])) == true) {
            console.log('Adjacent cell found in possible moves.')
            return otherBoard.receiveAttack(adjCoords[0],adjCoords[1]);
          } 
        }
        // check if you can try X - 1 - to the left
        if (hitX - 1 > 0) {
          console.log('hitX - 1 is > 0')
          let adjCoords = [hitX - 1, hitY];
          if (possibleMoves.some((item) => (item[0] === adjCoords[0] && item[1] === adjCoords[1])) == true) {
            console.log('Adjacent cell found in possible moves.')
            return otherBoard.receiveAttack(adjCoords[0],adjCoords[1]);
          } 
        }
      } // end for loop

        // if there are no adjacent moves - make a random move
        console.log('gave up on smart move, gonna do a random attack.')
        let shot = possibleMoves[Math.floor(Math.random()*possibleMoves.length)];
        let a = shot[0];
        let b = shot[1];
        return otherBoard.receiveAttack(a,b);
      } // end if there are more than one hit cells
    } // end if there are hit cells   
  } // End AI Attack
  
  return {name, category, attack, placeAIships};
};

export { humanPlayerFactory, AIPlayerFactory }
