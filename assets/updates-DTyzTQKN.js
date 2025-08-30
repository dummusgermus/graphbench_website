import{r,g as c}from"./layout-yOHGpJMP.js";const p=document.querySelector("#app");p.innerHTML=r("updates",`
  <section class="page-header">
    <div class="container">
      <div class="title-row">
        <span class="page-icon" aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 4h18"/><path d="M8 8h13"/><path d="M3 12h18"/><path d="M8 16h13"/></svg>
        </span>
        <h2>Update Log</h2>
      </div>
    </div>
  </section>
  <section class="container">
    <div class="updates" id="updates-list"></div>
  </section>
`);(async()=>{const e=document.getElementById("updates-list");if(e)try{const i=c(),s=await fetch(`${i}updates.json`);if(!s.ok)throw new Error("Failed to load updates");const a=await s.json();a.sort((t,n)=>new Date(n.date).getTime()-new Date(t.date).getTime());const o=a.map(t=>{const d=`v${String(t.version||"").split(".")[0]||"1"}`;return`
      <div class="update">
        <div class="update-head">
          <h3 class="update-title"><span class="date">${t.date}</span><span class="version-tag ${d}" aria-label="Version">${t.version}</span></h3>
        </div>
        <div class="update-body">${t.text}</div>
      </div>`}).join("");e.innerHTML=o}catch{}})();
