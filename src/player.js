
const humanPlayerFactory = (name) => {
  const category = 'human';
  const attack = (a,b,board) => {
    console.log('human player is attacking and about to call the enemy boards receive attack method.')
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
      // console.log('Not base case. Still placing AI ships');
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
        // console.log('coords[choice] + shipLength was <= 11, the ship fits!')
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
            // console.log ('SHIP IN THE WAY');
            presentShip.location = [];
            return placeAIships(board, shipIdx);
          } else {
            // console.log('Apparently there is no ship in the way.')
            // console.log('About to push tempLoc to presentShip location:');
            presentShip.location.push(tempLoc); 
          }
        } // end for loop for checking if ships are in the way
        shipIdx = shipIdx + 1;
        return placeAIships(board, shipIdx);
      } // end if it fits 
      else {
        // console.log('The ship did not fit, running recursively again without increasing shipIdx')
        return placeAIships(board, shipIdx);
      }
    } // end not base case
  } // END PLACE AI SHIPS

  // AI Attack
  const attack = (otherBoard) => {
    console.log('AI is attacking')
    let possibleMoves = otherBoard.getPossible();
    let cells = otherBoard.getCells();
    let hitCell = gbcontainer1.querySelector('.cell-hit-ship');
    // if there are no hit cells
    if (hitCell == null) {
      // make a random move
      // if there are less than 60 possible moves left
        // make a totally random move
      if (possibleMoves.length < 60) { 
      let shot = possibleMoves[Math.floor(Math.random()*possibleMoves.length)];
      // console.log(`shot is ${shot}`);
      let a = shot[0];
      let b = shot[1];
      let tarCelNum = cells.indexOf((cells.find((el) => el[0] === a && el[1] === b)));
      // console.log(`tarCelNum is ${tarCelNum}`)
      let tarCel = document.getElementById(`${otherBoard.name}-${tarCelNum}`);
      tarCel.classList = 'cell cell-fire';
      console.log('AI attack wrapping up, about to call gb1 receieveattack method')
      return otherBoard.receiveAttack(a,b);
      // if possible move length is above 60
      // make an optimized random move
      } else {
        // console.log('There are more than 60 possible moves left so we will optimize the random shot.')
        let cellAboveStatus = 'impossible'
        let cellBelowStatus = 'impossible'
        let cellRightStatus = 'impossible'
        let cellLeftStatus = 'impossible'
        while ((cellLeftStatus === 'impossible' || cellRightStatus === 'impossible') && (cellAboveStatus === 'impossible' || cellBelowStatus === 'impossible')) {
          // console.log('STARTING WHILE LOOP TO OPTIMIZE RANDOM SHOT')
          let shot = possibleMoves[Math.floor(Math.random()*possibleMoves.length)];
          let gbIdx = Number(cells.indexOf(shot));
          // ABOVE
          let gbIdxAbove = +gbIdx-10;
          // if above is on the board
          if (gbIdxAbove >= 0) {
            let gbIdAbove = `${otherBoard.name}-${gbIdxAbove}`
            let cellAbove = document.getElementById(gbIdAbove);
            // if above has not previously been fired
            if (!cellAbove.classList.contains('cell-miss') || !cellAbove.classList.contains('cell-sunk-ship') || !cellAbove.classList.contains('cell-hit-ship')) {
              cellAboveStatus = 'possible';
            // if above has been fired
            } else {
              cellAboveStatus = 'impossible';
            }
          } else {
            cellAboveStatus = 'impossible';
          }
          // END ABOVE

          // BELOW
          let gbIdxBelow = +gbIdx+10;
          // if below is on board
          if (gbIdxBelow < 100) {
            let gbIdBelow = `${otherBoard.name}-${gbIdxBelow}`
            let cellBelow = document.getElementById(gbIdBelow);
            if (!cellBelow.classList.contains('cell-miss') || !cellBelow.classList.contains('cell-sunk-ship') || !cellBelow.classList.contains('cell-hit-ship')) {
              cellBelowStatus = 'possible';
            } else {
              cellBelowStatus = 'impossible';
            }
          } else {
            cellBelowStatus = 'impossible';
          }
          // END BELOW

          // RIGHT
          let gbIdxRight = +gbIdx+1;
          console.log(`${gbIdxRight} is gbIdxRight`);
          // if right is on board
          if (gbIdxRight < 100) {
            // if right is in same row as shot
            if (cells[gbIdxRight][0] === Number(shot[0])+1) {
              let gbIdRight = `${otherBoard.name}-${gbIdxRight}`
              let cellRight = document.getElementById(gbIdRight);
              // if right has not been fired
              if (!cellRight.classList.contains('cell-miss') || !cellRight.classList.contains('cell-sunk-ship') || !cellRight.classList.contains('cell-hit-ship')) {
                cellRightStatus = 'possible';
              } else {
                cellRightStatus = 'impossible';
              }
            } else {
              cellRightStatus = 'impossible';
            }
          }
          // END RIGHT

          // LEFT
          let gbIdxLeft = +gbIdx-1;
          if (gbIdxLeft >= 0) {
            // if left is in same row
            if (cells[gbIdxLeft][0] === Number(shot[0])-1) {
              let gbIdLeft = `${otherBoard.name}-${gbIdxLeft}`
              let cellLeft = document.getElementById(gbIdLeft);
              // if left is an unfired cell
              if (!cellLeft.classList.contains('cell-miss') || !cellLeft.classList.contains('cell-sunk-ship') || !cellLeft.classList.contains('cell-hit-ship')) {
                cellLeftStatus = 'possible';
              // if left has already been fired
              } else {
                cellLeftStatus = 'impossible';
              }
            // if left is not in same row
            } else {
              cellLeftStatus = 'impossible';
            } // end if left is in same row or not
          } // end if to the left is on board
          var a = shot[0];
          var b = shot[1];
        } //END WHILE LOOP

      // change cell to hover classList
      let tarCelNum = cells.indexOf((cells.find((el) => el[0] === a && el[1] === b)));
      console.log(`tarCelNum is ${tarCelNum}`)
      let tarCel = document.getElementById(`${otherBoard.name}-${tarCelNum}`);
      tarCel.classList = 'cell cell-fire';
      console.log(`AI attack wrapping up, about to return otherboard.receiveAttack(${a},${b})`)
      return otherBoard.receiveAttack(a,b);
      } // END IF THERE ARE MORE THAN 60 POSSIBLE MOVES LEFT

    // if there is a hit but not sunk cell - find adjacent cell to fire on
    } else if (hitCell != null) {
      // console.log('There is a hit cell.')
      let hitCells = Array.from(gbcontainer1.querySelectorAll('.cell-hit-ship'));
      // figure out which direction hit cells are going in
      let hitDirection = '';
      // if there is more than one hit cell
      if (hitCells.length > 1) {
        // console.log('there is more than one hit cell');
        let hitCellIds = hitCells.map((item) => (item.id).slice(4))
        if (Math.abs(hitCellIds[0] - hitCellIds[1]) === 1) {
          // console.log('gonna save hitDirection as horizontal');
          hitDirection = 'horizontal';
        } else {
          // console.log('gonna save hitDirection as vertical');
          hitDirection = 'vertical';
        }
      } // end if there are more than one hits
      // this is ridiculous but here goes
      if (hitDirection === 'horizontal' || hitDirection === '') {
        // LOOP THRU HIT CELLS HORIZONTALLY
        for (let i = 0; i < hitCells.length; i++) {
          // console.log('in the first for loop - going horizontally')
          let hitCellID = hitCells[i].id; //example gb1-74
          let hitCoords = otherBoard.getCells()[hitCellID.slice(4)]; // example [1,2]
          // console.log(`hitCoords is:`)
          // console.log(hitCoords);
          let hitX = Number(hitCoords[0]);
          let hitY = Number(hitCoords[1]);
          // HORIZONTAL
          // check if you can try X + 1 - to the right
          if (hitX + 1 < 11) {
            // console.log('hitX + 1 is < 11')
            let adjCoords = [hitX + 1, hitY];
            // if its a possible move
            if (possibleMoves.some((item) => (item[0] === adjCoords[0] && item[1] === adjCoords[1])) == true) {
              // console.log('Adjacent cell found in possible moves.')
              // change cell to hover classList
              let tarCelNum = cells.indexOf((cells.find((el) => el[0] === adjCoords[0] && el[1] === adjCoords[1])));
              // console.log(`tarCelNum is ${tarCelNum}`)
              let tarCel = document.getElementById(`${otherBoard.name}-${tarCelNum}`);
              tarCel.classList = 'cell cell-fire';
              console.log(`AI attack wrapping up, about to return otherBoard.receiveAttack(${adjCoords[0]}, ${adjCoords[1]})`)
            return otherBoard.receiveAttack(adjCoords[0],adjCoords[1]);
          } 
        }
          // check if you can try X - 1 - to the left
          if (hitX - 1 > 0) {
            // console.log('hitX - 1 is > 0')
            let adjCoords = [hitX - 1, hitY];
            if (possibleMoves.some((item) => (item[0] === adjCoords[0] && item[1] === adjCoords[1])) == true) {
              // console.log('Adjacent cell found in possible moves.')
              // change cell to hover classList
              let tarCelNum = cells.indexOf((cells.find((el) => el[0] === adjCoords[0] && el[1] === adjCoords[1])));
              // console.log(`tarCelNum is ${tarCelNum}`)
              // something going wrong here
              let tarCel = document.getElementById(`${otherBoard.name}-${tarCelNum}`);
              tarCel.classList = 'cell cell-fire';
              console.log(`AI attack wrapping up, about to return otherBoard.receiveAttack(${adjCoords[0]}, ${adjCoords[1]})`)
              return otherBoard.receiveAttack(adjCoords[0],adjCoords[1]);
            } 
          }
        } // end for loop

        // LOOP THRU HIT CELLS VERTICALLY
        for (let i = 0; i < hitCells.length; i++) {
          // console.log('in the second for loop - going vertically')
          let hitCellID = hitCells[i].id; //example gb1-74
          let hitCoords = otherBoard.getCells()[hitCellID.slice(4)]; // example [1,2]
          // console.log(`hitCoords is:`)
          // console.log(hitCoords);
          let hitX = Number(hitCoords[0]);
          let hitY = Number(hitCoords[1]);

          // VERTICAL
          // check if you can try Y + 1 - up
          if (hitY + 1 < 11) {
            // console.log('hitY + 1 is < 11')
            let adjCoords = [hitX, hitY + 1];
            if (possibleMoves.some((item) => (item[0] === adjCoords[0] && item[1] === adjCoords[1])) == true) {
              // console.log('Adjacent cell found in possible moves.')

              // change cell to hover classList
              // console.log('gonna change that chosen cell!')
              let tarCelNum = cells.indexOf((cells.find((el) => el[0] === adjCoords[0] && el[1] === adjCoords[1])));
              // console.log(`tarCelNum is ${tarCelNum}`)
              let tarCel = document.getElementById(`${otherBoard.name}-${tarCelNum}`);
              tarCel.classList = 'cell cell-fire';
              console.log(`AI attack wrapping up, about to return otherBoard.receiveAttack(${adjCoords[0]}, ${adjCoords[1]})`)
              return otherBoard.receiveAttack(adjCoords[0],adjCoords[1]);
            }
          }
          // check if you can try Y - 1 - to the left - down
          if (hitY - 1 > 0) {
            // console.log('hitY - 1 is > 0')
            let adjCoords = [hitX, hitY -1];
            if (possibleMoves.some((item) => (item[0] === adjCoords[0] && item[1] === adjCoords[1])) == true) {
              // console.log('Adjacent cell found in possible moves.')
              // change cell to hover classList
              // console.log('gonna change that chosen cell!')
              let tarCelNum = cells.indexOf((cells.find((el) => el[0] === adjCoords[0] && el[1] === adjCoords[1])));
              // console.log(`tarCelNum is ${tarCelNum}`)
              let tarCel = document.getElementById(`${otherBoard.name}-${tarCelNum}`);
              tarCel.classList = 'cell cell-fire';
              console.log(`AI attack wrapping up, about to return otherBoard.receiveAttack(${adjCoords[0]}, ${adjCoords[1]})`)
              return otherBoard.receiveAttack(adjCoords[0],adjCoords[1]);
            }
          } // end possible adjacent moves
        } // end for loop vertically

        // if there are no adjacent moves - make a random move
        // console.log('gave up on smart move, gonna do a random attack.')
        let shot = possibleMoves[Math.floor(Math.random()*possibleMoves.length)];
        let a = shot[0];
        let b = shot[1];

        let tarCelNum = cells.indexOf((cells.find((el) => el[0] === a && el[1] === b)));
      // console.log(`tarCelNum is ${tarCelNum}`)
      let tarCel = document.getElementById(`${otherBoard.name}-${tarCelNum}`);
      tarCel.classList = 'cell cell-fire';
      // await delay(25);

      console.log(`AI attack wrapping up, about to return otherBoard.receiveAttack(${a}, ${b})`)
        return otherBoard.receiveAttack(a,b);
      // end if hitDirection is horizontal or blank
      } else {
      // vertical for loops
      // LOOP THRU HIT CELLS VERTICALLY
      for (let i = 0; i < hitCells.length; i++) {
        // console.log('in the second for loop - going vertically')
        let hitCellID = hitCells[i].id; //example gb1-74
        let hitCoords = otherBoard.getCells()[hitCellID.slice(4)]; // example [1,2]
        // console.log(`hitCoords is:`)
        // console.log(hitCoords);
        let hitX = Number(hitCoords[0]);
        let hitY = Number(hitCoords[1]);
        // VERTICAL
        // check if you can try Y + 1 - up
        if (hitY + 1 < 11) {
          // console.log('hitY + 1 is < 11')
          let adjCoords = [hitX, hitY + 1];
          if (possibleMoves.some((item) => (item[0] === adjCoords[0] && item[1] === adjCoords[1])) == true) {
            console.log(`AI attack wrapping up, about to return otherBoard.receiveAttack(${adjCoords[0]}, ${adjCoords[1]})`)
            return otherBoard.receiveAttack(adjCoords[0],adjCoords[1]);
          }
        }
        // check if you can try Y - 1 - to the left - down
        if (hitY - 1 > 0) {
          // console.log('hitY - 1 is > 0')
          let adjCoords = [hitX, hitY -1];
          if (possibleMoves.some((item) => (item[0] === adjCoords[0] && item[1] === adjCoords[1])) == true) {
            console.log(`AI attack wrapping up, about to return otherBoard.receiveAttack(${adjCoords[0]}, ${adjCoords[1]})`)
            return otherBoard.receiveAttack(adjCoords[0],adjCoords[1]);
          }
        } // end possible adjacent moves
      } // end for loop vertically
      // LOOP THRU HIT CELLS HORIZONTALLY
      for (let i = 0; i < hitCells.length; i++) {
        // console.log('in the first for loop - going horizontally')
        let hitCellID = hitCells[i].id; //example gb1-74
        let hitCoords = otherBoard.getCells()[hitCellID.slice(4)]; // example [1,2]
        // console.log(`hitCoords is:`)
        // console.log(hitCoords);
        let hitX = Number(hitCoords[0]);
        let hitY = Number(hitCoords[1]);
        // HORIZONTAL
        // check if you can try X + 1 - to the right
        if (hitX + 1 < 11) {
          // console.log('hitX + 1 is < 11')
          let adjCoords = [hitX + 1, hitY];
          // if its a possible move
          if (possibleMoves.some((item) => (item[0] === adjCoords[0] && item[1] === adjCoords[1])) == true) {
            console.log(`AI attack wrapping up, about to return otherBoard.receiveAttack(${adjCoords[0]}, ${adjCoords[1]})`)
            return otherBoard.receiveAttack(adjCoords[0],adjCoords[1]);
          } 
        }
        // check if you can try X - 1 - to the left
        if (hitX - 1 > 0) {
          // console.log('hitX - 1 is > 0')
          let adjCoords = [hitX - 1, hitY];
          if (possibleMoves.some((item) => (item[0] === adjCoords[0] && item[1] === adjCoords[1])) == true) {
            console.log(`AI attack wrapping up, about to return otherBoard.receiveAttack(${adjCoords[0]}, ${adjCoords[1]})`)
            return otherBoard.receiveAttack(adjCoords[0],adjCoords[1]);
          } 
        }
      } // end for loop
        // if there are no adjacent moves - make a random move
        // console.log('gave up on smart move, gonna do a random attack.')
        let shot = possibleMoves[Math.floor(Math.random()*possibleMoves.length)];
        let a = shot[0];
        let b = shot[1];
        let tarCelNum = cells.indexOf((cells.find((el) => el[0] === a && el[1] === b)));
      // console.log(`tarCelNum is ${tarCelNum}`)
      let tarCel = document.getElementById(`${otherBoard.name}-${tarCelNum}`);
      tarCel.classList = 'cell cell-fire';
      console.log(`AI attack wrapping up, about to return otherBoard.receiveAttack(${a}, ${b})`)
        return otherBoard.receiveAttack(a,b);
      } 
    } // end if there are hit cells   
  } // End AI Attack
  return {name, category, attack, placeAIships};
};

export { humanPlayerFactory, AIPlayerFactory }
