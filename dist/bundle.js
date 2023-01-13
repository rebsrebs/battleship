(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>a});var o=t(81),r=t.n(o),l=t(645),i=t.n(l)()(r());i.push([e.id,":root {\n  --main-bg-color: white;\n  --cell-plain-bg-color: rgb(163, 230, 245);\n  --cell-hover-bg-color: rgba(247, 138, 88, 0.531);\n  --cell-place-bg-color: pink;\n  --cell-ship-bg-color: red;\n  --cell-miss-bg-color: gray;\n  --gb-bg-color:lightgray;\n  --gbOne-bg-color: green;\n  --gbTwo-bg-color:blue;\n  --button-bg-color: white;\n  --button-border-color: black;\n}\n\n*{\n  margin: 0px;\n  padding: 0px;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--main-bg-color);\n  font-family:Arial, Helvetica, sans-serif;\n}\n\nh1 {\n  font-size: 60px;\n  padding: 10px;\n}\n\nbutton {\n  background-color: var(--button-bg-color);\n  /* border-radius: 20px; */\n  border: 1px solid var(--button-border-color);\n  padding: 8px 18px 8px 18px;\n  font-size: 18px;\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n  box-shadow: -2px 2px 0px #0d012d25;\n  margin: 10px;\n  width: fit-content;\n}\n\nbutton:hover {\n  background-color: rgb(244, 236, 237);\n}\n\nbutton:active {\n  background-color: rgb(245, 176, 92);\n}\n\n#rulescontainer {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color:aquamarine;\n}\n\n#rules {\n  font-size: 16px;\n}\n\nli { \n  margin: 4px;\n}\n\n/* #namestartcontainer\n#axiscontainer\n#gb1msgcontainer */\n\n.hidden {\n  /* visibility: hidden; */\n  display: none;\n}\n\n.shown {\n  visibility: visible;\n}\n\n#welcomeform {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.nsformitem {\n  padding: 10px;\n  margin: 5px;\n}\n\ninput.nsformitem {\n  min-width: 80%;\n  padding: 5px;\n}\n\n#players {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  width: 300px;\n}\n\n#gameboardrow {\n  display: flex;\n  flex-direction: row;\n  background-color:rgb(244, 236, 237);\n}\n\n.gameboardcolumn {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.gameboardcontainer {\n  background-color: var(--gb-bg-color);\n  width: 400px;\n  height: 400px;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  border: 1px solid black;\n  margin: 20px;\n}\n\n.cell {\n  border: 1px solid black;\n  background-color: var(--cell-plain-bg-color);\n}\n\n/* .cell-plain {\n  \n} */\n\n.cell-hover {\n  background-color: var(--cell-hover-bg-color);\n}\n\n.cell-placed {\n  background-color: var(--cell-place-bg-color);\n}\n\n.cell-ship {\n  background-color: var(--cell-ship-bg-color);\n}\n\n.cell-miss {\n  background-color: var(--cell-miss-bg-color);\n}\n\n.message {\n  font-size: 20px;\n}\n\n#messagearea {\n  /* border: 1px solid black; */\n  border-radius: 5px;\n  background-color:rgb(252, 235, 89);\n  width: 600px;\n  height: 180px;\n  margin-bottom: 30px;\n  box-shadow: 0px 0px 30px 0px #0ff;\n}\n\n\n\n\n\n#namebtn {\n  width: 20ch;\n}\n\n.message {\n  font-size: 20px;\n}\n\n\n.griditem {\n  display: flex;\n  align-self: center;\n  align-content: center;\n  justify-content: center;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  justify-self: center;\n}\n\n.wrappergrid {\n  width: 600px;\n  height: 180px;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 60px 60px 60px;\n}\n\n.griditemtop {\n  grid-row: 1 / 2;\n}\n\n.griditemmiddle {\n  grid-row: 2 / 3;\n}\n\n.griditembottom {\n  grid-row: 3 / 4;\n}\n\n.griditembottomtwo {\n  grid-row: 2 / 4;\n}\n\np.griditem {\n  font-size: 20px;\n}\n\n.movediv {\n  display: flex;\n  justify-content: left;\n  width: 50%;\n}\n",""]);const a=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,l){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var a=0;a<this.length;a++){var s=this[a][0];null!=s&&(i[s]=!0)}for(var c=0;c<e.length;c++){var p=[].concat(e[c]);o&&i[p[0]]||(void 0!==l&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=l),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),r&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=r):p[4]="".concat(r)),n.push(p))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var l={},i=[],a=0;a<e.length;a++){var s=e[a],c=o.base?s[0]+o.base:s[0],p=l[c]||0,d="".concat(c," ").concat(p);l[c]=p+1;var u=t(d),g={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(g);else{var m=r(g,o);o.byIndex=a,n.splice(a,0,{identifier:d,updater:m,references:1})}i.push(d)}return i}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var l=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<l.length;i++){var a=t(l[i]);n[a].references--}for(var s=o(e,r),c=0;c<l.length;c++){var p=t(l[c]);0===n[p].references&&(n[p].updater(),n.splice(p,1))}l=s}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var l=t.sourceMap;l&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(l))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var l=n[o]={id:o,exports:{}};return e[o](l,l.exports,t),l.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{const e=(e,n)=>{let t=0;return{name:e,length:n,hit:()=>t+=1,isSunk:()=>t>=n,getHits:()=>t}},n=e=>document.getElementById(e),o=(n("movewrapper"),n("gameoverwrapper"),n("gbcontainer1"),n("gbcontainer2"),n("gameoverp1"),n("gameoverp2"),n("gameoverp3"),n("p1move"),n("p2move"),n("moveprompt"),n=>{let t=[];for(let e=1;e<11;e++)for(let n=1;n<11;n++)t.push([n,e]);let o=[...t],r=[],l=[],i=0,a=[{ship:e("carrier",5),location:[]},{ship:e("battleship",4),location:[]},{ship:e("destroyer",3),location:[]},{ship:e("submarine",3),location:[]},{ship:e("patrolBoat",2),location:[]}];const s=(e,n)=>{console.log(`isThereAShipHere method is running, checking if ${e}, ${n} already has a ship.`);for(let t=0;t<a.length;t++){if(null!=a[t].location.find((t=>t[0]===e&&t[1]===n)))return a[t].ship}return""};return{name:n,getCells:()=>t,getMissed:()=>r,receiveAttack:async(e,a)=>{await(800,new Promise((e=>setTimeout(e,800)))),console.log(`${n} is receiving attack at ${e}, ${a}`);let c=t.indexOf(t.find((n=>n[0]===e&&n[1]===a))),p=document.getElementById(`${n}-${c}`),d=o.indexOf(t.find((n=>n[0]===e&&n[1]===a)));if(d>=0&&o.splice(d,1),null!=l.find((n=>n[0]===e&&n[1]===a)))return"Already tried this spot.";{const t=[e,a];l.push(t);let o=n.slice(2);if(1==o)var u=2;else 2==o&&(u=1);console.log(`gbNum is ${o} and attackerNum is ${u}`);let c=document.getElementById(`p${u}move`);if(""!=s(e,a)){let t=s(e,a);return t.hit(),c.textContent+=`and hit ${n}'s ${t.name}.`,p.classList="cell cell-ship",1==t.isSunk()&&(i+=1),"hit!"}return r.push(t),c.textContent+="and missed.",p.classList="cell cell-miss","miss!"}},getSunk:()=>i,areAllSunk:()=>i>=5?(console.log(`All ${n} ships are sunk.`),!0):(console.log(`There are ${o.length} moves left on ${n} gameboard`),!1),getPossible:()=>o,getPlacedShips:()=>a,getNumShipsToPlace:()=>5,getFiredShots:()=>l,isThereAShipHere:s}}),r=e=>document.getElementById(e),l=r("movewrapper"),i=r("gameoverwrapper"),a=(r("gbcontainer1"),r("gbcontainer2")),s=(r("movep1"),r("movep2"),r("movep3"),r("gameoverp1")),c=(r("gameoverp2"),r("gameoverp3"),r("p1move")),p=r("p2move"),d=r("moveprompt"),u=e=>document.getElementById(e),g=u("welcomeform"),m=u("placementwrapper"),h=(u("startgamebtnwrapper"),u("movewrapper"),u("gameoverwrapper"),u("placemessage")),f=u("gbcontainer1"),v=u("gbcontainer2"),b=u("rulesbtn"),x=(u("startbtn"),u("rules")),y=(u("movep2"),u("togglebtn")),w=u("direction"),k=(u("startgamebtnwrapper"),u("p1move")),L=u("p2move"),C=u("moveprompt");function A(e,n,t=0){if(t>n.getPlacedShips().length-1)return console.log("base case - ships placed"),m.classList="hidden",void((e,n)=>{console.log("gameloop is running.");let t={name:e,category:"human",attack:(e,n,t)=>t.receiveAttack(e,n)},r=(e=>{const n=(e,t=0)=>{if(!(t>e.getPlacedShips().length-1)){console.log("Not base case. Still placing AI ships");let i=e.getPlacedShips()[t];var o=Math.round(Math.random());if(0===o)var r="horizontal";else r="vertical";let a=i.ship.length,s=Math.floor(100*Math.random());if([...e.getCells()[s]][o]+a<=11){console.log("coords[choice] + shipLength was <= 11, the ship fits!");var l=[];for(let n=0;n<a;n++)"horizontal"===r?l.push(e.getCells()[Number(s)+Number(n)]):l.push(e.getCells()[Number(s)+10*Number(n)]);for(let o=0;o<a;o++){let r=[...l[o]];if(""!=e.isThereAShipHere(r[0],r[1]))return console.log("SHIP IN THE WAY"),i.location=[],n(e,t);console.log("Apparently there is no ship in the way."),console.log("About to push tempLoc to presentShip location:"),i.location.push(r)}return n(e,t+=1)}return console.log("The ship did not fit, running recursively again without increasing shipIdx"),n(e,t)}console.log("base case - AI ships placed")};return{name:"Computer",category:"robot",attack:e=>{console.log("AI is attacking");let n=e.getPossible(),t=n[Math.floor(Math.random()*n.length)],o=t[0],r=t[1];return e.receiveAttack(o,r)},placeAIships:n}})(),u=o("gb2");r.placeAIships(u),console.log("about to update movewrapper classList"),l.classList="shown wrappergrid",d.textContent="Your move admiral.";var g="";console.log(n.getPlacedShips()),console.log(u.getPlacedShips());const m=async(e=t,o=u)=>{if(console.log("playGame is running."),1==n.areAllSunk())return l.classList="hidden",i.classList="shown wrappergrid",s.textContent="game over. player 2 wins.",void(g="Player 2 wins!");if(1==u.areAllSunk())return l.classList="hidden",i.classList="shown wrappergrid",s.textContent="game over. player 1 wins.",void(g="Player 1 wins!");if(console.log("not the base case."),"human"===e.category){var d=function(t){console.log("Human attack handler is running."),k.textContent="",L.textContent="",C.textContent="",c.textContent="You fired ...";let l=t.target;if(l.classList.contains("cell")){var i=l.id.slice(4),s=u.getCells()[i];return"Already tried this spot."===e.attack(s[0],s[1],o)?(a.removeEventListener("click",d),m(e,o)):(e=r,o=n,a.removeEventListener("click",d),m(e,o))}};a.addEventListener("click",d)}else if("robot"===e.category)return await new Promise((e=>setTimeout(e,1500))),p.textContent="The enemy fired ...",e.attack(o),m(e=t,o=u)};m()})(e,n);{let o=n.getPlacedShips()[t];h.textContent=`Admiral ${e}, please place your ${o.ship.name}.`;var r=function(e){console.log("hovered!");let t=e.target;if(t.classList.contains("cell")){var r=t.id.slice(4),l=n.getCells()[r];let e,i=o.ship.length,a=w.getAttribute("data-status");if(e="horizontal"===a?0:1,l[e]+i<=11)for(let e=0;e<i;e++)if("horizontal"===a){let t=document.getElementById(`${n.name}-${Number(r)+Number(e)}`);t.classList.contains("cell-placed")||(console.log("no ship class"),t.classList="cell cell-hover")}else if("vertical"===a){let t=document.getElementById(`${n.name}-${Number(r)+10*Number(e)}`);t.classList.contains("cell-placed")||(console.log("no ship class"),t.classList="cell cell-hover")}}},g=function(e){console.log("unhovered!");let t=e.target;if(t.classList.contains("cell")){var r=t.id.slice(4),l=n.getCells()[r];let e,i=o.ship.length,a=w.getAttribute("data-status");if(e="horizontal"===a?0:1,l[e]+i<=11)for(let e=0;e<i;e++)if("horizontal"===a){let t=document.getElementById(`${n.name}-${Number(r)+Number(e)}`);t.classList.contains("cell-hover")&&t.classList.remove("cell-hover")}else if("vertical"===a){let t=document.getElementById(`${n.name}-${Number(r)+10*Number(e)}`);t.classList.contains("cell-hover")&&t.classList.remove("cell-hover")}}},v=function(l){let i=l.target;if(i.classList.contains("cell")){var a=i.id.slice(4),s=n.getCells()[a];let l,c=o.ship.length,p=w.getAttribute("data-status");if(l="horizontal"===p?0:1,s[l]+c<=11){let l=[];for(let e=0;e<c;e++)"horizontal"===p?l.push(n.getCells()[Number(a)+Number(e)]):l.push(n.getCells()[Number(a)+10*Number(e)]);for(let e=0;e<c;e++)if(""!=n.isThereAShipHere(l[e][0],l[e][1]))return void console.log("ship in the way");for(let e=0;e<c;e++)if("horizontal"===p){u(`gb1-${Number(a)+e}`).classList="cell cell-placed";let n=[Number(s[0])+Number(e),s[1]];o.location.push(n)}else if("vertical"===p){document.getElementById(`gb1-${Number(a)+10*e}`).classList="cell cell-placed";let n=[s[0],Number(s[1])+Number(e)];o.location.push(n)}return t+=1,console.log(`This many ships have been placed: ${t}`),f.removeEventListener("click",v),f.removeEventListener("mouseover",r),f.removeEventListener("mouseout",g),A(e,n,t)}}};f.addEventListener("click",v),f.addEventListener("mouseout",g),f.addEventListener("mouseover",r)}}b.addEventListener("click",(function(){"hidden"==x.classList?(x.classList="shown",b.textContent="Hide Rules"):(x.classList="hidden",b.textContent="Show Rules")})),y.addEventListener("click",(function(){"horizontal"===w.getAttribute("data-status")?(w.setAttribute("data-status","vertical"),w.textContent="vertical"):(w.setAttribute("data-status","horizontal"),w.textContent="horizontal")}));var N=t(379),S=t.n(N),E=t(795),$=t.n(E),I=t(569),T=t.n(I),P=t(565),z=t.n(P),M=t(216),H=t.n(M),j=t(589),B=t.n(j),O=t(426),Z={};Z.styleTagTransform=B(),Z.setAttributes=z(),Z.insert=T().bind(null,"head"),Z.domAPI=$(),Z.insertStyleElement=H(),S()(O.Z,Z),O.Z&&O.Z.locals&&O.Z.locals,(()=>{for(let n=0;n<100;n++)(e=document.createElement("div")).className="cell cell-plain",e.id=`gb1-${n}`,f.appendChild(e);for(let n=0;n<100;n++){var e;(e=document.createElement("div")).className="cell cell-plain",e.id=`gb2-${n}`,v.appendChild(e)}})(),u("namebtn").addEventListener("click",(function(){const e=u("p1name").value;g.classList="hidden",g.remove(),m.classList="shown wrappergrid",A(e,o("gb1"))}))})()})();