

// PLACE SHIPS RECURSIVE
// base case 
// - all game boards were placed
// - hide placement wrapper
// - run game loop
// not base case
// - set click handler
// - when clicked, that recurses the function!

// GAME LOOP CURRENT - playGame function
// base case
// - if either gameboard's ships are all sunk
// - hide move wrapper
// - show game over wrapper with message and play again button
// not base case





const gameLoop = (p1name, gameboardOne) => {

  console.log('gameloop is running.')

  // set up players
  let playerOne = humanPlayerFactory(p1name);
  let playerTwo = AIPlayerFactory('Computer');
  // set up AI gameboard
  let gameboardTwo = gameboardFactory('gameboardTwo');
  console.log('about to update movewrapper classList');
  moveWrapper.classList = 'shown wrappergrid';
  movep1.textContent = 'Your move admiral.'
  // temp placing AI ships
  gameboardTwo.getPlacedShips()[0].location = [[1,2],[1,3],[1,4],[1,5],[1,6]]
  gameboardTwo.getPlacedShips()[1].location = [[2,2],[2,3],[2,4],[2,5]]
  gameboardTwo.getPlacedShips()[2].location = [[3,2],[3,3],[3,4]]
  gameboardTwo.getPlacedShips()[3].location = [[4,2],[4,3],[4,4]]
  gameboardTwo.getPlacedShips()[4].location = [[5,2],[5,3]]
  var winner = '';

  console.log(gameboardOne.getPlacedShips());
  console.log(gameboardTwo.getPlacedShips());

  // define gameplaying function
  const playGame = (currentPlayer = playerOne, enemyGameboard = gameboardTwo) => {
    console.log('playGame is running.')

    // BASE CASES
    if (gameboardOne.areAllSunk() == true) {
      // function to show gameover wrapper, maybe UI.showWinner(winner);
      moveWrapper.classList = 'hidden';
      gameOverWrapper.classList = 'shown wrappergrid';
      gameoverp1.textContent = 'game over.'
      winner = 'Player 2 wins!';
      return;
    } else if (gameboardTwo.areAllSunk() == true) {
      // UI gameover wrapper
      winner = 'Player 1 wins!';
      return;
    } else {
      // NOT BASE CASE
      // show enemy gameboard
      console.log('not the base case.')

      // attack
      if (currentPlayer.category === 'human') {
        movep1.textContent = 'Please click on enemy waters.'
        currentPlayer.attack(1,2,enemyGameboard);
      }
  
      if (currentPlayer.category === 'robot') {

        movep1.textContent = 'The enemy is firing.'
        currentPlayer.attack(enemyGameboard);
      }
  
      // switch players
      if (currentPlayer === playerOne) {
        currentPlayer = playerTwo;
        enemyGameboard = gameboardOne;
      } else {
        currentPlayer = playerOne;
        enemyGameboard = gameboardTwo;
      }
      //recurse
      playGame(currentPlayer, enemyGameboard);
    }
  }
  // run game playing loop
  playGame(); // why was this here?
  return winner;
}