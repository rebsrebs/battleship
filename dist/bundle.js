(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>a});var o=t(81),r=t.n(o),i=t(645),l=t.n(i)()(r());l.push([e.id,":root {\n  --main-bg-color: white;\n  --cell-plain-bg-color: rgb(163, 230, 245);\n  --cell-hover-bg-color: orange;\n  --cell-ship-bg-color: red;\n  --cell-miss-bg-color: gray;\n  --gb-bg-color:lightgray;\n  --gbOne-bg-color: green;\n  --gbTwo-bg-color:blue;\n  --button-bg-color: white;\n  --button-border-color: black;\n}\n\n*{\n  margin: 0px;\n  padding: 0px;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--main-bg-color);\n  font-family:Arial, Helvetica, sans-serif;\n}\n\nh1 {\n  font-size: 60px;\n  padding: 10px;\n}\n\nbutton {\n  background-color: var(--button-bg-color);\n  /* border-radius: 20px; */\n  border: 1px solid var(--button-border-color);\n  padding: 8px 18px 8px 18px;\n  font-size: 18px;\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n  box-shadow: -2px 2px 0px #0d012d25;\n  margin: 10px;\n  width: fit-content;\n}\n\nbutton:hover {\n  background-color: rgb(244, 236, 237);\n}\n\nbutton:active {\n  background-color: rgb(245, 176, 92);\n}\n\n#rulescontainer {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color:aquamarine;\n}\n\n#rules {\n  font-size: 16px;\n}\n\nli { \n  margin: 4px;\n}\n\n/* #namestartcontainer\n#axiscontainer\n#gb1msgcontainer */\n\n.hidden {\n  /* visibility: hidden; */\n  display: none;\n}\n\n.shown {\n  visibility: visible;\n}\n\n#welcomeform {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.nsformitem {\n  padding: 10px;\n  margin: 5px;\n}\n\ninput.nsformitem {\n  min-width: 80%;\n  padding: 5px;\n}\n\n#players {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  width: 300px;\n}\n\n#gameboardrow {\n  display: flex;\n  flex-direction: row;\n  background-color:rgb(244, 236, 237);\n}\n\n.gameboardcolumn {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.gameboardcontainer {\n  background-color: var(--gb-bg-color);\n  width: 400px;\n  height: 400px;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  border: 1px solid black;\n  margin: 20px;\n}\n\n.cell {\n  border: 1px solid black;\n}\n\n.cell-plain {\n  background-color: var(--cell-plain-bg-color);\n}\n\n.cell-hover {\n  background-color: var(--cell-hover-bg-color);\n}\n\n.cell-ship {\n  background-color: var(--cell-ship-bg-color);\n}\n\n.cell-miss {\n  background-color: var(--cell-miss-bg-color);\n}\n\n.message {\n  font-size: 20px;\n}\n\n#messagearea {\n  /* border: 1px solid black; */\n  border-radius: 5px;\n  background-color:rgb(252, 235, 89);\n  width: 600px;\n  height: 180px;\n  margin-bottom: 30px;\n  box-shadow: 0px 0px 30px 0px #0ff;\n}\n\n\n\n\n\n#namebtn {\n  width: 20ch;\n}\n\n.message {\n  font-size: 20px;\n}\n\n\n.griditem {\n  display: flex;\n  align-self: center;\n  align-content: center;\n  justify-content: center;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  justify-self: center;\n}\n\n.wrappergrid {\n  width: 600px;\n  height: 180px;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 60px 60px 60px;\n}\n\n.griditemtop {\n  grid-row: 1 / 2;\n}\n\n.griditemmiddle {\n  grid-row: 2 / 3;\n}\n\n.griditembottom {\n  grid-row: 3 / 4;\n}\n\n.griditembottomtwo {\n  grid-row: 2 / 4;\n}\n\np.griditem {\n  font-size: 20px;\n}\n",""]);const a=l},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var l={};if(o)for(var a=0;a<this.length;a++){var s=this[a][0];null!=s&&(l[s]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);o&&l[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),n.push(d))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var i={},l=[],a=0;a<e.length;a++){var s=e[a],c=o.base?s[0]+o.base:s[0],d=i[c]||0,p="".concat(c," ").concat(d);i[c]=d+1;var u=t(p),g={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(g);else{var m=r(g,o);o.byIndex=a,n.splice(a,0,{identifier:p,updater:m,references:1})}l.push(p)}return l}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var l=0;l<i.length;l++){var a=t(i[l]);n[a].references--}for(var s=o(e,r),c=0;c<i.length;c++){var d=t(i[c]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}i=s}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={id:o,exports:{}};return e[o](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{const e=(e,n)=>{let t=0;return{name:e,length:n,hit:()=>t+=1,isSunk:()=>t>=n,getHits:()=>t}},n=n=>{let t=[];for(let e=1;e<11;e++)for(let n=1;n<11;n++)t.push([n,e]);let o=[...t],r=[],i=[],l=0,a=[{ship:e("carrier",5),location:[]},{ship:e("battleship",4),location:[]},{ship:e("destroyer",3),location:[]},{ship:e("submarine",3),location:[]},{ship:e("patrolBoat",2),location:[]}];const s=(e,n)=>{for(let t=0;t<a.length;t++){if(null!=a[t].location.find((t=>t[0]===e&&t[1]===n)))return a[t].ship}return""};return{name:n,getCells:()=>t,getMissed:()=>r,receiveAttack:(e,t)=>{if(console.log(`${n} is receiving attack at ${e}, ${t}`),null!=i.find((n=>n[0]===e&&n[1]===t)))return"Already tried this spot.";{const n=[e,t];if(i.push(n),""!=s(e,t)){console.log("there is a ship here.");let n=s(e,t);return n.hit(),1==n.isSunk()&&(l+=1),"hit!"}return console.log("no ship here."),r.push(n),"miss!"}},getSunk:()=>l,areAllSunk:()=>l>=5&&(console.log(`All ${n} ships are sunk.`),!0),getPossible:()=>o,getPlacedShips:()=>a,getNumShipsToPlace:()=>5,getFiredShots:()=>i,isThereAShipHere:s,hasConflict:function(e){return a.some((n=>n.location.includes(e)))}}},o=e=>document.getElementById(e),r=o("movewrapper"),i=o("gameoverwrapper"),l=(o("gbcontainer1"),o("gbcontainer2")),a=o("movep1"),s=(o("movep2"),o("movep3"),o("gameoverp1")),c=(o("gameoverp2"),o("gameoverp3"),(e,t)=>{function o(e,n){e=e===c?d:c}console.log("gameloop is running.");let c={name:e,category:"human",attack:(e,n,t)=>t.receiveAttack(e,n)},d={name:"Computer",category:"robot",attack:e=>{let n=e.getPossible(),t=n[Math.floor(Math.random()*n.length)],o=t[0],r=t[1];return e.receiveAttack(o,r)}},p=n("gameboardTwo");console.log("about to update movewrapper classList"),r.classList="shown wrappergrid",a.textContent="Your move admiral.",p.getPlacedShips()[0].location=[[1,2],[1,3],[1,4],[1,5],[1,6]],p.getPlacedShips()[1].location=[[2,2],[2,3],[2,4],[2,5]],p.getPlacedShips()[2].location=[[3,2],[3,3],[3,4]],p.getPlacedShips()[3].location=[[4,2],[4,3],[4,4]],p.getPlacedShips()[4].location=[[5,2],[5,3]];var u="";console.log(t.getPlacedShips()),console.log(p.getPlacedShips());const g=(e=c,n=p)=>{if(console.log("playGame is running."),1==t.areAllSunk())return r.classList="hidden",i.classList="shown wrappergrid",s.textContent="game over.",void(u="Player 2 wins!");1!=p.areAllSunk()?(console.log("not the base case."),"human"===e.category?(a.textContent="Please click on enemy waters.",l.addEventListener("click",(function(t){console.log("attackHandler is running");let r=t.target;if(console.log(`target is ${r}`),r.classList.contains("cell")){var i=r.id;console.log(`cellID is ${i}`);var l=i.slice(4);console.log(`locator index is ${l}`);var a=p.getCells()[l];let t=e.attack(a[0],a[1],n);console.log(`result is ${t}`),"hit!"===t?document.getElementById(i).classList="cell cell-ship":"miss!"===t&&(document.getElementById(i).classList="cell cell-miss"),o(e),g(e,n)}}))):"robot"===e.category&&(a.textContent="The enemy is firing.",e.attack(n),o(),g(e,n))):u="Player 1 wins!"};return g(),u}),d=e=>document.getElementById(e),p=d("welcomeform"),u=d("placementwrapper"),g=(d("startgamebtnwrapper"),d("movewrapper"),d("gameoverwrapper"),d("placemessage")),m=d("gbcontainer1"),h=d("gbcontainer2"),f=d("rulesbtn"),b=(d("startbtn"),d("rules")),v=(d("movep2"),d("togglebtn")),x=d("direction");function y(e,n,t=0){if(t>n.getPlacedShips().length-1)return u.classList="hidden",console.log("base case"),console.log("The gameboards placed ships are"),console.log(n.getPlacedShips()),void c(e,n);{let r=n.getPlacedShips()[t];g.textContent=`Admiral ${e}, please place your ${r.ship.name}.`;var o=function(i){let l=i.target;if(l.classList.contains("cell")){var a=l.id.slice(4);console.log(`locator index is ${a}`);var s=n.getCells()[a];let i,c=r.ship.length,p=x.getAttribute("data-status");if("horizontal"===p?(i=0,console.log(`xOrY is ${i}`)):(i=1,console.log(`xOrY is ${i}`)),console.log(`The coords[xOrY] is ${s[i]}`),s[i]+c<=11){let i=[];for(let e=0;e<c;e++)"horizontal"===p?i.push(n.getCells()[Number(a)+Number(e)]):i.push(n.getCells()[Number(a)+10*Number(e)]);for(let e=0;e<c;e++)if(1==n.isThereAShipHere(i[e][0],i[e][1]))return void console.log("ship in the way");for(let e=0;e<c;e++)if("horizontal"===p){d(`gb1-${Number(a)+e}`).classList="cell cell-ship";let n=[Number(s[0])+Number(e),s[1]];console.log("About to push cell location to current ship location"),console.log(n),r.location.push(n)}else if("vertical"===p){document.getElementById(`gb1-${Number(a)+10*e}`).classList="cell cell-ship";let n=[s[0],Number(s[1])+Number(e)];console.log("About to push cell location to current ship location"),console.log(n),r.location.push(n)}return t+=1,console.log(`This many ships have been placed: ${t}`),m.removeEventListener("click",o),y(e,n,t)}}};m.addEventListener("click",o)}}d("startgamebtnwrapper"),f.addEventListener("click",(function(){"hidden"==b.classList?(b.classList="shown",f.textContent="Hide Rules"):(b.classList="hidden",f.textContent="Show Rules")})),v.addEventListener("click",(function(){"horizontal"===x.getAttribute("data-status")?(x.setAttribute("data-status","vertical"),x.textContent="vertical"):(x.setAttribute("data-status","horizontal"),x.textContent="horizontal")}));var w=t(379),k=t.n(w),S=t(795),C=t.n(S),L=t(569),A=t.n(L),P=t(565),T=t.n(P),E=t(216),$=t.n(E),N=t(589),M=t.n(N),z=t(426),I={};I.styleTagTransform=M(),I.setAttributes=T(),I.insert=A().bind(null,"head"),I.domAPI=C(),I.insertStyleElement=$(),k()(z.Z,I),z.Z&&z.Z.locals&&z.Z.locals,(()=>{for(let n=0;n<100;n++)(e=document.createElement("div")).className="cell cell-plain",e.id=`gb1-${n}`,m.appendChild(e);for(let n=0;n<100;n++){var e;(e=document.createElement("div")).className="cell cell-plain",e.id=`gb2-${n}`,h.appendChild(e)}})(),d("namebtn").addEventListener("click",(function(){const e=d("p1name").value;p.classList="hidden",p.remove(),u.classList="shown wrappergrid",y(e,n("gameboardOne"))}))})()})();