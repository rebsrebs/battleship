
The definition of a pure function is:
* 		The function always returns the same result if the same arguments are passed in. It does not depend on any state, or data, change during a program’s execution. It must only depend on its input arguments.
* 		The function does not produce any observable side effects such as network requests, input and output devices, or data mutation.



Battleship assignment for The Odin Project.

Begin your app by creating the Ship factory function.
Your ‘ships’ will be objects that include their length, the number of times they’ve been hit and whether or not they’ve been sunk.
REMEMBER you only have to test your object’s public interface. Only methods or properties that are used outside of your ‘ship’ object need unit tests.
Ships should have a hit() function that increases the number of ‘hits’ in your ship.
isSunk() should be a function that calculates it based on their length and the number of ‘hits’.



Create Gameboard factory.
Note that we have not yet created any User Interface. We should know our code is coming together by running the tests. You shouldn’t be relying on console.logs or DOM methods to make sure your code is doing what you expect it to.
Gameboards should be able to place ships at specific coordinates by calling the ship factory function.
Gameboards should have a receiveAttack function that takes a pair of coordinates, determines whether or not the attack hit a ship and then sends the ‘hit’ function to the correct ship, or records the coordinates of the missed shot.
Gameboards should keep track of missed attacks so they can display them properly.
Gameboards should be able to report whether or not all of their ships have been sunk.