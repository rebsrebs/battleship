// import { gameLoop } from "./gameloop";
import { createBoards, placeShips } from "./UI";
import { gameboardFactory} from "./gameboard";
import './style.css';

let gameboardOne = gameboardFactory('gameboardOne');
// let gameboardTwo = gameboardFactory('gameboardTwo');

createBoards();
console.log(gameboardOne.getCells());
placeShips(gameboardOne);

// gameLoop();