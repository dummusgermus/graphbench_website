(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const e of a)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(a){const e={};return a.integrity&&(e.integrity=a.integrity),a.referrerPolicy&&(e.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?e.credentials="include":a.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function s(a){if(a.ep)return;a.ep=!0;const e=o(a);fetch(a.href,e)}})();function w(){const r=window.location.pathname,t=r.indexOf("/pages/");if(t!==-1)return r.slice(0,t+1);const o=r.lastIndexOf("/");return o>=0?r.slice(0,o+1):"/"}const p=[{key:"quickstart",label:"Get Started",href:"./quickstart.html"},{key:"datasets",label:"Datasets",href:"./datasets.html"},{key:"updates",label:"Updates",href:"./updates.html"},{key:"team",label:"Team",href:"./team.html"},{label:"Paper",href:"https://arxiv.org/",external:!0},{label:"GitHub",href:"https://github.com/chrsmrrs/graphbench",external:!0}];function y(r,t,o){const s=p.map(e=>e.external?e.label==="GitHub"?`<a href="${e.href}" target="_blank" rel="noopener noreferrer"><img src="./github.svg" class="icon" alt="" aria-hidden="true"/> <span>${e.label}</span></a>`:`<a href="${e.href}" target="_blank" rel="noopener noreferrer">${e.label}</a>`:`<a href="${e.href}" ${e.key===r?'aria-current="page"':""}>${e.label}</a>`).join(""),a=p.map(e=>e.external?`<a href="${e.href}" target="_blank" rel="noopener noreferrer">${e.label}</a>`:`<a href="${e.href}" ${e.key===r?'aria-current="page"':""}>${e.label}</a>`).join("");return`
  <header id="site-header" class="${r!=="home"?"header-elevated":"header-on-hero"}">
    <div class="container nav" role="navigation" aria-label="Primary">
      <a href="./" class="brand" aria-label="GraphBench home">
        <img src="./GraphBench_text.svg" alt="GraphBench" />
      </a>
      <button type="button" class="nav-toggle" data-nav-toggle aria-controls="nav-drawer" aria-expanded="false" aria-label="Toggle navigation">
        <span class="nav-toggle-bar"></span>
        <span class="nav-toggle-bar"></span>
        <span class="nav-toggle-bar"></span>
      </button>
      <nav class="nav-links" aria-label="Sections">
        ${s}
      </nav>
    </div>
  </header>
  <div class="nav-drawer" id="nav-drawer" data-nav-drawer hidden>
    <div class="nav-drawer-backdrop" data-nav-close></div>
    <div class="nav-drawer-panel" role="dialog" aria-modal="true" aria-label="Site navigation">
      <div class="nav-drawer-header">
        <a href="./" class="brand nav-drawer-brand" aria-label="GraphBench home">
          <img src="./GraphBench_text.svg" alt="GraphBench" />
        </a>
        <button type="button" class="nav-drawer-close" data-nav-close aria-label="Close navigation">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
      <nav class="nav-drawer-links" aria-label="Mobile site sections">
        ${a}
      </nav>
    </div>
  </div>
  <main id="main" ${o?`class="${o}"`:""}>${t}</main>
  `}function x(){document.querySelectorAll("button[data-copy]").forEach(t=>{t.addEventListener("click",async()=>{const o=t.getAttribute("data-copy")||"";try{if(await navigator.clipboard.writeText(o),t.classList.contains("copy-btn")){const s=t.innerHTML,a='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>';t.innerHTML=a,setTimeout(()=>{t.innerHTML=s},1e3)}else{const s=t.textContent;t.textContent="Copied",setTimeout(()=>{s&&(t.textContent=s)},1e3)}}catch{}})});const r=document.querySelector("[data-nav-drawer]");if(r){const t=r.querySelector(".nav-drawer-panel"),o=Array.from(document.querySelectorAll("[data-nav-toggle]")),s='a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';let a=null,e=null;const i=()=>!r.hasAttribute("hidden"),d=n=>{o.forEach(l=>l.setAttribute("aria-expanded",n.toString()))},g=()=>{if(!t)return;const n=t.querySelector(s);n&&n.focus()},v=()=>{!t||i()||(e!==null&&(window.clearTimeout(e),e=null),a=document.activeElement instanceof HTMLElement?document.activeElement:null,r.removeAttribute("hidden"),requestAnimationFrame(()=>{r.classList.add("is-open")}),document.body.classList.add("nav-drawer-open"),d(!0),g())},m=()=>{a&&typeof a.focus=="function"&&a.focus(),a=null},c=()=>{!t||!i()||(r.classList.remove("is-open"),document.body.classList.remove("nav-drawer-open"),d(!1),e=window.setTimeout(()=>{r.setAttribute("hidden",""),m(),e=null},250))};o.forEach(n=>{n.addEventListener("click",()=>{i()?c():v()})}),r.addEventListener("click",n=>{n.target.closest("[data-nav-close]")&&c()}),r.querySelectorAll("a").forEach(n=>{n.addEventListener("click",()=>{c()})});const b=n=>{if(!(!i()||!t)){if(n.key==="Escape"){n.preventDefault(),c();return}if(n.key==="Tab"){const l=Array.from(t.querySelectorAll(s)).filter(h=>!h.hasAttribute("disabled")&&!h.disabled);if(l.length===0)return;const u=l[0],f=l[l.length-1];n.shiftKey&&document.activeElement===u?(n.preventDefault(),f.focus()):!n.shiftKey&&document.activeElement===f&&(n.preventDefault(),u.focus())}}};document.addEventListener("keydown",b),window.addEventListener("resize",()=>{window.innerWidth>480&&i()&&c()})}}export{x as e,w as g,y as r};
