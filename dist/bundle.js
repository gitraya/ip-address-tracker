(()=>{var n={756:(n,e,t)=>{"use strict";t.d(e,{Z:()=>l});var i=t(645),o=t.n(i),r=t(667),a=t.n(r),s=t(546),c=o()((function(n){return n[1]}));c.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap);"]);var d=a()(s.Z);c.push([n.id,"* {\n  box-sizing: border-box;\n}\n\nbody {\n  width: 100vw;\n  height: 100vh;\n  padding: 0px;\n  margin: 0px;\n  position: relative;\n  font-family: 'Rubik', sans-serif;\n  display: flex;\n  flex-direction: column;\n  overflow-x: hidden;\n}\n\n/* header style */\n.header {\n  width: 100vw;\n  position: relative;\n  z-index: 3;\n  height: auto;\n  padding-bottom: 130px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-image: url("+d+");\n  background-position: center;\n  background-size: cover;\n}\n.header__title {\n  color: #fff;\n  font-weight: 500;\n  margin: 1.5rem 0px;\n}\n\n/* form section style */\n.header__form {\n  width: 40%;\n}\n.input-control {\n  display: flex;\n  position: relative;\n}\n.input {\n  padding: 18px 24px;\n  border-radius: 16px;\n  width: 100%;\n  font-size: 1.125rem;\n  color: hsl(0, 0%, 17%);\n  border: 2px solid #fff;\n}\n.input:focus {\n  outline: none !important;\n}\n.input::placeholder {\n  color: hsl(0, 0%, 59%);\n}\n.submit-button {\n  height: 100%;\n  padding: 0px 18px;\n  border-radius: 0px 16px 16px 0px;\n  color: #fff;\n  background: black;\n  border: 2px solid black;\n  position: absolute;\n  right: 0px;\n  top: 50%;\n  transform: translateY(-50%);\n  cursor: pointer;\n}\n.submit-button:hover,\n.submit-button:focus {\n  outline: none !important;\n  background: hsl(0, 0%, 17%);\n  border-color: hsl(0, 0%, 17%);\n}\n.submit-button i {\n  font-size: 1.85rem;\n}\n\n/* main content style */\n.main__content {\n  padding: 1.5rem 2rem;\n  bottom: -25%;\n  position: absolute;\n  z-index: 100;\n  border-radius: 12px;\n  background: #fff;\n  width: 75%;\n  height: 150px;\n  display: flex;\n  align-self: center;\n  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n}\n.info-item {\n  flex: 1 1 0px;\n  display: flex;\n}\n.info-item div:nth-of-type(1) {\n  padding-right: 30px;\n  display: flex;\n  flex-direction: column;\n}\n.info-item:nth-last-of-type(1) {\n  flex: 0.9 0.9 0px;\n}\n.info-item div:nth-last-of-type(1) {\n  padding-right: 0px;\n}\n.info-item div:nth-of-type(1) h2 {\n  text-transform: uppercase;\n  font-size: 0.8rem;\n  letter-spacing: 1px;\n  color: hsl(0, 0%, 59%);\n}\n.info-item div:nth-of-type(1) span {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: hsl(0, 0%, 17%);\n}\n.info-item .line {\n  margin-left: auto;\n  margin-right: 30px;\n  width: 0.5px;\n  height: 65%;\n  background: hsla(0, 0%, 59%, 0.4);\n  align-self: center;\n}\n\n/* main style */\n.main {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n/* map style */\n#mapid {\n  z-index: 1;\n  width: 100vw;\n  height: 100%;\n}\n\n/* footer style */\nfooter {\n  width: 100vw;\n  height: auto;\n  bottom: 0px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  position: absolute;\n  z-index: 2;\n}\n.attribution {\n  padding: 1rem 0px;\n  font-size: 11px;\n  text-shadow: rgb(255, 255, 255) 10px 20px 10px;\n  text-align: center;\n}\n.attribution a {\n  color: hsl(228, 45%, 44%);\n}\n\n/* media query */\n@media screen and (min-width: 1800px) {\n  .header__form {\n    width: 30%;\n  }\n  .main__content {\n    width: 50%;\n  }\n}\n\n@media screen and (max-width: 1024px) {\n  .header__form {\n    width: 55%;\n  }\n  .main__content {\n    width: 85%;\n  }\n}\n\n@media screen and (max-width: 900px) {\n  .main__content {\n    height: auto;\n  }\n  .info-item:nth-last-of-type(1) {\n    flex: 0.7 0.7 0px;\n  }\n  .info-item div {\n    word-break: break-all;\n  }\n  .info-item div h2 {\n    margin-top: 0px;\n  }\n}\n\n@media screen and (max-width: 768px) {\n  .header__form {\n    width: 65%;\n  }\n}\n\n/* mobile device */\n@media screen and (max-width: 600px) {\n  .header__form {\n    width: 85%;\n  }\n  .main__content {\n    top: 175px;\n    bottom: unset;\n    flex-direction: column;\n  }\n  .info-item {\n    justify-content: center;\n  }\n  .info-item .line {\n    display: none;\n  }\n  .info-item div {\n    margin: 1rem 0px;\n    align-items: center;\n    padding-right: 0px !important;\n  }\n  .info-item:nth-of-type(1) div {\n    margin-top: 0px;\n  }\n  .info-item:nth-last-of-type(1) div {\n    margin-bottom: 0px;\n  }\n  .info-item div:nth-of-type(1) h2,\n  .info-item div:nth-of-type(1) span {\n    text-align: center;\n  }\n}\n\n@media screen and (max-width: 425px) {\n  .header__title {\n    font-size: 1.45rem;\n  }\n  .main__content {\n    top: 160px;\n  }\n  .header__form,\n  .main__content {\n    width: 90%;\n  }\n  .input {\n    padding-right: 70px;\n  }\n  .submit-button {\n    padding: 0px 14px;\n  }\n  .info-item div {\n    margin: 0.75rem 0px;\n  }\n  .info-item div:nth-of-type(1) h2 {\n    font-size: 0.7rem;\n  }\n  .info-item div:nth-of-type(1) span {\n    font-size: 1rem;\n  }\n}\n",""]);const l=c},645:n=>{"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,i){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(i)for(var r=0;r<this.length;r++){var a=this[r][0];null!=a&&(o[a]=!0)}for(var s=0;s<n.length;s++){var c=[].concat(n[s]);i&&o[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),e.push(c))}},e}},667:n=>{"use strict";n.exports=function(n,e){return e||(e={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},546:(n,e,t)=>{"use strict";t.d(e,{Z:()=>i});const i=t.p+"a60a3c85aa8b88aac4b7db59db6adac3.png"},379:(n,e,t)=>{"use strict";var i,o=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),r=[];function a(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function s(n,e){for(var t={},i=[],o=0;o<n.length;o++){var s=n[o],c=e.base?s[0]+e.base:s[0],d=t[c]||0,l="".concat(c," ").concat(d);t[c]=d+1;var p=a(l),u={css:s[1],media:s[2],sourceMap:s[3]};-1!==p?(r[p].references++,r[p].updater(u)):r.push({identifier:l,updater:h(u,e),references:1}),i.push(l)}return i}function c(n){var e=document.createElement("style"),i=n.attributes||{};if(void 0===i.nonce){var r=t.nc;r&&(i.nonce=r)}if(Object.keys(i).forEach((function(n){e.setAttribute(n,i[n])})),"function"==typeof n.insert)n.insert(e);else{var a=o(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var d,l=(d=[],function(n,e){return d[n]=e,d.filter(Boolean).join("\n")});function p(n,e,t,i){var o=t?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(n.styleSheet)n.styleSheet.cssText=l(e,o);else{var r=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(r,a[e]):n.appendChild(r)}}function u(n,e,t){var i=t.css,o=t.media,r=t.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleSheet)n.styleSheet.cssText=i;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(i))}}var f=null,m=0;function h(n,e){var t,i,o;if(e.singleton){var r=m++;t=f||(f=c(e)),i=p.bind(null,t,r,!1),o=p.bind(null,t,r,!0)}else t=c(e),i=u.bind(null,t,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return i(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;i(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i));var t=s(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var i=0;i<t.length;i++){var o=a(t[i]);r[o].references--}for(var c=s(n,e),d=0;d<t.length;d++){var l=a(t[d]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}t=c}}}},172:n=>{n.exports="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='46' height='56'%3e%3cpath fill-rule='evenodd' d='M39.263 7.673c8.897 8.812 8.966 23.168.153 32.065l-.153.153L23 56 6.737 39.89C-2.16 31.079-2.23 16.723 6.584 7.826l.153-.152c9.007-8.922 23.52-8.922 32.526 0zM23 14.435c-5.211 0-9.436 4.185-9.436 9.347S17.79 33.128 23 33.128s9.436-4.184 9.436-9.346S28.21 14.435 23 14.435z'/%3e%3c/svg%3e"}},e={};function t(i){var o=e[i];if(void 0!==o)return o.exports;var r=e[i]={id:i,exports:{}};return n[i](r,r.exports,t),r.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var i in e)t.o(e,i)&&!t.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:e[i]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var i=e.getElementsByTagName("script");i.length&&(n=i[i.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),(()=>{"use strict";var n=t(172),e=t.n(n);var i=t(379),o=t.n(i),r=t(756);o()(r.Z,{insert:"head",singleton:!1}),r.Z.locals,document.addEventListener("DOMContentLoaded",(()=>{let n,t,i;function o(e,o){n.setView([e,o],14),t=L.marker([e,o],{icon:i}).addTo(n)}n=L.map("mapid"),n.addLayer(new L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",{attribution:'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',maxZoom:18,id:"mapbox/streets-v11",tileSize:512,zoomOffset:-1,accessToken:"pk.eyJ1IjoicmF5YTEwMCIsImEiOiJja212bzg5YTIwNzBuMm5waHlpeGVjeGNtIn0.XYKZrrPoQDuJWYIaAA82mg"})),i=L.icon({iconUrl:e()});const r=new URL("https://geo.ipify.org/api/v1?");let a={apiKey:"at_sWBcpuEmjOoiahw0jdn9pmebP4Zz7",ipAddress:"",domain:""},s=new URLSearchParams({...a}),c=new Object;async function d(n,e){try{const t=await fetch(n+e);let i=await t.json();return i.messages?i={message:"Unable to find the data you requested, it may be that the domain or IP address is not available!"}:i}catch(n){console.log(n)}}function l(n){document.querySelector(".js-ip-address").innerText=n.ip,document.querySelector(".js-location").innerText=`${n.location.city}, ${n.location.country} ${n.location.geonameId}`,document.querySelector(".js-timezone").innerText=`UTC ${n.location.timezone}`,document.querySelector(".js-isp").innerText=n.isp}document.querySelector(".header__form").onsubmit=async function(n){n.preventDefault();const e=n.target.querySelector(".input").value;if(e)return function(n){/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(n)?s=new URLSearchParams({...a,ipAddress:n}):/^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/.test(n)?s=new URLSearchParams({...a,domain:n}):alert("Please enter the correct domain format or IP address!")}(e),c=await d(r,s),c.message?alert(c.message):(l(c),o(c.location.lat,c.location.lng),n.target.querySelector(".input").value="",void(s=new URLSearchParams({...a,ipAddress:"",domain:""})))},window.onload=async function(){c=await d(r,s),l(c),o(c.location.lat,c.location.lng)}}))})()})();