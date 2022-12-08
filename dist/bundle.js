(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(81),o=n.n(r),l=n(645),a=n.n(l)()(o());a.push([e.id,":root {\n  --main-bg-color: yellow;\n  --cell-plain-bg-color: pink;\n  --cell-hover-bg-color: orange;\n  --cell-ship-bg-color: red;\n  --gb-bg-color:lightgray;\n  --gbOne-bg-color: green;\n  --gbTwo-bg-color:blue;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--main-bg-color);\n}\n\n#players {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  width: 300px;\n}\n\n#gameboardrow {\n  display: flex;\n  flex-direction: row;\n}\n\n.gameboardcolumn {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.gameboardcontainer {\n  background-color: var(--gb-bg-color);\n  width: 500px;\n  height: 500px;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  border: 1px solid black;\n  margin: 20px;\n}\n\n.cell {\n  border: 1px solid black;\n}\n\n.cell-plain {\n  background-color: var(--cell-plain-bg-color);\n}\n\n.cell-hover {\n  background-color: var(--cell-hover-bg-color);\n}\n\n.cell-ship {\n  background-color: var(--cell-ship-bg-color);\n}\n\nbutton[data-status='active'] {\n  background-color:red;\n}\n\nbutton[data-status='inactive'] {\n  background-color:blue;\n}\n\n",""]);const i=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,l){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(a[c]=!0)}for(var s=0;s<e.length;s++){var u=[].concat(e[s]);r&&a[u[0]]||(void 0!==l&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=l),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),t.push(u))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var l={},a=[],i=0;i<e.length;i++){var c=e[i],s=r.base?c[0]+r.base:c[0],u=l[s]||0,d="".concat(s," ").concat(u);l[s]=u+1;var p=n(d),g={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(g);else{var f=o(g,r);r.byIndex=i,t.splice(i,0,{identifier:d,updater:f,references:1})}a.push(d)}return a}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var l=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<l.length;a++){var i=n(l[a]);t[i].references--}for(var c=r(e,o),s=0;s<l.length;s++){var u=n(l[s]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}l=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var l=n.sourceMap;l&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(l))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var l=t[r]={id:r,exports:{}};return e[r](l,l.exports,n),l.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{const e=document.getElementById("msgcontainer"),t=document.getElementById("gbcontainer1"),r=document.getElementById("gbcontainer2"),o=document.getElementById("togglebtn"),l=document.getElementById("direction");o.addEventListener("click",(function(){"horizontal"===l.getAttribute("data-status")?(l.setAttribute("data-status","vertical"),l.textContent="vertical"):(l.setAttribute("data-status","horizontal"),l.textContent="horizontal")}));const a=(e,t)=>{let n=0;return{name:e,length:t,hit:()=>n+=1,isSunk:()=>n>=t,getHits:()=>n}};var i=n(379),c=n.n(i),s=n(795),u=n.n(s),d=n(569),p=n.n(d),g=n(565),f=n.n(g),h=n(216),m=n.n(h),b=n(589),v=n.n(b),y=n(426),x={};x.styleTagTransform=v(),x.setAttributes=f(),x.insert=p().bind(null,"head"),x.domAPI=u(),x.insertStyleElement=m(),c()(y.Z,x),y.Z&&y.Z.locals&&y.Z.locals;let k=(e=>{let t=[];for(let e=1;e<11;e++)for(let n=1;n<11;n++)t.push([n,e]);let n=[...t],r=[],o=[],l=0,i=[{ship:a("carrier",5),location:[]},{ship:a("battleship",4),location:[]},{ship:a("destroyer",3),location:[]},{ship:a("submarine",3),location:[]},{ship:a("patrolBoat",2),location:[]}];return{name:"gameboardOne",getCells:()=>t,getMissed:()=>r,receiveAttack:(e,t)=>{if(null!=o.find((n=>n[0]===e&&n[1]===t)))return"Already tried this spot.";{const a=[e,t];o.push(a);for(let r=0;r<i.length;r++){let o=i[r].location,a=i[r].ship;var n=o.find((n=>n[0]===e&&n[1]===t));if(null!=n)return a.hit(),1==a.isSunk()&&(l+=1),"hit!"}if(void 0===n)return r.push(a),"miss!"}},getSunk:()=>l,areAllSunk:()=>l>=5,getPossible:()=>n,getPlacedShips:()=>i,getNumShipsToPlace:()=>5,getFiredShots:()=>o}})();(()=>{for(let n=0;n<100;n++)(e=document.createElement("div")).className="cell cell-plain",e.id=`gb1-${n}`,t.appendChild(e);for(let t=0;t<100;t++){var e;(e=document.createElement("div")).className="cell cell-plain",e.id=`gb2-${t}`,r.appendChild(e)}})(),console.log(k.getCells()),function n(r,o=0){if(o>r.getPlacedShips().length-1)return e.textContent="Ships have all been placed.",console.log("base case"),console.log("The gameboards placed ships are"),void console.log(r.getPlacedShips());{let i=r.getPlacedShips()[o];e.textContent=`Please place your ${i.ship.name}.`;var a=function(e){let c=e.target;if(c.classList.contains("cell")){c.classList="cell cell-hover";var s=c.id.slice(4),u=r.getCells()[s];let e,d=i.ship.length;if(console.log(`shipLength is ${d}`),"horizontal"===l.getAttribute("data-status")?(e=0,console.log(`xOrY is ${e}`)):(e=1,console.log(`xOrY is ${e}`)),u[e]+d<=11){for(let t=0;t<d;t++)0===e?(document.getElementById(`gb1-${Number(s)+t}`).classList="cell cell-ship",i.location.push([Number(u[0])+Number(t),u[1]])):1===e&&(document.getElementById(`gb1-${Number(s)+10*t}`).classList="cell cell-ship",i.location.push([u[0],Number(u[0])+Number(t)]));return o+=1,console.log(`shipIdx is ${o}`),t.removeEventListener("click",a),n(r,o)}}};t.addEventListener("click",a)}return"done a cycle"}(k)})()})();