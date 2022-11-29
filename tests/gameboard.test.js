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

test('Can receiveAttack successfully hit a ship?', () => {
  const gameboardOne = gameboardFactory(gameboardOne);
  gameboardOne.receiveAttack(1,3);
  expect(gameboardOne.receiveAttack(1,2)).toBe(2);
});


