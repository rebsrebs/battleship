import { gameboardFactory } from "../code/gameboard";


test('Can receiveAttack record a miss?', () => {
  const gameboardOne = gameboardFactory(gameboardOne);
  expect(gameboardOne.receiveAttack(9,2)).toBe('miss!');
});

test('Can receiveAttack add to missed array??', () => {
  const gameboardOne = gameboardFactory(gameboardOne);
  gameboardOne.receiveAttack(9,2);
  expect(gameboardOne.getMissed().length).toBe(1);
});

test('Can receiveAttack check if ship is sunk?', () => {
  const gameboardOne = gameboardFactory(gameboardOne);
  gameboardOne.receiveAttack(5,2);
  gameboardOne.receiveAttack(5,3);
  expect(gameboardOne.getSunk()).toBe(1);
});

test('Can receiveAttack check if all ships are sunk?', () => {
  const gameboardOne = gameboardFactory(gameboardOne);
  // sink carrier
  gameboardOne.receiveAttack(1,2);
  gameboardOne.receiveAttack(1,3);
  gameboardOne.receiveAttack(1,4);
  gameboardOne.receiveAttack(1,5);
  gameboardOne.receiveAttack(1,6);
  // sink battleship
  gameboardOne.receiveAttack(2,2);
  gameboardOne.receiveAttack(2,3);
  gameboardOne.receiveAttack(2,4);
  gameboardOne.receiveAttack(2,5);
  // sink destroyer
  gameboardOne.receiveAttack(3,2);
  gameboardOne.receiveAttack(3,3);
  gameboardOne.receiveAttack(3,4);
  // sink submarine
  gameboardOne.receiveAttack(4,2);
  gameboardOne.receiveAttack(4,3);
  gameboardOne.receiveAttack(4,4);
  // hit patrol boat
  gameboardOne.receiveAttack(5,2);
  // sink last boat
  expect(gameboardOne.receiveAttack(5,3)).toBe('lost!');
});



