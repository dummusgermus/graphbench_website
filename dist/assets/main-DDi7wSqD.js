import{r as D,e as F}from"./layout-HE2mcCM1.js";const R=document.querySelector("#app");R.innerHTML=D("home",`
  <!-- Slide 1: Hero -->
  <section class="snap-section hero hero-primary">
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
      <div class="hero-right" aria-hidden="true",z-index: -1000;>
        <img src="./Graphland.svg" alt="Graph network visualization" class="hero-graphland" />
      </div>
      <div class="arrow-background"></div>
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
  <section id="builder" class="snap-section section-white builder-section" style="background:#fff;">
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
      <button aria-label="Scroll up" class="arrow-btn arrow-up" data-direction="up" title="Scroll up">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      </button>
    </div>
  </section>
`,"snap-container");document.body.classList.add("no-body-scroll");document.documentElement.classList.add("no-root-scroll");const L=c=>{const $=c.getAttribute("data-direction")||"down",j=document.getElementById("main"),w=Array.from(document.querySelectorAll(".snap-section")),f=j.scrollTop,m=w.reduce((h,g,i)=>{const y=g.offsetTop,u=Math.abs(y-f);return u<h.dist?{idx:i,dist:u}:h},{idx:0,dist:Number.POSITIVE_INFINITY}).idx,p=$==="up"?Math.max(0,m-1):Math.min(w.length-1,m+1);w[p].scrollIntoView({behavior:"smooth",block:"start"})},q=document.getElementById("down-arrow");q&&q.addEventListener("click",()=>L(q));document.querySelectorAll(".arrow-btn[data-direction]").forEach(c=>{c.addEventListener("click",()=>L(c))});(function(){const c=document.getElementById("main");if(!c)return;let $=!1;const j=(p,h,g)=>{let i=p;for(;i&&i!==c;){const y=window.getComputedStyle(i),u=y.overflowY,S=y.overflowX,I=i.scrollHeight>i.clientHeight&&(u==="auto"||u==="scroll"||u==="overlay"),T=i.scrollWidth>i.clientWidth&&(S==="auto"||S==="scroll"||S==="overlay");if(I&&g!==0){const E=g>0&&i.scrollTop+i.clientHeight<i.scrollHeight,C=g<0&&i.scrollTop>0;if(E||C)return!0}if(T&&h!==0){const E=h>0&&i.scrollLeft+i.clientWidth<i.scrollWidth,C=h<0&&i.scrollLeft>0;if(E||C)return!0}i=i.parentElement}return!1},w=p=>{const h=document.createElement("button");h.setAttribute("data-direction",p),L(h)},f=p=>{const h=p.target;if(h&&h.closest(".builder-right"))return;let g=p.deltaX||0,i=p.deltaY||0;if(g===0&&p.shiftKey&&i!==0&&(g=i,i=0),j(h,g,i)||(p.preventDefault(),$)||i===0)return;const y=i>0?"down":"up";$=!0,w(y),setTimeout(()=>{$=!1},650)};c.addEventListener("wheel",f,{passive:!1});const m=document.getElementById("site-header");m&&m.addEventListener("wheel",f,{passive:!1})})();(function(){const c=document.getElementById("flow-svg"),$=document.getElementById("flow-figure");if(!c||!$)return;const j=g=>{switch(g){case"social":return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="3"/><path d="M6 19c0-2.5 3-4 6-4s6 1.5 6 4"/></svg>';case"chip":return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="7" y="7" width="10" height="10" rx="2"/><path d="M7 3v2M12 3v2M17 3v2M21 7h-2M21 12h-2M21 17h-2M3 7h2M3 12h2M3 17h2M7 21v-2M12 21v-2M17 21v-2"/></svg>';case"circuits":return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="10" y="2" width="4" height="2" rx="0.5"/><rect x="20" y="10" width="2" height="4" rx="0.5"/><rect x="10" y="20" width="4" height="2" rx="0.5"/><rect x="2" y="10" width="2" height="4" rx="0.5"/><path d="M4 12h7v2h2h5"/></svg>';case"sat":return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 7h6a5 5 0 0 1 0 10H6z"/><path d="M6 9H3M6 15H3M17 12h4"/></svg>';case"co":return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 4v16" stroke-dasharray="3 3"/><circle cx="6" cy="8" r="2"/><circle cx="6" cy="16" r="2"/><circle cx="18" cy="8" r="2"/><circle cx="18" cy="16" r="2"/><path d="M8 9l3 2"/><path d="M13 11l3 2"/><path d="M8 15l3-2"/><path d="M13 13l3-2"/></svg>';case"ar":return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="6" height="4" rx="1"/><rect x="15" y="3" width="6" height="4" rx="1"/><rect x="9" y="17" width="6" height="4" rx="1"/><path d="M6 7v4h12V7M12 13v4"/></svg>';case"weather":return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 16.5a4.5 4.5 0 0 0-2-8.5 5 5 0 0 0-9.6 1.5A3.5 3.5 0 1 0 5 16"/><path d="M8 19v2M12 18v3M16 19v2"/></svg>';default:return""}};document.querySelectorAll(".flow-left .flow-node").forEach(g=>{const i=g.getAttribute("data-id")||"",y=g.querySelector(".icon");y&&(y.innerHTML=j(i))});const w=(g,i,y=2)=>{const u=document.createElementNS("http://www.w3.org/2000/svg","path");return u.setAttribute("d",g),u.setAttribute("fill","none"),u.setAttribute("stroke",i),u.setAttribute("stroke-width",String(y)),u.setAttribute("stroke-linecap","round"),u.setAttribute("stroke-linejoin","round"),u.setAttribute("shape-rendering","geometricPrecision"),u},f=g=>getComputedStyle(document.documentElement).getPropertyValue(g===1?"--ds-g1":g===2?"--ds-g2":g===3?"--ds-g3":"--ds-g4").trim()||"#2b5bb8",m=["#4F064F","#821846","#9E2235","#AF3323"],p=()=>{for(;c.firstChild;)c.removeChild(c.firstChild);const g=Array.from(document.querySelectorAll(".flow-left .flow-node")),i=document.getElementById("flow-model"),y=Array.from(document.querySelectorAll(".flow-right .flow-node"));if(!i)return;const u=$.getBoundingClientRect();c.setAttribute("viewBox",`0 0 ${u.width} ${u.height}`);const S=i.getBoundingClientRect(),I=S.left-u.left,T=S.right-u.left,E=S.top-u.top+S.height/2,C=(A,x,b,B)=>{const _=Math.max(32,Math.min(120,Math.abs(b-A)*.35)),t=A+_,e=x,n=b-_;return`M ${A} ${x} C ${t} ${e}, ${n} ${B}, ${b} ${B}`};g.forEach(A=>{const x=Number(A.getAttribute("data-group")||"1"),b=A.getBoundingClientRect(),B=b.right-u.left,_=b.top-u.top+b.height/2,n=C(B,_,I,E);c.appendChild(w(n,f(x),2))}),y.forEach((A,x)=>{const b=A.getBoundingClientRect(),B=T,_=E,t=b.left-u.left,e=b.top-u.top+b.height/2,n=C(B,_,t,e);c.appendChild(w(n,m[x]||m[0],2))})};new ResizeObserver(()=>p()).observe($),window.addEventListener("resize",p,{passive:!0}),setTimeout(p,0),document.querySelector(".flow-model")?.addEventListener("click",()=>{})})();(function(){const c=document.getElementById("config-panel"),$=document.getElementById("gen-code");if(!c||!$)return;const j=[{id:"social",name:"Social Networks"},{id:"chip",name:"Chip Design"},{id:"circuits",name:"Electronic Circuits"},{id:"sat",name:"SAT Solving"},{id:"co",name:"Combinatorial Optimization"},{id:"ar",name:"Algorithmic Reasoning",hasSubsets:!0},{id:"weather",name:"Weather Forecasting",hasResolution:!0}],w={social:["social_networks"],chip:["chip_design"],circuits:["electronic_circuits"],sat:["sat_solving"],co:["combinatorial_optimization"],ar:["algo_res_easy","algo_res_medium","algo_res_hard"],weather:["era5_64x32","era5_240x121"]},f=new Set,m=Object.fromEntries(Object.keys(w).map(t=>[t,new Set])),p=new Set,h=Object.fromEntries(Object.keys(w).map(t=>[t,{}])),g=new Set,i=t=>{switch(t){case"social":return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="3"/><path d="M6 19c0-2.5 3-4 6-4s6 1.5 6 4"/></svg>';case"chip":return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="7" y="7" width="10" height="10" rx="2"/><path d="M7 3v2M12 3v2M17 3v2M21 7h-2M21 12h-2M21 17h-2M3 7h2M3 12h2M3 17h2M7 21v-2M12 21v-2M17 21v-2"/></svg>';case"circuits":return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="10" y="2" width="4" height="2" rx="0.5"/><rect x="20" y="10" width="2" height="4" rx="0.5"/><rect x="10" y="20" width="4" height="2" rx="0.5"/><rect x="2" y="10" width="2" height="4" rx="0.5"/><path d="M4 12h7v2h2h5"/></svg>';case"sat":return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 7h6a5 5 0 0 1 0 10H6z"/><path d="M6 9H3M6 15H3M17 12h4"/></svg>';case"co":return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 4v16" stroke-dasharray="3 3"/><circle cx="6" cy="8" r="2"/><circle cx="6" cy="16" r="2"/><circle cx="18" cy="8" r="2"/><circle cx="18" cy="16" r="2"/><path d="M8 9l3 2"/><path d="M13 11l3 2"/><path d="M8 15l3-2"/><path d="M13 13l3-2"/></svg>';case"ar":return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="6" height="4" rx="1"/><rect x="15" y="3" width="6" height="4" rx="1"/><rect x="9" y="17" width="6" height="4" rx="1"/><path d="M6 7v4h12V7M12 13v4"/></svg>';case"weather":return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 16.5a4.5 4.5 0 0 0-2-8.5 5 5 0 0 0-9.6 1.5A3.5 3.5 0 1 0 5 16"/><path d="M8 19v2M12 18v3M16 19v2"/></svg>';default:return""}},y=t=>{switch(t){case"social":return"var(--ds-g1)";case"chip":case"circuits":return"var(--ds-g2)";case"sat":case"co":case"ar":return"var(--ds-g3)";case"weather":return"var(--ds-g4)";default:return"var(--text-2)"}},u=t=>{const e=f.has(t),n=w[t]||[],a=m[t]||new Set;return`<div class="side-sub">${n.map(s=>{const d=e&&a.has(s)?"checked":"",o=S(t,s),l=`sub_${t}_${s}`.replace(/[^a-zA-Z0-9_-]/g,"-");return`<div class="sub-row-container">
          <div class="sub-row">
            <input id="${l}" type="checkbox" data-sub-ds="${t}" data-sub="${s}" ${d}/>
            <label class="sub-name" for="${l}">
              <span class="sub-text">${s}</span>
              <button type="button" class="sub-plus-btn" data-sub-plus="${t}-${s}" aria-label="Add custom options for ${s}" title="Add options">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </button>
              <div class="sub-options" data-sub-opts="${t}-${s}" hidden>
                <button class="sub-opt-row" data-action="add-mask" data-sub-ds="${t}" data-sub="${s}">Add custom train/valid/test mask</button>
                <!-- future options go here -->
              </div>
            </label>
          </div>
          ${o}
        </div>`}).join("")}</div>`},S=(t,e)=>{const n=`${t}-${e}`,a=h[t]?.[e]||{train:80,valid:10,test:10};return g.has(n)?`
        <div class="split-panel" data-split-panel="${n}">
          <div class="split-header">Train/Valid/Test Mask
            <button type="button" class="split-remove-btn" data-remove-split="${n}" aria-label="Remove mask" title="Remove">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            </button>
          </div>
          <div class="split-slider-container">
            <div class="split-slider" data-split-key="${n}">
              <div class="split-track">
                <div class="split-segment train" style="left: 0%; width: ${a.train}%"></div>
                <div class="split-segment valid" style="left: ${a.train}%; width: ${a.valid}%"></div>
                <div class="split-segment test" style="left: ${a.train+a.valid}%; width: ${a.test}%"></div>
              </div>
              <div class="split-handles">
                <div class="split-handle" data-handle="p1" style="left: ${a.train}%"></div>
                <div class="split-handle" data-handle="p2" style="left: ${a.train+a.valid}%"></div>
              </div>
            </div>
            <div class="split-labels">
              <span class="split-label train">Train: ${a.train}%</span>
              <span class="split-label valid">Valid: ${a.valid}%</span>
              <span class="split-label test">Test: ${a.test}%</span>
            </div>
          </div>
        </div>
      `:""},I=()=>{const t='<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"></polyline></svg>',e=j.map(s=>{const d=f.has(s.id),o=p.has(s.id),l=(w[s.id]||[]).length>0,v=l?u(s.id):"";return`
          <div class="ds-item" data-ds="${s.id}">
            <div class="side-row ds-main" data-dsrow>
              <label class="side-check"><input type="checkbox" data-select="${s.id}" ${d?"checked":""}/></label>
              <span class="ds-icon" style="color:${y(s.id)}">${i(s.id)}</span>
              <span class="ds-name">${s.name}</span>
              ${l?`<button class="ds-disclose" data-ds-toggle="${s.id}" aria-expanded="${o}" aria-label="Toggle options">${t}</button>`:'<span class="ds-disclose ds-space" aria-hidden="true"></span>'}
            </div>
            ${l?`<div class="ds-subwrap" data-open="${o}"><div class="ds-sub">${v}</div></div>`:""}
          </div>`}).join(""),n=document.getElementById("opt-pre-filter"),a=document.getElementById("opt-pre-transform"),r=document.getElementById("opt-transform");c.innerHTML=`
        <div class="side-group" aria-label="Your model options">
          <div class="side-collapsible model-opts" data-open="false" id="model-coll">
            <div class="head" data-coll-toggle="model-coll">
              <span class="label">Your model options</span>
              <button class="ds-disclose" data-coll-toggle="model-coll" aria-expanded="false" aria-label="Toggle model options">${t}</button>
            </div>
            <div class="body">
              <div class="opts-intro">I want to use my custom...</div>
              <label class="side-row"><input type="checkbox" id="opt-pre-filter" ${n&&n.checked?"checked":""}/> <span>pre_filter</span></label>
              <label class="side-row"><input type="checkbox" id="opt-pre-transform" ${a&&a.checked?"checked":""}/> <span>pre_transform</span></label>
              <label class="side-row"><input type="checkbox" id="opt-transform" ${r&&r.checked?"checked":""}/> <span>transform</span></label>
            </div>
          </div>
        </div>
        <div class="side-group" aria-label="Datasets">
          <div class="side-label">Datasets</div>
          <div class="side-list">${e}</div>
        </div>`},T=()=>Array.from(f.values()).flatMap(e=>Array.from(m[e]||[])),E=()=>{const t=T(),e=t.length!==1,n=!!document.getElementById("opt-pre-filter")?.checked,a=!!document.getElementById("opt-pre-transform")?.checked,r=!!document.getElementById("opt-transform")?.checked,s=[];if(s.push("import graphbench"),s.push(""),s.push("model = ...  # your torch model"),e){const o=t.length?`[
  `+t.map(l=>`'${l}'`).join(`,
  `)+`
]`:"[]";s.push(`dataset_name = ${o}`)}else{const o=t[0]?`'${t[0]}'`:"'social_networks'";s.push(`dataset_name = ${o}`)}if(n&&s.push("pre_filter = ...  # optional: PyG pre-filter matrix"),a&&s.push("pre_transform = ...  # optional: transform applied at load-time"),r&&s.push("transform = ...  # optional: transform applied at runtime"),t.some(o=>{const l=Object.entries(w).find(([k,M])=>M.includes(o));if(!l)return!1;const[v]=l;return v&&h[v]?.[o]})&&(s.push(""),s.push("# Custom train/valid/test splits"),t.forEach(o=>{const l=Object.entries(w).find(([k,M])=>M.includes(o));if(!l)return;const[v]=l;if(v&&h[v]?.[o]){const k=h[v][o];s.push(`split_${o.replace(/[^a-zA-Z0-9]/g,"_")} = (${k.train/100}, ${k.valid/100}, ${k.test/100})  # ${o}`)}})),s.push(""),e){const o=[];n&&o.push("pre_filter=pre_filter"),a&&o.push("pre_transform=pre_transform"),r&&o.push("transform=transform");const l=o.length?", "+o.join(", "):"";s.push(`datasets = [graphbench.loader(name${l}) for name in dataset_name]`),s.push("opt_models = [graphbench.optimize(model, d['train']) for d in datasets]"),s.push("results = [graphbench.evaluator(name, m, d['valid'], d['test']) for name, m, d in zip(dataset_name, opt_models, datasets)]")}else{const o=[];n&&o.push("pre_filter=pre_filter"),a&&o.push("pre_transform=pre_transform"),r&&o.push("transform=transform");const l=o.length?", "+o.join(", "):"";s.push(`dataset = graphbench.loader(dataset_name${l})`),s.push("opt_model = graphbench.optimize(model, dataset['train'])"),s.push("results = graphbench.evaluator(dataset_name, opt_model, dataset['valid'], dataset['test'])")}return s.join(`
`)},C=t=>t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),A=t=>{let e=C(t);return e=e.replace(/\b(import)\b/g,'<span class="kw">$1</span>'),e=e.replace(/\b(graphbench)\b/g,'<span class="ns">$1</span>'),e=e.replace(/\b(loader|optimize|evaluator)\b/g,'<span class="fn">$1</span>'),e=e.replace(/\b(model|dataset_name|datasets|dataset|opt_model|opt_models|results|name)\b/g,'<span class="var">$1</span>'),e=e.replace(/'([^']*)'/g,`<span class="str">'$1'</span>`),e=e.replace(/#([^\n]*)/g,(n,a)=>'<span class="com">#'+String(a).replace(/<[^>]+>/g,"")+"</span>"),e=e.replace(/<span class=\"com\">#([^<]*)\bgraphbench\b([^<]*)<\/span>/g,'<span class="com">#$1</span><span class="ns">graphbench</span><span class="com">$2</span>'),e},x=()=>{const t=E(),e=A(t);$.innerHTML=e;const n=document.querySelector(".builder-copy-btn");n&&n.setAttribute("data-copy",t)},b=()=>{c.querySelectorAll(".ds-item").forEach(e=>{const n=e.getAttribute("data-ds")||"",a=e.querySelector(".ds-subwrap"),r=e.querySelector("[data-ds-toggle]"),s=p.has(n);a&&a.setAttribute("data-open",s?"true":"false"),r&&r.setAttribute("aria-expanded",s.toString());const d=e.querySelectorAll("input[data-sub]"),o=f.has(n),l=m[n]||new Set;d.forEach(k=>{const M=k.getAttribute("data-sub")||"";k.checked=o&&l.has(M)});const v=e.querySelector("input[data-select]");v&&v.getAttribute("data-select")===n&&(v.checked=f.has(n))})};c.addEventListener("change",t=>{const e=t.target;if(!e)return;const n=e.getAttribute("data-select"),a=e.getAttribute("data-sub-ds"),r=e.getAttribute("data-sub"),s=e.getAttribute("id");if(n){e.checked?(f.add(n),m[n]=new Set(w[n]||[]),p.clear(),p.add(n)):(f.delete(n),m[n].clear(),p.delete(n)),b(),x();return}if(a&&r){const d=m[a]||new Set;e.checked?(d.add(r),f.add(a)):(d.delete(r),d.size===0&&f.delete(a)),m[a]=d,p.add(a),b(),x();return}if(s==="opt-pre-filter"||s==="opt-pre-transform"||s==="opt-transform"){x();return}}),c.addEventListener("click",t=>{const e=t.target.closest("[data-sub-plus]");if(e){t.preventDefault(),t.stopPropagation();const d=e.getAttribute("data-sub-plus")||"";if(d){c.querySelectorAll(".sub-options").forEach(l=>{l.hidden=!0});const o=c.querySelector(`[data-sub-opts="${d}"]`);o&&(o.hidden=!1)}return}const n=t.target.closest("button");if(!n||n.getAttribute("data-mode"))return;const r=t.target.closest("[data-coll-toggle]");if(r){const d=r.getAttribute("data-coll-toggle")||"",o=document.getElementById(d);if(o){const l=o.getAttribute("data-open")==="true";o.setAttribute("data-open",l?"false":"true");const v=o.querySelector(".head [data-coll-toggle]");v&&v.setAttribute("aria-expanded",(!l).toString())}return}const s=n.getAttribute("data-ds-toggle");if(s){!p.has(s)?(p.clear(),p.add(s)):p.delete(s),b();return}}),c.addEventListener("click",t=>{const e=t.target.closest(".side-row[data-dsrow]");if(!e)return;const n=t.target.closest('input[type="checkbox"]'),a=t.target.closest("[data-ds-toggle]");if(n||a)return;const s=e.closest(".ds-item")?.getAttribute("data-ds")||"";if(!s)return;!p.has(s)?(p.clear(),p.add(s)):p.delete(s),b()}),c.addEventListener("click",t=>{const e=t.target.closest("#model-coll");if(!e)return;const n=t.target.closest("#model-coll .head"),a=t.target.closest("#model-coll [data-coll-toggle]"),r=t.target.closest("#model-coll .body input, #model-coll .body button, #model-coll .body label");if(n||!r&&!a&&t.target.closest("#model-coll")){const s=e.getAttribute("data-open")==="true";e.setAttribute("data-open",s?"false":"true");const d=e.querySelector(".head [data-coll-toggle]");d&&d.setAttribute("aria-expanded",(!s).toString())}}),c.addEventListener("click",t=>{const e=t.target.closest(".sub-opt-row");if(!e)return;if(e.getAttribute("data-action")==="add-mask"){const a=e.getAttribute("data-sub-ds")||"",r=e.getAttribute("data-sub")||"",s=`${a}-${r}`;g.add(s);const d=c.querySelector(`[data-sub-opts="${s}"]`);d&&(d.hidden=!0),I(),x();return}}),c.addEventListener("click",t=>{const e=t.target.closest("[data-remove-split]");if(!e)return;t.preventDefault();const n=e.getAttribute("data-remove-split")||"";if(!n)return;const[a,r]=n.split("-");g.delete(n),h[a]&&h[a][r]&&delete h[a][r],I(),x()});const B=t=>{const[e,n]=t.split("-"),a=h[e]?.[n];if(!a)return;const r=document.querySelector(`.split-panel[data-split-panel="${t}"]`);if(!r)return;const s=a.train,d=a.train+a.valid,o=r.querySelector(".split-segment.train"),l=r.querySelector(".split-segment.valid"),v=r.querySelector(".split-segment.test");o&&(o.style.left="0%",o.style.width=`${a.train}%`),l&&(l.style.left=`${s}%`,l.style.width=`${a.valid}%`),v&&(v.style.left=`${d}%`,v.style.width=`${a.test}%`);const k=r.querySelector('.split-handle[data-handle="p1"]'),M=r.querySelector('.split-handle[data-handle="p2"]');k&&(k.style.left=`${s}%`),M&&(M.style.left=`${d}%`);const z=r.querySelector(".split-label.train"),H=r.querySelector(".split-label.valid"),O=r.querySelector(".split-label.test");z&&(z.textContent=`Train: ${a.train}%`),H&&(H.textContent=`Valid: ${a.valid}%`),O&&(O.textContent=`Test: ${a.test}%`)},_=(t,e,n)=>{const[a,r]=t.split("-");h[a]||(h[a]={}),h[a][r]||(h[a][r]={train:80,valid:10,test:10});const s=h[a][r];let d=s.train,o=s.train+s.valid;const l=Math.max(0,Math.min(100,Math.round(n)));e==="p1"?d=Math.max(0,Math.min(l,o)):o=Math.max(d,Math.min(l,100));const v=d,k=Math.max(0,o-d),M=Math.max(0,100-o);h[a][r]={train:v,valid:k,test:M},B(t),x()};c.addEventListener("mousedown",t=>{const e=t.target.closest(".split-handle");if(!e)return;t.preventDefault();const n=e.closest(".split-slider");if(!n)return;const a=n.getAttribute("data-split-key")||"",r=e.getAttribute("data-handle"),s=n.getBoundingClientRect(),d=v=>{const k=v-s.left,M=Math.max(0,Math.min(100,k/s.width*100));_(a,r,M)},o=v=>d(v.clientX),l=()=>{document.removeEventListener("mousemove",o),document.removeEventListener("mouseup",l)};document.addEventListener("mousemove",o),document.addEventListener("mouseup",l)}),I(),x()})();F();
