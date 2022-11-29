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


