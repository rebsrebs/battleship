import { HumanPlayer } from "../code/player";
import { gameboardFactory } from "../code/gameboard";


test('Can HumanPlayer attack?', () => {
  const gameboardOne = gameboardFactory('gameboardOne');
  const Rebecca = new HumanPlayer('Rebecca')
  Rebecca.attack(1,2,gameboardOne)
  // instead of sharing carrier test from ship test
  expect(gameboardOne.carrier.getHits()).toBe(1);
  });