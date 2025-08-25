(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(e){if(e.ep)return;e.ep=!0;const a=n(e);fetch(e.href,a)}})();const s=[{key:"quickstart",label:"Get Started",href:"./quickstart.html"},{key:"datasets",label:"Datasets",href:"./datasets.html"},{key:"leaderboard",label:"Leaderboard",href:"./leaderboard.html"},{key:"updates",label:"Updates",href:"./updates.html"},{label:"Paper",href:"https://arxiv.org/",external:!0},{label:"GitHub",href:"https://github.com/chrsmrrs/graphbench",external:!0}];function l(t,o,n){return`
  <header id="site-header" class="${t!=="home"?"header-elevated":"header-on-hero"}">
    <div class="container nav" role="navigation" aria-label="Primary">
      <a href="./" class="brand" aria-label="GraphBench home">
        <img src="./GraphBench_text.svg" alt="GraphBench" />
      </a>
      <nav class="nav-links" aria-label="Sections">
        ${s.map(r=>r.external?r.label==="GitHub"?`<a href="${r.href}" target="_blank" rel="noopener noreferrer"><img src="./github.svg" class="icon" alt="" aria-hidden="true"/> <span>${r.label}</span></a>`:`<a href="${r.href}" target="_blank" rel="noopener noreferrer">${r.label}</a>`:`<a href="${r.href}" ${r.key===t?'aria-current="page"':""}>${r.label}</a>`).join("")}
      </nav>
    </div>
  </header>
  <main id="main" ${n?`class="${n}"`:""}>${o}</main>
  `}function c(){document.querySelectorAll("button[data-copy]").forEach(t=>{t.addEventListener("click",async()=>{const o=t.getAttribute("data-copy")||"";try{if(await navigator.clipboard.writeText(o),t.classList.contains("copy-btn")){const n=t.innerHTML,r='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>';t.innerHTML=r,setTimeout(()=>{t.innerHTML=n},1e3)}else{const n=t.textContent;t.textContent="Copied",setTimeout(()=>{n&&(t.textContent=n)},1e3)}}catch{}})})}export{c as e,l as r};
