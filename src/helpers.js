const id = (ID) => document.getElementById(ID);

const delay = ms => new Promise(res => setTimeout(res, ms));

let isTesting = true;
var waitTime = Number(0);
if (isTesting == false) {
  waitTime = Number(1000);
} else {
  waitTime = Number(0);
}

export { id, delay, waitTime };
