if(!self.define){let e,i={};const n=(n,o)=>(n=new URL(n+".js",o).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(o,c)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let r={};const f=e=>n(e,s),d={module:{uri:s},exports:r,require:f};i[s]=Promise.all(o.map((e=>d[e]||f(e)))).then((e=>(c(...e),r)))}}define(["./workbox-7ddbc25a"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"favicon.ico",revision:"1ba2ae710d927f13d483fd5d1e548c9b"},{url:"images/icons/icon-128x128.png",revision:"a70af409ca054d07fbeecf6ba15ca9e9"},{url:"images/icons/icon-144x144.png",revision:"713a6e8e71258df2d984f0c406ed5ff7"},{url:"images/icons/icon-152x152.png",revision:"d256ec636fbef516943b9498f1e3dd44"},{url:"images/icons/icon-192x192.png",revision:"e5dc6a992f97568fe7cb4ac3f96b8790"},{url:"images/icons/icon-384x384.png",revision:"f9d2f5570d744f723af5555fe1083be3"},{url:"images/icons/icon-512x512.png",revision:"2d46fb6578db55eb697af0def4bc07ce"},{url:"images/icons/icon-72x72.png",revision:"42cd55f35ad9eeb39330614aad15dfdd"},{url:"images/icons/icon-96x96.png",revision:"cb85c66a7119a3013fc262b0a037659c"},{url:"index.html",revision:"8c47e7e328221e81018622e9b5d3dfb5"},{url:"manifest.json",revision:"8b0fd2f922cd6196d75f9be2a3d74249"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
