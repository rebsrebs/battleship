import { gameboardFactory } from "../code/gameboard";

// test('can we tell if a ship was hit?', () => {
//   const gameboardOne = gameboardFactory(gameboardOne);
//   expect(gameboardOne.receiveAttack(5,1)).toBe('hit!');
//   });


// test('can we tell if a ship was not hit?', () => {
//   const gameboardOne = gameboardFactory(gameboardOne);
//   expect(gameboardOne.receiveAttack(7,1)).toBeFalsy;
//   });

// test('Create ships', () => {
//   const gameboardOne = gameboardFactory(gameboardOne);
//   expect(gameboardOne.carrier.length).toBe(5);
// });

test('Can I see if coordinates match a cell in a placedShips location array?', () => {
  const gameboardOne = gameboardFactory(gameboardOne);
  expect(gameboardOne.receiveAttack(1,2)).toBe('hit!');
});

test('Can I see if coordinates do not match a cell in a placedShips location array?', () => {
  const gameboardOne = gameboardFactory(gameboardOne);
  expect(gameboardOne.receiveAttack(9,2)).toBe(undefined);
});


