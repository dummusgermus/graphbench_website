import{r as $}from"./layout-yOHGpJMP.js";const _=document.querySelector("#app");_.innerHTML=$("home",`
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

  <!-- Slide 2: Explore datasets (interactive flow figure) -->
  <section class="snap-section section-white flow-slide" style="background:#fff;">
    <div class="container">

      <div id="flow-figure" class="flow-wrap">
        <svg id="flow-svg" class="flow-svg" aria-hidden="true"></svg>
        <div class="flow-col flow-left">
          <div class="flow-item accent-g1"><span class="flow-bg1" aria-hidden="true"></span><span class="flow-bg2" aria-hidden="true"></span>
            <a href="./datasets.html#ds-social" class="flow-node" data-id="social" data-group="1"><span class="icon" aria-hidden="true"></span><span class="label">Social Networks</span></a>
          </div>
          <div class="flow-item accent-g2"><span class="flow-bg1" aria-hidden="true"></span><span class="flow-bg2" aria-hidden="true"></span>
            <a href="./datasets.html#ds-chip" class="flow-node" data-id="chip" data-group="2"><span class="icon" aria-hidden="true"></span><span class="label">Chip Design</span></a>
          </div>
          <div class="flow-item accent-g2"><span class="flow-bg1" aria-hidden="true"></span><span class="flow-bg2" aria-hidden="true"></span>
            <a href="./datasets.html#ds-circuits" class="flow-node" data-id="circuits" data-group="2"><span class="icon" aria-hidden="true"></span><span class="label">Electronic Circuits</span></a>
          </div>
          <div class="flow-item accent-g3"><span class="flow-bg1" aria-hidden="true"></span><span class="flow-bg2" aria-hidden="true"></span>
            <a href="./datasets.html#ds-sat" class="flow-node" data-id="sat" data-group="3"><span class="icon" aria-hidden="true"></span><span class="label">SAT Solving</span></a>
          </div>
          <div class="flow-item accent-g3"><span class="flow-bg1" aria-hidden="true"></span><span class="flow-bg2" aria-hidden="true"></span>
            <a href="./datasets.html#ds-co" class="flow-node" data-id="co" data-group="3"><span class="icon" aria-hidden="true"></span><span class="label">Combinatorial Optimization</span></a>
          </div>
          <div class="flow-item accent-g3"><span class="flow-bg1" aria-hidden="true"></span><span class="flow-bg2" aria-hidden="true"></span>
            <a href="./datasets.html#ds-ar" class="flow-node" data-id="ar" data-group="3"><span class="icon" aria-hidden="true"></span><span class="label">Algorithmic Reasoning</span></a>
          </div>
          <div class="flow-item accent-g4"><span class="flow-bg1" aria-hidden="true"></span><span class="flow-bg2" aria-hidden="true"></span>
            <a href="./datasets.html#ds-weather" class="flow-node" data-id="weather" data-group="4"><span class="icon" aria-hidden="true"></span><span class="label">Weather Forecasting</span></a>
          </div>
        </div>

        <a id="flow-model" class="flow-model" href="./quickstart.html" aria-label="Your model">
          <span class="flow-bg1" aria-hidden="true"></span><span class="flow-bg2" aria-hidden="true"></span>
          <div class="model-inner">
            <span class="icon" aria-hidden="true"><img src="./puzzle.svg" alt="" width="18" height="18"/></span>
            <span class="t">Your Model</span>
          </div>
        </a>

        <div class="flow-col flow-right">
          <div class="flow-item ev1" style="--accent:#4F064F"><span class="flow-bg1" aria-hidden="true"></span><span class="flow-bg2" aria-hidden="true"></span>
            <a href="./evaluation.html" class="flow-node eval ev1" data-ev="splits"><span class="label">Evaluation Splits</span></a>
          </div>
          <div class="flow-item ev2" style="--accent:#821846"><span class="flow-bg1" aria-hidden="true"></span><span class="flow-bg2" aria-hidden="true"></span>
            <a href="./evaluation.html" class="flow-node eval ev2" data-ev="metrics"><span class="label">Evaluation Metrics</span></a>
          </div>
          <div class="flow-item ev3" style="--accent:#9E2235"><span class="flow-bg1" aria-hidden="true"></span><span class="flow-bg2" aria-hidden="true"></span>
            <a href="./evaluation.html" class="flow-node eval ev3" data-ev="tuning"><span class="label">Hyperparameter Tuning</span></a>
          </div>
          <div class="flow-item ev4" style="--accent:#AF3323"><span class="flow-bg1" aria-hidden="true"></span><span class="flow-bg2" aria-hidden="true"></span>
            <a href="./evaluation.html" class="flow-node eval ev4" data-ev="ood"><span class="label">OOD Generalization</span></a>
          </div>
        </div>
      </div>

      <div class="flow-copy grid">
        <div class="col-4">
          <h3>Datasets</h3>
          <p>GraphBench offers 7 curated datasets from 4 domains, all accessible through a unified loader. Explore our catalog to learn more.</p>
          <div class="flow-cta"><a class="btn btn-outline" href="./datasets.html">Browse datasets</a></div>
        </div>
        <div class="col-4">
          <h3>Your model</h3>
          <p>Just drop in your model and go, with our simple plug-and-play pipeline.</p>
          <div class="flow-cta"><a class="btn btn-outline" href="./quickstart.html">Get started</a></div>
        </div>
        <div class="col-4">
          <h3>Evaluation</h3>
          <p>GraphBench provides extensive evaluation of your model, covering splits, metrics, hyperparameter tuning, and OOD generalization.</p>
          <div class="flow-cta"><a class="btn btn-outline" href="./evaluation.html">Learn more</a></div>
        </div>
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

  <!-- Slide 3: GUI + Generated code -->
  <section class="snap-section section-white" style="background:#fff;">
    <div class="container">
      <p class="builder-intro">Choose your datasets and model configuration.<br/>Copy the code. And you're ready to go.</p>
      <div class="builder-grid">
        <div class="builder-left-row">
          <div>
            <h3 style="margin:.2rem 0 .6rem;">Datasets</h3>
            <div id="ds-builder"></div>
            <div id="ds-subsets" style="margin-top:.6rem; display:none;">
              <div class="ds-table-wrap">
                <div class="ds-label2">Algorithmic Reasoning subsets</div>
                <div class="grid" style="grid-template-columns: repeat(3, minmax(0,1fr)); gap:.5rem;">
                  <label class="chip-sm" style="cursor:pointer; display:flex; align-items:center; gap:.4rem;"><input type="checkbox" data-subset="easy" checked /> easy</label>
                  <label class="chip-sm" style="cursor:pointer; display:flex; align-items:center; gap:.4rem;"><input type="checkbox" data-subset="medium" checked /> medium</label>
                  <label class="chip-sm" style="cursor:pointer; display:flex; align-items:center; gap:.4rem;"><input type="checkbox" data-subset="hard" checked /> hard</label>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 style="margin:.2rem 0 .6rem;">Your Model</h3>
            <div class="model-list">
              <label class="toggle-row"><span class="name">pre_filter</span><input type="checkbox" id="opt-pre-filter" class="ds-check" /><span class="toggle" aria-hidden="true"></span></label>
              <label class="toggle-row"><span class="name">pre_transform</span><input type="checkbox" id="opt-pre-transform" class="ds-check" /><span class="toggle" aria-hidden="true"></span></label>
              <label class="toggle-row"><span class="name">transform</span><input type="checkbox" id="opt-transform" class="ds-check" /><span class="toggle" aria-hidden="true"></span></label>
            </div>
          </div>
        </div>
        <aside class="builder-right">
          <div class="builder-box card code-card">
            <div class="code-wrap builder-code">
              <button class="copy-btn" id="copy-gen" data-copy="" aria-label="Copy" title="Copy">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
              </button>
              <pre><code id="gen-code" class="code-manual"></code></pre>
            </div>
            <div class="builder-help">Copy and paste the code and you’re ready to go.</div>
          </div>
        </aside>
      </div>
    </div>
      <button aria-label="Scroll up" class="arrow-btn arrow-up" data-direction="up" title="Scroll up">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      </button>
    </div>
  </section>
`,"snap-container");document.body.classList.add("no-body-scroll");const A=o=>{const p=o.getAttribute("data-direction")||"down",h=Array.from(document.querySelectorAll(".snap-section")),v=window.scrollY,k=document.getElementById("main").getBoundingClientRect().top+window.scrollY,u=h.reduce((g,s,w)=>{const m=s.getBoundingClientRect().top+window.scrollY,a=Math.abs(m-k-v);return a<g.dist?{idx:w,dist:a}:g},{idx:0,dist:Number.POSITIVE_INFINITY}).idx,b=p==="up"?Math.max(0,u-1):Math.min(h.length-1,u+1);h[b].scrollIntoView({behavior:"smooth"})},E=document.getElementById("down-arrow");E&&E.addEventListener("click",()=>A(E));document.querySelectorAll(".arrow-btn[data-direction]").forEach(o=>{o.addEventListener("click",()=>A(o))});(function(){const o=document.getElementById("flow-svg"),p=document.getElementById("flow-figure");if(!o||!p)return;const h=s=>{switch(s){case"social":return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="3"/><path d="M6 19c0-2.5 3-4 6-4s6 1.5 6 4"/></svg>';case"chip":return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="7" y="7" width="10" height="10" rx="2"/><path d="M7 3v2M12 3v2M17 3v2M21 7h-2M21 12h-2M21 17h-2M3 7h2M3 12h2M3 17h2M7 21v-2M12 21v-2M17 21v-2"/></svg>';case"circuits":return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4.5" y="6.5" width="3" height="3" rx="0.5"/><rect x="16.5" y="6.5" width="3" height="3" rx="0.5"/><rect x="10.5" y="14.5" width="3" height="3" rx="0.5"/><path d="M7.5 8h6v4h3"/></svg>';case"sat":return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 7h6a5 5 0 0 1 0 10H6z"/><path d="M6 9H3M6 15H3M17 12h4"/></svg>';case"co":return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 4v16" stroke-dasharray="3 3"/><circle cx="6" cy="8" r="2"/><circle cx="6" cy="16" r="2"/><circle cx="18" cy="8" r="2"/><circle cx="18" cy="16" r="2"/><path d="M8 9l3 2"/><path d="M13 11l3 2"/><path d="M8 15l3-2"/><path d="M13 13l3-2"/></svg>';case"ar":return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="6" height="4" rx="1"/><rect x="15" y="3" width="6" height="4" rx="1"/><rect x="9" y="17" width="6" height="4" rx="1"/><path d="M6 7v4h12V7M12 13v4"/></svg>';case"weather":return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 16.5a4.5 4.5 0 0 0-2-8.5 5 5 0 0 0-9.6 1.5A3.5 3.5 0 1 0 5 16"/><path d="M8 19v2M12 18v3M16 19v2"/></svg>';default:return""}};document.querySelectorAll(".flow-left .flow-node").forEach(s=>{const w=s.getAttribute("data-id")||"",m=s.querySelector(".icon");m&&(m.innerHTML=h(w))});const v=(s,w,m=2)=>{const a=document.createElementNS("http://www.w3.org/2000/svg","path");return a.setAttribute("d",s),a.setAttribute("fill","none"),a.setAttribute("stroke",w),a.setAttribute("stroke-width",String(m)),a.setAttribute("stroke-linecap","round"),a.setAttribute("stroke-linejoin","round"),a.setAttribute("shape-rendering","geometricPrecision"),a},k=s=>getComputedStyle(document.documentElement).getPropertyValue(s===1?"--ds-g1":s===2?"--ds-g2":s===3?"--ds-g3":"--ds-g4").trim()||"#2b5bb8",u=["#4F064F","#821846","#9E2235","#AF3323"],b=()=>{for(;o.firstChild;)o.removeChild(o.firstChild);const s=Array.from(document.querySelectorAll(".flow-left .flow-node")),w=document.getElementById("flow-model"),m=Array.from(document.querySelectorAll(".flow-right .flow-node"));if(!w)return;const a=p.getBoundingClientRect();o.setAttribute("viewBox",`0 0 ${a.width} ${a.height}`);const y=w.getBoundingClientRect(),B=y.left-a.left,S=y.right-a.left,M=y.top-a.top+y.height/2,C=(l,f,t,e)=>{const n=Math.max(32,Math.min(120,Math.abs(t-l)*.35)),d=l+n,c=f,r=t-n;return`M ${l} ${f} C ${d} ${c}, ${r} ${e}, ${t} ${e}`};s.forEach(l=>{const f=Number(l.getAttribute("data-group")||"1"),t=l.getBoundingClientRect(),e=t.right-a.left,n=t.top-a.top+t.height/2,r=C(e,n,B,M);o.appendChild(v(r,k(f),2))}),m.forEach((l,f)=>{const t=l.getBoundingClientRect(),e=S,n=M,d=t.left-a.left,c=t.top-a.top+t.height/2,r=C(e,n,d,c);o.appendChild(v(r,u[f]||u[0],2))})};new ResizeObserver(()=>b()).observe(p),window.addEventListener("resize",b,{passive:!0}),setTimeout(b,0),document.querySelector(".flow-model")?.addEventListener("click",()=>{})})();(function(){const o=document.getElementById("ds-builder"),p=document.getElementById("opt-pre-filter"),h=document.getElementById("opt-pre-transform"),v=document.getElementById("opt-transform"),k=document.getElementById("gen-code"),u=document.getElementById("copy-gen");if(!o||!k||!u)return;const b=[{id:"social",name:"Social Networks",group:1},{id:"chip",name:"Chip Design",group:2},{id:"circuits",name:"Electronic Circuits",group:2},{id:"sat",name:"SAT Solving",group:3},{id:"co",name:"Combinatorial Optimization",group:3},{id:"ar",name:"Algorithmic Reasoning",group:3},{id:"weather",name:"Weather Forecasting",group:4}],g=new Set,s=new Set(["easy","medium","hard"]);let w=null;g.add("ar");const m=t=>{switch(t){case"social":return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="3"/><path d="M6 19c0-2.5 3-4 6-4s6 1.5 6 4"/></svg>';case"chip":return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="7" y="7" width="10" height="10" rx="2"/><path d="M7 3v2M12 3v2M17 3v2M21 7h-2M21 12h-2M21 17h-2M3 7h2M3 12h2M3 17h2M7 21v-2M12 21v-2M17 21v-2"/></svg>';case"circuits":return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4.5" y="6.5" width="3" height="3" rx="0.5"/><rect x="16.5" y="6.5" width="3" height="3" rx="0.5"/><rect x="10.5" y="14.5" width="3" height="3" rx="0.5"/><path d="M7.5 8h6v4h3"/></svg>';case"sat":return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 7h6a5 5 0 0 1 0 10H6z"/><path d="M6 9H3M6 15H3M17 12h4"/></svg>';case"co":return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 4v16" stroke-dasharray="3 3"/><circle cx="6" cy="8" r="2"/><circle cx="6" cy="16" r="2"/><circle cx="18" cy="8" r="2"/><circle cx="18" cy="16" r="2"/><path d="M8 9l3 2"/><path d="M13 11l3 2"/><path d="M8 15l3-2"/><path d="M13 13l3-2"/></svg>';case"ar":return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="6" height="4" rx="1"/><rect x="15" y="3" width="6" height="4" rx="1"/><rect x="9" y="17" width="6" height="4" rx="1"/><path d="M6 7v4h12V7M12 13v4"/></svg>';case"weather":return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 16.5a4.5 4.5 0 0 0-2-8.5 5 5 0 0 0-9.6 1.5A3.5 3.5 0 1 0 5 16"/><path d="M8 19v2M12 18v3M16 19v2"/></svg>';default:return""}},a=()=>{const t=s.has("easy")?"checked":"",e=s.has("medium")?"checked":"",n=s.has("hard")?"checked":"";return`
        <div class="ds-sublist">
          <label class="toggle-row"><span class="name">easy</span><input type="checkbox" data-subset="easy" ${t} class="ds-check"/><span class="toggle" aria-hidden="true"></span></label>
          <label class="toggle-row"><span class="name">medium</span><input type="checkbox" data-subset="medium" ${e} class="ds-check"/><span class="toggle" aria-hidden="true"></span></label>
          <label class="toggle-row"><span class="name">hard</span><input type="checkbox" data-subset="hard" ${n} class="ds-check"/><span class="toggle" aria-hidden="true"></span></label>
        </div>`},y=()=>{const t=b.map(e=>{const n=g.has(e.id)?"checked":"",d=n?" selected":"",c=e.hasSubsets&&w===e.id&&g.has(e.id);return`
          <div>
            <label class="ds-row accent-g${e.group}${d}" data-ds="${e.id}">
              <span class="left"><span class="icon">${m(e.id)}</span><span class="name">${e.name}</span></span>
              <input type="checkbox" data-dsid="${e.id}" ${n} class="ds-check" />
              <span class="toggle" aria-hidden="true"></span>
            </label>
            ${e.hasSubsets?`<div class="ds-subwrap" data-open="${c?"true":"false"}">${a()}</div>`:""}
          </div>`}).join("");o.innerHTML=`
        <div class="ds-list" role="group" aria-label="Datasets selector">
          ${t}
        </div>`},B=t=>{switch(t){case"social":return["social_networks"];case"chip":return["chip_design"];case"circuits":return["electronic_circuits"];case"sat":return["sat_solving"];case"co":return["combinatorial_optimization"];case"weather":return["weather_forecasting"];case"ar":return["algorithmic_reasoning"];default:return[]}},S=()=>{const t=Array.from(g.values()).flatMap(B),e=t.length!==1,n=!!(p&&p.checked),d=!!(h&&h.checked),c=!!(v&&v.checked),r=[];if(r.push("import graphbench"),r.push(""),r.push("model = ...  # your torch model"),e){const i=t.length?`[
  `+t.map(x=>`'${x}'`).join(`,
  `)+`
]`:"[]";r.push(`dataset_name = ${i}`)}else{const i=t[0]?`'${t[0]}'`:"'social_networks'";r.push(`dataset_name = ${i}`)}if(n&&r.push("pre_filter = ...  # optional: PyG pre-filter matrix"),d&&r.push("pre_transform = ...  # optional: transform applied at load-time"),c&&r.push("transform = ...  # optional: transform applied at runtime"),r.push(""),e){const i=[];n&&i.push("pre_filter=pre_filter"),d&&i.push("pre_transform=pre_transform"),c&&i.push("transform=transform");const x=i.length?", "+i.join(", "):"";r.push(`datasets = [graphbench.loader(name${x}) for name in dataset_name]`),r.push("opt_models = [graphbench.optimize(model, d['train']) for d in datasets]"),r.push("results = [graphbench.evaluator(name, m, d['valid'], d['test']) for name, m, d in zip(dataset_name, opt_models, datasets)]")}else{const i=[];n&&i.push("pre_filter=pre_filter"),d&&i.push("pre_transform=pre_transform"),c&&i.push("transform=transform");const x=i.length?", "+i.join(", "):"";r.push(`dataset = graphbench.loader(dataset_name${x})`),r.push("opt_model = graphbench.optimize(model, dataset['train'])"),r.push("results = graphbench.evaluator(dataset_name, opt_model, dataset['valid'], dataset['test'])")}return r.join(`
`)},M=t=>t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),C=t=>{let e=M(t);return e=e.replace(/\b(import)\b/g,'<span class="kw">$1</span>'),e=e.replace(/\b(graphbench)\b/g,'<span class="ns">$1</span>'),e=e.replace(/\b(loader|optimize|evaluator)\b/g,'<span class="fn">$1</span>'),e=e.replace(/\b(model|dataset_name|datasets|dataset|opt_model|opt_models|results|name)\b/g,'<span class="var">$1</span>'),e=e.replace(/'([^']*)'/g,`<span class="str">'$1'</span>`),e=e.replace(/#([^\n]*)/g,'<span class="com">#$1</span>'),e},l=()=>{const t=S(),e=C(t);k.innerHTML=e,u.setAttribute("data-copy",t)};o.addEventListener("change",t=>{const e=t.target;if(!e||e.type!=="checkbox")return;const n=e.getAttribute("data-dsid"),d=e.getAttribute("data-subset");if(n){e.checked?g.add(n):g.delete(n);const c=e.closest(".ds-row");c&&c.classList.toggle("selected",e.checked),l();return}if(d){d==="easy"&&(e.checked?s.add("easy"):s.delete("easy")),d==="medium"&&(e.checked?s.add("medium"):s.delete("medium")),d==="hard"&&(e.checked?s.add("hard"):s.delete("hard")),f(),y(),l();return}});const f=()=>{s.size===0&&s.add("easy")};p&&p.addEventListener("change",l),h&&h.addEventListener("change",l),v&&v.addEventListener("change",l),u.addEventListener("click",async()=>{const t=u.getAttribute("data-copy")||"";try{await navigator.clipboard.writeText(t)}catch{}}),y(),f(),l()})();
