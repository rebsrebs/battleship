const shipFactory = (name, length) => {
  let hits = 0;
  const hit = () => hits = hits+1;
  const isSunk = () => hits >= length ? true : false;
  const getHits = () => hits;
  return {name, length, hit, isSunk, getHits};
};

export { shipFactory };


