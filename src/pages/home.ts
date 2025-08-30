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
    p.setAttribute('stroke-linejoin', 'round')
    p.setAttribute('shape-rendering', 'geometricPrecision')
    return p
  }

  const colorForGroup = (g: number): string => getComputedStyle(document.documentElement).getPropertyValue(
    g === 1 ? '--ds-g1' : g === 2 ? '--ds-g2' : g === 3 ? '--ds-g3' : '--ds-g4'
  ).trim() || '#2b5bb8'

  const evalColors = ['#4F064F', '#821846', '#9E2235', '#AF3323']

  const draw = () => {
    // Clear previous paths
    while (svg.firstChild) svg.removeChild(svg.firstChild)

    const leftNodes = Array.from(document.querySelectorAll('.flow-left .flow-node')) as HTMLElement[]
    const model = document.getElementById('flow-model') as HTMLElement | null
    const rightNodes = Array.from(document.querySelectorAll('.flow-right .flow-node')) as HTMLElement[]
    if (!model) return

    const s = wrap.getBoundingClientRect()
    svg.setAttribute('viewBox', `0 0 ${s.width} ${s.height}`)

    const m = model.getBoundingClientRect()
    const modelLeft = m.left - s.left
    const modelRight = m.right - s.left
    const modelCy = m.top - s.top + m.height / 2

    const cubicHoriz = (x1: number, y1: number, x2: number, y2: number): string => {
      // Horizontal tangents at endpoints: control points share y values
      const dx = Math.max(32, Math.min(120, Math.abs(x2 - x1) * 0.35))
      const c1x = x1 + dx
      const c1y = y1
      const c2x = x2 - dx
      const c2y = y2
      return `M ${x1} ${y1} C ${c1x} ${c1y}, ${c2x} ${c2y}, ${x2} ${y2}`
    }

    // Left -> model (enter model at 180°)
    leftNodes.forEach(n => {
      const g = Number(n.getAttribute('data-group') || '1')
      const r = n.getBoundingClientRect()
      const x1 = r.right - s.left
      const y1 = r.top - s.top + r.height / 2
      const x2 = modelLeft
      const y2 = modelCy
      const d = cubicHoriz(x1, y1, x2, y2)
      svg.appendChild(makePath(d, colorForGroup(g), 2))
    })

    // Model -> right (leave model at 0°)
    rightNodes.forEach((n, idx) => {
      const r = n.getBoundingClientRect()
      const x1 = modelRight
      const y1 = modelCy
      const x2 = r.left - s.left
      const y2 = r.top - s.top + r.height / 2
      const d = cubicHoriz(x1, y1, x2, y2)
      svg.appendChild(makePath(d, evalColors[idx] || evalColors[0], 2))
    })
  }

  const ro = new ResizeObserver(() => draw())
  ro.observe(wrap)
  window.addEventListener('resize', draw, { passive: true })
  setTimeout(draw, 0)

    // Placeholder links – wire to real anchors later
    ; (document.querySelector('.flow-model') as HTMLElement | null)?.addEventListener('click', () => { })
})()

  // --- Slide 3: Dataset builder + code generator ---
  ; (function () {
    const mount = document.getElementById('ds-builder') as HTMLElement | null
    const optPreFilter = document.getElementById('opt-pre-filter') as HTMLInputElement | null
    const optPreTransform = document.getElementById('opt-pre-transform') as HTMLInputElement | null
    const optTransform = document.getElementById('opt-transform') as HTMLInputElement | null
    const codeEl = document.getElementById('gen-code') as HTMLElement | null
    const copyBtn = document.getElementById('copy-gen') as HTMLButtonElement | null
    if (!mount || !codeEl || !copyBtn) return

    type Item = { id: string; name: string; group: number; hasSubsets?: boolean }
    const items: Item[] = [
      { id: 'social', name: 'Social Networks', group: 1 },
      { id: 'chip', name: 'Chip Design', group: 2 },
      { id: 'circuits', name: 'Electronic Circuits', group: 2 },
      { id: 'sat', name: 'SAT Solving', group: 3 },
      { id: 'co', name: 'Combinatorial Optimization', group: 3 },
      { id: 'ar', name: 'Algorithmic Reasoning', group: 3 },
      { id: 'weather', name: 'Weather Forecasting', group: 4 },
    ]

    // kept for reference if accent classes are reintroduced
    // const accentFor = (g: number) => g === 1 ? 'accent-g1' : g === 2 ? 'accent-g2' : g === 3 ? 'accent-g3' : 'accent-g4'

    // selection state
    const selectedIds = new Set<string>()
    const arSubsets = new Set<string>(['easy', 'medium', 'hard'])
    let expandedId: string | null = null

    // default: select Algorithmic Reasoning (all subsets)
    selectedIds.add('ar')

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

    const subsetsMarkup = (): string => {
      const e = arSubsets.has('easy') ? 'checked' : ''
      const m = arSubsets.has('medium') ? 'checked' : ''
      const h = arSubsets.has('hard') ? 'checked' : ''
      return `
        <div class="ds-sublist">
          <label class="toggle-row"><span class="name">easy</span><input type="checkbox" data-subset="easy" ${e} class="ds-check"/><span class="toggle" aria-hidden="true"></span></label>
          <label class="toggle-row"><span class="name">medium</span><input type="checkbox" data-subset="medium" ${m} class="ds-check"/><span class="toggle" aria-hidden="true"></span></label>
          <label class="toggle-row"><span class="name">hard</span><input type="checkbox" data-subset="hard" ${h} class="ds-check"/><span class="toggle" aria-hidden="true"></span></label>
        </div>`
    }

    const render = () => {
      const rows = items.map(r => {
        const checked = selectedIds.has(r.id) ? 'checked' : ''
        const selectedClass = checked ? ' selected' : ''
        const withSub = r.hasSubsets && expandedId === r.id && selectedIds.has(r.id)
        return `
          <div>
            <label class="ds-row accent-g${r.group}${selectedClass}" data-ds="${r.id}">
              <span class="left"><span class="icon">${iconFor(r.id)}</span><span class="name">${r.name}</span></span>
              <input type="checkbox" data-dsid="${r.id}" ${checked} class="ds-check" />
              <span class="toggle" aria-hidden="true"></span>
            </label>
            ${r.hasSubsets ? `<div class=\"ds-subwrap\" data-open=\"${withSub ? 'true' : 'false'}\">${subsetsMarkup()}</div>` : ''}
          </div>`
      }).join('')

      mount.innerHTML = `
        <div class="ds-list" role="group" aria-label="Datasets selector">
          ${rows}
        </div>`
    }

    const datasetNameFor = (id: string): string[] => {
      switch (id) {
        case 'social': return ['social_networks']
        case 'chip': return ['chip_design']
        case 'circuits': return ['electronic_circuits']
        case 'sat': return ['sat_solving']
        case 'co': return ['combinatorial_optimization']
        case 'weather': return ['weather_forecasting']
        case 'ar':
          return ['algorithmic_reasoning']
        default: return []
      }
    }

    const genPlainCode = (): string => {
      const names = Array.from(selectedIds.values()).flatMap(datasetNameFor)
      const useList = names.length !== 1
      const optPF = !!(optPreFilter && optPreFilter.checked)
      const optPT = !!(optPreTransform && optPreTransform.checked)
      const optT = !!(optTransform && optTransform.checked)
      const lines: string[] = []
      lines.push('import graphbench')
      lines.push('')
      lines.push('model = ...  # your torch model')
      if (useList) {
        const listStr = names.length
          ? `[` + '\n' +
          '  ' + names.map(n => `'${n}'`).join(',\n  ') + '\n' +
          `]`
          : '[]'
        lines.push(`dataset_name = ${listStr}`)
      } else {
        const value = names[0] ? `'${names[0]}'` : "'social_networks'"
        lines.push(`dataset_name = ${value}`)
      }
      if (optPF) lines.push('pre_filter = ...  # optional: PyG pre-filter matrix')
      if (optPT) lines.push('pre_transform = ...  # optional: transform applied at load-time')
      if (optT) lines.push('transform = ...  # optional: transform applied at runtime')
      lines.push('')
      if (useList) {
        const args: string[] = []
        if (optPF) args.push('pre_filter=pre_filter')
        if (optPT) args.push('pre_transform=pre_transform')
        if (optT) args.push('transform=transform')
        const kws = args.length ? ', ' + args.join(', ') : ''
        lines.push(`datasets = [graphbench.loader(name${kws}) for name in dataset_name]`)
        lines.push(`opt_models = [graphbench.optimize(model, d['train']) for d in datasets]`)
        lines.push(`results = [graphbench.evaluator(name, m, d['valid'], d['test']) for name, m, d in zip(dataset_name, opt_models, datasets)]`)
      } else {
        const args: string[] = []
        if (optPF) args.push('pre_filter=pre_filter')
        if (optPT) args.push('pre_transform=pre_transform')
        if (optT) args.push('transform=transform')
        const kws = args.length ? ', ' + args.join(', ') : ''
        lines.push(`dataset = graphbench.loader(dataset_name${kws})`)
        lines.push(`opt_model = graphbench.optimize(model, dataset['train'])`)
        lines.push(`results = graphbench.evaluator(dataset_name, opt_model, dataset['valid'], dataset['test'])`)
      }
      return lines.join('\n')
    }

    const escapeHtml = (s: string) => s
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')

    const tokenColorize = (code: string): string => {
      // very lightweight manual coloring similar to quickstart's examples
      // apply in order to avoid double-wrapping
      let out = escapeHtml(code)
      out = out.replace(/\b(import)\b/g, '<span class="kw">$1</span>')
      out = out.replace(/\b(graphbench)\b/g, '<span class="ns">$1</span>')
      out = out.replace(/\b(loader|optimize|evaluator)\b/g, '<span class="fn">$1</span>')
      out = out.replace(/\b(model|dataset_name|datasets|dataset|opt_model|opt_models|results|name)\b/g, '<span class="var">$1</span>')
      out = out.replace(/'([^']*)'/g, "<span class=\"str\">'$1'</span>")
      out = out.replace(/#([^\n]*)/g, '<span class="com">#$1</span>')
      return out
    }

    const update = () => {
      const plain = genPlainCode()
      const colored = tokenColorize(plain)
      codeEl.innerHTML = colored
      copyBtn.setAttribute('data-copy', plain)
    }

    mount.addEventListener('change', (e) => {
      const t = e.target as HTMLInputElement
      if (!t || t.type !== 'checkbox') return
      const dsId = t.getAttribute('data-dsid')
      const subsetId = t.getAttribute('data-subset')
      if (dsId) {
        if (t.checked) { selectedIds.add(dsId) } else { selectedIds.delete(dsId) }
        // Update row styling without rebuilding the entire list so CSS transitions can play
        const row = t.closest('.ds-row') as HTMLElement | null
        if (row) row.classList.toggle('selected', t.checked)
        update(); return
      }
      if (subsetId) {
        if (subsetId === 'easy') { t.checked ? arSubsets.add('easy') : arSubsets.delete('easy') }
        if (subsetId === 'medium') { t.checked ? arSubsets.add('medium') : arSubsets.delete('medium') }
        if (subsetId === 'hard') { t.checked ? arSubsets.add('hard') : arSubsets.delete('hard') }
        ensureSubsetAtLeastOne(); render(); update(); return
      }
    })

    const ensureSubsetAtLeastOne = () => {
      if (arSubsets.size === 0) { arSubsets.add('easy') }
    }

    if (optPreFilter) optPreFilter.addEventListener('change', update)
    if (optPreTransform) optPreTransform.addEventListener('change', update)
    if (optTransform) optTransform.addEventListener('change', update)

    copyBtn.addEventListener('click', async () => {
      const text = copyBtn.getAttribute('data-copy') || ''
      try { await navigator.clipboard.writeText(text) } catch { }
    })

    render(); ensureSubsetAtLeastOne(); update()
  })()

