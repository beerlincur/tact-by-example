import{w as c}from"./index.1c761ed5.js";const h=globalThis.__sveltekit_1av0vcg?.base??"",g=globalThis.__sveltekit_1av0vcg?.assets??h,b="1683376833740",w="sveltekit:snapshot",A="sveltekit:scroll",R="sveltekit:index",f={tap:1,hover:2,viewport:3,eager:4,off:-1};function T(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}function I(){return{x:pageXOffset,y:pageYOffset}}function l(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const d={...f,"":f.hover};function _(e){let t=e.assignedSlot??e.parentNode;return t?.nodeType===11&&(t=t.host),t}function S(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=_(e)}}function y(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const o=e instanceof SVGAElement?e.target.baseVal:e.target,s=!n||!!o||k(n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external")||e.hasAttribute("download");return{url:n,external:s,target:o}}function x(e){let t=null,n=null,o=null,s=null,a=e;for(;a&&a!==document.documentElement;)n===null&&(n=l(a,"preload-code")),o===null&&(o=l(a,"preload-data")),t===null&&(t=l(a,"noscroll")),s===null&&(s=l(a,"reload")),a=_(a);return{preload_code:d[n??"off"],preload_data:d[o??"off"],noscroll:t==="off"?!1:t===""?!0:null,reload:s==="off"?!1:s===""?!0:null}}function p(e){const t=c(e);let n=!0;function o(){n=!0,t.update(r=>r)}function s(r){n=!1,t.set(r)}function a(r){let i;return t.subscribe(u=>{(i===void 0||n&&u!==i)&&r(i=u)})}return{notify:o,set:s,subscribe:a}}function v(){const{set:e,subscribe:t}=c(!1);let n;async function o(){clearTimeout(n);const s=await fetch(`${g}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(s.ok){const r=(await s.json()).version!==b;return r&&(e(!0),clearTimeout(n)),r}else throw new Error(`Version check failed: ${s.status}`)}return{subscribe:t,check:o}}function k(e,t){return e.origin!==location.origin||!e.pathname.startsWith(t)}let E;function O(e){E=e.client}const U={url:p({}),page:p({}),navigating:c(null),updated:v()};export{R as I,f as P,A as S,w as a,y as b,x as c,I as d,h as e,S as f,T as g,O as h,k as i,E as j,U as s};
