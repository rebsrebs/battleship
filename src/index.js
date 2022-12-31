// import { gameLoop } from "./gameloop";
import { createBoards, placeShips, welcome } from "./UI";
import { gameboardFactory} from "./gameboard";
import './style.css';
import { gameLoop } from "./gameloop";


// let gameboardTwo = gameboardFactory('gameboardTwo');

createBoards();
welcome();



// gameLoop();