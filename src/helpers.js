const id = (ID) => document.getElementById(ID);

const delay = ms => new Promise(res => setTimeout(res, ms));

// let isTesting = false;
// let waitTime = Number(0);
// let sunkLimit = Number(1);
// if (isTesting == false) {
//   waitTime = Number(600);
//   sunkLimit = Number(5);
// } else {
//   waitTime = Number(0);
//   sunkLimit = Number(1);
// }

let waitTime = Number(600);
let sunkLimit = Number(5);

export { id, delay, waitTime, sunkLimit };
