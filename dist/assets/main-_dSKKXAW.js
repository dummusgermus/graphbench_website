import{r as j}from"./layout-dJMx-EO5.js";const I=document.querySelector("#app");I.innerHTML=j("home",`
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
      <div class="arrow-caption arrow-caption-down">What's in it?</div>
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
      <div class="arrow-caption arrow-caption-up">Home</div>
      <button aria-label="Scroll down" class="arrow-btn arrow-down" data-direction="down" title="Scroll down">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
      <div class="arrow-caption arrow-caption-down">Quickstart</div>
    </div>
  </section>

  <!-- Slide 3: GUI + Generated code -->
  <section class="snap-section section-white builder-section" style="background:#fff;">
    <div class="container">
      <p class="builder-intro">Configure on the left. Code updates live on the right.</p>
      <div class="builder-grid">
        <aside class="builder-sidebar" aria-label="Configuration">
          <div class="side">
            <div class="side-head"><h3>Set up your custom GraphCast code.</h3></div>
            <div class="side-body" id="config-panel"></div>
          </div>
        </aside>

        <aside class="builder-right">
          <div class="builder-canvas code-card">
            <div class="code-wrap builder-code">
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
      <div class="arrow-caption arrow-caption-up arrow-caption-left">What's in it?</div>
    </div>
  </section>
`,"snap-container");document.body.classList.add("no-body-scroll");document.documentElement.classList.add("no-root-scroll");const C=u=>{const m=u.getAttribute("data-direction")||"down",S=document.getElementById("main"),f=Array.from(document.querySelectorAll(".snap-section")),v=S.scrollTop,h=f.reduce((g,c,r)=>{const w=c.offsetTop,n=Math.abs(w-v);return n<g.dist?{idx:r,dist:n}:g},{idx:0,dist:Number.POSITIVE_INFINITY}).idx,l=m==="up"?Math.max(0,h-1):Math.min(f.length-1,h+1);f[l].scrollIntoView({behavior:"smooth",block:"start"})},B=document.getElementById("down-arrow");B&&B.addEventListener("click",()=>C(B));document.querySelectorAll(".arrow-btn[data-direction]").forEach(u=>{u.addEventListener("click",()=>C(u))});(function(){const u=document.getElementById("main");if(!u)return;let m=!1;const S=(l,g,c)=>{let r=l;for(;r&&r!==u;){const w=window.getComputedStyle(r),n=w.overflowY,k=w.overflowX,A=r.scrollHeight>r.clientHeight&&(n==="auto"||n==="scroll"||n==="overlay"),E=r.scrollWidth>r.clientWidth&&(k==="auto"||k==="scroll"||k==="overlay");if(A&&c!==0){const b=c>0&&r.scrollTop+r.clientHeight<r.scrollHeight,y=c<0&&r.scrollTop>0;if(b||y)return!0}if(E&&g!==0){const b=g>0&&r.scrollLeft+r.clientWidth<r.scrollWidth,y=g<0&&r.scrollLeft>0;if(b||y)return!0}r=r.parentElement}return!1},f=l=>{const g=document.createElement("button");g.setAttribute("data-direction",l),C(g)},v=l=>{const g=l.target;if(g&&g.closest(".builder-right"))return;let c=l.deltaX||0,r=l.deltaY||0;if(c===0&&l.shiftKey&&r!==0&&(c=r,r=0),S(g,c,r)||(l.preventDefault(),m)||r===0)return;const w=r>0?"down":"up";m=!0,f(w),setTimeout(()=>{m=!1},650)};u.addEventListener("wheel",v,{passive:!1});const h=document.getElementById("site-header");h&&h.addEventListener("wheel",v,{passive:!1})})();(function(){const u=document.getElementById("flow-svg"),m=document.getElementById("flow-figure");if(!u||!m)return;const S=c=>{switch(c){case"social":return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="3"/><path d="M6 19c0-2.5 3-4 6-4s6 1.5 6 4"/></svg>';case"chip":return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="7" y="7" width="10" height="10" rx="2"/><path d="M7 3v2M12 3v2M17 3v2M21 7h-2M21 12h-2M21 17h-2M3 7h2M3 12h2M3 17h2M7 21v-2M12 21v-2M17 21v-2"/></svg>';case"circuits":return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4.5" y="6.5" width="3" height="3" rx="0.5"/><rect x="16.5" y="6.5" width="3" height="3" rx="0.5"/><rect x="10.5" y="14.5" width="3" height="3" rx="0.5"/><path d="M7.5 8h6v4h3"/></svg>';case"sat":return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 7h6a5 5 0 0 1 0 10H6z"/><path d="M6 9H3M6 15H3M17 12h4"/></svg>';case"co":return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 4v16" stroke-dasharray="3 3"/><circle cx="6" cy="8" r="2"/><circle cx="6" cy="16" r="2"/><circle cx="18" cy="8" r="2"/><circle cx="18" cy="16" r="2"/><path d="M8 9l3 2"/><path d="M13 11l3 2"/><path d="M8 15l3-2"/><path d="M13 13l3-2"/></svg>';case"ar":return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="6" height="4" rx="1"/><rect x="15" y="3" width="6" height="4" rx="1"/><rect x="9" y="17" width="6" height="4" rx="1"/><path d="M6 7v4h12V7M12 13v4"/></svg>';case"weather":return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 16.5a4.5 4.5 0 0 0-2-8.5 5 5 0 0 0-9.6 1.5A3.5 3.5 0 1 0 5 16"/><path d="M8 19v2M12 18v3M16 19v2"/></svg>';default:return""}};document.querySelectorAll(".flow-left .flow-node").forEach(c=>{const r=c.getAttribute("data-id")||"",w=c.querySelector(".icon");w&&(w.innerHTML=S(r))});const f=(c,r,w=2)=>{const n=document.createElementNS("http://www.w3.org/2000/svg","path");return n.setAttribute("d",c),n.setAttribute("fill","none"),n.setAttribute("stroke",r),n.setAttribute("stroke-width",String(w)),n.setAttribute("stroke-linecap","round"),n.setAttribute("stroke-linejoin","round"),n.setAttribute("shape-rendering","geometricPrecision"),n},v=c=>getComputedStyle(document.documentElement).getPropertyValue(c===1?"--ds-g1":c===2?"--ds-g2":c===3?"--ds-g3":"--ds-g4").trim()||"#2b5bb8",h=["#4F064F","#821846","#9E2235","#AF3323"],l=()=>{for(;u.firstChild;)u.removeChild(u.firstChild);const c=Array.from(document.querySelectorAll(".flow-left .flow-node")),r=document.getElementById("flow-model"),w=Array.from(document.querySelectorAll(".flow-right .flow-node"));if(!r)return;const n=m.getBoundingClientRect();u.setAttribute("viewBox",`0 0 ${n.width} ${n.height}`);const k=r.getBoundingClientRect(),A=k.left-n.left,E=k.right-n.left,b=k.top-n.top+k.height/2,y=(s,e,a,d)=>{const i=Math.max(32,Math.min(120,Math.abs(a-s)*.35)),t=s+i,o=e,p=a-i;return`M ${s} ${e} C ${t} ${o}, ${p} ${d}, ${a} ${d}`};c.forEach(s=>{const e=Number(s.getAttribute("data-group")||"1"),a=s.getBoundingClientRect(),d=a.right-n.left,i=a.top-n.top+a.height/2,p=y(d,i,A,b);u.appendChild(f(p,v(e),2))}),w.forEach((s,e)=>{const a=s.getBoundingClientRect(),d=E,i=b,t=a.left-n.left,o=a.top-n.top+a.height/2,p=y(d,i,t,o);u.appendChild(f(p,h[e]||h[0],2))})};new ResizeObserver(()=>l()).observe(m),window.addEventListener("resize",l,{passive:!0}),setTimeout(l,0),document.querySelector(".flow-model")?.addEventListener("click",()=>{})})();(function(){const u=document.getElementById("config-panel"),m=document.getElementById("gen-code");if(!u||!m)return;const S=[{id:"social",name:"Social Networks"},{id:"chip",name:"Chip Design"},{id:"circuits",name:"Electronic Circuits"},{id:"sat",name:"SAT Solving"},{id:"co",name:"Combinatorial Optimization"},{id:"ar",name:"Algorithmic Reasoning",hasSubsets:!0},{id:"weather",name:"Weather Forecasting",hasResolution:!0}],f={social:["social_networks"],chip:["chip_design"],circuits:["electronic_circuits"],sat:["sat_solving"],co:["combinatorial_optimization"],ar:["algo_res_easy","algo_res_medium","algo_res_hard"],weather:["era5_64x32","era5_240x121"]},v=new Set,h=Object.fromEntries(Object.keys(f).map(s=>[s,new Set])),l=new Set,g=s=>{switch(s){case"social":return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="3"/><path d="M6 19c0-2.5 3-4 6-4s6 1.5 6 4"/></svg>';case"chip":return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="7" y="7" width="10" height="10" rx="2"/><path d="M7 3v2M12 3v2M17 3v2M21 7h-2M21 12h-2M21 17h-2M3 7h2M3 12h2M3 17h2M7 21v-2M12 21v-2M17 21v-2"/></svg>';case"circuits":return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4.5" y="6.5" width="3" height="3" rx="0.5"/><rect x="16.5" y="6.5" width="3" height="3" rx="0.5"/><rect x="10.5" y="14.5" width="3" height="3" rx="0.5"/><path d="M7.5 8h6v4h3"/></svg>';case"sat":return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 7h6a5 5 0 0 1 0 10H6z"/><path d="M6 9H3M6 15H3M17 12h4"/></svg>';case"co":return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 4v16" stroke-dasharray="3 3"/><circle cx="6" cy="8" r="2"/><circle cx="6" cy="16" r="2"/><circle cx="18" cy="8" r="2"/><circle cx="18" cy="16" r="2"/><path d="M8 9l3 2"/><path d="M13 11l3 2"/><path d="M8 15l3-2"/><path d="M13 13l3-2"/></svg>';case"ar":return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="6" height="4" rx="1"/><rect x="15" y="3" width="6" height="4" rx="1"/><rect x="9" y="17" width="6" height="4" rx="1"/><path d="M6 7v4h12V7M12 13v4"/></svg>';case"weather":return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 16.5a4.5 4.5 0 0 0-2-8.5 5 5 0 0 0-9.6 1.5A3.5 3.5 0 1 0 5 16"/><path d="M8 19v2M12 18v3M16 19v2"/></svg>';default:return""}},c=s=>{switch(s){case"social":return"var(--ds-g1)";case"chip":case"circuits":return"var(--ds-g2)";case"sat":case"co":case"ar":return"var(--ds-g3)";case"weather":return"var(--ds-g4)";default:return"var(--text-2)"}},r=s=>{const e=v.has(s),a=f[s]||[],d=h[s]||new Set;return`<div class="side-sub">${a.map(t=>{const o=e&&d.has(t)?"checked":"";return`<label class="sub-row"><input type="checkbox" data-sub-ds="${s}" data-sub="${t}" ${o}/> <span class="sub-name">${t}</span></label>`}).join("")}</div>`},w=()=>{const s='<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"></polyline></svg>',e=S.map(t=>{const o=v.has(t.id),p=l.has(t.id),x=(f[t.id]||[]).length>0,M=x?r(t.id):"";return`
          <div class="ds-item" data-ds="${t.id}">
            <div class="side-row ds-main" data-dsrow>
              <label class="side-check"><input type="checkbox" data-select="${t.id}" ${o?"checked":""}/></label>
              <span class="ds-icon" style="color:${c(t.id)}">${g(t.id)}</span>
              <span class="ds-name">${t.name}</span>
              ${x?`<button class="ds-disclose" data-ds-toggle="${t.id}" aria-expanded="${p}" aria-label="Toggle options">${s}</button>`:'<span class="ds-disclose ds-space" aria-hidden="true"></span>'}
            </div>
            ${x?`<div class="ds-subwrap" data-open="${p}"><div class="ds-sub">${M}</div></div>`:""}
          </div>`}).join(""),a=document.getElementById("opt-pre-filter"),d=document.getElementById("opt-pre-transform"),i=document.getElementById("opt-transform");u.innerHTML=`
        <div class="side-group" aria-label="Your model options">
          <div class="side-collapsible model-opts" data-open="false" id="model-coll">
            <div class="head" data-coll-toggle="model-coll">
              <span class="label">Your model options</span>
              <button class="ds-disclose" data-coll-toggle="model-coll" aria-expanded="false" aria-label="Toggle model options">${s}</button>
            </div>
            <div class="body">
              <div class="opts-intro">I want to use my custom...</div>
              <label class="side-row"><input type="checkbox" id="opt-pre-filter" ${a&&a.checked?"checked":""}/> <span>pre_filter</span></label>
              <label class="side-row"><input type="checkbox" id="opt-pre-transform" ${d&&d.checked?"checked":""}/> <span>pre_transform</span></label>
              <label class="side-row"><input type="checkbox" id="opt-transform" ${i&&i.checked?"checked":""}/> <span>transform</span></label>
            </div>
          </div>
        </div>
        <div class="side-group" aria-label="Datasets">
          <div class="side-label">Datasets</div>
          <div class="side-list">${e}</div>
        </div>`},n=()=>Array.from(v.values()).flatMap(e=>Array.from(h[e]||[])),k=()=>{const s=n(),e=s.length!==1,a=!!document.getElementById("opt-pre-filter")?.checked,d=!!document.getElementById("opt-pre-transform")?.checked,i=!!document.getElementById("opt-transform")?.checked,t=[];if(t.push("import graphbench"),t.push(""),t.push("model = ...  # your torch model"),e){const o=s.length?`[
  `+s.map(p=>`'${p}'`).join(`,
  `)+`
]`:"[]";t.push(`dataset_name = ${o}`)}else{const o=s[0]?`'${s[0]}'`:"'social_networks'";t.push(`dataset_name = ${o}`)}if(a&&t.push("pre_filter = ...  # optional: PyG pre-filter matrix"),d&&t.push("pre_transform = ...  # optional: transform applied at load-time"),i&&t.push("transform = ...  # optional: transform applied at runtime"),t.push(""),e){const o=[];a&&o.push("pre_filter=pre_filter"),d&&o.push("pre_transform=pre_transform"),i&&o.push("transform=transform");const p=o.length?", "+o.join(", "):"";t.push(`datasets = [graphbench.loader(name${p}) for name in dataset_name]`),t.push("opt_models = [graphbench.optimize(model, d['train']) for d in datasets]"),t.push("results = [graphbench.evaluator(name, m, d['valid'], d['test']) for name, m, d in zip(dataset_name, opt_models, datasets)]")}else{const o=[];a&&o.push("pre_filter=pre_filter"),d&&o.push("pre_transform=pre_transform"),i&&o.push("transform=transform");const p=o.length?", "+o.join(", "):"";t.push(`dataset = graphbench.loader(dataset_name${p})`),t.push("opt_model = graphbench.optimize(model, dataset['train'])"),t.push("results = graphbench.evaluator(dataset_name, opt_model, dataset['valid'], dataset['test'])")}return t.join(`
`)},A=s=>s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),E=s=>{let e=A(s);return e=e.replace(/\b(import)\b/g,'<span class="kw">$1</span>'),e=e.replace(/\b(graphbench)\b/g,'<span class="ns">$1</span>'),e=e.replace(/\b(loader|optimize|evaluator)\b/g,'<span class="fn">$1</span>'),e=e.replace(/\b(model|dataset_name|datasets|dataset|opt_model|opt_models|results|name)\b/g,'<span class="var">$1</span>'),e=e.replace(/'([^']*)'/g,`<span class="str">'$1'</span>`),e=e.replace(/#([^\n]*)/g,'<span class="com">#$1</span>'),e},b=()=>{const s=k(),e=E(s);m.innerHTML=e},y=()=>{u.querySelectorAll(".ds-item").forEach(e=>{const a=e.getAttribute("data-ds")||"",d=e.querySelector(".ds-subwrap"),i=e.querySelector("[data-ds-toggle]"),t=l.has(a);d&&d.setAttribute("data-open",t?"true":"false"),i&&i.setAttribute("aria-expanded",t.toString());const o=e.querySelectorAll("input[data-sub]"),p=v.has(a),x=h[a]||new Set;o.forEach($=>{const _=$.getAttribute("data-sub")||"";$.checked=p&&x.has(_)});const M=e.querySelector("input[data-select]");M&&M.getAttribute("data-select")===a&&(M.checked=v.has(a))})};u.addEventListener("change",s=>{const e=s.target;if(!e)return;const a=e.getAttribute("data-select"),d=e.getAttribute("data-sub-ds"),i=e.getAttribute("data-sub"),t=e.getAttribute("id");if(a){e.checked?(v.add(a),h[a]=new Set(f[a]||[]),l.clear(),l.add(a)):(v.delete(a),h[a].clear(),l.delete(a)),y(),b();return}if(d&&i){const o=h[d]||new Set;e.checked?o.add(i):o.delete(i),h[d]=o,y(),b();return}if(t==="opt-pre-filter"||t==="opt-pre-transform"||t==="opt-transform"){b();return}}),u.addEventListener("click",s=>{const e=s.target.closest("button");if(!e||e.getAttribute("data-mode"))return;const d=s.target.closest("[data-coll-toggle]");if(d){const o=d.getAttribute("data-coll-toggle")||"",p=document.getElementById(o);if(p){const x=p.getAttribute("data-open")==="true";p.setAttribute("data-open",x?"false":"true");const M=p.querySelector(".head [data-coll-toggle]");M&&M.setAttribute("aria-expanded",(!x).toString())}return}const i=e.getAttribute("data-ds-toggle");if(i){!l.has(i)?(l.clear(),l.add(i)):l.delete(i),y();return}const t=e.getAttribute("data-sub-plus")||"";if(t){const o=u.querySelector(`[data-sub-opt="${t}"]`),p=e.getAttribute("aria-expanded")==="true";o&&(o.hidden=p,e.setAttribute("aria-expanded",(!p).toString()));return}}),w(),b()})();
