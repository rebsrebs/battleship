(()=>{"use strict";const e=(e,t)=>{let a=0;return{name:e,length:t,hit:()=>a+=1,isSunk:()=>a>=t,getHits:()=>a}},t=t=>{let a=[];for(let e=1;e<11;e++)for(let t=1;t<11;t++)a.push([e,t]);let r=[...a],l=[],n=0;const o=e("carrier",5);let i=[{ship:o,location:[[1,2],[1,3],[1,4],[1,5],[1,6]]},{ship:e("battleship",4),location:[[2,2],[2,3],[2,4],[2,5]]},{ship:e("destroyer",3),location:[[3,2],[3,3],[3,4]]},{ship:e("submarine",3),location:[[4,2],[4,3],[4,4]]},{ship:e("patrolBoat",2),location:[[5,2],[5,3]]}];return{name:t,getCells:()=>a,getMissed:()=>l,receiveAttack:(e,t)=>{let a=r.findIndex((a=>a[0]===e&&a[1]===t));if(-1===a)return"impossible!";if(null!=a){r.splice(a,1);for(let a=0;a<i.length;a++){let r=i[a].location,l=i[a].ship;var o=r.find((a=>a[0]===e&&a[1]===t));if(null!=o)return l.hit(),1==l.isSunk()&&(n+=1),"hit!"}if(void 0===o){const a=[e,t];return l.push(a),"miss!"}}},getSunk:()=>n,areAllSunk:()=>n>=5,carrier:o,getPossible:()=>r}};(()=>{const e=document.getElementById("gameboardcontainer");for(let a=0;a<100;a++){var t=document.createElement("div");t.className=`cell ${playerNum}`,t.id=`cell-${playerNum}-${a}`,e.appendChild(t)}})(),(()=>{let e={name:"Rebecca",category:"human",attack:(e,t,a)=>(a.receiveAttack(e,t),"attacked")},a={name:"Computer",category:"robot",attack:e=>{let t=e.getPossible(),a=t[Math.floor(Math.random()*t.length)],r=a[0],l=a[1];return e.receiveAttack(r,l),"attacked"}},r=t("gameboardOne"),l=t("gameboardTwo");const n=(t=e,o=l)=>{1!=r.areAllSunk()?1!=l.areAllSunk()?("human"===t.category&&t.attack(1,2,o),"robot"===t.category&&t.attack(o),t===e?(t=a,o=r):(t=e,o=l),n(t,o)):"Player 1 wins!":"Player 2 wins!"};n()})()})();