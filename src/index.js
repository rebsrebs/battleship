// import { gameLoop } from "./gameloop";
import { createBoards, testPlacement } from "./UI";
import { gameboardFactory} from "./gameboard";
import './style.css';

let gameboardOne = gameboardFactory('gameboardOne');
let gameboardTwo = gameboardFactory('gameboardTwo');

createBoards();
console.log(gameboardOne.getCells());
testPlacement(gameboardOne);

// gameLoop();