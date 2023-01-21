(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>r});var o=t(81),l=t.n(o),s=t(645),i=t.n(s)()(l());i.push([e.id,":root {\n  --main-bg-color: white;\n  --cell-plain-bg-color: rgb(163, 230, 245);\n  --cell-hover-bg-color: rgba(9, 116, 140, 0.7);\n  --cell-place-bg-color: rgb(9, 116, 140);\n  --cell-ship-bg-color: red;\n  --cell-hit-ship-bg-color: red;\n  --cell-sunk-ship-bg-color: rgb(255, 0, 174);\n  --cell-miss-bg-color: gray;\n  --cell-fire-bg-color: rgba(9, 116, 140, 0.4);\n  --gb-bg-color:white;\n  --message-area-bg-color: white;\n  --gbOne-bg-color: green;\n  --gbTwo-bg-color:blue;\n  --button-bg-color: white;\n  --button-border-color: black;\n  --place-here-box-shadow: 0px 0px 30px 0px rgb(255, 68, 0);\n  --fire-here-box-shadow: 0px 0px 30px 0px rgb(255, 68, 0);\n  --subtle-box-shadow: -2px 2px 0px #0d012d25;\n  height: 100vh;\n}\n\n*{\n  margin: 0px;\n  padding: 0px;\n}\n\nbody {\n  display: grid;\n  grid-template-columns: 325px auto;\n  height: 100vh;\n}\n\nh1#maintitle {\n  margin-bottom: 40px;\n}\n\n#sidebar {\n  box-sizing: border-box;\n  width: 100%;\n  grid-column: 1 / 2;\n  border-right: 1px solid black;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  height: 100%;\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n\n\n#main {\n  grid-column: 2 / 3;\n  display: flex;\n  flex-direction: column;\n  /* centers vertically */\n  justify-content: center; \n  align-items: center;\n  background-color: var(--main-bg-color);\n  font-family:Arial, Helvetica, sans-serif;\n}\n\nh1 {\n  font-size: 60px;\n}\n\nbutton {\n  background-color: var(--button-bg-color);\n  /* border-radius: 20px; */\n  border: 1px solid var(--button-border-color);\n  padding: 8px 18px 8px 18px;\n  font-size: 18px;\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n  box-shadow: var(--subtle-box-shadow);\n  margin: 10px;\n  width: fit-content;\n}\n\nbutton:hover {\n  background-color: rgb(244, 236, 237);\n}\n\nbutton:active {\n  background-color: rgb(245, 176, 92);\n}\n\n#rulescontainer, #scorecontainer.shown {\n  width: 80%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  padding: 25px;\n  margin-left: 10px;\n  margin-bottom: 30px;\n  /* background-color:aquamarine; */\n}\n\n\n\n\n\n/* #namestartcontainer\n#axiscontainer\n#gb1msgcontainer */\n\n.hidden {\n  /* visibility: hidden; */\n  display: none;\n}\n\n.shown {\n  visibility: visible;\n}\n\n#welcomeform {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.nsformitem {\n  padding: 10px;\n  margin: 5px;\n}\n\ninput.nsformitem {\n  min-width: 80%;\n  padding: 5px;\n}\n\n#players {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  width: 300px;\n}\n\n#gameboardrow {\n  display: flex;\n  flex-direction: row;\n  background-color: var(--gb-bg-color);\n}\n\n.gameboardcolumn {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.gameboardcontainer {\n  background-color: var(--gb-bg-color);\n  width: 400px;\n  height: 400px;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  border: 1px solid black;\n  margin: 20px;\n}\n\n.cell {\n  border: 1px solid black;\n  background-color: var(--cell-plain-bg-color);\n}\n\n/* .cell-plain {\n  \n} */\n\n.cell-hover {\n  background-color: var(--cell-hover-bg-color);\n}\n\n.cell-placed {\n  background-color: var(--cell-place-bg-color);\n}\n\n.cell-hit-ship {\n  background-color: var(--cell-hit-ship-bg-color);\n}\n\n.cell-sunk-ship {\n  background-color: var(--cell-sunk-ship-bg-color);\n}\n\n.cell-miss {\n  background-color: var(--cell-miss-bg-color);\n}\n\n.cell-fire {\n  background-color: var(--cell-fire-bg-color);\n  transition: transform .2s;  /*Animation */\n  transform: scale(1.1);\n  /* border: 1px solid white; */\n}\n\n.cell-aim {\n  background-color: var(--cell-fire-bg-color);\n}\n\n.message {\n  font-size: 20px;\n}\n\n#messagearea {\n  /* border: 1px solid black; */\n  border-radius: 5px;\n  background-color: var(--message-area-bg-color);\n  width: 600px;\n  height: 180px;\n  margin-bottom: 40px;\n  border: 1px solid black;\n}\n\n\n\n\n\n#namebtn {\n  width: 20ch;\n}\n\n.message {\n  font-size: 20px;\n}\n\n\n.griditem {\n  display: flex;\n  align-self: center;\n  align-content: center;\n  justify-content: center;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  justify-self: center;\n}\n\n.wrappergrid {\n  width: 600px;\n  height: 180px;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 60px 60px 60px;\n}\n\n.griditemtop {\n  grid-row: 1 / 2;\n}\n\n.griditemmiddle {\n  grid-row: 2 / 3;\n}\n\n.griditembottom {\n  grid-row: 3 / 4;\n}\n\n.griditembottomtwo {\n  grid-row: 2 / 4;\n}\n\np.griditem {\n  font-size: 20px;\n}\n\n\n.movemsg {\n  text-align: left;\n  align-self: left;\n}\n\n.movediv {\n  /* later change width to be responsive */\n  width: 80%;\n  display: flex;\n  align-content: center;\n  justify-content: left;\n}\n\n.crosshair {\n  cursor: crosshair;\n}\n\n.placeshipshere {\n  box-shadow: var(--place-here-box-shadow);\n}\n\n.firehere {\n  box-shadow: var(--place-here-box-shadow);\n}\n\n#toggleicon {\n  margin-left: 5px;\n  height: 18px;\n}\n\n\n\n.invisible {\n  visibility: hidden;\n}\n\nul {\n  margin-left: 15px;\n}\n\nli {\n  margin: 10px 0px 10px 15px;\n  font-size: 18px;\n}\n\nli.scoreli {\n  list-style-type: none;\n}\n\n\n.shipslist, #rulescontainer {\n  margin-bottom: 20px;\n}\n\n.scoresunkship {\n  text-decoration: line-through;\n}\n\n",""]);const r=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,l,s){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var r=0;r<this.length;r++){var a=this[r][0];null!=a&&(i[a]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);o&&i[d[0]]||(void 0!==s&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=s),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),l&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=l):d[4]="".concat(l)),n.push(d))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var s={},i=[],r=0;r<e.length;r++){var a=e[r],c=o.base?a[0]+o.base:a[0],d=s[c]||0,g="".concat(c," ").concat(d);s[c]=d+1;var m=t(g),p={css:a[1],media:a[2],sourceMap:a[3],supports:a[4],layer:a[5]};if(-1!==m)n[m].references++,n[m].updater(p);else{var u=l(p,o);o.byIndex=r,n.splice(r,0,{identifier:g,updater:u,references:1})}i.push(g)}return i}function l(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,l){var s=o(e=e||[],l=l||{});return function(e){e=e||[];for(var i=0;i<s.length;i++){var r=t(s[i]);n[r].references--}for(var a=o(e,l),c=0;c<s.length;c++){var d=t(s[c]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}s=a}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var l=void 0!==t.layer;l&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,l&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var s=t.sourceMap;s&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var l=n[o];if(void 0!==l)return l.exports;var s=n[o]={id:o,exports:{}};return e[o](s,s.exports,t),s.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{const e=(e,n)=>{let t=0;return{name:e,length:n,hit:()=>t+=1,isSunk:()=>t>=n,getHits:()=>t}};document.getElementById("movewrapper");const n=(n,t)=>{let o=[];for(let e=1;e<11;e++)for(let n=1;n<11;n++)o.push([n,e]);let l=[...o],s=[],i=[],r=0,a=[{ship:e("carrier",5),location:[]},{ship:e("battleship",4),location:[]},{ship:e("destroyer",3),location:[]},{ship:e("submarine",3),location:[]},{ship:e("patrol boat",2),location:[]}];const c=(e,n)=>{for(let t=0;t<a.length;t++){if(null!=a[t].location.find((t=>t[0]===e&&t[1]===n)))return a[t].ship}return""};return{name:n,posessive:t,getCells:()=>o,getMissed:()=>s,receiveAttack:async(e,d)=>{console.log(`${n}'s is receiveAttack is running at ${e}, ${d}`),await(450,new Promise((e=>setTimeout(e,450))));let g=o.indexOf(o.find((n=>n[0]===e&&n[1]===d))),m=document.getElementById(`${n}-${g}`),p=l.indexOf(o.find((n=>n[0]===e&&n[1]===d)));if(p>=0&&l.splice(p,1),null!=i.find((n=>n[0]===e&&n[1]===d)))return"Already tried this spot.";{const l=[e,d];i.push(l);let g=n.slice(2);if(1==g)var u=2;else 2==g&&(u=1);let p=document.getElementById(`p${u}move`);if(""!=c(e,d)){let l=c(e,d);if(l.hit(),m.classList="cell cell-hit-ship",1==l.isSunk()){r+=1;let e=a.find((e=>e.ship.name===l.name)).location;for(let n=0;n<e.length;n++){let t=e[n][0],l=e[n][1],s=o.indexOf(o.find((e=>e[0]===t&&e[1]===l)));document.getElementById(`gb${g}-${s}`).classList="cell cell-sunk-ship"}p.textContent+=` and sunk ${t} ${l.name}!`,h=n,"patrol boat"===(f=l.name)&&(f="patrolboat"),document.getElementById(`${h}-${f}`).classList.add("scoresunkship")}else p.textContent+=` and hit ${t} ${l.name}.`;return"hit!"}return s.push(l),p.textContent+=" and missed.",m.classList="cell cell-miss","miss!"}var h,f},getSunk:()=>r,areAllSunk:()=>r>=5?(console.log(`All ${n} ships are sunk.`),!0):(console.log(`Not all ships on ${n} have been sunk yet.`),!1),getPossible:()=>l,getPlacedShips:()=>a,getNumShipsToPlace:()=>5,getFiredShots:()=>i,isThereAShipHere:c}},o=document.getElementById("gbcontainer1"),l=e=>new Promise((n=>setTimeout(n,e))),s=e=>document.getElementById(e),i=s("movewrapper"),r=s("gameoverwrapper"),a=(s("gbcontainer1"),s("gbcontainer2")),c=(s("movep1"),s("movep2"),s("movep3"),s("gameoverp1"),s("gameoverp2")),d=(s("gameoverp3"),s("p1move")),g=s("p2move"),m=s("moveprompt"),p=s("scorecontainer"),u=e=>document.getElementById(e),h=u("welcomeform"),f=u("placementwrapper"),b=u("placemessage"),v=u("gbcontainer1"),x=u("gbcontainer2"),y=u("togglebtn"),L=u("direction"),w=u("p1move"),k=u("p2move"),A=u("moveprompt"),$=u("messagearea");function C(e,t,s=0){if(s>t.getPlacedShips().length-1)return console.log("base case - ships placed"),f.classList="hidden",v.classList.remove("placeshipshere"),void((e,t)=>{console.log("gameloop is running.");let s={name:e,category:"human",attack:(e,n,t)=>t.receiveAttack(e,n)},u=(e=>{const n=(e,t=0)=>{if(!(t>e.getPlacedShips().length-1)){console.log("Not base case. Still placing AI ships");let i=e.getPlacedShips()[t];var o=Math.round(Math.random());if(0===o)var l="horizontal";else l="vertical";let r=i.ship.length,a=Math.floor(100*Math.random());if([...e.getCells()[a]][o]+r<=11){console.log("coords[choice] + shipLength was <= 11, the ship fits!");var s=[];for(let n=0;n<r;n++)"horizontal"===l?s.push(e.getCells()[Number(a)+Number(n)]):s.push(e.getCells()[Number(a)+10*Number(n)]);for(let o=0;o<r;o++){let l=[...s[o]];if(""!=e.isThereAShipHere(l[0],l[1]))return console.log("SHIP IN THE WAY"),i.location=[],n(e,t);console.log("Apparently there is no ship in the way."),console.log("About to push tempLoc to presentShip location:"),i.location.push(l)}return n(e,t+=1)}return console.log("The ship did not fit, running recursively again without increasing shipIdx"),n(e,t)}console.log("base case - AI ships placed")};return{name:"The Enemy",category:"robot",attack:async e=>{console.log("AI is attacking");let n=e.getPossible(),t=e.getCells(),l=o.querySelector(".cell-hit-ship");if(null==l){if(console.log("There are no hit cells, so making a random move."),n.length<60){let o=n[Math.floor(Math.random()*n.length)];console.log(`shot is ${o}`);let l=o[0],s=o[1];console.log("gonna change that chosen cell!");let i=t.indexOf(t.find((e=>e[0]===l&&e[1]===s)));return console.log(`tarCelNum is ${i}`),document.getElementById(`${e.name}-${i}`).classList="cell cell-fire",e.receiveAttack(l,s)}{console.log("There are more than 60 possible moves left so we will optimize the random shot.");let o="impossible",l="impossible",r="impossible",a="impossible";for(;!("impossible"!==a&&"impossible"!==r||"impossible"!==o&&"impossible"!==l);){console.log("STARTING WHILE LOOP TO OPTIMIZE RANDOM SHOT");let c=n[Math.floor(Math.random()*n.length)],d=Number(t.indexOf(c));console.log(`shot is ${c}`);let g=+d-10;if(g>=0){let n=`${e.name}-${g}`,t=document.getElementById(n);o=t.classList.contains("cell-miss")&&t.classList.contains("cell-sunk-ship")&&t.classList.contains("cell-hit-ship")?"impossible":"possible"}else o="impossible";let m=+d+10;if(m<100){let n=`${e.name}-${m}`,t=document.getElementById(n);l=t.classList.contains("cell-miss")&&t.classList.contains("cell-sunk-ship")&&t.classList.contains("cell-hit-ship")?"impossible":"possible"}else l="impossible";let p=+d+1;if(console.log(`${p} is gbIdxRight`),p<100)if(t[p][0]===Number(c[0])+1){let n=`${e.name}-${p}`,t=document.getElementById(n);r=t.classList.contains("cell-miss")&&t.classList.contains("cell-sunk-ship")&&t.classList.contains("cell-hit-ship")?"impossible":"possible"}else r="impossible";let u=+d-1;if(console.log(`${u} is gbIdxLeft`),u>=0)if(t[u][0]===Number(c[0])-1){let n=`${e.name}-${u}`,t=document.getElementById(n);a=t.classList.contains("cell-miss")&&t.classList.contains("cell-sunk-ship")&&t.classList.contains("cell-hit-ship")?"impossible":"possible"}else a="impossible";var s=c[0],i=c[1];console.log(`cellAboveStatus is ${o}`),console.log(`cellBelowStatus is ${l}`),console.log(`cellRightStatus is ${r}`),console.log(`cellLeftStatus is ${a}`)}console.log("gonna change that chosen cell!");let c=t.indexOf(t.find((e=>e[0]===s&&e[1]===i)));return console.log(`tarCelNum is ${c}`),document.getElementById(`${e.name}-${c}`).classList="cell cell-fire",e.receiveAttack(s,i)}}if(null!=l){console.log("There is a hit cell.");let t=Array.from(o.querySelectorAll(".cell-hit-ship")),l="";if(t.length>1){console.log("there is more than one hit cell");let e=t.map((e=>e.id.slice(4)));console.log("hitCellIds is:"),console.log(e),1===Math.abs(e[0]-e[1])?(console.log("gonna save hitDirection as horizontal"),l="horizontal"):(console.log("gonna save hitDirection as vertical"),l="vertical")}if(console.log(`okay, so now hitDirection is ${l}`),"horizontal"===l||""===l){console.log("hitDirection is horizontal or blank"),console.log(`hitDirection is ${l}`);for(let o=0;o<t.length;o++){console.log("in the first for loop - going horizontally");let l=t[o].id,s=e.getCells()[l.slice(4)];console.log("hitCoords is:"),console.log(s);let i=Number(s[0]),r=Number(s[1]);if(i+1<11){console.log("hitX + 1 is < 11");let t=[i+1,r];if(1==n.some((e=>e[0]===t[0]&&e[1]===t[1])))return console.log("Adjacent cell found in possible moves."),e.receiveAttack(t[0],t[1])}if(i-1>0){console.log("hitX - 1 is > 0");let t=[i-1,r];if(1==n.some((e=>e[0]===t[0]&&e[1]===t[1])))return console.log("Adjacent cell found in possible moves."),e.receiveAttack(t[0],t[1])}}for(let o=0;o<t.length;o++){console.log("in the second for loop - going vertically");let l=t[o].id,s=e.getCells()[l.slice(4)];console.log("hitCoords is:"),console.log(s);let i=Number(s[0]),r=Number(s[1]);if(r+1<11){console.log("hitY + 1 is < 11");let t=[i,r+1];if(1==n.some((e=>e[0]===t[0]&&e[1]===t[1])))return console.log("Adjacent cell found in possible moves."),e.receiveAttack(t[0],t[1])}if(r-1>0){console.log("hitY - 1 is > 0");let t=[i,r-1];if(1==n.some((e=>e[0]===t[0]&&e[1]===t[1])))return console.log("Adjacent cell found in possible moves."),e.receiveAttack(t[0],t[1])}}console.log("gave up on smart move, gonna do a random attack.");let o=n[Math.floor(Math.random()*n.length)],s=o[0],i=o[1];return e.receiveAttack(s,i)}{for(let o=0;o<t.length;o++){console.log("in the second for loop - going vertically");let l=t[o].id,s=e.getCells()[l.slice(4)];console.log("hitCoords is:"),console.log(s);let i=Number(s[0]),r=Number(s[1]);if(r+1<11){console.log("hitY + 1 is < 11");let t=[i,r+1];if(1==n.some((e=>e[0]===t[0]&&e[1]===t[1])))return console.log("Adjacent cell found in possible moves."),e.receiveAttack(t[0],t[1])}if(r-1>0){console.log("hitY - 1 is > 0");let t=[i,r-1];if(1==n.some((e=>e[0]===t[0]&&e[1]===t[1])))return console.log("Adjacent cell found in possible moves."),e.receiveAttack(t[0],t[1])}}for(let o=0;o<t.length;o++){console.log("in the first for loop - going horizontally");let l=t[o].id,s=e.getCells()[l.slice(4)];console.log("hitCoords is:"),console.log(s);let i=Number(s[0]),r=Number(s[1]);if(i+1<11){console.log("hitX + 1 is < 11");let t=[i+1,r];if(1==n.some((e=>e[0]===t[0]&&e[1]===t[1])))return console.log("Adjacent cell found in possible moves."),e.receiveAttack(t[0],t[1])}if(i-1>0){console.log("hitX - 1 is > 0");let t=[i-1,r];if(1==n.some((e=>e[0]===t[0]&&e[1]===t[1])))return console.log("Adjacent cell found in possible moves."),e.receiveAttack(t[0],t[1])}}console.log("gave up on smart move, gonna do a random attack.");let o=n[Math.floor(Math.random()*n.length)],l=o[0],s=o[1];return e.receiveAttack(l,s)}}},placeAIships:n}})(),h=n("gb2","the enemy's");u.placeAIships(h),p.classList="shown",i.classList="shown wrappergrid",m.textContent=`Your move, Admiral ${e}.`,a.classList.add("crosshair");var f="";const b=async(n=s,o=h)=>{if(console.log("gameLoop is running."),1==t.areAllSunk())a.classList.remove("crosshair"),i.classList="hidden",r.classList="shown wrappergrid",c.textContent="Game over. The enemy won.",f="Player 2 wins!",console.log(f);else if(1==h.areAllSunk())a.classList.remove("crosshair"),i.classList="hidden",r.classList="shown wrappergrid",c.textContent=`Game over. Admiral ${e}'s fleet defeated the enemy.`,f="Player 1 wins!",console.log(f);else if(console.log("not the base case."),"human"===n.category){console.log("currentPlayer.category is human"),a.classList.add("firehere");var p=function(e){let n=e.target;n.classList.contains("cell")&&n.classList.add("cell-aim")},v=function(e){let n=e.target;n.classList.contains("cell")&&n.classList.remove("cell-aim")},x=async function(e){console.log("Human attack handler is running."),a.removeEventListener("click",x),a.removeEventListener("mouseover",p),a.removeEventListener("mouseout",v),a.classList.remove("crosshair"),a.classList.remove("firehere"),w.textContent="",k.textContent="",A.textContent="",d.textContent="You fired ...";let l=e.target;if(l.classList.contains("cell")){l.classList.add("cell-fire");var s=l.id.slice(4),i=h.getCells()[s];return"Already tried this spot."===await n.attack(i[0],i[1],o)?(l.classList.remove("cell-fire"),d.textContent=d.textContent+" false alarm, please fire again.",a.removeEventListener("click",x),a.removeEventListener("mouseover",p),a.removeEventListener("mouseout",v),b(n,o)):b(n=u,o=t)}};a.addEventListener("mouseover",p),a.addEventListener("mouseout",v),a.addEventListener("click",x)}else if("robot"===n.category)return console.log("currentPlayer.category is robot"),await l(500),g.textContent="The enemy fired ...",await n.attack(o),n=s,o=h,await l(500),m.textContent=`Your move, Admiral ${e}.`,a.classList.add("crosshair"),b(n,o)};b()})(e,t);{let n=t.getPlacedShips()[s];b.textContent=`Admiral ${e}, please place your ${n.ship.name}.`;var h=function(e){let o=e.target;if(o.classList.contains("cell")){var l=o.id.slice(4),s=t.getCells()[l];let e,i=n.ship.length,r=L.getAttribute("data-status");if(e="horizontal"===r?0:1,s[e]+i<=11)for(let e=0;e<i;e++)if("horizontal"===r){let n=document.getElementById(`${t.name}-${Number(l)+Number(e)}`);n.classList.contains("cell-placed")||(n.classList="cell cell-hover")}else if("vertical"===r){let n=document.getElementById(`${t.name}-${Number(l)+10*Number(e)}`);n.classList.contains("cell-placed")||(n.classList="cell cell-hover")}}},x=function(e){let o=e.target;if(o.classList.contains("cell")){var l=o.id.slice(4),s=t.getCells()[l];let e,i=n.ship.length,r=L.getAttribute("data-status");if(e="horizontal"===r?0:1,s[e]+i<=11)for(let e=0;e<i;e++)if("horizontal"===r){let n=document.getElementById(`${t.name}-${Number(l)+Number(e)}`);n.classList.contains("cell-hover")&&n.classList.remove("cell-hover")}else if("vertical"===r){let n=document.getElementById(`${t.name}-${Number(l)+10*Number(e)}`);n.classList.contains("cell-hover")&&n.classList.remove("cell-hover")}}},y=function(o){let l=o.target;if(l.classList.contains("cell")){var i=l.id.slice(4),r=t.getCells()[i];let o,a=n.ship.length,c=L.getAttribute("data-status");if(o="horizontal"===c?0:1,r[o]+a<=11){let o=[];for(let e=0;e<a;e++)"horizontal"===c?o.push(t.getCells()[Number(i)+Number(e)]):o.push(t.getCells()[Number(i)+10*Number(e)]);for(let e=0;e<a;e++)if(""!=t.isThereAShipHere(o[e][0],o[e][1]))return;for(let e=0;e<a;e++)if("horizontal"===c){u(`gb1-${Number(i)+e}`).classList="cell cell-placed";let t=[Number(r[0])+Number(e),r[1]];n.location.push(t)}else if("vertical"===c){document.getElementById(`gb1-${Number(i)+10*e}`).classList="cell cell-placed";let t=[r[0],Number(r[1])+Number(e)];n.location.push(t)}return s+=1,console.log(`This many ships have been placed: ${s}`),v.removeEventListener("click",y),v.removeEventListener("mouseover",h),v.removeEventListener("mouseout",x),C(e,t,s)}}};v.addEventListener("click",y),v.addEventListener("mouseout",x),v.addEventListener("mouseover",h)}}y.addEventListener("click",(function(){"horizontal"===L.getAttribute("data-status")?(L.setAttribute("data-status","vertical"),L.textContent="vertical"):(L.setAttribute("data-status","horizontal"),L.textContent="horizontal")}));var E=t(379),N=t.n(E),I=t(795),S=t.n(I),T=t(569),z=t.n(T),M=t(565),P=t.n(M),j=t(216),B=t.n(j),O=t(589),H=t.n(O),Y=t(426),D={};D.styleTagTransform=H(),D.setAttributes=P(),D.insert=z().bind(null,"head"),D.domAPI=S(),D.insertStyleElement=B(),N()(Y.Z,D),Y.Z&&Y.Z.locals&&Y.Z.locals,(()=>{for(let n=0;n<100;n++)(e=document.createElement("div")).className="cell cell-plain",e.id=`gb1-${n}`,v.appendChild(e);for(let n=0;n<100;n++){var e;(e=document.createElement("div")).className="cell cell-plain",e.id=`gb2-${n}`,x.appendChild(e)}})(),u("namebtn").addEventListener("click",(function(){$.classList.remove("firehere");const e=u("p1name").value;h.classList="hidden",h.remove(),f.classList="shown wrappergrid";let t=n("gb1","your");v.classList.add("placeshipshere"),C(e,t)}))})()})();