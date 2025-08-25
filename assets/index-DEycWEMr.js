(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const m=[{key:"quickstart",label:"Get Started",href:"/pages/quickstart.html"},{key:"datasets",label:"Datasets",href:"/pages/datasets.html"},{key:"leaderboard",label:"Leaderboard",href:"/pages/leaderboard.html"},{key:"updates",label:"Updates",href:"/pages/updates.html"},{label:"Paper",href:"https://arxiv.org/",external:!0},{label:"GitHub",href:"https://github.com/chrsmrrs/graphbench",external:!0}];function b(a,n,o){return`
  <header id="site-header" class="header-on-hero">
    <div class="container nav" role="navigation" aria-label="Primary">
      <a href="/" class="brand" aria-label="GraphBench home">
        <img src="/GraphBench_text.svg" alt="GraphBench" />
      </a>
      <nav class="nav-links" aria-label="Sections">
        ${m.map(t=>t.external?t.label==="GitHub"?`<a href="${t.href}" target="_blank" rel="noopener noreferrer"><img src="/github.svg" class="icon" alt="" aria-hidden="true"/> <span>${t.label}</span></a>`:`<a href="${t.href}" target="_blank" rel="noopener noreferrer">${t.label}</a>`:`<a href="${t.href}" ${t.key===a?'aria-current="page"':""}>${t.label}</a>`).join("")}
      </nav>
    </div>
  </header>
  <main id="main" ${`class="${o}"`}>${n}</main>
  `}const f=document.querySelector("#app");f.innerHTML=b("home",`
  <!-- Slide 1: Hero -->
  <section class="snap-section hero hero-primary">
    <div class="container">
      <h1>Modern Benchmarking for Graph Learning</h1>
      <p>GraphBench provides standardized datasets, clear protocols, and reproducible baselines for evaluating graph machine learning across tasks and scales.</p>
      <div class="cta">
        <a href="/pages/quickstart.html" class="btn btn-primary">Get Started</a>
        <a href="/pages/datasets.html" class="btn btn-outline">Explore Datasets</a>
      </div>
      <button id="down-arrow" aria-label="Scroll to datasets" class="arrow-btn arrow-down" title="Scroll">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
    </div>
  </section>

  <!-- Slide 2: Datasets overview (white) -->
  <section class="snap-section section-white" style="background:#fff;">
    <div class="container">
      <h2>Explore Datasets</h2>
      <p class="lead">Curated graph datasets with consistent splits and rich metadata.</p>
      <div class="grid">
        <article class="card col-4"><h3>OGBN-Arxiv</h3><p class="muted">Node Classification</p></article>
        <article class="card col-4"><h3>OGBN-Products</h3><p class="muted">Node Classification</p></article>
        <article class="card col-4"><h3>Reddit</h3><p class="muted">Node Classification</p></article>
      </div>
      <div style="margin-top:1rem">
        <a class="btn btn-outline" href="/pages/datasets.html">View all datasets</a>
      </div>
      <button aria-label="Scroll up" class="arrow-btn arrow-up" data-direction="up" title="Scroll up">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      </button>
      <button aria-label="Scroll down" class="arrow-btn arrow-down" data-direction="down" title="Scroll down">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
    </div>
  </section>

  <!-- Slide 3: Code snippet (interactive placeholder) -->
  <section class="snap-section section-white" style="background:#fff;">
    <div class="container">
      <h2>Use GraphBench in 3 lines</h2>
      <div class="card col-12" style="max-width:720px">
        <pre><code id="code-snippet">from graphbench import Benchmark

bench = Benchmark(dataset="ogbn-arxiv", model="gcn")
bench.run()</code></pre>
        <div style="display:flex; gap:.5rem; margin-top:.5rem;">
          <button class="btn btn-primary" id="copy-code" data-copy="from graphbench import Benchmark\\n\\nbench = Benchmark(dataset=\\"ogbn-arxiv\\", model=\\"gcn\\")\\nbench.run()">Copy code</button>
          <a class="btn btn-outline" href="/pages/quickstart.html">Quick Start</a>
        </div>
      </div>
      <button aria-label="Scroll up" class="arrow-btn arrow-up" data-direction="up" title="Scroll up">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      </button>
    </div>
  </section>
`,"snap-container");document.body.classList.add("no-body-scroll");const p=a=>{const n=a.getAttribute("data-direction")||"down",o=Array.from(document.querySelectorAll(".snap-section")),t=window.scrollY,e=document.getElementById("main").getBoundingClientRect().top+window.scrollY,r=o.reduce((c,h,u)=>{const g=h.getBoundingClientRect().top+window.scrollY,d=Math.abs(g-e-t);return d<c.dist?{idx:u,dist:d}:c},{idx:0,dist:Number.POSITIVE_INFINITY}).idx,i=n==="up"?Math.max(0,r-1):Math.min(o.length-1,r+1);o[i].scrollIntoView({behavior:"smooth"})},s=document.getElementById("down-arrow");s&&s.addEventListener("click",()=>p(s));document.querySelectorAll(".arrow-btn[data-direction]").forEach(a=>{a.addEventListener("click",()=>p(a))});const l=document.getElementById("copy-code");l&&l.addEventListener("click",async()=>{const a=l.getAttribute("data-copy")||"";try{await navigator.clipboard.writeText(a)}catch{}});
