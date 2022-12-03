import { gameboardFactory } from "./gameboard";
import { gameLoop } from "./gameloop";

export const createBoards = () => {
  const gameboardcontainer1 = document.getElementById('gameboardcontainer1');

  // create 100 cells and put them in gameboardcontainer
  for (let i = 0; i < 100; i++) {
    var cell = document.createElement('div');
    cell.className = (`cell`);
    cell.id = (`cell-${1}-${i}`);
    gameboardcontainer1.appendChild(cell);
    // console.log(`cell class is ${cell.className} and cell id is ${cell.id}`);
  }

  const gameboardcontainer2 = document.getElementById('gameboardcontainer2');

  // create 100 cells and put them in gameboardcontainer
  for (let i = 0; i < 100; i++) {
    var cell = document.createElement('div');
    cell.className = (`cell`)
    cell.id = (`cell-${2}-${i}`);
    gameboardcontainer2.appendChild(cell);
    // console.log(`cell class is ${cell.className} and cell id is ${cell.id}`);
  }
}





// The game loop should set up a new game by creating Players and Gameboards. For now just populate each Gameboard with predetermined coordinates. You can implement a system for allowing players to place their ships later.
// We’ll leave the HTML implementation up to you for now, but you should display both the player’s boards and render them using information from the Gameboard class.
// You need methods to render the gameboards and to take user input for attacking. For attacks, let the user click on a coordinate in the enemy Gameboard.
// The game loop should step through the game turn by turn using only methods from other objects. If at any point you are tempted to write a new function inside the game loop, step back and figure out which class or module that function should belong to.
// Create conditions so that the game ends once one players ships have all been sunk. This function is appropriate for the Game module.