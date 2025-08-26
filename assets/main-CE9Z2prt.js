import{r as m}from"./layout-HKE5J0II.js";const g=document.querySelector("#app");g.innerHTML=m("home",`
  <!-- Slide 1: Hero -->
  <section class="snap-section hero hero-primary">
    <div class="container">
      <h1>Modern Benchmarking for Graph Learning</h1>
      <p>GraphBench provides standardized datasets, clear protocols, and reproducible baselines for evaluating graph machine learning across tasks and scales.</p>
      <div class="cta">
        <a href="./quickstart.html" class="btn btn-primary">Get Started</a>
        <a href="./datasets.html" class="btn btn-outline">Explore Datasets</a>
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
        <a class="btn btn-outline" href="./datasets.html">View all datasets</a>
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
          <a class="btn btn-outline" href="./quickstart.html">Quick Start</a>
        </div>
      </div>
      <button aria-label="Scroll up" class="arrow-btn arrow-up" data-direction="up" title="Scroll up">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      </button>
    </div>
  </section>
`,"snap-container");document.body.classList.add("no-body-scroll");const s=t=>{const l=t.getAttribute("data-direction")||"down",e=Array.from(document.querySelectorAll(".snap-section")),c=window.scrollY,d=document.getElementById("main").getBoundingClientRect().top+window.scrollY,r=e.reduce((a,h,u)=>{const w=h.getBoundingClientRect().top+window.scrollY,i=Math.abs(w-d-c);return i<a.dist?{idx:u,dist:i}:a},{idx:0,dist:Number.POSITIVE_INFINITY}).idx,p=l==="up"?Math.max(0,r-1):Math.min(e.length-1,r+1);e[p].scrollIntoView({behavior:"smooth"})},o=document.getElementById("down-arrow");o&&o.addEventListener("click",()=>s(o));document.querySelectorAll(".arrow-btn[data-direction]").forEach(t=>{t.addEventListener("click",()=>s(t))});const n=document.getElementById("copy-code");n&&n.addEventListener("click",async()=>{const t=n.getAttribute("data-copy")||"";try{await navigator.clipboard.writeText(t)}catch{}});
