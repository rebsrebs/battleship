import { shipFactory } from "../code/ship";

test('is new ship sunk?', () => {
  const battleship = shipFactory('battleship', 4);
  expect(battleship.isSunk()).toBe(false);
  });

test('is new ship sunk?', () => {
  const battleship = shipFactory('battleship', 4);
  battleship.hit();
  expect(battleship.getHits()).toBe(1);
});

test('does ship sink?', () => {
  const battleship = shipFactory('battleship', 4);
  battleship.hit();
  battleship.hit();
  battleship.hit();
  battleship.hit();
  expect(battleship.isSunk()).toBe(true);
});