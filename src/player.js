const humanPlayerFactory = (name) => {
  const category = 'human';

  const attack = (a,b,board) => {
    return board.receiveAttack(a,b);
  }

  return {name, category, attack};
};

const AIPlayerFactory = (name) => {
  const category = 'robot';
  const placeAIships = (board) => {
    console.log('Placing AI ships');
  }
  const attack = (board) => {
    let possibleMoves = board.getPossible();
    let shot = possibleMoves[Math.floor(Math.random()*possibleMoves.length)];
    let a = shot[0];
    let b = shot[1];
    return board.receiveAttack(a,b);
  }
  return {name, category, attack};
};

export { humanPlayerFactory, AIPlayerFactory }
