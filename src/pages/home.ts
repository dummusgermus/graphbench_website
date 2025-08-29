import '../style.css'
import { renderLayout } from '../shared/layout'
import { renderLayout as _unused } from '../shared/layout'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = renderLayout('home', `
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
            <a href="#" class="flow-node" data-id="social" data-group="1"><span class="icon" aria-hidden="true"></span><span class="label">Social Networks</span></a>
          </div>
          <div class="flow-item accent-g2"><span class="flow-bg1" aria-hidden="true"></span><span class="flow-bg2" aria-hidden="true"></span>
            <a href="#" class="flow-node" data-id="chip" data-group="2"><span class="icon" aria-hidden="true"></span><span class="label">Chip Design</span></a>
          </div>
          <div class="flow-item accent-g2"><span class="flow-bg1" aria-hidden="true"></span><span class="flow-bg2" aria-hidden="true"></span>
            <a href="#" class="flow-node" data-id="circuits" data-group="2"><span class="icon" aria-hidden="true"></span><span class="label">Electronic Circuits</span></a>
          </div>
          <div class="flow-item accent-g3"><span class="flow-bg1" aria-hidden="true"></span><span class="flow-bg2" aria-hidden="true"></span>
            <a href="#" class="flow-node" data-id="sat" data-group="3"><span class="icon" aria-hidden="true"></span><span class="label">SAT Solving</span></a>
          </div>
          <div class="flow-item accent-g3"><span class="flow-bg1" aria-hidden="true"></span><span class="flow-bg2" aria-hidden="true"></span>
            <a href="#" class="flow-node" data-id="co" data-group="3"><span class="icon" aria-hidden="true"></span><span class="label">Combinatorial Optimization</span></a>
          </div>
          <div class="flow-item accent-g3"><span class="flow-bg1" aria-hidden="true"></span><span class="flow-bg2" aria-hidden="true"></span>
            <a href="#" class="flow-node" data-id="ar" data-group="3"><span class="icon" aria-hidden="true"></span><span class="label">Algorithmic Reasoning</span></a>
          </div>
          <div class="flow-item accent-g4"><span class="flow-bg1" aria-hidden="true"></span><span class="flow-bg2" aria-hidden="true"></span>
            <a href="#" class="flow-node" data-id="weather" data-group="4"><span class="icon" aria-hidden="true"></span><span class="label">Weather Forecasting</span></a>
          </div>
        </div>

        <div id="flow-model" class="flow-model" role="button" tabindex="0" aria-label="Your model">
          <span class="flow-bg1" aria-hidden="true"></span><span class="flow-bg2" aria-hidden="true"></span>
          <div class="model-inner">
            <span class="i" aria-hidden="true">🧩</span>
            <span class="t">Your Model</span>
          </div>
        </div>

        <div class="flow-col flow-right">
          <div class="flow-item ev1" style="--accent:#4F064F"><span class="flow-bg1" aria-hidden="true"></span><span class="flow-bg2" aria-hidden="true"></span>
            <a href="#" class="flow-node eval ev1" data-ev="splits"><span class="label">Evaluation Splits</span></a>
          </div>
          <div class="flow-item ev2" style="--accent:#821846"><span class="flow-bg1" aria-hidden="true"></span><span class="flow-bg2" aria-hidden="true"></span>
            <a href="#" class="flow-node eval ev2" data-ev="metrics"><span class="label">Evaluation Metrics</span></a>
          </div>
          <div class="flow-item ev3" style="--accent:#9E2235"><span class="flow-bg1" aria-hidden="true"></span><span class="flow-bg2" aria-hidden="true"></span>
            <a href="#" class="flow-node eval ev3" data-ev="tuning"><span class="label">Hyperparameter Tuning</span></a>
          </div>
          <div class="flow-item ev4" style="--accent:#AF3323"><span class="flow-bg1" aria-hidden="true"></span><span class="flow-bg2" aria-hidden="true"></span>
            <a href="#" class="flow-node eval ev4" data-ev="ood"><span class="label">OOD Generalization</span></a>
          </div>
        </div>
      </div>

      <div class="flow-copy grid">
        <div class="col-4">
          <h3>Datasets</h3>
          <p>Curated domains with consistent structure and clear regimes. Colors and icons match the catalog.</p>
        </div>
        <div class="col-4">
          <h3>Your model</h3>
          <p>Bring any GNN or graph learner. Standard loaders and splits make comparisons simple.</p>
        </div>
        <div class="col-4">
          <h3>Evaluation</h3>
          <p>Unified splits, metrics, tuning, and OOD checks for fair, reproducible results.</p>
        </div>
      </div>

      <div style="margin-top:.6rem">
        <a class="btn btn-outline" href="./datasets.html">Browse datasets</a>
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
        <pre><code id="code-snippet">from graphbench import Benchmark\n\nbench = Benchmark(dataset=\"ogbn-arxiv\", model=\"gcn\")\nbench.run()</code></pre>
        <div style="display:flex; gap:.5rem; margin-top:.5rem;">
          <button class="btn btn-primary" id="copy-code" data-copy="from graphbench import Benchmark\\n\\nbench = Benchmark(dataset=\\\"ogbn-arxiv\\\", model=\\\"gcn\\\")\\nbench.run()">Copy code</button>
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
`, 'snap-container')

// Avoid double scrollbars when snap container is active
document.body.classList.add('no-body-scroll')

// Arrow scroll to next/prev slide
const handleArrow = (btn: HTMLButtonElement) => {
  const direction = btn.getAttribute('data-direction') || 'down'
  const slides = Array.from(document.querySelectorAll('.snap-section')) as HTMLElement[]
  const viewportTop = window.scrollY
  // find current slide index by proximity
  const containerTop = (document.getElementById('main') as HTMLElement).getBoundingClientRect().top + window.scrollY
  const currentIndex = slides.reduce((best, el, idx) => {
    const y = el.getBoundingClientRect().top + window.scrollY
    const dist = Math.abs((y - containerTop) - viewportTop)
    return dist < best.dist ? { idx, dist } : best
  }, { idx: 0, dist: Number.POSITIVE_INFINITY }).idx
  const nextIndex = direction === 'up' ? Math.max(0, currentIndex - 1) : Math.min(slides.length - 1, currentIndex + 1)
  slides[nextIndex].scrollIntoView({ behavior: 'smooth' })
}

const primaryDown = document.getElementById('down-arrow') as HTMLButtonElement | null
if (primaryDown) {
  primaryDown.addEventListener('click', () => handleArrow(primaryDown))
}

document.querySelectorAll<HTMLButtonElement>('.arrow-btn[data-direction]').forEach(btn => {
  btn.addEventListener('click', () => handleArrow(btn))
})

// Copy for code snippet
const copyBtn = document.getElementById('copy-code') as HTMLButtonElement | null
if (copyBtn) {
  copyBtn.addEventListener('click', async () => {
    const text = copyBtn.getAttribute('data-copy') || ''
    try { await navigator.clipboard.writeText(text) } catch {}
  })
}

// --- Flow figure wiring ---
; (function () {
  const svg = document.getElementById('flow-svg') as SVGSVGElement | null
  const wrap = document.getElementById('flow-figure') as HTMLElement | null
  if (!svg || !wrap) return

  // Inject dataset icons from datasets page helper (duplicated minimal inline set)
  const iconFor = (id: string): string => {
    switch (id) {
      case 'social': return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="3"/><path d="M6 19c0-2.5 3-4 6-4s6 1.5 6 4"/></svg>'
      case 'chip': return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="7" y="7" width="10" height="10" rx="2"/><path d="M7 3v2M12 3v2M17 3v2M21 7h-2M21 12h-2M21 17h-2M3 7h2M3 12h2M3 17h2M7 21v-2M12 21v-2M17 21v-2"/></svg>'
      case 'circuits': return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4.5" y="6.5" width="3" height="3" rx="0.5"/><rect x="16.5" y="6.5" width="3" height="3" rx="0.5"/><rect x="10.5" y="14.5" width="3" height="3" rx="0.5"/><path d="M7.5 8h6v4h3"/></svg>'
      case 'sat': return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 7h6a5 5 0 0 1 0 10H6z"/><path d="M6 9H3M6 15H3M17 12h4"/></svg>'
      case 'co': return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 4v16" stroke-dasharray="3 3"/><circle cx="6" cy="8" r="2"/><circle cx="6" cy="16" r="2"/><circle cx="18" cy="8" r="2"/><circle cx="18" cy="16" r="2"/><path d="M8 9l3 2"/><path d="M13 11l3 2"/><path d="M8 15l3-2"/><path d="M13 13l3-2"/></svg>'
      case 'ar': return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="6" height="4" rx="1"/><rect x="15" y="3" width="6" height="4" rx="1"/><rect x="9" y="17" width="6" height="4" rx="1"/><path d="M6 7v4h12V7M12 13v4"/></svg>'
      case 'weather': return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 16.5a4.5 4.5 0 0 0-2-8.5 5 5 0 0 0-9.6 1.5A3.5 3.5 0 1 0 5 16"/><path d="M8 19v2M12 18v3M16 19v2"/></svg>'
      default: return ''
    }
  }
  document.querySelectorAll<HTMLAnchorElement>('.flow-left .flow-node').forEach(n => {
    const id = n.getAttribute('data-id') || ''
    const iconSpan = n.querySelector('.icon') as HTMLSpanElement | null
    if (iconSpan) iconSpan.innerHTML = iconFor(id)
  })

  const makePath = (d: string, color: string, width = 2) => {
    const p = document.createElementNS('http://www.w3.org/2000/svg', 'path')
    p.setAttribute('d', d)
    p.setAttribute('fill', 'none')
    p.setAttribute('stroke', color)
    p.setAttribute('stroke-width', String(width))
    p.setAttribute('stroke-linecap', 'round')
    p.setAttribute('opacity', '0.95')
    p.setAttribute('filter', 'url(#soft)')
    return p
  }

  // Soft shadow filter
  const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs')
  const f = document.createElementNS('http://www.w3.org/2000/svg', 'filter')
  f.setAttribute('id', 'soft')
  f.setAttribute('x', '-20%'); f.setAttribute('y', '-20%'); f.setAttribute('width', '140%'); f.setAttribute('height', '140%')
  const blur = document.createElementNS('http://www.w3.org/2000/svg', 'feGaussianBlur')
  blur.setAttribute('stdDeviation', '1.2')
  blur.setAttribute('in', 'SourceAlpha')
  const merge = document.createElementNS('http://www.w3.org/2000/svg', 'feMerge')
  const m1 = document.createElementNS('http://www.w3.org/2000/svg', 'feMergeNode')
  const m2 = document.createElementNS('http://www.w3.org/2000/svg', 'feMergeNode')
  m2.setAttribute('in', 'SourceGraphic')
  merge.appendChild(m1); merge.appendChild(m2)
  f.appendChild(blur); f.appendChild(merge); defs.appendChild(f); svg.appendChild(defs)

  const colorForGroup = (g: number): string => getComputedStyle(document.documentElement).getPropertyValue(
    g === 1 ? '--ds-g1' : g === 2 ? '--ds-g2' : g === 3 ? '--ds-g3' : '--ds-g4'
  ).trim() || '#2b5bb8'

  const evalColors = ['#4F064F', '#821846', '#9E2235', '#AF3323']

  const draw = () => {
    svg.innerHTML = svg.innerHTML.split('<defs')[0] // keep defs already appended
    svg.appendChild(defs)
    const leftNodes = Array.from(document.querySelectorAll('.flow-left .flow-node')) as HTMLElement[]
    const model = document.getElementById('flow-model') as HTMLElement | null
    const rightNodes = Array.from(document.querySelectorAll('.flow-right .flow-node')) as HTMLElement[]
    if (!model) return

    const s = wrap.getBoundingClientRect()
    svg.setAttribute('viewBox', `0 0 ${s.width} ${s.height}`)

    const center = model.getBoundingClientRect()
    const cx = center.left - s.left + center.width / 2
    const cy = center.top - s.top + center.height / 2

    // Curves: left -> model
    leftNodes.forEach((n) => {
      const g = Number(n.getAttribute('data-group') || '1')
      const rect = n.getBoundingClientRect()
      const x1 = rect.right - s.left
      const y1 = rect.top - s.top + rect.height / 2
      const mx = cx - 40
      const c1x = x1 + 40
      const c1y = y1
      const c2x = mx - 40
      const c2y = cy
      const d = `M ${x1} ${y1} C ${c1x} ${c1y}, ${c2x} ${c2y}, ${mx} ${cy}`
      svg.appendChild(makePath(d, colorForGroup(g), 2.5))
    })

    // Curves: model -> right
    rightNodes.forEach((n, idx) => {
      const rect = n.getBoundingClientRect()
      const x2 = rect.left - s.left
      const y2 = rect.top - s.top + rect.height / 2
      const mx = cx + 40
      const c1x = mx + 40
      const c1y = cy
      const c2x = x2 - 40
      const c2y = y2
      const d = `M ${mx} ${cy} C ${c1x} ${c1y}, ${c2x} ${c2y}, ${x2} ${y2}`
      svg.appendChild(makePath(d, evalColors[idx] || evalColors[0], 2.5))
    })
  }

  const ro = new ResizeObserver(() => draw())
  ro.observe(wrap)
  window.addEventListener('resize', draw, { passive: true })
  setTimeout(draw, 0)

    // Placeholder links – wire to real anchors later
    ; (document.querySelector('.flow-model') as HTMLElement | null)?.addEventListener('click', () => { })
})()

