import{r as m,g as e}from"./layout-Crauikd6.js";const b=document.querySelector("#app");b.innerHTML=m("home",`
  <!-- Slide 1: Hero -->
  <section class="snap-section hero hero-primary">
    <div class="container">
      <h1>Modern Benchmarking for Graph Learning</h1>
      <p>GraphBench provides standardized datasets, clear protocols, and reproducible baselines for evaluating graph machine learning across tasks and scales.</p>
      <div class="cta">
        <a href="${e()}pages/quickstart.html" class="btn btn-primary">Get Started</a>
        <a href="${e()}pages/datasets.html" class="btn btn-outline">Explore Datasets</a>
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
        <a class="btn btn-outline" href="${e()}pages/datasets.html">View all datasets</a>
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
          <a class="btn btn-outline" href="${e()}pages/quickstart.html">Quick Start</a>
        </div>
      </div>
      <button aria-label="Scroll up" class="arrow-btn arrow-up" data-direction="up" title="Scroll up">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      </button>
    </div>
  </section>
`,"snap-container");document.body.classList.add("no-body-scroll");const l=t=>{const c=t.getAttribute("data-direction")||"down",o=Array.from(document.querySelectorAll(".snap-section")),d=window.scrollY,p=document.getElementById("main").getBoundingClientRect().top+window.scrollY,r=o.reduce((i,u,w)=>{const g=u.getBoundingClientRect().top+window.scrollY,s=Math.abs(g-p-d);return s<i.dist?{idx:w,dist:s}:i},{idx:0,dist:Number.POSITIVE_INFINITY}).idx,h=c==="up"?Math.max(0,r-1):Math.min(o.length-1,r+1);o[h].scrollIntoView({behavior:"smooth"})},n=document.getElementById("down-arrow");n&&n.addEventListener("click",()=>l(n));document.querySelectorAll(".arrow-btn[data-direction]").forEach(t=>{t.addEventListener("click",()=>l(t))});const a=document.getElementById("copy-code");a&&a.addEventListener("click",async()=>{const t=a.getAttribute("data-copy")||"";try{await navigator.clipboard.writeText(t)}catch{}});
