const shipFactory = (name, length) => {
  let hits = 0;
  const hit = () => hits++;
  const isSunk = () => hits >= length ? True : False;
  return {name, length, hits, hit, isSunk};
};


