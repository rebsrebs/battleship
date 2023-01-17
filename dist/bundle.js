(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>i});var o=t(81),r=t.n(o),l=t(645),a=t.n(l)()(r());a.push([e.id,":root {\n  --main-bg-color: white;\n  --cell-plain-bg-color: rgb(163, 230, 245);\n  --cell-hover-bg-color: rgba(9, 116, 140, 0.7);\n  --cell-place-bg-color: rgb(9, 116, 140);\n  --cell-ship-bg-color: red;\n  --cell-miss-bg-color: gray;\n  --cell-fire-bg-color: rgba(9, 116, 140, 0.4);\n  --gb-bg-color:white;\n  --message-area-bg-color: white;\n  --gbOne-bg-color: green;\n  --gbTwo-bg-color:blue;\n  --button-bg-color: white;\n  --button-border-color: black;\n  --place-here-box-shadow: 0px 0px 30px 0px rgb(255, 68, 0);\n  --fire-here-box-shadow: 0px 0px 30px 0px rgb(255, 68, 0);\n  --subtle-box-shadow: -2px 2px 0px #0d012d25;\n}\n\n*{\n  margin: 0px;\n  padding: 0px;\n}\n\nbody {\n  display: grid;\n  grid-template-columns: 300px auto;\n  grid-template-rows: auto;\n}\n\nh1#maintitle {\n  margin-bottom: 10px;\n}\n\n#sidebar {\n  box-sizing: border-box;\n  width: 100%;\n  grid-column: 1 / 2;\n  padding: 20px 20px 20px 20px;\n  border-right: 1px solid black;\n}\n\n#main {\n  grid-column: 2 / 3;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--main-bg-color);\n  font-family:Arial, Helvetica, sans-serif;\n}\n\nh1 {\n  font-size: 60px;\n  padding: 10px;\n}\n\nbutton {\n  background-color: var(--button-bg-color);\n  /* border-radius: 20px; */\n  border: 1px solid var(--button-border-color);\n  padding: 8px 18px 8px 18px;\n  font-size: 18px;\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n  box-shadow: var(--subtle-box-shadow);\n  margin: 10px;\n  width: fit-content;\n}\n\nbutton:hover {\n  background-color: rgb(244, 236, 237);\n}\n\nbutton:active {\n  background-color: rgb(245, 176, 92);\n}\n\n#rulescontainer {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  /* background-color:aquamarine; */\n}\n\n#rules {\n  font-size: 16px;\n}\n\nli { \n  margin: 4px;\n}\n\n/* #namestartcontainer\n#axiscontainer\n#gb1msgcontainer */\n\n.hidden {\n  /* visibility: hidden; */\n  display: none;\n}\n\n.shown {\n  visibility: visible;\n}\n\n#welcomeform {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.nsformitem {\n  padding: 10px;\n  margin: 5px;\n}\n\ninput.nsformitem {\n  min-width: 80%;\n  padding: 5px;\n}\n\n#players {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  width: 300px;\n}\n\n#gameboardrow {\n  display: flex;\n  flex-direction: row;\n  background-color: var(--gb-bg-color);\n}\n\n.gameboardcolumn {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.gameboardcontainer {\n  background-color: var(--gb-bg-color);\n  width: 400px;\n  height: 400px;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  border: 1px solid black;\n  margin: 20px;\n}\n\n.cell {\n  border: 1px solid black;\n  background-color: var(--cell-plain-bg-color);\n}\n\n/* .cell-plain {\n  \n} */\n\n.cell-hover {\n  background-color: var(--cell-hover-bg-color);\n}\n\n.cell-placed {\n  background-color: var(--cell-place-bg-color);\n}\n\n.cell-ship {\n  background-color: var(--cell-ship-bg-color);\n}\n\n.cell-miss {\n  background-color: var(--cell-miss-bg-color);\n}\n\n.cell-fire {\n  /* background-color: var(--cell-fire-bg-color); */\n  transition: transform .2s;  /*Animation */\n  transform: scale(1.1);\n}\n\n.cell-aim {\n  background-color: var(--cell-fire-bg-color);\n}\n\n.message {\n  font-size: 20px;\n}\n\n#messagearea {\n  /* border: 1px solid black; */\n  border-radius: 5px;\n  background-color: var(--message-area-bg-color);\n  width: 600px;\n  height: 180px;\n  margin-bottom: 30px;\n  border: 1px solid black;\n}\n\n\n\n\n\n#namebtn {\n  width: 20ch;\n}\n\n.message {\n  font-size: 20px;\n}\n\n\n.griditem {\n  display: flex;\n  align-self: center;\n  align-content: center;\n  justify-content: center;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  justify-self: center;\n}\n\n.wrappergrid {\n  width: 600px;\n  height: 180px;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 60px 60px 60px;\n}\n\n.griditemtop {\n  grid-row: 1 / 2;\n}\n\n.griditemmiddle {\n  grid-row: 2 / 3;\n}\n\n.griditembottom {\n  grid-row: 3 / 4;\n}\n\n.griditembottomtwo {\n  grid-row: 2 / 4;\n}\n\np.griditem {\n  font-size: 20px;\n}\n\n\n.movemsg {\n  text-align: left;\n  align-self: left;\n}\n\n.movediv {\n  /* later change width to be responsive */\n  width: 80%;\n  display: flex;\n  align-content: center;\n  justify-content: left;\n}\n\n.crosshair {\n  cursor: crosshair;\n}\n\n.placeshipshere {\n  box-shadow: var(--place-here-box-shadow);\n}\n\n.firehere {\n  box-shadow: var(--place-here-box-shadow);\n}\n\n#toggleicon {\n  margin-left: 5px;\n  height: 18px;\n}",""]);const i=a},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,l){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(a[s]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);o&&a[d[0]]||(void 0!==l&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=l),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),n.push(d))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var l={},a=[],i=0;i<e.length;i++){var s=e[i],c=o.base?s[0]+o.base:s[0],d=l[c]||0,p="".concat(c," ").concat(d);l[c]=d+1;var g=t(p),u={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==g)n[g].references++,n[g].updater(u);else{var m=r(u,o);o.byIndex=i,n.splice(i,0,{identifier:p,updater:m,references:1})}a.push(p)}return a}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var l=o(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<l.length;a++){var i=t(l[a]);n[i].references--}for(var s=o(e,r),c=0;c<l.length;c++){var d=t(l[c]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}l=s}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var l=t.sourceMap;l&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(l))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var l=n[o]={id:o,exports:{}};return e[o](l,l.exports,t),l.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{const e=(e,n)=>{let t=0;return{name:e,length:n,hit:()=>t+=1,isSunk:()=>t>=n,getHits:()=>t}},n=e=>document.getElementById(e),o=(n("movewrapper"),n("gameoverwrapper"),n("gbcontainer1"),n("gbcontainer2"),n("gameoverp1"),n("gameoverp2"),n("gameoverp3"),n("p1move"),n("p2move"),n("moveprompt"),n=>{let t=[];for(let e=1;e<11;e++)for(let n=1;n<11;n++)t.push([n,e]);let o=[...t],r=[],l=[],a=0,i=[{ship:e("carrier",5),location:[]},{ship:e("battleship",4),location:[]},{ship:e("destroyer",3),location:[]},{ship:e("submarine",3),location:[]},{ship:e("patrol boat",2),location:[]}];const s=(e,n)=>{console.log(`isThereAShipHere method is running, checking if ${e}, ${n} already has a ship.`);for(let t=0;t<i.length;t++){if(null!=i[t].location.find((t=>t[0]===e&&t[1]===n)))return i[t].ship}return""};return{name:n,getCells:()=>t,getMissed:()=>r,receiveAttack:async(e,i)=>{await(500,new Promise((e=>setTimeout(e,500)))),console.log(`${n} is receiving attack at ${e}, ${i}`);let c=t.indexOf(t.find((n=>n[0]===e&&n[1]===i))),d=document.getElementById(`${n}-${c}`),p=o.indexOf(t.find((n=>n[0]===e&&n[1]===i)));if(p>=0&&o.splice(p,1),null!=l.find((n=>n[0]===e&&n[1]===i)))return"Already tried this spot.";{const t=[e,i];l.push(t);let o=n.slice(2);if(1==o)var g=2;else 2==o&&(g=1);console.log(`gbNum is ${o} and attackerNum is ${g}`);let c=document.getElementById(`p${g}move`);if(""!=s(e,i)){let t=s(e,i);return t.hit(),c.textContent+=` and hit ${n}'s ${t.name}.`,d.classList="cell cell-ship",1==t.isSunk()&&(a+=1),"hit!"}return r.push(t),c.textContent+=" and missed.",d.classList="cell cell-miss","miss!"}},getSunk:()=>a,areAllSunk:()=>a>=5?(console.log(`All ${n} ships are sunk.`),!0):(console.log(`There are ${o.length} moves left on ${n} gameboard`),!1),getPossible:()=>o,getPlacedShips:()=>i,getNumShipsToPlace:()=>5,getFiredShots:()=>l,isThereAShipHere:s}}),r=e=>new Promise((n=>setTimeout(n,e))),l=e=>document.getElementById(e),a=l("movewrapper"),i=l("gameoverwrapper"),s=(l("gbcontainer1"),l("gbcontainer2")),c=(l("movep1"),l("movep2"),l("movep3"),l("gameoverp1")),d=(l("gameoverp2"),l("gameoverp3"),l("p1move")),p=l("p2move"),g=l("moveprompt"),u=e=>document.getElementById(e),m=u("welcomeform"),h=u("placementwrapper"),b=(u("startgamebtnwrapper"),u("movewrapper"),u("gameoverwrapper"),u("placemessage")),f=u("gbcontainer1"),v=u("gbcontainer2"),x=u("rulesbtn"),y=(u("startbtn"),u("rules")),w=(u("movep2"),u("togglebtn")),L=u("direction"),k=(u("startgamebtnwrapper"),u("p1move")),C=u("p2move"),A=u("moveprompt"),E=u("messagearea");function N(e,n,t=0){if(t>n.getPlacedShips().length-1)return console.log("base case - ships placed"),h.classList="hidden",f.classList.remove("placeshipshere"),void((e,n)=>{console.log("gameloop is running.");let t={name:e,category:"human",attack:(e,n,t)=>t.receiveAttack(e,n)},l=(e=>{const n=(e,t=0)=>{if(!(t>e.getPlacedShips().length-1)){console.log("Not base case. Still placing AI ships");let a=e.getPlacedShips()[t];var o=Math.round(Math.random());if(0===o)var r="horizontal";else r="vertical";let i=a.ship.length,s=Math.floor(100*Math.random());if([...e.getCells()[s]][o]+i<=11){console.log("coords[choice] + shipLength was <= 11, the ship fits!");var l=[];for(let n=0;n<i;n++)"horizontal"===r?l.push(e.getCells()[Number(s)+Number(n)]):l.push(e.getCells()[Number(s)+10*Number(n)]);for(let o=0;o<i;o++){let r=[...l[o]];if(""!=e.isThereAShipHere(r[0],r[1]))return console.log("SHIP IN THE WAY"),a.location=[],n(e,t);console.log("Apparently there is no ship in the way."),console.log("About to push tempLoc to presentShip location:"),a.location.push(r)}return n(e,t+=1)}return console.log("The ship did not fit, running recursively again without increasing shipIdx"),n(e,t)}console.log("base case - AI ships placed")};return{name:"Computer",category:"robot",attack:e=>{console.log("AI is attacking");let n=e.getPossible(),t=n[Math.floor(Math.random()*n.length)],o=t[0],r=t[1];return e.receiveAttack(o,r)},placeAIships:n}})(),u=o("gb2");l.placeAIships(u),console.log("about to update movewrapper classList"),a.classList="shown wrappergrid",g.textContent="Your move admiral.",s.classList.add("crosshair");var m="";console.log(n.getPlacedShips()),console.log(u.getPlacedShips());const h=async(e=t,o=u)=>{if(console.log("playGame is running."),1==n.areAllSunk())return a.classList="hidden",i.classList="shown wrappergrid",c.textContent="game over. player 2 wins.",void(m="Player 2 wins!");if(1==u.areAllSunk())return a.classList="hidden",i.classList="shown wrappergrid",c.textContent="game over. player 1 wins.",void(m="Player 1 wins!");if(console.log("not the base case."),"human"===e.category){s.classList.add("firehere");var b=function(t){s.classList.remove("crosshair"),console.log("Human attack handler is running."),k.textContent="",C.textContent="",A.textContent="",d.textContent="You fired ...";let r=t.target;if(r.classList.contains("cell")){r.classList.add("cell-fire");var a=r.id.slice(4),i=u.getCells()[a];return"Already tried this spot."===e.attack(i[0],i[1],o)?(s.removeEventListener("click",b),h(e,o)):(e=l,o=n,s.removeEventListener("click",b),h(e,o))}};s.addEventListener("mouseover",(function(e){let n=e.target;n.classList.contains("cell")&&n.classList.add("cell-aim")})),s.addEventListener("mouseout",(function(e){let n=e.target;n.classList.contains("cell")&&n.classList.remove("cell-aim")})),s.addEventListener("click",b)}else if("robot"===e.category)return await r(1200),s.classList.remove("firehere"),p.textContent="The enemy fired ...",await e.attack(o),e=t,o=u,await r(400),g.textContent="Your move, admiral.",s.classList.add("crosshair"),h(e,o)};h()})(e,n);{let o=n.getPlacedShips()[t];b.textContent=`Admiral ${e}, please place your ${o.ship.name}.`;var l=function(e){console.log("hovered!");let t=e.target;if(t.classList.contains("cell")){var r=t.id.slice(4),l=n.getCells()[r];let e,a=o.ship.length,i=L.getAttribute("data-status");if(e="horizontal"===i?0:1,l[e]+a<=11)for(let e=0;e<a;e++)if("horizontal"===i){let t=document.getElementById(`${n.name}-${Number(r)+Number(e)}`);t.classList.contains("cell-placed")||(console.log("no ship class"),t.classList="cell cell-hover")}else if("vertical"===i){let t=document.getElementById(`${n.name}-${Number(r)+10*Number(e)}`);t.classList.contains("cell-placed")||(console.log("no ship class"),t.classList="cell cell-hover")}}},m=function(e){console.log("unhovered!");let t=e.target;if(t.classList.contains("cell")){var r=t.id.slice(4),l=n.getCells()[r];let e,a=o.ship.length,i=L.getAttribute("data-status");if(e="horizontal"===i?0:1,l[e]+a<=11)for(let e=0;e<a;e++)if("horizontal"===i){let t=document.getElementById(`${n.name}-${Number(r)+Number(e)}`);t.classList.contains("cell-hover")&&t.classList.remove("cell-hover")}else if("vertical"===i){let t=document.getElementById(`${n.name}-${Number(r)+10*Number(e)}`);t.classList.contains("cell-hover")&&t.classList.remove("cell-hover")}}},v=function(r){let a=r.target;if(a.classList.contains("cell")){var i=a.id.slice(4),s=n.getCells()[i];let r,c=o.ship.length,d=L.getAttribute("data-status");if(r="horizontal"===d?0:1,s[r]+c<=11){let r=[];for(let e=0;e<c;e++)"horizontal"===d?r.push(n.getCells()[Number(i)+Number(e)]):r.push(n.getCells()[Number(i)+10*Number(e)]);for(let e=0;e<c;e++)if(""!=n.isThereAShipHere(r[e][0],r[e][1]))return void console.log("ship in the way");for(let e=0;e<c;e++)if("horizontal"===d){u(`gb1-${Number(i)+e}`).classList="cell cell-placed";let n=[Number(s[0])+Number(e),s[1]];o.location.push(n)}else if("vertical"===d){document.getElementById(`gb1-${Number(i)+10*e}`).classList="cell cell-placed";let n=[s[0],Number(s[1])+Number(e)];o.location.push(n)}return t+=1,console.log(`This many ships have been placed: ${t}`),f.removeEventListener("click",v),f.removeEventListener("mouseover",l),f.removeEventListener("mouseout",m),N(e,n,t)}}};f.addEventListener("click",v),f.addEventListener("mouseout",m),f.addEventListener("mouseover",l)}}x.addEventListener("click",(function(){"hidden"==y.classList?(y.classList="shown",x.textContent="Hide Rules"):(y.classList="hidden",x.textContent="Show Rules")})),w.addEventListener("click",(function(){"horizontal"===L.getAttribute("data-status")?(L.setAttribute("data-status","vertical"),L.textContent="vertical"):(L.setAttribute("data-status","horizontal"),L.textContent="horizontal")}));var S=t(379),$=t.n(S),I=t(795),T=t.n(I),z=t(569),P=t.n(z),M=t(565),H=t.n(M),j=t(216),B=t.n(j),O=t(589),Z=t.n(O),R=t(426),Y={};Y.styleTagTransform=Z(),Y.setAttributes=H(),Y.insert=P().bind(null,"head"),Y.domAPI=T(),Y.insertStyleElement=B(),$()(R.Z,Y),R.Z&&R.Z.locals&&R.Z.locals,(()=>{for(let n=0;n<100;n++)(e=document.createElement("div")).className="cell cell-plain",e.id=`gb1-${n}`,f.appendChild(e);for(let n=0;n<100;n++){var e;(e=document.createElement("div")).className="cell cell-plain",e.id=`gb2-${n}`,v.appendChild(e)}})(),u("namebtn").addEventListener("click",(function(){E.classList.remove("firehere");const e=u("p1name").value;m.classList="hidden",m.remove(),h.classList="shown wrappergrid",console.log("About to append toggle icon");let n=o("gb1");f.classList.add("placeshipshere"),N(e,n)}))})()})();