if(!self.define){let i,e={};const n=(n,c)=>(n=new URL(n+".js",c).href,e[n]||new Promise((e=>{if("document"in self){const i=document.createElement("script");i.src=n,i.onload=e,document.head.appendChild(i)}else i=n,importScripts(n),e()})).then((()=>{let i=e[n];if(!i)throw new Error(`Module ${n} didn’t register its module`);return i})));self.define=(c,s)=>{const o=i||("document"in self?document.currentScript.src:"")||location.href;if(e[o])return;let a={};const r=i=>n(i,o),l={module:{uri:o},exports:a,require:r};e[o]=Promise.all(c.map((i=>l[i]||r(i)))).then((i=>(s(...i),a)))}}define(["./workbox-c1760cce"],(function(i){"use strict";self.skipWaiting(),i.clientsClaim(),i.precacheAndRoute([{url:"assets/alarm.47fbbbce.mp3",revision:null},{url:"assets/index.9064ca66.js",revision:null},{url:"assets/index.e295fd00.css",revision:null},{url:"assets/ListView.68071a0f.css",revision:null},{url:"assets/ListView.e0a4bbec.js",revision:null},{url:"assets/materialdesignicons-webfont.8bded8f4.woff",revision:null},{url:"assets/materialdesignicons-webfont.9bdfaf27.eot",revision:null},{url:"assets/materialdesignicons-webfont.c14484cf.ttf",revision:null},{url:"assets/materialdesignicons-webfont.da7fba3c.woff2",revision:null},{url:"assets/SettingsView.219573e6.js",revision:null},{url:"assets/SettingsView.3bc81233.css",revision:null},{url:"assets/VTable.1045cf51.js",revision:null},{url:"assets/VTable.9e76ea37.css",revision:null},{url:"assets/webfontloader.cd097671.js",revision:null},{url:"assets/yay.ca7f6c55.mp3",revision:null},{url:"favicon-16x16.png",revision:"5fa505c60665145040de2c3cdc0a2ce9"},{url:"favicon-32x32.png",revision:"555b7d4ca2a1843493b14d1a3fe63572"},{url:"favicon.ico",revision:"b361f2f4a3e4d04382044fb184e97bef"},{url:"img/icons/android-chrome-192x192.png",revision:"153b33db65ace2ca376b7c6f2f0a7f75"},{url:"img/icons/android-chrome-maskable-192x192.png",revision:"153b33db65ace2ca376b7c6f2f0a7f75"},{url:"img/icons/android-chrome-maskable-512x512.png",revision:"702e578c42565ba810aa51dd5bb9787d"},{url:"img/icons/apple-touch-icon-120x120.png",revision:"06ce0ef7b09d2bfe91f6c33914fa7a37"},{url:"img/icons/apple-touch-icon-152x152.png",revision:"3329e32233ff0ac9b1ac7b4597a80596"},{url:"img/icons/apple-touch-icon-180x180.png",revision:"1e0b32276d98d6d71f5a3cc86c67ec19"},{url:"img/icons/apple-touch-icon-60x60.png",revision:"dc006efcaedda7f4c8717368efbca4e0"},{url:"img/icons/apple-touch-icon-76x76.png",revision:"b584b34f835543bc3b169455574c0ae7"},{url:"img/icons/apple-touch-icon.png",revision:"1e0b32276d98d6d71f5a3cc86c67ec19"},{url:"img/icons/favicon-16x16.png",revision:"5fa505c60665145040de2c3cdc0a2ce9"},{url:"img/icons/favicon-32x32.png",revision:"555b7d4ca2a1843493b14d1a3fe63572"},{url:"img/icons/favicon.ico",revision:"b361f2f4a3e4d04382044fb184e97bef"},{url:"img/icons/manifest.json",revision:"ca9b72d123a80d2915c1292b975dfec1"},{url:"img/icons/msapplication-icon-144x144.png",revision:"133c9a965c90409f822c27eb4cc82f59"},{url:"img/icons/mstile-150x150.png",revision:"b866d123a074d755fd0148b80665589e"},{url:"img/icons/safari-pinned-tab.svg",revision:"0bef6e51a55b907f13f310ec3550c50f"},{url:"index.html",revision:"e4073e9145d75f26ebabe2a34601674e"},{url:"./img/icons/android-chrome-192x192.png",revision:"153b33db65ace2ca376b7c6f2f0a7f75"},{url:"./img/icons/android-chrome-maskable-192x192.png",revision:"153b33db65ace2ca376b7c6f2f0a7f75"},{url:"./img/icons/android-chrome-maskable-512x512.png",revision:"702e578c42565ba810aa51dd5bb9787d"},{url:"./img/icons/apple-touch-icon-60x60.png",revision:"dc006efcaedda7f4c8717368efbca4e0"},{url:"./img/icons/apple-touch-icon-76x76.png",revision:"b584b34f835543bc3b169455574c0ae7"},{url:"./img/icons/apple-touch-icon-120x120.png",revision:"06ce0ef7b09d2bfe91f6c33914fa7a37"},{url:"./img/icons/apple-touch-icon-152x152.png",revision:"3329e32233ff0ac9b1ac7b4597a80596"},{url:"./img/icons/apple-touch-icon-180x180.png",revision:"1e0b32276d98d6d71f5a3cc86c67ec19"},{url:"./img/icons/apple-touch-icon.png",revision:"1e0b32276d98d6d71f5a3cc86c67ec19"},{url:"./img/icons/favicon-16x16.png",revision:"5fa505c60665145040de2c3cdc0a2ce9"},{url:"./img/icons/favicon-32x32.png",revision:"555b7d4ca2a1843493b14d1a3fe63572"},{url:"./img/icons/msapplication-icon-144x144.png",revision:"133c9a965c90409f822c27eb4cc82f59"},{url:"./img/icons/mstile-150x150.png",revision:"b866d123a074d755fd0148b80665589e"},{url:"manifest.webmanifest",revision:"525144a2d1329cd7096a892003e35627"}],{ignoreURLParametersMatching:[/^[0-9a-zA-Z]*$/]}),i.cleanupOutdatedCaches(),i.registerRoute(new i.NavigationRoute(i.createHandlerBoundToURL("index.html")))}));
