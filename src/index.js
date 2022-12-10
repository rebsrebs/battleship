// import { gameLoop } from "./gameloop";
import { createBoards, placeShips, startGame } from "./UI";
import { gameboardFactory} from "./gameboard";
import './style.css';
import { gameLoop } from "./gameloop";


// let gameboardTwo = gameboardFactory('gameboardTwo');

createBoards();
startGame();



// gameLoop();