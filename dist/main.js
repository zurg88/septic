!function(e){var t={};function l(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,l),o.l=!0,o.exports}l.m=e,l.c=t,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(n,o,function(t){return e[t]}.bind(null,o));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l(l.s=0)}([function(e,t,l){"use strict";l.r(t);var n=()=>{const e=document.getElementById("accordion"),t=e.querySelectorAll(".panel-collapse"),l=e.querySelectorAll(".panel-heading"),n=e.querySelectorAll(".construct-btn");l.forEach(e=>{e.addEventListener("click",()=>{const l=e.nextElementSibling;l.classList.toggle("in"),t.forEach(e=>{e!==l&&e.classList.remove("in")})});n.forEach(e=>{e.addEventListener("click",()=>{try{const t=e.closest(".panel-collapse"),l=e.closest(".panel"),n=l.nextElementSibling.querySelector(".panel-collapse");if(t.classList.remove("in"),n.classList.contains("call-btn"))return;n.classList.add("in")}catch(e){return}})})})};var o=()=>{const e=document.getElementById("myonoffswitch"),t=document.getElementById("myonoffswitch-two"),l=document.querySelector(".second-well"),n=document.getElementById("calc-result"),o=document.getElementById("first-well-diameter"),c=document.getElementById("second-well-diameter"),r=document.getElementById("first-well-quantity"),a=document.getElementById("second-well-quantity");let u=0,s=1;n.value=13e3;const i=e=>{console.log(e.value)},d=(e,t,l,o,c,r)=>{t.addEventListener("change",()=>{t.value===l?e.value=+e.value+ +o:t.value===c&&(e.value=+e.value-+r),i(n)})},p=(e,t,l)=>{const o=t.querySelectorAll("option");t.addEventListener("change",()=>{for(let n=0;n<o.length;n++)t.value===o[n].value&&(u>n?(e.value=+e.value-Number(l*(u-n)),u=n):n>0&&n>u&&(e.value=+e.value+Number(l*(n-u)),u=n));i(n)})};var v,y,f;t.addEventListener("click",()=>{s++,n.value=s%2==0?+n.value+1e3:+n.value-1e3}),p(n,r,3e3),p(n,a,4500),d(n,o,"2 метра","2000","1.4 метра","2000"),d(n,c,"2 метра","3000","1.4 метра","3000"),v=e,y=1,(f=l).style.display="none",v.addEventListener("click",()=>(++y%2==0?(f.style.display="block",n.value=+n.value+11e3):(f.style.display="none",n.value=+n.value-11e3),i(n),y))};(()=>{const e=document.querySelectorAll(".call-btn"),t=document.querySelector(".popup-call");e.forEach(e=>{e.addEventListener("click",()=>{t.classList.add("show-popup")})}),t.addEventListener("click",e=>{const l=e.target;(l.closest(".popup-close")||l.matches(".popup-call"))&&t.classList.remove("show-popup")})})(),n(),o()}]);