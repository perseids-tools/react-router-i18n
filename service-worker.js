if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return t[e]||(r=new Promise(async r=>{if("document"in self){const t=document.createElement("script");t.src=e,document.head.appendChild(t),t.onload=r}else importScripts(e),r()})),r.then(()=>{if(!t[e])throw new Error(`Module ${e} didn’t register its module`);return t[e]})},r=(r,t)=>{Promise.all(r.map(e)).then(e=>t(1===e.length?e[0]:e))},t={require:Promise.resolve(r)};self.define=(r,i,s)=>{t[r]||(t[r]=Promise.resolve().then(()=>{let t={};const n={uri:location.origin+r.slice(1)};return Promise.all(i.map(r=>{switch(r){case"exports":return t;case"module":return n;default:return e(r)}})).then(e=>{const r=s(...e);return t.default||(t.default=r),t})}))}}define("./service-worker.js",["./workbox-dce9cbc5"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.clientsClaim(),e.precacheAndRoute([{url:"/react-router-i18n/index.html",revision:"b11f596ba0871f4201ed58d493b5d84e"},{url:"/react-router-i18n/static/js/2.a8f83519.chunk.js",revision:"46efc144910125e88b14c723df6f67d7"},{url:"/react-router-i18n/static/js/2.a8f83519.chunk.js.LICENSE.txt",revision:"c64c486544348f10a6d6c716950bc223"},{url:"/react-router-i18n/static/js/main.9b442564.chunk.js",revision:"a83759bfce9ab13f604268f2db2605d6"},{url:"/react-router-i18n/static/js/runtime~main.c472de6d.js",revision:"b24afed8e2cfe9d9ff9735eaa8a3dd7f"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/react-router-i18n/index.html"),{denylist:[/^\/_/,/\/[^/]+\.[^/]+$/]}))}));
//# sourceMappingURL=service-worker.js.map
