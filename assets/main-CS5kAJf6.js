import{r as F,e as R}from"./layout-BpFo-YI5.js";const O=document.querySelector("#app");O.innerHTML=F("home",`
  <!-- Hero -->
  <section class="hero hero-primary home-hero">
    <div class="container hero-grid">
      <div class="hero-left">
        <h1 class="hero-title"><span class="hero-brand">GraphBench:</span> Next-generation graph learning benchmarking</h1>
        <p class="hero-abstract">We present Graphbench, a comprehensive graph learning benchmark across <span class="hero-highlight">domains</span> and prediction <span class="hero-highlight">regimes</span>. GraphBench standardizes <span class="hero-highlight">evaluation</span> with consistent <span class="hero-highlight">splits</span>, <span class="hero-highlight">metrics</span>, and <span class="hero-highlight">out-of-distribution</span> checks, and includes a unified <span class="hero-highlight">hyperparameter tuning</span> framework. We also provide strong <span class="hero-highlight">baselines</span> with state-of-the-art message-passing and graph transformer models and easy <span class="hero-highlight">plug-and-play code</span> to get you started.</p>
        <p class="hero-subtext">Scroll down to learn more, explore our datasets or jump right in!</p>
        <div class="cta">
          <a href="./quickstart.html" class="btn btn-primary">Get Started</a>
          <a href="./datasets.html" class="btn btn-outline">Explore Datasets</a>
        </div>
      </div>
      <div class="hero-right" aria-hidden="true">
        <img src="./Graphland.svg" alt="Graph network visualization" class="hero-graphland" />
      </div>
    </div>
  </section>

  <!-- Explore datasets (interactive flow figure) -->
  <section class="section-white flow-slide home-offset" style="background:#fff;">
    <div class="container">

      <div class="flow-figure-shell">
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
              <a href="https://arxiv.org/" target="_blank" rel="noopener noreferrer" class="flow-node eval ev1" data-ev="splits"><span class="label">Evaluation Splits</span></a>
            </div>
            <div class="flow-item ev2" style="--accent:#821846"><span class="flow-bg1" aria-hidden="true"></span><span class="flow-bg2" aria-hidden="true"></span>
              <a href="https://arxiv.org/" target="_blank" rel="noopener noreferrer" class="flow-node eval ev2" data-ev="metrics"><span class="label">Evaluation Metrics</span></a>
            </div>
            <div class="flow-item ev3" style="--accent:#9E2235"><span class="flow-bg1" aria-hidden="true"></span><span class="flow-bg2" aria-hidden="true"></span>
              <a href="https://arxiv.org/" target="_blank" rel="noopener noreferrer" class="flow-node eval ev3" data-ev="tuning"><span class="label">Hyperparameter Tuning</span></a>
            </div>
            <div class="flow-item ev4" style="--accent:#AF3323"><span class="flow-bg1" aria-hidden="true"></span><span class="flow-bg2" aria-hidden="true"></span>
              <a href="https://arxiv.org/" target="_blank" rel="noopener noreferrer" class="flow-node eval ev4" data-ev="ood"><span class="label">OOD Generalization</span></a>
            </div>
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
          <div class="flow-cta"><a class="btn btn-outline" href="https://arxiv.org/" target="_blank" rel="noopener noreferrer">Learn more</a></div>
        </div>
      </div>

    </div>
  </section>

  <!-- GUI + Generated code -->
  <section id="builder" class="section-white builder-section home-offset" style="background:#fff;">
    <div class="container">
      <p class="builder-intro">Configure on the left. Code updates live on the right.</p>
      <div class="builder-grid">
        <aside class="builder-sidebar" aria-label="Configuration">
          <div class="side">
            <div class="side-head"><h3>Set up your custom GraphBench code.</h3></div>
            <div class="side-body" id="config-panel"></div>
          </div>
        </aside>

        <aside class="builder-right">
          <div class="builder-canvas code-card">
            <div class="code-wrap builder-code">
              <button class="copy-btn builder-copy-btn" data-copy="" aria-label="Copy generated code" title="Copy">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
              </button>
              <pre><code id="gen-code" class="code-manual"></code></pre>
            </div>
            <div class="builder-help">Copy and paste the code and you're ready to go.</div>
          </div>
        </aside>
      </div>
    </div>
    </div>
  </section>
`,"home-main");document.body.classList.remove("no-body-scroll");document.documentElement.classList.remove("no-root-scroll");const z=()=>{const c=window.innerWidth||document.documentElement.clientWidth,u=window.innerHeight||document.documentElement.clientHeight,y=c>=1e3&&u<=850;document.body.classList.toggle("home-hero-lock",y);const g=c>=1e3&&u>850;document.body.classList.toggle("home-hero-tall",g)};z();window.addEventListener("resize",z,{passive:!0});(function(){const c=document.getElementById("flow-svg"),u=document.getElementById("flow-figure");if(!c||!u)return;const y=u.parentElement;if(!y)return;let g=null,f=null;const M=()=>{if(g!==null&&f!==null)return;const p=u.getBoundingClientRect();!p.width||!p.height||(g=p.width,f=p.height,u.style.width=`${g}px`,u.style.height=`${f}px`,y.style.display="flex",y.style.alignItems="center",y.style.justifyContent="center",y.style.marginInline="auto",y.style.maxWidth=`${g}px`)},m=()=>{if(M(),g===null||f===null)return;const p=window.innerWidth||document.documentElement.clientWidth||g;let w=66;p<=1e3&&(w=70),p<=650&&(w=80),p<=400&&(w=90),y.style.width=`${w}vw`;const S=(y.getBoundingClientRect().width||g)/g,k=f*S;y.style.height=`${k}px`,u.style.transformOrigin="top center",u.style.transform=`scale(${S})`},v=p=>{switch(p){case"social":return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="3"/><path d="M6 19c0-2.5 3-4 6-4s6 1.5 6 4"/></svg>';case"chip":return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="7" y="7" width="10" height="10" rx="2"/><path d="M7 3v2M12 3v2M17 3v2M21 7h-2M21 12h-2M21 17h-2M3 7h2M3 12h2M3 17h2M7 21v-2M12 21v-2M17 21v-2"/></svg>';case"circuits":return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="10" y="2" width="4" height="2" rx="0.5"/><rect x="20" y="10" width="2" height="4" rx="0.5"/><rect x="10" y="20" width="4" height="2" rx="0.5"/><rect x="2" y="10" width="2" height="4" rx="0.5"/><path d="M4 12h7v2h2h5"/></svg>';case"sat":return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 7h6a5 5 0 0 1 0 10H6z"/><path d="M6 9H3M6 15H3M17 12h4"/></svg>';case"co":return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 4v16" stroke-dasharray="3 3"/><circle cx="6" cy="8" r="2"/><circle cx="6" cy="16" r="2"/><circle cx="18" cy="8" r="2"/><circle cx="18" cy="16" r="2"/><path d="M8 9l3 2"/><path d="M13 11l3 2"/><path d="M8 15l3-2"/><path d="M13 13l3-2"/></svg>';case"ar":return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="6" height="4" rx="1"/><rect x="15" y="3" width="6" height="4" rx="1"/><rect x="9" y="17" width="6" height="4" rx="1"/><path d="M6 7v4h12V7M12 13v4"/></svg>';case"weather":return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 16.5a4.5 4.5 0 0 0-2-8.5 5 5 0 0 0-9.6 1.5A3.5 3.5 0 1 0 5 16"/><path d="M8 19v2M12 18v3M16 19v2"/></svg>';default:return""}};document.querySelectorAll(".flow-left .flow-node").forEach(p=>{const w=p.getAttribute("data-id")||"",x=p.querySelector(".icon");x&&(x.innerHTML=v(w))});const A=(p,w,x=2)=>{const h=document.createElementNS("http://www.w3.org/2000/svg","path");return h.setAttribute("d",p),h.setAttribute("fill","none"),h.setAttribute("stroke",w),h.setAttribute("stroke-width",String(x)),h.setAttribute("stroke-linecap","round"),h.setAttribute("stroke-linejoin","round"),h.setAttribute("shape-rendering","geometricPrecision"),h},H=p=>getComputedStyle(document.documentElement).getPropertyValue(p===1?"--ds-g1":p===2?"--ds-g2":p===3?"--ds-g3":"--ds-g4").trim()||"#2b5bb8",_=["#4F064F","#821846","#9E2235","#AF3323"],C=()=>{for(m();c.firstChild;)c.removeChild(c.firstChild);const p=Array.from(document.querySelectorAll(".flow-left .flow-node")),w=document.getElementById("flow-model"),x=Array.from(document.querySelectorAll(".flow-right .flow-node"));if(!w)return;const h=u.getBoundingClientRect();c.setAttribute("viewBox",`0 0 ${h.width} ${h.height}`);const S=w.getBoundingClientRect(),k=S.left-h.left,E=S.right-h.left,L=S.top-h.top+S.height/2,j=(r,n,a,e)=>{const i=Math.max(32,Math.min(120,Math.abs(a-r)*.35)),o=r+i,l=n,d=a-i;return`M ${r} ${n} C ${o} ${l}, ${d} ${e}, ${a} ${e}`},t=window.innerWidth||document.documentElement.clientWidth||h.width;let s=2;t<=1e3&&(s=1.7),t<=720&&(s=1.4),t<=520&&(s=1.1),p.forEach(r=>{const n=Number(r.getAttribute("data-group")||"1"),a=r.getBoundingClientRect(),e=a.right-h.left,i=a.top-h.top+a.height/2,d=j(e,i,k,L);c.appendChild(A(d,H(n),s))}),x.forEach((r,n)=>{const a=r.getBoundingClientRect(),e=E,i=L,o=a.left-h.left,l=a.top-h.top+a.height/2,d=j(e,i,o,l);c.appendChild(A(d,_[n]||_[0],s))})};new ResizeObserver(()=>C()).observe(u),window.addEventListener("resize",C,{passive:!0}),setTimeout(C,0),document.querySelector(".flow-model")?.addEventListener("click",()=>{})})();(function(){const c=document.getElementById("config-panel"),u=document.getElementById("gen-code");if(!c||!u)return;const y=[{id:"social",name:"Social Networks"},{id:"chip",name:"Chip Design"},{id:"circuits",name:"Electronic Circuits"},{id:"sat",name:"SAT Solving"},{id:"co",name:"Combinatorial Optimization"},{id:"ar",name:"Algorithmic Reasoning",hasSubsets:!0},{id:"weather",name:"Weather Forecasting",hasResolution:!0}],g={social:["social_networks"],chip:["chip_design"],circuits:["electronic_circuits"],sat:["sat_solving"],co:["combinatorial_optimization"],ar:["algo_res_easy","algo_res_medium","algo_res_hard"],weather:["era5_64x32","era5_240x121"]},f=new Set,M=Object.fromEntries(Object.keys(g).map(t=>[t,new Set])),m=new Set,v=Object.fromEntries(Object.keys(g).map(t=>[t,{}])),A=new Set,H=t=>{switch(t){case"social":return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="3"/><path d="M6 19c0-2.5 3-4 6-4s6 1.5 6 4"/></svg>';case"chip":return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="7" y="7" width="10" height="10" rx="2"/><path d="M7 3v2M12 3v2M17 3v2M21 7h-2M21 12h-2M21 17h-2M3 7h2M3 12h2M3 17h2M7 21v-2M12 21v-2M17 21v-2"/></svg>';case"circuits":return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="10" y="2" width="4" height="2" rx="0.5"/><rect x="20" y="10" width="2" height="4" rx="0.5"/><rect x="10" y="20" width="4" height="2" rx="0.5"/><rect x="2" y="10" width="2" height="4" rx="0.5"/><path d="M4 12h7v2h2h5"/></svg>';case"sat":return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 7h6a5 5 0 0 1 0 10H6z"/><path d="M6 9H3M6 15H3M17 12h4"/></svg>';case"co":return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 4v16" stroke-dasharray="3 3"/><circle cx="6" cy="8" r="2"/><circle cx="6" cy="16" r="2"/><circle cx="18" cy="8" r="2"/><circle cx="18" cy="16" r="2"/><path d="M8 9l3 2"/><path d="M13 11l3 2"/><path d="M8 15l3-2"/><path d="M13 13l3-2"/></svg>';case"ar":return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="6" height="4" rx="1"/><rect x="15" y="3" width="6" height="4" rx="1"/><rect x="9" y="17" width="6" height="4" rx="1"/><path d="M6 7v4h12V7M12 13v4"/></svg>';case"weather":return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 16.5a4.5 4.5 0 0 0-2-8.5 5 5 0 0 0-9.6 1.5A3.5 3.5 0 1 0 5 16"/><path d="M8 19v2M12 18v3M16 19v2"/></svg>';default:return""}},_=t=>{switch(t){case"social":return"var(--ds-g1)";case"chip":case"circuits":return"var(--ds-g2)";case"sat":case"co":case"ar":return"var(--ds-g3)";case"weather":return"var(--ds-g4)";default:return"var(--text-2)"}},C=t=>{const s=f.has(t),r=g[t]||[],n=M[t]||new Set;return`<div class="side-sub">${r.map(e=>{const i=s&&n.has(e)?"checked":"",o=B(t,e),l=`sub_${t}_${e}`.replace(/[^a-zA-Z0-9_-]/g,"-");return`<div class="sub-row-container">
          <div class="sub-row">
            <input id="${l}" type="checkbox" data-sub-ds="${t}" data-sub="${e}" ${i}/>
            <label class="sub-name" for="${l}">
              <span class="sub-text">${e}</span>
              <button type="button" class="sub-plus-btn" data-sub-plus="${t}-${e}" aria-label="Add custom options for ${e}" title="Add options">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </button>
              <div class="sub-options" data-sub-opts="${t}-${e}" hidden>
                <button class="sub-opt-row" data-action="add-mask" data-sub-ds="${t}" data-sub="${e}">Add custom train/valid/test mask</button>
                <!-- future options go here -->
              </div>
            </label>
          </div>
          ${o}
        </div>`}).join("")}</div>`},B=(t,s)=>{const r=`${t}-${s}`,n=v[t]?.[s]||{train:80,valid:10,test:10};return A.has(r)?`
        <div class="split-panel" data-split-panel="${r}">
          <div class="split-header">Train/Valid/Test Mask
            <button type="button" class="split-remove-btn" data-remove-split="${r}" aria-label="Remove mask" title="Remove">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            </button>
          </div>
          <div class="split-slider-container">
            <div class="split-slider" data-split-key="${r}">
              <div class="split-track">
                <div class="split-segment train" style="left: 0%; width: ${n.train}%"></div>
                <div class="split-segment valid" style="left: ${n.train}%; width: ${n.valid}%"></div>
                <div class="split-segment test" style="left: ${n.train+n.valid}%; width: ${n.test}%"></div>
              </div>
              <div class="split-handles">
                <div class="split-handle" data-handle="p1" style="left: ${n.train}%"></div>
                <div class="split-handle" data-handle="p2" style="left: ${n.train+n.valid}%"></div>
              </div>
            </div>
            <div class="split-labels">
              <span class="split-label train">Train: ${n.train}%</span>
              <span class="split-label valid">Valid: ${n.valid}%</span>
              <span class="split-label test">Test: ${n.test}%</span>
            </div>
          </div>
        </div>
      `:""},p=()=>{const t='<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"></polyline></svg>',s=y.map(e=>{const i=f.has(e.id),o=m.has(e.id),l=(g[e.id]||[]).length>0,d=l?C(e.id):"";return`
          <div class="ds-item" data-ds="${e.id}">
            <div class="side-row ds-main" data-dsrow>
              <label class="side-check"><input type="checkbox" data-select="${e.id}" ${i?"checked":""}/></label>
              <span class="ds-icon" style="color:${_(e.id)}">${H(e.id)}</span>
              <span class="ds-name">${e.name}</span>
              ${l?`<button class="ds-disclose" data-ds-toggle="${e.id}" aria-expanded="${o}" aria-label="Toggle options">${t}</button>`:'<span class="ds-disclose ds-space" aria-hidden="true"></span>'}
            </div>
            ${l?`<div class="ds-subwrap" data-open="${o}"><div class="ds-sub">${d}</div></div>`:""}
          </div>`}).join(""),r=document.getElementById("opt-pre-filter"),n=document.getElementById("opt-pre-transform"),a=document.getElementById("opt-transform");c.innerHTML=`
        <div class="side-group" aria-label="Your model options">
          <div class="side-collapsible model-opts" data-open="false" id="model-coll">
            <div class="head" data-coll-toggle="model-coll">
              <span class="label">Your model options</span>
              <button class="ds-disclose" data-coll-toggle="model-coll" aria-expanded="false" aria-label="Toggle model options">${t}</button>
            </div>
            <div class="body">
              <div class="opts-intro">I want to use my custom...</div>
              <label class="side-row"><input type="checkbox" id="opt-pre-filter" ${r&&r.checked?"checked":""}/> <span>pre_filter</span></label>
              <label class="side-row"><input type="checkbox" id="opt-pre-transform" ${n&&n.checked?"checked":""}/> <span>pre_transform</span></label>
              <label class="side-row"><input type="checkbox" id="opt-transform" ${a&&a.checked?"checked":""}/> <span>transform</span></label>
            </div>
          </div>
        </div>
        <div class="side-group" aria-label="Datasets">
          <div class="side-label">Datasets</div>
          <div class="side-list">${s}</div>
        </div>`},w=()=>Array.from(f.values()).flatMap(s=>Array.from(M[s]||[])),x=()=>{const t=w(),s=t.length!==1,r=!!document.getElementById("opt-pre-filter")?.checked,n=!!document.getElementById("opt-pre-transform")?.checked,a=!!document.getElementById("opt-transform")?.checked,e=[];if(e.push("import graphbench"),e.push(""),e.push("model = ...  # your torch model"),s){const o=t.length?`[
  `+t.map(l=>`'${l}'`).join(`,
  `)+`
]`:"[]";e.push(`dataset_name = ${o}`)}else{const o=t[0]?`'${t[0]}'`:"'social_networks'";e.push(`dataset_name = ${o}`)}if(r&&e.push("pre_filter = ...  # optional: PyG pre-filter matrix"),n&&e.push("pre_transform = ...  # optional: transform applied at load-time"),a&&e.push("transform = ...  # optional: transform applied at runtime"),t.some(o=>{const l=Object.entries(g).find(([b,$])=>$.includes(o));if(!l)return!1;const[d]=l;return d&&v[d]?.[o]})&&(e.push(""),e.push("# Custom train/valid/test splits"),t.forEach(o=>{const l=Object.entries(g).find(([b,$])=>$.includes(o));if(!l)return;const[d]=l;if(d&&v[d]?.[o]){const b=v[d][o];e.push(`split_${o.replace(/[^a-zA-Z0-9]/g,"_")} = (${b.train/100}, ${b.valid/100}, ${b.test/100})  # ${o}`)}})),e.push(""),s){const o=[];r&&o.push("pre_filter=pre_filter"),n&&o.push("pre_transform=pre_transform"),a&&o.push("transform=transform");const l=o.length?", "+o.join(", "):"";e.push(`datasets = [graphbench.loader(name${l}) for name in dataset_name]`),e.push("opt_models = [graphbench.optimize(model, d['train']) for d in datasets]"),e.push("results = [graphbench.evaluator(name, m, d['valid'], d['test']) for name, m, d in zip(dataset_name, opt_models, datasets)]")}else{const o=[];r&&o.push("pre_filter=pre_filter"),n&&o.push("pre_transform=pre_transform"),a&&o.push("transform=transform");const l=o.length?", "+o.join(", "):"";e.push(`dataset = graphbench.loader(dataset_name${l})`),e.push("opt_model = graphbench.optimize(model, dataset['train'])"),e.push("results = graphbench.evaluator(dataset_name, opt_model, dataset['valid'], dataset['test'])")}return e.join(`
`)},h=t=>t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),S=t=>{let s=h(t);return s=s.replace(/\b(import)\b/g,'<span class="kw">$1</span>'),s=s.replace(/\b(graphbench)\b/g,'<span class="ns">$1</span>'),s=s.replace(/\b(loader|optimize|evaluator)\b/g,'<span class="fn">$1</span>'),s=s.replace(/\b(model|dataset_name|datasets|dataset|opt_model|opt_models|results|name)\b/g,'<span class="var">$1</span>'),s=s.replace(/'([^']*)'/g,`<span class="str">'$1'</span>`),s=s.replace(/#([^\n]*)/g,(r,n)=>'<span class="com">#'+String(n).replace(/<[^>]+>/g,"")+"</span>"),s=s.replace(/<span class=\"com\">#([^<]*)\bgraphbench\b([^<]*)<\/span>/g,'<span class="com">#$1</span><span class="ns">graphbench</span><span class="com">$2</span>'),s},k=()=>{const t=x(),s=S(t);u.innerHTML=s;const r=document.querySelector(".builder-copy-btn");r&&r.setAttribute("data-copy",t)},E=()=>{c.querySelectorAll(".ds-item").forEach(s=>{const r=s.getAttribute("data-ds")||"",n=s.querySelector(".ds-subwrap"),a=s.querySelector("[data-ds-toggle]"),e=m.has(r);n&&n.setAttribute("data-open",e?"true":"false"),a&&a.setAttribute("aria-expanded",e.toString());const i=s.querySelectorAll("input[data-sub]"),o=f.has(r),l=M[r]||new Set;i.forEach(b=>{const $=b.getAttribute("data-sub")||"";b.checked=o&&l.has($)});const d=s.querySelector("input[data-select]");d&&d.getAttribute("data-select")===r&&(d.checked=f.has(r))})};c.addEventListener("change",t=>{const s=t.target;if(!s)return;const r=s.getAttribute("data-select"),n=s.getAttribute("data-sub-ds"),a=s.getAttribute("data-sub"),e=s.getAttribute("id");if(r){s.checked?(f.add(r),M[r]=new Set(g[r]||[]),m.clear(),m.add(r)):(f.delete(r),M[r].clear(),m.delete(r)),E(),k();return}if(n&&a){const i=M[n]||new Set;s.checked?(i.add(a),f.add(n)):(i.delete(a),i.size===0&&f.delete(n)),M[n]=i,m.add(n),E(),k();return}if(e==="opt-pre-filter"||e==="opt-pre-transform"||e==="opt-transform"){k();return}}),c.addEventListener("click",t=>{const s=t.target.closest("[data-sub-plus]");if(s){t.preventDefault(),t.stopPropagation();const i=s.getAttribute("data-sub-plus")||"";if(i){c.querySelectorAll(".sub-options").forEach(l=>{l.hidden=!0});const o=c.querySelector(`[data-sub-opts="${i}"]`);o&&(o.hidden=!1)}return}const r=t.target.closest("button");if(!r||r.getAttribute("data-mode"))return;const a=t.target.closest("[data-coll-toggle]");if(a){const i=a.getAttribute("data-coll-toggle")||"",o=document.getElementById(i);if(o){const l=o.getAttribute("data-open")==="true";o.setAttribute("data-open",l?"false":"true");const d=o.querySelector(".head [data-coll-toggle]");d&&d.setAttribute("aria-expanded",(!l).toString())}return}const e=r.getAttribute("data-ds-toggle");if(e){!m.has(e)?(m.clear(),m.add(e)):m.delete(e),E();return}}),c.addEventListener("click",t=>{const s=t.target.closest(".side-row[data-dsrow]");if(!s)return;const r=t.target.closest('input[type="checkbox"]'),n=t.target.closest("[data-ds-toggle]");if(r||n)return;const e=s.closest(".ds-item")?.getAttribute("data-ds")||"";if(!e)return;!m.has(e)?(m.clear(),m.add(e)):m.delete(e),E()}),c.addEventListener("click",t=>{const s=t.target.closest("#model-coll");if(!s)return;const r=t.target.closest("#model-coll .head"),n=t.target.closest("#model-coll [data-coll-toggle]"),a=t.target.closest("#model-coll .body input, #model-coll .body button, #model-coll .body label");if(r||!a&&!n&&t.target.closest("#model-coll")){const e=s.getAttribute("data-open")==="true";s.setAttribute("data-open",e?"false":"true");const i=s.querySelector(".head [data-coll-toggle]");i&&i.setAttribute("aria-expanded",(!e).toString())}}),c.addEventListener("click",t=>{const s=t.target.closest(".sub-opt-row");if(!s)return;if(s.getAttribute("data-action")==="add-mask"){const n=s.getAttribute("data-sub-ds")||"",a=s.getAttribute("data-sub")||"",e=`${n}-${a}`;A.add(e);const i=c.querySelector(`[data-sub-opts="${e}"]`);i&&(i.hidden=!0),p(),k();return}}),c.addEventListener("click",t=>{const s=t.target.closest("[data-remove-split]");if(!s)return;t.preventDefault();const r=s.getAttribute("data-remove-split")||"";if(!r)return;const[n,a]=r.split("-");A.delete(r),v[n]&&v[n][a]&&delete v[n][a],p(),k()});const L=t=>{const[s,r]=t.split("-"),n=v[s]?.[r];if(!n)return;const a=document.querySelector(`.split-panel[data-split-panel="${t}"]`);if(!a)return;const e=n.train,i=n.train+n.valid,o=a.querySelector(".split-segment.train"),l=a.querySelector(".split-segment.valid"),d=a.querySelector(".split-segment.test");o&&(o.style.left="0%",o.style.width=`${n.train}%`),l&&(l.style.left=`${e}%`,l.style.width=`${n.valid}%`),d&&(d.style.left=`${i}%`,d.style.width=`${n.test}%`);const b=a.querySelector('.split-handle[data-handle="p1"]'),$=a.querySelector('.split-handle[data-handle="p2"]');b&&(b.style.left=`${e}%`),$&&($.style.left=`${i}%`);const q=a.querySelector(".split-label.train"),I=a.querySelector(".split-label.valid"),T=a.querySelector(".split-label.test");q&&(q.textContent=`Train: ${n.train}%`),I&&(I.textContent=`Valid: ${n.valid}%`),T&&(T.textContent=`Test: ${n.test}%`)},j=(t,s,r)=>{const[n,a]=t.split("-");v[n]||(v[n]={}),v[n][a]||(v[n][a]={train:80,valid:10,test:10});const e=v[n][a];let i=e.train,o=e.train+e.valid;const l=Math.max(0,Math.min(100,Math.round(r)));s==="p1"?i=Math.max(0,Math.min(l,o)):o=Math.max(i,Math.min(l,100));const d=i,b=Math.max(0,o-i),$=Math.max(0,100-o);v[n][a]={train:d,valid:b,test:$},L(t),k()};c.addEventListener("mousedown",t=>{const s=t.target.closest(".split-handle");if(!s)return;t.preventDefault();const r=s.closest(".split-slider");if(!r)return;const n=r.getAttribute("data-split-key")||"",a=s.getAttribute("data-handle"),e=r.getBoundingClientRect(),i=d=>{const b=d-e.left,$=Math.max(0,Math.min(100,b/e.width*100));j(n,a,$)},o=d=>i(d.clientX),l=()=>{document.removeEventListener("mousemove",o),document.removeEventListener("mouseup",l)};document.addEventListener("mousemove",o),document.addEventListener("mouseup",l)}),p(),k()})();(()=>{const c=document.querySelector(".hero.hero-primary"),u=c?.querySelector(".hero-left");if(!c||!u)return;const y=c.querySelector(".arrow-btn.arrow-down"),g=document.getElementById("site-header"),f=window.matchMedia("(prefers-reduced-motion: reduce)"),M=window.matchMedia("(max-width: 980px)"),m=window.matchMedia("(max-width: 1000px)"),v=c.querySelector(".hero-right"),A=.65,H=1,_=1.15,C=.86;let B=(()=>{const a=Number.parseFloat(getComputedStyle(u).getPropertyValue("--hero-text-scale"));return Number.isFinite(a)&&a>0?a:1})(),p=null,w=!1,x=!1;const h=a=>{const i=(v?getComputedStyle(v).display!=="none"&&!m.matches:!m.matches)?H:_;return a?i:Math.min(1,i)},S=(a,e)=>{const i=h(e),o=Math.min(A,i);return Math.max(o,Math.min(i,a))},k=()=>{if(g)return g.offsetHeight;const a=getComputedStyle(document.documentElement).getPropertyValue("--header-h"),e=Number.parseFloat(a);return Number.isFinite(e)?e:64},E=()=>window.visualViewport?window.visualViewport.height:typeof window.innerHeight=="number"?window.innerHeight:document.documentElement.clientHeight,L=()=>{const a=y?.offsetHeight??0,e=a?a+56:96;return Math.max(0,E()-k()-e)},j=()=>{const a=L();if(!a)return;const e=u.scrollHeight;if(!e)return;const i=e/(B||1);if(!i)return;const o=!M.matches,l=S(a/i*C,o);Math.abs(l-B)<.02||(B=l,w=!0,u.style.setProperty("--hero-text-scale",l.toFixed(3)),requestAnimationFrame(()=>{w=!1,x&&(x=!1,t())}))},t=()=>{if(!f.matches){if(w){x=!0;return}p===null&&(p=requestAnimationFrame(()=>{p=null,j()}))}};t();const s=()=>t();window.addEventListener("resize",s);const r=a=>{a&&(typeof a.addEventListener=="function"?a.addEventListener("change",s):typeof a.addListener=="function"&&a.addListener(s))};r(M),r(f),r(m);const n=new ResizeObserver(()=>t());n.observe(c),n.observe(u),v&&n.observe(v)})();R();
