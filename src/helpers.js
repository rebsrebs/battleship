let isTesting = true;
var waitTime = Number(0);
if (isTesting == false) {
  waitTime = Number(1000);
} else {
  waitTime = Number(0);
}

export {waitTime};
