(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",()=>{const r=document.querySelector(".mob-menu-overlay"),n=document.querySelector(".icon-open-btn"),l=document.querySelector(".close-menu-btn"),c=document.querySelectorAll(".mob-menu-list"),e=document.querySelector(".header");let t=0;window.addEventListener("scroll",()=>{let o=window.scrollY||document.documentElement.scrollTop;o>t?e.classList.add("show"):e.classList.remove("show"),t=o});const s=()=>{r.classList.add("is-open")},i=()=>{r.classList.remove("is-open")};n.addEventListener("click",s),l.addEventListener("click",i),r.addEventListener("click",o=>{o.target===r&&i()}),c.forEach(o=>{o.addEventListener("click",i)})});
//# sourceMappingURL=commonHelpers.js.map
