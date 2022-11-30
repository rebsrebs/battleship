import { gameLoop } from "../code/gameloop";

test('Does gameloop work', () => {
  expect(gameLoop()).toBe('end!');
  });