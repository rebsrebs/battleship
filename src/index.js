import { gameLoop } from "./gameloop";
import { gameboardFactory } from "./gameboard";
import { createBoards } from "./UI";
import './style.css';

createBoards();
gameLoop();