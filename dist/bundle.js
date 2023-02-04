(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(81),r=n.n(o),l=n(645),a=n.n(l)()(r());a.push([e.id,":root {\n  --main-bg-color: white;\n  /* --main-title-color: rgb(252, 128, 148); */\n    --main-title-color: rgb(250, 95, 121);\n  --message-area-bg-color: white;\n  --button-bg-color: white;\n  --button-border-color: black;\n  --gb-bg-color:white;\n  --gbOne-bg-color: green;\n  --gbTwo-bg-color:blue;\n  /* cells */\n  --cell-plain-bg-color: rgb(163, 230, 245);\n  --cell-hover-bg-color: rgba(9, 116, 140, 0.7);\n  --cell-place-bg-color: rgb(9, 116, 140);\n  --cell-ship-bg-color: red;\n  --cell-hit-ship-bg-color: red;\n  /* I love this below color pink */\n  --cell-sunk-ship-bg-color: rgb(255, 0, 174);\n  --cell-miss-bg-color: gray;\n  --cell-fire-bg-color: rgba(9, 116, 140, 0.4);\n  /* box shadows */\n  --place-here-box-shadow: 0px 0px 30px 0px rgb(255, 68, 0);\n  --fire-here-box-shadow: 0px 0px 30px 0px rgb(255, 68, 0);\n  --subtle-box-shadow: -2px 2px 0px #0d012d25;\n\n  /* TEXT */\n  --sidebar-header-text: 'IBM Plex Mono';\n  --sidebar-small-text: 'IBM Plex Mono';\n  /* --sidebar-small-text: 'Roboto'; */\n  --waters-header-text: 'IBM Plex Mono';\n  --message-area-text: 'IBM Plex Mono';\n  --ns-form-text: 'IBM Plex Mono';\n  --button-text: 'IBM Plex Mono';\n  /* better divisions */\n  --small-facts-text:'IBM Plex Mono';\n  --message-text: 'Roboto';\n}\n\n*{\n  margin: 0px;\n  padding: 0px;\n  box-sizing: border-box;\n  font-size: 18px;\n  font-family: 'IBM Plex Mono';\n  font-style:normal;\n}\n\n.hidden {\n  display: none;\n}\n\n.shown {\n  visibility: visible;\n}\n\n.flexthird {\n  height: 60px;\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\nh1 {\n  font-size: 60px;\n  margin-bottom: 40px;\n  font-family: 'Bungee';\n  color: var(--main-title-color);\n}\n\nh3 {\n  font-family: var(--waters-header-text);\n  font-weight: 400;\n  font-style: normal;\n  font-size: 24px;\n  margin-bottom: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\nbody {\n  display: grid;\n  grid-template-columns: 350px auto;\n  height: 100vh;\n}\n\n/* SIDEBAR */\n#sidebar {\n  box-sizing: border-box;\n  width: 100%;\n  grid-column: 1 / 2;\n  border-right: 1px solid black;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  height: 100%;\n  padding-top: 15px;\n  padding-bottom: 15px;\n}\n\n.smallfacts {\n  font-family: 'IBM Plex Mono';\n}\n\n#rulescontainer, #scorecontainer.shown, #colorkeycontainer {\n  width: 80%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  padding-left: 25px;\n  padding-right: 25px;\n  margin-left: 10px;\n}\n\n#gb1-ships {\n  margin-bottom: 20px;\n}\n\nul {\n  margin-left: 15px;\n}\n\nli {\n  margin: 10px 0px 10px 15px;\n  font-size: 18px;\n}\n\n.scoreli, .rulesli, .keydef {\n  font-family: var(--sidebar-small-text);\n  /* font-weight: 400px; */\n}\n\n.rulesli {\n  line-height: 30px;\n}\n\nli.scoreli {\n  list-style-type: none;\n}\n\n\n.sidebarheaderexpands {\n  display: flex;\n  flex-direction: row;\n}\n\n.expandicon {\n  position: relative;\n  top: -3px;\n  left: 5px;\n  cursor: pointer;\n}\n\n#colorkey {\n  grid-template-rows: 40px 40px 40px 40px 40px;\n  grid-template-columns: 40px auto;\n  gap: 10px;\n}\n\n#colorkey.shown {\n  display: grid;\n}\n\n.keysquare {\n  border: black solid 1px;\n}\n\n.keydef {\n  align-self: center;\n  font-size: 18px; \n}\n\n#watersqkey {\n  background-color: var(--cell-plain-bg-color);\n}\n\n#yourshipsqkey {\n  background-color: var(--cell-place-bg-color);\n}\n\n#hitshipsqkey {\n  background-color: var(--cell-hit-ship-bg-color);\n}\n\n#sunkshipsqkey {\n  background-color: var(--cell-sunk-ship-bg-color);\n}\n\n#misssqkey {\n  background-color: var(--cell-miss-bg-color);\n}\n\n.scoresunkship {\n  text-decoration: line-through;\n}\n/* END SIDEBAR */\n\n\n/* BUTTONS */\nbutton.regular {\n  background-color: var(--button-bg-color);\n  border: 1px solid var(--button-border-color);\n  padding: 5px 20px 5px 20px;\n  font-size: 18px;\n  box-shadow: var(--subtle-box-shadow);\n  width: fit-content;\n  font-family: var(--button-text);\n  font-weight: 400px;\n  text-transform: uppercase;\n  cursor: pointer;\n}\n\nbutton.regular:hover {\n  background-color: rgb(244, 236, 237);\n}\n\nbutton.regular:active {\n  background-color: rgb(245, 176, 92);\n}\n/* END BUTTONS */\n\n/* MAIN */\n#main {\n  grid-column: 2 / 3;\n  display: flex;\n  flex-direction: column;\n  /* centers vertically */\n  justify-content: flex-start; \n  align-items: center;\n  background-color: var(--main-bg-color);\n  padding-top: 40px;\n}\n\n/* ---------------HEADER AREA------------------ */\n#messagearea {\n  box-sizing: content-box;\n  border-radius: 5px;\n  background-color: var(--message-area-bg-color);\n  width: 600px;\n  height: 180px;\n  margin-bottom: 45px;\n  border: 1px solid black;\n}\n\n.message {\n  font-size: 22px;\n  font-family: 'Roboto';\n  font-style: italic;\n  font-weight: 400;\n}\n\n.msgtop, .msgmiddle, .msgbottom {\n  height: 60px;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.msgtop {\n  background-color:rgb(243, 229, 159);\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n}\n\n.msgmiddle {\n  background-color:rgb(247, 211, 168);\n}\n\n.msgbottom {\n  background-color:rgb(239, 189, 199);\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n}\n\n.msgwrapper {\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n}\n\n\n/* WELCOME FORM */\n#welcomeform {\n  justify-content: center;\n}\n\n#welcomeform.shown{\n  display: flex;\n}\n\ninput.nsformitem {\n  min-width: 80%;\n  padding: 5px;\n  text-align: left;\n  font-family: 'Roboto';\n  font-weight: 400px;\n  font-size: 18px;\n}\n/* END WELCOME FORM */\n\n/* SHIP PLACEMENT */\n#placementwrapper {\n  justify-content: center;\n  justify-items: center;\n}\n\n#placementwrapper.shown {\n  display: flex;\n}\n\n#toggleicon {\n  position: relative;\n  top: 2px;\n  left: 5px;\n  height: 18px;\n}\n\n.shipname {\n  font-family: 'IBM Plex Mono';\n  font-weight: 400;\n  text-transform: uppercase;\n  color: red;\n}\n/* END SHIP PLACEMENT */\n\n/* MOVES */\n#movewrapper {\n  justify-content: flex-start;\n}\n\n.movemsg {\n  text-align: left;\n  align-self: left;\n}\n/* END MOVES */\n\n/* GAME OVER */\n#gameoverwrapper {\n  justify-content: center;\n  justify-items: center;\n}\n\n#gameoverwrapper.shown {\n  display: flex;\n}\n/* ---------------END HEADER AREA------------------ */\n\n/* GAMEBOARD AREA */\n#gameboardrow {\n  display: flex;\n  flex-direction: row;\n  background-color: var(--gb-bg-color);\n}\n\n.gameboardcolumn {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.gameboardcontainer {\n  background-color: var(--gb-bg-color);\n  width: 400px;\n  height: 400px;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  border: 1px solid black;\n  margin: 20px;\n  pointer-events: none;\n}\n\n.waterslabel {\n  color: var(--main-title-color);\n  /* font-weight: 600; */\n  font-weight: 400;\n}\n\n.cell {\n  border: 1px solid black;\n  background-color: var(--cell-plain-bg-color);\n  pointer-events: auto;\n}\n\n.cell-hover {\n  background-color: var(--cell-hover-bg-color);\n}\n\n.cell-placed {\n  background-color: var(--cell-place-bg-color);\n}\n\n.cell-hit-ship {\n  background-color: var(--cell-hit-ship-bg-color);\n}\n\n.cell-sunk-ship {\n  background-color: var(--cell-sunk-ship-bg-color);\n}\n\n.cell-miss {\n  background-color: var(--cell-miss-bg-color);\n}\n\n.cell-fire {\n  background-color: var(--cell-fire-bg-color);\n  transition: transform .2s;  /*Animation */\n  transform: scale(1.1);\n}\n\n.cell-aim {\n  background-color: var(--cell-fire-bg-color);\n}\n\n/* button.cell {\n  padding: 0;\n  margin: 0;\n} */\n\n.crosshair {\n  cursor: crosshair !important;\n}\n\n.placeshipshere {\n  box-shadow: var(--place-here-box-shadow);\n}\n\n.firehere {\n  box-shadow: var(--place-here-box-shadow);\n}\n/* END GAMEBOARD AREA */\n",""]);const i=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,l){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(a[s]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);o&&a[d[0]]||(void 0!==l&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=l),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var l={},a=[],i=0;i<e.length;i++){var s=e[i],c=o.base?s[0]+o.base:s[0],d=l[c]||0,p="".concat(c," ").concat(d);l[c]=d+1;var u=n(p),g={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)t[u].references++,t[u].updater(g);else{var m=r(g,o);o.byIndex=i,t.splice(i,0,{identifier:p,updater:m,references:1})}a.push(p)}return a}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var l=o(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<l.length;a++){var i=n(l[a]);t[i].references--}for(var s=o(e,r),c=0;c<l.length;c++){var d=n(l[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}l=s}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var l=n.sourceMap;l&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(l))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var l=t[o]={id:o,exports:{}};return e[o](l,l.exports,n),l.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{const e=(e,t)=>{let n=0;return{name:e,length:t,hit:()=>n+=1,isSunk:()=>n>=t,getHits:()=>n}},t=e=>document.getElementById(e),o=e=>new Promise((t=>setTimeout(t,e)));var r=Number(0);r=Number(600);const l=(t,n)=>{let l=[];for(let e=1;e<11;e++)for(let t=1;t<11;t++)l.push([t,e]);let a=[...l],i=[],s=[],c=0,d=[{ship:e("carrier",5),location:[]},{ship:e("battleship",4),location:[]},{ship:e("destroyer",3),location:[]},{ship:e("submarine",3),location:[]},{ship:e("patrol boat",2),location:[]}];const p=(e,t)=>{for(let n=0;n<d.length;n++){if(null!=d[n].location.find((n=>n[0]===e&&n[1]===t)))return d[n].ship}return""};return{name:t,posessive:n,getCells:()=>l,getMissed:()=>i,receiveAttack:async(e,u)=>{console.log(`${t} is receiving attack at ${e}, ${u}`),console.log(`waitTime is ${r}`),await o(.45*r);let g=l.indexOf(l.find((t=>t[0]===e&&t[1]===u))),m=document.getElementById(`${t}-${g}`),b=a.indexOf(l.find((t=>t[0]===e&&t[1]===u)));if(b>=0&&a.splice(b,1),null!=s.find((t=>t[0]===e&&t[1]===u)))return console.log("receiveAttack wrapping up with an already tried spot."),"Already tried this spot.";{const o=[e,u];s.push(o);let r=t.slice(2);if(1==r)var h=2;else 2==r&&(h=1);let a=document.getElementById(`p${h}move`);if(""!=p(e,u)){let o=p(e,u);if(o.hit(),m.classList="cell cell-hit-ship",1==o.isSunk()){c+=1;let e=d.find((e=>e.ship.name===o.name)).location;for(let t=0;t<e.length;t++){let n=e[t][0],o=e[t][1],a=l.indexOf(l.find((e=>e[0]===n&&e[1]===o)));document.getElementById(`gb${r}-${a}`).classList="cell cell-sunk-ship"}a.textContent+=` and sunk ${n} ${o.name}!`,f=t,"patrol boat"===(v=o.name)&&(v="patrolboat"),document.getElementById(`${f}-${v}`).classList.add("scoresunkship")}else a.textContent+=` and hit ${n} ${o.name}.`;return console.log("receiveAttack wrapping up with a hit."),"hit!"}return i.push(o),a.textContent+=" and missed.",m.classList="cell cell-miss",console.log("receiveAttack wrapping up with a miss."),"miss!"}var f,v},getSunk:()=>c,areAllSunk:()=>(console.log(`running areAllSunk gameBoard ${t} method`),c>=5?(console.log(`All ${t} ships are sunk.`),!0):(console.log(`Not all ships on ${t} have been sunk yet.`),!1)),getPossible:()=>a,getPlacedShips:()=>d,getNumShipsToPlace:()=>5,getFiredShots:()=>s,isThereAShipHere:p}},a=document.getElementById("gbcontainer1"),i=t("movewrapper"),s=t("gameoverwrapper"),c=t("gbcontainer1"),d=t("gbcontainer2"),p=(t("gameoverp1"),t("gameoverp2")),u=(t("gameoverp3"),t("p1move")),g=t("p2move"),m=t("moveprompt"),b=t("scorecontainer"),h=(t("playagainbtn"),(e,t)=>{console.log("playGame function has started."),S.gb1object;let n={name:e,category:"human",attack:(e,t,n)=>(console.log("human player is attacking and about to call the enemy boards receive attack method."),n.receiveAttack(e,t))};S.p1object=n;let h=(e=>{const t=(e,n=0)=>{if(!(n>e.getPlacedShips().length-1)){let a=e.getPlacedShips()[n];var o=Math.round(Math.random());if(0===o)var r="horizontal";else r="vertical";let i=a.ship.length,s=Math.floor(100*Math.random());if([...e.getCells()[s]][o]+i<=11){var l=[];for(let t=0;t<i;t++)"horizontal"===r?l.push(e.getCells()[Number(s)+Number(t)]):l.push(e.getCells()[Number(s)+10*Number(t)]);for(let o=0;o<i;o++){let r=[...l[o]];if(""!=e.isThereAShipHere(r[0],r[1]))return a.location=[],t(e,n);a.location.push(r)}return t(e,n+=1)}return t(e,n)}console.log("base case - AI ships placed")};return{name:"The Enemy",category:"robot",attack:e=>{console.log("AI is attacking");let t=e.getPossible(),n=e.getCells(),o=a.querySelector(".cell-hit-ship");if(null==o){if(t.length<60){let o=t[Math.floor(Math.random()*t.length)],r=o[0],l=o[1],a=n.indexOf(n.find((e=>e[0]===r&&e[1]===l)));return document.getElementById(`${e.name}-${a}`).classList="cell cell-fire",console.log("AI attack wrapping up, about to call gb1 receieveattack method"),e.receiveAttack(r,l)}{let o="impossible",a="impossible",i="impossible",s="impossible";for(;!("impossible"!==s&&"impossible"!==i||"impossible"!==o&&"impossible"!==a);){let c=t[Math.floor(Math.random()*t.length)],d=Number(n.indexOf(c)),p=+d-10;if(p>=0){let t=`${e.name}-${p}`,n=document.getElementById(t);o=n.classList.contains("cell-miss")&&n.classList.contains("cell-sunk-ship")&&n.classList.contains("cell-hit-ship")?"impossible":"possible"}else o="impossible";let u=+d+10;if(u<100){let t=`${e.name}-${u}`,n=document.getElementById(t);a=n.classList.contains("cell-miss")&&n.classList.contains("cell-sunk-ship")&&n.classList.contains("cell-hit-ship")?"impossible":"possible"}else a="impossible";let g=+d+1;if(console.log(`${g} is gbIdxRight`),g<100)if(n[g][0]===Number(c[0])+1){let t=`${e.name}-${g}`,n=document.getElementById(t);i=n.classList.contains("cell-miss")&&n.classList.contains("cell-sunk-ship")&&n.classList.contains("cell-hit-ship")?"impossible":"possible"}else i="impossible";let m=+d-1;if(m>=0)if(n[m][0]===Number(c[0])-1){let t=`${e.name}-${m}`,n=document.getElementById(t);s=n.classList.contains("cell-miss")&&n.classList.contains("cell-sunk-ship")&&n.classList.contains("cell-hit-ship")?"impossible":"possible"}else s="impossible";var r=c[0],l=c[1]}let c=n.indexOf(n.find((e=>e[0]===r&&e[1]===l)));return console.log(`tarCelNum is ${c}`),document.getElementById(`${e.name}-${c}`).classList="cell cell-fire",console.log(`AI attack wrapping up, about to return otherboard.receiveAttack(${r},${l})`),e.receiveAttack(r,l)}}if(null!=o){let o=Array.from(a.querySelectorAll(".cell-hit-ship")),r="";if(o.length>1){let e=o.map((e=>e.id.slice(4)));r=1===Math.abs(e[0]-e[1])?"horizontal":"vertical"}if("horizontal"===r||""===r){for(let r=0;r<o.length;r++){let l=o[r].id,a=e.getCells()[l.slice(4)],i=Number(a[0]),s=Number(a[1]);if(i+1<11){let o=[i+1,s];if(1==t.some((e=>e[0]===o[0]&&e[1]===o[1]))){let t=n.indexOf(n.find((e=>e[0]===o[0]&&e[1]===o[1])));return document.getElementById(`${e.name}-${t}`).classList="cell cell-fire",console.log(`AI attack wrapping up, about to return otherBoard.receiveAttack(${o[0]}, ${o[1]})`),e.receiveAttack(o[0],o[1])}}if(i-1>0){let o=[i-1,s];if(1==t.some((e=>e[0]===o[0]&&e[1]===o[1]))){let t=n.indexOf(n.find((e=>e[0]===o[0]&&e[1]===o[1])));return document.getElementById(`${e.name}-${t}`).classList="cell cell-fire",console.log(`AI attack wrapping up, about to return otherBoard.receiveAttack(${o[0]}, ${o[1]})`),e.receiveAttack(o[0],o[1])}}}for(let r=0;r<o.length;r++){let l=o[r].id,a=e.getCells()[l.slice(4)],i=Number(a[0]),s=Number(a[1]);if(s+1<11){let o=[i,s+1];if(1==t.some((e=>e[0]===o[0]&&e[1]===o[1]))){let t=n.indexOf(n.find((e=>e[0]===o[0]&&e[1]===o[1])));return document.getElementById(`${e.name}-${t}`).classList="cell cell-fire",console.log(`AI attack wrapping up, about to return otherBoard.receiveAttack(${o[0]}, ${o[1]})`),e.receiveAttack(o[0],o[1])}}if(s-1>0){let o=[i,s-1];if(1==t.some((e=>e[0]===o[0]&&e[1]===o[1]))){let t=n.indexOf(n.find((e=>e[0]===o[0]&&e[1]===o[1])));return document.getElementById(`${e.name}-${t}`).classList="cell cell-fire",console.log(`AI attack wrapping up, about to return otherBoard.receiveAttack(${o[0]}, ${o[1]})`),e.receiveAttack(o[0],o[1])}}}let r=t[Math.floor(Math.random()*t.length)],l=r[0],a=r[1],i=n.indexOf(n.find((e=>e[0]===l&&e[1]===a)));return document.getElementById(`${e.name}-${i}`).classList="cell cell-fire",console.log(`AI attack wrapping up, about to return otherBoard.receiveAttack(${l}, ${a})`),e.receiveAttack(l,a)}{for(let n=0;n<o.length;n++){let r=o[n].id,l=e.getCells()[r.slice(4)],a=Number(l[0]),i=Number(l[1]);if(i+1<11){let n=[a,i+1];if(1==t.some((e=>e[0]===n[0]&&e[1]===n[1])))return console.log(`AI attack wrapping up, about to return otherBoard.receiveAttack(${n[0]}, ${n[1]})`),e.receiveAttack(n[0],n[1])}if(i-1>0){let n=[a,i-1];if(1==t.some((e=>e[0]===n[0]&&e[1]===n[1])))return console.log(`AI attack wrapping up, about to return otherBoard.receiveAttack(${n[0]}, ${n[1]})`),e.receiveAttack(n[0],n[1])}}for(let n=0;n<o.length;n++){let r=o[n].id,l=e.getCells()[r.slice(4)],a=Number(l[0]),i=Number(l[1]);if(a+1<11){let n=[a+1,i];if(1==t.some((e=>e[0]===n[0]&&e[1]===n[1])))return console.log(`AI attack wrapping up, about to return otherBoard.receiveAttack(${n[0]}, ${n[1]})`),e.receiveAttack(n[0],n[1])}if(a-1>0){let n=[a-1,i];if(1==t.some((e=>e[0]===n[0]&&e[1]===n[1])))return console.log(`AI attack wrapping up, about to return otherBoard.receiveAttack(${n[0]}, ${n[1]})`),e.receiveAttack(n[0],n[1])}}let r=t[Math.floor(Math.random()*t.length)],l=r[0],a=r[1],i=n.indexOf(n.find((e=>e[0]===l&&e[1]===a)));return document.getElementById(`${e.name}-${i}`).classList="cell cell-fire",console.log(`AI attack wrapping up, about to return otherBoard.receiveAttack(${l}, ${a})`),e.receiveAttack(l,a)}}},placeAIships:t}})();S.p2object=h;let f=l("gb2","the enemy's");S.gb2object=f,S.p2object.placeAIships(S.gb2object),b.classList="shown",i.classList="shown msgwrapper",m.textContent=`Your move, Admiral ${e}.`;var v="";const x=Array.from(c.querySelectorAll(".cell")),y=Array.from(d.querySelectorAll(".cell"));c.removeAttribute("tabindex"),x.forEach((e=>e.removeAttribute("tabindex"))),x.forEach((e=>e.setAttribute("disabled","true"))),d.setAttribute("tabindex","0"),d.addEventListener("keydown",(function(e){"Enter"===e.key&&e.preventDefault()})),y.forEach((e=>e.addEventListener("keydown",(function(e){"Enter"===e.key&&e.preventDefault()}))));const k=async(t=S.p1object,n=S.gb2object)=>{if(console.log("gameLoop is running."),1==S.gb1object.areAllSunk())console.log(`waitTime is ${r}`),await o(r),d.classList.remove("crosshair"),d.removeAttribute("tabindex"),y.forEach((e=>e.removeAttribute("tabindex"))),i.classList="hidden",s.classList="shown msgwrapper",p.textContent="The enemy won!",v="Player 2 wins!",console.log(v);else if(1==S.gb2object.areAllSunk())await o(r),d.classList.remove("crosshair"),i.classList="hidden",s.classList="shown msgwrapper",d.removeAttribute("tabindex"),y.forEach((e=>e.removeAttribute("tabindex"))),p.textContent=`Admiral ${e}'s fleet defeated the enemy!`,v="Player 1 wins!",console.log(v);else if(console.log("not the base case."),"human"===t.category){console.log(`currentPlayer.name is human named ${t.name}`),d.classList.add("crosshair"),d.classList.add("firehere"),y.forEach((e=>e.setAttribute("tabindex","0")));var l=function(e){let t=e.target;t.classList.contains("cell")&&t.classList.add("cell-aim")},a=function(e){let t=e.target;t.classList.contains("cell")&&t.classList.remove("cell-aim")},c=async function(e){console.log("HUMAN ATTACK HANDLER IS RUNNING"),console.log(`currentPlayer.name is ${t.name}`),y.forEach((e=>e.onkeyup=null)),d.removeEventListener("click",c),d.removeEventListener("mouseover",l),d.removeEventListener("mouseout",a),d.classList.remove("crosshair"),d.classList.remove("firehere"),E.textContent="",L.textContent="",$.textContent="",u.textContent="You fired ...";let o=e.target;if(console.log(`target.id is ${o.id}`),console.log(`currentPlayer.name is ${t.name}`),o.classList.contains("cell")){console.log("STEP 8: target classlist DID have cell, about to add cell-fire to classlist"),o.classList.add("cell-fire"),console.log(`currentPlayer.name is ${t.name}`),console.log("STEP 9: about to get relevant coords based on target cell id");var r=o.id.slice(4),i=S.gb2object.getCells()[r];console.log(`STEP 10: got the coords, about to attack and the currentPlayer should be the human but is actually ${t.name}`);let e=await t.attack(i[0],i[1],n);return console.log(`STEP 11: Got the result from attacking and it is ${e}`),"Already tried this spot."===e?(o.classList.remove("cell-fire"),u.textContent=u.textContent+" false alarm, please fire again.",d.removeEventListener("click",c),d.removeEventListener("mouseover",l),d.removeEventListener("mouseout",a),y.forEach((e=>e.removeAttribute("tabindex"))),y.forEach((e=>e.keyup=null)),d.classList.add("crosshair"),k(t,n)):(console.log("about to switch currentPlayer from human to robot"),t=S.p2object,n=S.gb1object,console.log("the human attackhandler is about to end by calling gameLoop with the AI player as the player."),k(t,n))}};function b(e){if(e.preventDefault,"Enter"===e.key)return e.target.removeEventListener("keyup",b),console.log("Enter was pressed."),e.target.click()}d.addEventListener("mouseover",l),d.addEventListener("mouseout",a),d.addEventListener("click",c),y.forEach((e=>e.addEventListener("keyup",b)))}else if("robot"===t.category)return console.log("currentPlayer.category is robot"),await o(r/2),g.textContent="The enemy fired ...",await t.attack(n),await o(r/2),0==n.areAllSunk()&&(console.log("not all enemy ships are sunk"),m.textContent=`Your move, Admiral ${e}.`,d.classList.add("crosshair")),t=S.p1object,n=S.gb2object,console.log("at the very end of AI turn about to return gameLoop"),k(t,n)};return k(),v}),f=t("welcomeform"),v=t("placementwrapper"),x=t("placemessage"),y=t("gbcontainer1"),k=t("gbcontainer2"),A=t("togglebtn"),w=t("axis"),E=t("p1move"),L=t("p2move"),$=t("moveprompt"),I=t("messagearea"),N=t("playagainbtn"),M=t("colorkeyexpandicon"),B=t("rulesexpandicon"),C=t("gameoverwrapper"),S={gb1object:null,gb2object:null,p1object:null,p2object:null,destroy(){this.gb1object=null,this.gb2object=null,this.p1object=null,this.p2object=null}},j=Array.from(y.querySelectorAll(".cell"));function P(e){console.log("running showHide function");let t=e.target.getAttribute("aria-expanded"),n=e.target.getAttribute("aria-controls"),o=document.getElementById(n);"false"===t?(e.target.setAttribute("aria-expanded","true"),e.target.setAttribute("src","../src/images/minus-square.svg"),e.target.setAttribute("title","hide"),o.classList="shown"):(e.target.setAttribute("aria-expanded","false"),e.target.setAttribute("src","../src/images/plus-square.svg"),e.target.setAttribute("title","expand"),o.classList="hidden")}function T(){t("namebtn").addEventListener("click",(function(){I.classList.remove("firehere");const e=t("p1name").value;f.classList="hidden",f.reset(),v.classList="shown msgwrapper";let n=l("gb1","your");S.gb1object=n,y.classList.add("placeshipshere"),D(e,S.gb1object)}))}function O(){"horizontal"===w.getAttribute("data-status")?(w.setAttribute("data-status","vertical"),w.textContent="vertical"):(w.setAttribute("data-status","horizontal"),w.textContent="horizontal")}M.addEventListener("click",P),B.addEventListener("click",P),A.addEventListener("click",O),N.addEventListener("click",(function(){console.log("Play again button was clicked."),console.log("Before destroying, theGameObject is:"),console.log(S),S.destroy(),console.log("After destroying, theGameObject is:"),console.log(S),console.log("about to hide game over wrapper"),C.classList="hidden",console.log("about to show welcome wrapper"),f.classList="shown msgwrapper",function(){for(;y.firstChild;)y.removeChild(y.firstChild);for(;k.firstChild;)k.removeChild(k.firstChild)}(),z(),T()}));const z=()=>{for(let t=0;t<100;t++)(e=document.createElement("div")).className="cell cell-plain",e.id=`gb1-${t}`,e.setAttribute("tabindex","0"),e.setAttribute("z-index","5"),y.appendChild(e);for(let t=0;t<100;t++){var e;(e=document.createElement("div")).className="cell cell-plain",e.id=`gb2-${t}`,e.setAttribute("z-index","5"),k.appendChild(e)}};function D(e,n,o=0){if(o>n.getPlacedShips().length-1)return console.log("base case - human ships placed"),v.classList="hidden",y.classList.remove("placeshipshere"),B.click(),M.click(),void h(e);{y.setAttribute("tabindex","0"),y.addEventListener("keydown",(function(e){"Enter"===e.key&&e.preventDefault()})),j.forEach((e=>e.addEventListener("keydown",(function(e){"Enter"===e.key&&e.preventDefault()})))),document.addEventListener("keyup",(function(e){"a"===e.key&&(console.log("a was pressed"),O())}));let i=n.getPlacedShips()[o];x.innerHTML="Admiral "+e+", please place your <span class='shipname'> "+i.ship.name+".</span>";var r=function(e){let t=e.target;if(t.classList.contains("cell")){var o=t.id.slice(4),r=n.getCells()[o];let e,l=i.ship.length,a=w.getAttribute("data-status");if(e="horizontal"===a?0:1,r[e]+l<=11)for(let e=0;e<l;e++)if("horizontal"===a){let t=document.getElementById(`${n.name}-${Number(o)+Number(e)}`);t.classList.contains("cell-placed")||(t.classList="cell cell-hover")}else if("vertical"===a){let t=document.getElementById(`${n.name}-${Number(o)+10*Number(e)}`);t.classList.contains("cell-placed")||(t.classList="cell cell-hover")}}},l=function(e){let t=e.target;if(t.classList.contains("cell")){var o=t.id.slice(4),r=n.getCells()[o];let e,l=i.ship.length,a=w.getAttribute("data-status");if(e="horizontal"===a?0:1,r[e]+l<=11)for(let e=0;e<l;e++)if("horizontal"===a){let t=document.getElementById(`${n.name}-${Number(o)+Number(e)}`);t.classList.contains("cell-hover")&&t.classList.remove("cell-hover")}else if("vertical"===a){let t=document.getElementById(`${n.name}-${Number(o)+10*Number(e)}`);t.classList.contains("cell-hover")&&t.classList.remove("cell-hover")}}},a=function(s){j.forEach((e=>e.onkeyup=null));let c=s.target;if(c.classList.contains("cell")){var d=c.id.slice(4),p=n.getCells()[d];let s,u=i.ship.length,g=w.getAttribute("data-status");if(s="horizontal"===g?0:1,p[s]+u<=11){let s=[];for(let e=0;e<u;e++)"horizontal"===g?s.push(n.getCells()[Number(d)+Number(e)]):s.push(n.getCells()[Number(d)+10*Number(e)]);for(let e=0;e<u;e++)if(""!=n.isThereAShipHere(s[e][0],s[e][1]))return;for(let e=0;e<u;e++)if("horizontal"===g){t(`gb1-${Number(d)+e}`).classList="cell cell-placed";let n=[Number(p[0])+Number(e),p[1]];i.location.push(n)}else if("vertical"===g){document.getElementById(`gb1-${Number(d)+10*e}`).classList="cell cell-placed";let t=[p[0],Number(p[1])+Number(e)];i.location.push(t)}return o+=1,console.log(`This many ships have been placed: ${o}`),y.removeEventListener("click",a),y.removeEventListener("mouseover",r),y.removeEventListener("mouseout",l),D(e,n,o)}}};function s(e){if(e.preventDefault,"Enter"===e.key)return e.target.removeEventListener("keyup",s),console.log("Enter was pressed."),e.target.click()}y.addEventListener("click",a),y.addEventListener("mouseout",l),y.addEventListener("mouseover",r),j.forEach((e=>e.addEventListener("keyup",s)))}}var R=n(379),q=n.n(R),H=n(795),G=n.n(H),U=n(569),F=n.n(U),Z=n(565),V=n.n(Z),Y=n(216),W=n.n(Y),_=n(589),J=n.n(_),K=n(426),X={};X.styleTagTransform=J(),X.setAttributes=V(),X.insert=F().bind(null,"head"),X.domAPI=G(),X.insertStyleElement=W(),q()(K.Z,X),K.Z&&K.Z.locals&&K.Z.locals,z(),T()})()})();