import '../style.css'
import { renderLayout, enhanceInteractions } from '../shared/layout'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = renderLayout('home', `
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
`, 'home-main')

// Ensure scrolling is enabled on the home page
document.body.classList.remove('no-body-scroll')
document.documentElement.classList.remove('no-root-scroll')

// Dynamic hero lock: treat the hero as the sole first viewport on wide/short screens
const syncHeroLock = () => {
  const width = window.innerWidth || document.documentElement.clientWidth
  const height = window.innerHeight || document.documentElement.clientHeight
  const shouldLock = width >= 1000 && height <= 850
  document.body.classList.toggle('home-hero-lock', shouldLock)
  const isTallWide = width >= 1000 && height > 850
  document.body.classList.toggle('home-hero-tall', isTallWide)
}
syncHeroLock()
window.addEventListener('resize', syncHeroLock, { passive: true })

// --- Flow figure wiring ---
; (function () {
  const svg = document.getElementById('flow-svg') as SVGSVGElement | null
  const wrap = document.getElementById('flow-figure') as HTMLElement | null
  if (!svg || !wrap) return

  const shell = wrap.parentElement as HTMLElement | null
  if (!shell) return

  // Make the entire flow figure scale like an image:
  // - centered
  // - occupies exactly 80% of the screen width (within its container), but never larger than its initial width
  // - all contents (including fonts) scale uniformly
  let baseWidth: number | null = null
  let baseHeight: number | null = null

  const ensureBaseSize = () => {
    if (baseWidth !== null && baseHeight !== null) return
    const rect = wrap.getBoundingClientRect()
    if (!rect.width || !rect.height) return
    baseWidth = rect.width
    baseHeight = rect.height
    wrap.style.width = `${baseWidth}px`
    wrap.style.height = `${baseHeight}px`

    // Static shell layout properties; size is handled in applyScale
    shell.style.display = 'flex'
    shell.style.alignItems = 'center'
    shell.style.justifyContent = 'center'
    shell.style.marginInline = 'auto'
    shell.style.maxWidth = `${baseWidth}px`
  }

  const applyScale = () => {
    ensureBaseSize()
    if (baseWidth === null || baseHeight === null) return

    // Width in vw, increasing on smaller screens: 66vw → 70vw → 74vw
    const viewportWidth = window.innerWidth || document.documentElement.clientWidth || baseWidth
    let vwWidth = 66
    if (viewportWidth <= 1000) vwWidth = 70
    if (viewportWidth <= 650) vwWidth = 80
    if (viewportWidth <= 400) vwWidth = 90
    shell.style.width = `${vwWidth}vw`

    const shellRect = shell.getBoundingClientRect()
    const targetVisualWidth = shellRect.width || baseWidth
    const scale = targetVisualWidth / baseWidth
    const visualHeight = baseHeight * scale

    shell.style.height = `${visualHeight}px`
    wrap.style.transformOrigin = 'top center'
    wrap.style.transform = `scale(${scale})`
  }

  // Inject dataset icons from datasets page helper (duplicated minimal inline set)
  const iconFor = (id: string): string => {
    switch (id) {
      case 'social': return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="3"/><path d="M6 19c0-2.5 3-4 6-4s6 1.5 6 4"/></svg>'
      case 'chip': return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="7" y="7" width="10" height="10" rx="2"/><path d="M7 3v2M12 3v2M17 3v2M21 7h-2M21 12h-2M21 17h-2M3 7h2M3 12h2M3 17h2M7 21v-2M12 21v-2M17 21v-2"/></svg>'
      case 'circuits': return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="10" y="2" width="4" height="2" rx="0.5"/><rect x="20" y="10" width="2" height="4" rx="0.5"/><rect x="10" y="20" width="4" height="2" rx="0.5"/><rect x="2" y="10" width="2" height="4" rx="0.5"/><path d="M4 12h7v2h2h5"/></svg>'
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
    applyScale()
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

    // Line thickness breakpoints (you can tweak these values)
    const viewportWidth = window.innerWidth || document.documentElement.clientWidth || s.width
    let strokeWidth = 2
    if (viewportWidth <= 1000) strokeWidth = 1.7
    if (viewportWidth <= 720) strokeWidth = 1.4
    if (viewportWidth <= 520) strokeWidth = 1.1

    // Left -> model (enter model at 180°)
    leftNodes.forEach(n => {
      const g = Number(n.getAttribute('data-group') || '1')
      const r = n.getBoundingClientRect()
      const x1 = r.right - s.left
      const y1 = r.top - s.top + r.height / 2
      const x2 = modelLeft
      const y2 = modelCy
      const d = cubicHoriz(x1, y1, x2, y2)
      svg.appendChild(makePath(d, colorForGroup(g), strokeWidth))
    })

    // Model -> right (leave model at 0°)
    rightNodes.forEach((n, idx) => {
      const r = n.getBoundingClientRect()
      const x1 = modelRight
      const y1 = modelCy
      const x2 = r.left - s.left
      const y2 = r.top - s.top + r.height / 2
      const d = cubicHoriz(x1, y1, x2, y2)
      svg.appendChild(makePath(d, evalColors[idx] || evalColors[0], strokeWidth))
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
    const mount = document.getElementById('config-panel') as HTMLElement | null
    const codeEl = document.getElementById('gen-code') as HTMLElement | null
    if (!mount || !codeEl) return

    type Item = { id: string; name: string; hasSubsets?: boolean; hasResolution?: boolean }
    const items: Item[] = [
      { id: 'social', name: 'Social Networks' },
      { id: 'chip', name: 'Chip Design' },
      { id: 'circuits', name: 'Electronic Circuits' },
      { id: 'sat', name: 'SAT Solving' },
      { id: 'co', name: 'Combinatorial Optimization' },
      { id: 'ar', name: 'Algorithmic Reasoning', hasSubsets: true },
      { id: 'weather', name: 'Weather Forecasting', hasResolution: true },
    ]

    // Define subsets for all datasets (single subset equal to main for simple ones)
    const subsetsByDataset: Record<string, string[]> = {
      social: ['social_networks'],
      chip: ['chip_design'],
      circuits: ['electronic_circuits'],
      sat: ['sat_solving'],
      co: ['combinatorial_optimization'],
      ar: ['algo_res_easy', 'algo_res_medium', 'algo_res_hard'],
      weather: ['era5_64x32', 'era5_240x121'],
    }

    // state
    const selectedIds = new Set<string>()
    const selectedSubsets = Object.fromEntries(Object.keys(subsetsByDataset).map(id => [id, new Set<string>()])) as Record<string, Set<string>>
    const expandedIds = new Set<string>()
    const customSplits = Object.fromEntries(Object.keys(subsetsByDataset).map(id => [id, {}])) as Record<string, Record<string, { train: number, valid: number, test: number }>>
    const openSplitPanels = new Set<string>()

    // defaults: none selected

    // Local icon set for dataset rows
    const iconFor = (id: string): string => {
      switch (id) {
        case 'social': return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="3"/><path d="M6 19c0-2.5 3-4 6-4s6 1.5 6 4"/></svg>'
        case 'chip': return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="7" y="7" width="10" height="10" rx="2"/><path d="M7 3v2M12 3v2M17 3v2M21 7h-2M21 12h-2M21 17h-2M3 7h2M3 12h2M3 17h2M7 21v-2M12 21v-2M17 21v-2"/></svg>'
        case 'circuits': return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="10" y="2" width="4" height="2" rx="0.5"/><rect x="20" y="10" width="2" height="4" rx="0.5"/><rect x="10" y="20" width="4" height="2" rx="0.5"/><rect x="2" y="10" width="2" height="4" rx="0.5"/><path d="M4 12h7v2h2h5"/></svg>'
        case 'sat': return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 7h6a5 5 0 0 1 0 10H6z"/><path d="M6 9H3M6 15H3M17 12h4"/></svg>'
        case 'co': return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 4v16" stroke-dasharray="3 3"/><circle cx="6" cy="8" r="2"/><circle cx="6" cy="16" r="2"/><circle cx="18" cy="8" r="2"/><circle cx="18" cy="16" r="2"/><path d="M8 9l3 2"/><path d="M13 11l3 2"/><path d="M8 15l3-2"/><path d="M13 13l3-2"/></svg>'
        case 'ar': return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="6" height="4" rx="1"/><rect x="15" y="3" width="6" height="4" rx="1"/><rect x="9" y="17" width="6" height="4" rx="1"/><path d="M6 7v4h12V7M12 13v4"/></svg>'
        case 'weather': return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 16.5a4.5 4.5 0 0 0-2-8.5 5 5 0 0 0-9.6 1.5A3.5 3.5 0 1 0 5 16"/><path d="M8 19v2M12 18v3M16 19v2"/></svg>'
        default: return ''
      }
    }

    const colorVarFor = (id: string): string => {
      switch (id) {
        case 'social': return 'var(--ds-g1)'
        case 'chip':
        case 'circuits': return 'var(--ds-g2)'
        case 'sat':
        case 'co':
        case 'ar': return 'var(--ds-g3)'
        case 'weather': return 'var(--ds-g4)'
        default: return 'var(--text-2)'
      }
    }

    const subRowsMarkupFor = (dsId: string): string => {
      const parentSelected = selectedIds.has(dsId)
      const subs = subsetsByDataset[dsId] || []
      const sel = selectedSubsets[dsId] || new Set<string>()
      const rows = subs.map(sub => {
        const checked = parentSelected && sel.has(sub) ? 'checked' : ''
        const splitSlider = splitSliderMarkup(dsId, sub)
        const safeId = `sub_${dsId}_${sub}`.replace(/[^a-zA-Z0-9_-]/g, '-')
        return `<div class="sub-row-container">
          <div class="sub-row">
            <input id="${safeId}" type="checkbox" data-sub-ds="${dsId}" data-sub="${sub}" ${checked}/>
            <label class="sub-name" for="${safeId}">
              <span class="sub-text">${sub}</span>
              <button type="button" class="sub-plus-btn" data-sub-plus="${dsId}-${sub}" aria-label="Add custom options for ${sub}" title="Add options">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </button>
              <div class="sub-options" data-sub-opts="${dsId}-${sub}" hidden>
                <button class="sub-opt-row" data-action="add-mask" data-sub-ds="${dsId}" data-sub="${sub}">Add custom train/valid/test mask</button>
                <!-- future options go here -->
              </div>
            </label>
          </div>
          ${splitSlider}
        </div>`
      }).join('')
      return `<div class="side-sub">${rows}</div>`
    }

    const splitSliderMarkup = (dsId: string, subId: string): string => {
      const splitKey = `${dsId}-${subId}`
      const currentSplit = customSplits[dsId]?.[subId] || { train: 80, valid: 10, test: 10 }
      const isOpen = openSplitPanels.has(splitKey)

      if (!isOpen) return ''

      return `
        <div class="split-panel" data-split-panel="${splitKey}">
          <div class="split-header">Train/Valid/Test Mask
            <button type="button" class="split-remove-btn" data-remove-split="${splitKey}" aria-label="Remove mask" title="Remove">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            </button>
          </div>
          <div class="split-slider-container">
            <div class="split-slider" data-split-key="${splitKey}">
              <div class="split-track">
                <div class="split-segment train" style="left: 0%; width: ${currentSplit.train}%"></div>
                <div class="split-segment valid" style="left: ${currentSplit.train}%; width: ${currentSplit.valid}%"></div>
                <div class="split-segment test" style="left: ${currentSplit.train + currentSplit.valid}%; width: ${currentSplit.test}%"></div>
              </div>
              <div class="split-handles">
                <div class="split-handle" data-handle="p1" style="left: ${currentSplit.train}%"></div>
                <div class="split-handle" data-handle="p2" style="left: ${currentSplit.train + currentSplit.valid}%"></div>
              </div>
            </div>
            <div class="split-labels">
              <span class="split-label train">Train: ${currentSplit.train}%</span>
              <span class="split-label valid">Valid: ${currentSplit.valid}%</span>
              <span class="split-label test">Test: ${currentSplit.test}%</span>
            </div>
          </div>
        </div>
      `
    }

    const render = () => {
      const chev = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"></polyline></svg>'
      const dsRows = items.map(r => {
        const checked = selectedIds.has(r.id)
        const isExpanded = expandedIds.has(r.id)
        const hasDrop = (subsetsByDataset[r.id] || []).length > 0
        const sub = hasDrop ? subRowsMarkupFor(r.id) : ''
        return `
          <div class="ds-item" data-ds="${r.id}">
            <div class="side-row ds-main" data-dsrow>
              <label class="side-check"><input type="checkbox" data-select="${r.id}" ${checked ? 'checked' : ''}/></label>
              <span class="ds-icon" style="color:${colorVarFor(r.id)}">${iconFor(r.id)}</span>
              <span class="ds-name">${r.name}</span>
              ${hasDrop ? `<button class="ds-disclose" data-ds-toggle="${r.id}" aria-expanded="${isExpanded}" aria-label="Toggle options">${chev}</button>` : '<span class="ds-disclose ds-space" aria-hidden="true"></span>'}
            </div>
            ${hasDrop ? `<div class="ds-subwrap" data-open="${isExpanded}"><div class="ds-sub">${sub}</div></div>` : ''}
          </div>`
      }).join('')

      const optPF = document.getElementById('opt-pre-filter') as HTMLInputElement | null
      const optPT = document.getElementById('opt-pre-transform') as HTMLInputElement | null
      const optT = document.getElementById('opt-transform') as HTMLInputElement | null

      mount.innerHTML = `
        <div class="side-group" aria-label="Your model options">
          <div class="side-collapsible model-opts" data-open="false" id="model-coll">
            <div class="head" data-coll-toggle="model-coll">
              <span class="label">Your model options</span>
              <button class="ds-disclose" data-coll-toggle="model-coll" aria-expanded="false" aria-label="Toggle model options">${chev}</button>
            </div>
            <div class="body">
              <div class="opts-intro">I want to use my custom...</div>
              <label class="side-row"><input type="checkbox" id="opt-pre-filter" ${optPF && optPF.checked ? 'checked' : ''}/> <span>pre_filter</span></label>
              <label class="side-row"><input type="checkbox" id="opt-pre-transform" ${optPT && optPT.checked ? 'checked' : ''}/> <span>pre_transform</span></label>
              <label class="side-row"><input type="checkbox" id="opt-transform" ${optT && optT.checked ? 'checked' : ''}/> <span>transform</span></label>
            </div>
          </div>
        </div>
        <div class="side-group" aria-label="Datasets">
          <div class="side-label">Datasets</div>
          <div class="side-list">${dsRows}</div>
        </div>`
    }

    // Compute selected subset names for code generation
    const selectedSubsetNames = (): string[] => {
      const ids = Array.from(selectedIds.values())
      return ids.flatMap(id => Array.from(selectedSubsets[id] || []))
    }

    const genPlainCode = (): string => {
      const names = selectedSubsetNames()
      const useList = names.length !== 1
      const optPF = !!(document.getElementById('opt-pre-filter') as HTMLInputElement | null)?.checked
      const optPT = !!(document.getElementById('opt-pre-transform') as HTMLInputElement | null)?.checked
      const optT = !!(document.getElementById('opt-transform') as HTMLInputElement | null)?.checked
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

      // Add custom splits if any exist
      const hasCustomSplits = names.some(name => {
        const entry = Object.entries(subsetsByDataset).find(([_, subs]) => subs.includes(name))
        if (!entry) return false
        const [dsId] = entry
        return dsId && customSplits[dsId]?.[name]
      })

      if (hasCustomSplits) {
        lines.push('')
        lines.push('# Custom train/valid/test splits')
        names.forEach(name => {
          const entry = Object.entries(subsetsByDataset).find(([_, subs]) => subs.includes(name))
          if (!entry) return
          const [dsId] = entry
          if (dsId && customSplits[dsId]?.[name]) {
            const split = customSplits[dsId][name]
            lines.push(`split_${name.replace(/[^a-zA-Z0-9]/g, '_')} = (${split.train / 100}, ${split.valid / 100}, ${split.test / 100})  # ${name}`)
          }
        })
      }

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
      // Ensure anything inside a comment is styled as a comment (strip nested spans)
      out = out.replace(/#([^\n]*)/g, (_m, p1) => {
        const cleaned = String(p1).replace(/<[^>]+>/g, '')
        return '<span class="com">#' + cleaned + '</span>'
      })
      out = out.replace(/<span class=\"com\">#([^<]*)\bgraphbench\b([^<]*)<\/span>/g, '<span class="com">#$1</span><span class="ns">graphbench</span><span class="com">$2</span>')
      return out
    }

    const update = () => {
      const plain = genPlainCode()
      const colored = tokenColorize(plain)
      codeEl.innerHTML = colored
      // Update copy button with current code
      const copyBtn = document.querySelector('.builder-copy-btn') as HTMLButtonElement | null
      if (copyBtn) {
        copyBtn.setAttribute('data-copy', plain)
      }
    }

    const syncDisclosureUI = () => {
      const list = mount.querySelectorAll('.ds-item') as NodeListOf<HTMLElement>
      list.forEach(item => {
        const id = item.getAttribute('data-ds') || ''
        const subwrap = item.querySelector('.ds-subwrap') as HTMLElement | null
        const toggleBtn = item.querySelector('[data-ds-toggle]') as HTMLButtonElement | null
        const open = expandedIds.has(id)
        if (subwrap) subwrap.setAttribute('data-open', open ? 'true' : 'false')
        if (toggleBtn) toggleBtn.setAttribute('aria-expanded', open.toString())
        // sync subset checkboxes to current state
        const inputs = item.querySelectorAll('input[data-sub]') as NodeListOf<HTMLInputElement>
        const parentSelected = selectedIds.has(id)
        const sel = selectedSubsets[id] || new Set<string>()
        inputs.forEach(inp => {
          const sub = inp.getAttribute('data-sub') || ''
          inp.checked = parentSelected && sel.has(sub)
        })
        // sync main checkbox visual if needed (event target already accurate)
        const main = item.querySelector('input[data-select]') as HTMLInputElement | null
        if (main && main.getAttribute('data-select') === id) {
          main.checked = selectedIds.has(id)
        }
      })
    }

    mount.addEventListener('change', (e) => {
      const t = e.target as HTMLInputElement
      if (!t) return
      const dsId = t.getAttribute('data-select')
      const subDsId = t.getAttribute('data-sub-ds')
      const subValue = t.getAttribute('data-sub')
      const idAttr = t.getAttribute('id')
      if (dsId) {
        if (t.checked) {
          selectedIds.add(dsId)
          // Select ALL subsets for parent selection
          selectedSubsets[dsId] = new Set<string>((subsetsByDataset[dsId] || []))
          // Expand current, collapse others
          expandedIds.clear(); expandedIds.add(dsId)
        } else {
          selectedIds.delete(dsId)
          // Unselect ALL subsets
          selectedSubsets[dsId].clear()
          expandedIds.delete(dsId)
        }
        // Update UI in place for smooth animation
        syncDisclosureUI(); update(); return
      }
      if (subDsId && subValue) {
        // Ensure parent dataset is selected when any subset is selected
        const set = selectedSubsets[subDsId] || new Set<string>()
        if (t.checked) {
          set.add(subValue)
          selectedIds.add(subDsId)
          // Do NOT auto-select other subsets here
        } else {
          set.delete(subValue)
          // If no subsets remain selected, unselect the parent
          if (set.size === 0) {
            selectedIds.delete(subDsId)
          }
        }
        selectedSubsets[subDsId] = set
        // Keep current dataset expanded for visibility
        expandedIds.add(subDsId)
        syncDisclosureUI(); update(); return
      }
      if (idAttr === 'opt-pre-filter' || idAttr === 'opt-pre-transform' || idAttr === 'opt-transform') { update(); return }
    })

    mount.addEventListener('click', (e) => {
      // Dedicated handler for sub-plus triggers
      const plusEl = (e.target as HTMLElement).closest('[data-sub-plus]') as HTMLElement | null
      if (plusEl) {
        e.preventDefault()
        e.stopPropagation()
        const key = plusEl.getAttribute('data-sub-plus') || ''
        if (key) {
          // close any open options first
          mount.querySelectorAll<HTMLElement>('.sub-options').forEach(el => { el.hidden = true })
          const pop = mount.querySelector(`[data-sub-opts="${key}"]`) as HTMLElement | null
          if (pop) pop.hidden = false
        }
        return
      }

      const btn = (e.target as HTMLElement).closest('button') as HTMLButtonElement | null
      if (!btn) return
      const mode = btn.getAttribute('data-mode') as 'standard' | 'custom' | null
      if (mode) { return }
      // toggle model collapsible
      const collToggle = (e.target as HTMLElement).closest('[data-coll-toggle]') as HTMLElement | null
      if (collToggle) {
        const id = collToggle.getAttribute('data-coll-toggle') || ''
        const el = document.getElementById(id)
        if (el) {
          const open = el.getAttribute('data-open') === 'true'
          el.setAttribute('data-open', open ? 'false' : 'true')
          const btn = el.querySelector('.head [data-coll-toggle]') as HTMLButtonElement | null
          if (btn) btn.setAttribute('aria-expanded', (!open).toString())
        }
        return
      }
      const dsToggle = btn.getAttribute('data-ds-toggle')
      if (dsToggle) {
        const willOpen = !expandedIds.has(dsToggle)
        if (willOpen) { expandedIds.clear(); expandedIds.add(dsToggle) } else { expandedIds.delete(dsToggle) }
        syncDisclosureUI();
        return
      }
      // fallthrough for other buttons
    })

    // Allow clicking anywhere on dataset row to expand/collapse (not only arrow)
    mount.addEventListener('click', (e) => {
      const row = (e.target as HTMLElement).closest('.side-row[data-dsrow]') as HTMLElement | null
      if (!row) return
      // ignore if clicking the checkbox or disclose button itself
      const isCheckbox = (e.target as HTMLElement).closest('input[type="checkbox"]')
      const isDiscloseBtn = (e.target as HTMLElement).closest('[data-ds-toggle]')
      if (isCheckbox || isDiscloseBtn) return
      const item = row.closest('.ds-item') as HTMLElement | null
      const dsId = item?.getAttribute('data-ds') || ''
      if (!dsId) return
      const willOpen = !expandedIds.has(dsId)
      if (willOpen) { expandedIds.clear(); expandedIds.add(dsId) } else { expandedIds.delete(dsId) }
      syncDisclosureUI()
    })

    // Allow clicking anywhere on the model options header area to expand/collapse
    mount.addEventListener('click', (e) => {
      const coll = (e.target as HTMLElement).closest('#model-coll') as HTMLElement | null
      if (!coll) return
      const head = (e.target as HTMLElement).closest('#model-coll .head') as HTMLElement | null
      const isToggleBtn = (e.target as HTMLElement).closest('#model-coll [data-coll-toggle]')
      const isInteractive = (e.target as HTMLElement).closest('#model-coll .body input, #model-coll .body button, #model-coll .body label')
      // If clicking in header area or empty part of container (not on inputs), toggle
      if (head || (!isInteractive && !isToggleBtn && (e.target as HTMLElement).closest('#model-coll'))) {
        const open = coll.getAttribute('data-open') === 'true'
        coll.setAttribute('data-open', open ? 'false' : 'true')
        const tbtn = coll.querySelector('.head [data-coll-toggle]') as HTMLButtonElement | null
        if (tbtn) tbtn.setAttribute('aria-expanded', (!open).toString())
      }
    })

    // Handle clicks on options within the sub-options popover
    mount.addEventListener('click', (e) => {
      const opt = (e.target as HTMLElement).closest('.sub-opt-row') as HTMLButtonElement | null
      if (!opt) return
      const action = opt.getAttribute('data-action')
      if (action === 'add-mask') {
        const ds = opt.getAttribute('data-sub-ds') || ''
        const sub = opt.getAttribute('data-sub') || ''
        const key = `${ds}-${sub}`
        openSplitPanels.add(key)
        // hide the options popover
        const pop = mount.querySelector(`[data-sub-opts="${key}"]`) as HTMLElement | null
        if (pop) pop.hidden = true
        render(); update()
        return
      }
    })

    // Remove split mask via minus button
    mount.addEventListener('click', (e) => {
      const rm = (e.target as HTMLElement).closest('[data-remove-split]') as HTMLElement | null
      if (!rm) return
      e.preventDefault()
      const key = rm.getAttribute('data-remove-split') || ''
      if (!key) return
      const [dsId, subId] = key.split('-')
      // close panel and delete custom split
      openSplitPanels.delete(key)
      if (customSplits[dsId] && customSplits[dsId][subId]) {
        delete customSplits[dsId][subId]
      }
      render(); update()
    })

    // copy button removed; no click handler needed

    // Update only the UI of a split slider (no full rerender)
    const updateSplitUI = (splitKey: string) => {
      const [dsId, subId] = splitKey.split('-')
      const current = customSplits[dsId]?.[subId]
      if (!current) return
      const root = document.querySelector(`.split-panel[data-split-panel="${splitKey}"]`) as HTMLElement | null
      if (!root) return
      const p1Val = current.train
      const p2Val = current.train + current.valid
      const trainSeg = root.querySelector('.split-segment.train') as HTMLElement | null
      const validSeg = root.querySelector('.split-segment.valid') as HTMLElement | null
      const testSeg = root.querySelector('.split-segment.test') as HTMLElement | null
      if (trainSeg) { trainSeg.style.left = '0%'; trainSeg.style.width = `${current.train}%` }
      if (validSeg) { validSeg.style.left = `${p1Val}%`; validSeg.style.width = `${current.valid}%` }
      if (testSeg) { testSeg.style.left = `${p2Val}%`; testSeg.style.width = `${current.test}%` }
      const h1 = root.querySelector('.split-handle[data-handle="p1"]') as HTMLElement | null
      const h2 = root.querySelector('.split-handle[data-handle="p2"]') as HTMLElement | null
      if (h1) h1.style.left = `${p1Val}%`
      if (h2) h2.style.left = `${p2Val}%`
      const labTrain = root.querySelector('.split-label.train') as HTMLElement | null
      const labValid = root.querySelector('.split-label.valid') as HTMLElement | null
      const labTest = root.querySelector('.split-label.test') as HTMLElement | null
      if (labTrain) labTrain.textContent = `Train: ${current.train}%`
      if (labValid) labValid.textContent = `Valid: ${current.valid}%`
      if (labTest) labTest.textContent = `Test: ${current.test}%`
    }

    // Add slider interaction handlers with 1% snapping and two-handle logic
    const handleSliderUpdate = (splitKey: string, handleType: 'p1' | 'p2', newPosition: number) => {
      const [dsId, subId] = splitKey.split('-')
      if (!customSplits[dsId]) customSplits[dsId] = {}
      if (!customSplits[dsId][subId]) customSplits[dsId][subId] = { train: 80, valid: 10, test: 10 }

      const current = customSplits[dsId][subId]
      let p1 = current.train
      let p2 = current.train + current.valid

      const pos = Math.max(0, Math.min(100, Math.round(newPosition)))
      if (handleType === 'p1') {
        p1 = Math.max(0, Math.min(pos, p2))
      } else {
        p2 = Math.max(p1, Math.min(pos, 100))
      }

      const train = p1
      const valid = Math.max(0, p2 - p1)
      const test = Math.max(0, 100 - p2)
      customSplits[dsId][subId] = { train, valid, test }
      updateSplitUI(splitKey)
      update()
    }

    // Add mouse event listeners for sliders
    mount.addEventListener('mousedown', (e) => {
      const handle = (e.target as HTMLElement).closest('.split-handle') as HTMLElement | null
      if (!handle) return

      e.preventDefault()
      const slider = handle.closest('.split-slider') as HTMLElement | null
      if (!slider) return

      const splitKey = slider.getAttribute('data-split-key') || ''
      const handleType = handle.getAttribute('data-handle') as 'p1' | 'p2'
      const sliderRect = slider.getBoundingClientRect()

      const updatePosition = (clientX: number) => {
        const x = clientX - sliderRect.left
        const percentage = Math.max(0, Math.min(100, (x / sliderRect.width) * 100))
        handleSliderUpdate(splitKey, handleType, percentage)
      }

      const onMouseMove = (e: MouseEvent) => updatePosition(e.clientX)
      const onMouseUp = () => {
        document.removeEventListener('mousemove', onMouseMove)
        document.removeEventListener('mouseup', onMouseUp)
      }

      document.addEventListener('mousemove', onMouseMove)
      document.addEventListener('mouseup', onMouseUp)
    })

    render(); update()
  })()

// --- Hero text auto scaling ---
; (() => {
  const hero = document.querySelector<HTMLElement>('.hero.hero-primary')
  const heroLeft = hero?.querySelector<HTMLElement>('.hero-left')
  if (!hero || !heroLeft) return

  const arrow = hero.querySelector<HTMLElement>('.arrow-btn.arrow-down')
  const header = document.getElementById('site-header') as HTMLElement | null
  const reduceMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
  const stackedLayoutQuery = window.matchMedia('(max-width: 980px)')
  const graphlandHiddenQuery = window.matchMedia('(max-width: 1000px)')
  const heroRight = hero.querySelector<HTMLElement>('.hero-right')

  const MIN_SCALE = 0.65
  const MAX_SCALE_GRAPH = 1
  const MAX_SCALE_COMPACT = 1.15
  const FILL_RATIO = 0.86 // leave space for hero-right + breathing room
  let currentScale = (() => {
    const initial = Number.parseFloat(getComputedStyle(heroLeft).getPropertyValue('--hero-text-scale'))
    return Number.isFinite(initial) && initial > 0 ? initial : 1
  })()
  let rafId: number | null = null
  let isAdjusting = false
  let pending = false

  const maxScaleForLayout = (allowGrow: boolean) => {
    const graphlandVisible = heroRight ? getComputedStyle(heroRight).display !== 'none' && !graphlandHiddenQuery.matches : !graphlandHiddenQuery.matches
    const desiredMax = graphlandVisible ? MAX_SCALE_GRAPH : MAX_SCALE_COMPACT
    return allowGrow ? desiredMax : Math.min(1, desiredMax)
  }

  const clampScale = (value: number, allowGrow: boolean) => {
    const max = maxScaleForLayout(allowGrow)
    const min = Math.min(MIN_SCALE, max)
    return Math.max(min, Math.min(max, value))
  }

  const headerHeight = () => {
    if (header) return header.offsetHeight
    const cssValue = getComputedStyle(document.documentElement).getPropertyValue('--header-h')
    const parsed = Number.parseFloat(cssValue)
    return Number.isFinite(parsed) ? parsed : 64
  }

  const viewportHeight = () => {
    if (window.visualViewport) return window.visualViewport.height
    if (typeof window.innerHeight === 'number') return window.innerHeight
    return document.documentElement.clientHeight
  }

  const getAvailableHeight = () => {
    const arrowHeight = arrow?.offsetHeight ?? 0
    const reserved = arrowHeight ? arrowHeight + 56 : 96
    return Math.max(0, viewportHeight() - headerHeight() - reserved)
  }

  const applyScale = () => {
    const available = getAvailableHeight()
    if (!available) return
    const measuredHeight = heroLeft.scrollHeight
    if (!measuredHeight) return

    // Base height is the un-scaled height (current measurement divided by applied scale)
    const baseHeight = measuredHeight / (currentScale || 1)
    if (!baseHeight) return

    const allowGrow = !stackedLayoutQuery.matches
    const targetScale = clampScale((available / baseHeight) * FILL_RATIO, allowGrow)

    if (Math.abs(targetScale - currentScale) < 0.02) return
    currentScale = targetScale
    isAdjusting = true
    heroLeft.style.setProperty('--hero-text-scale', targetScale.toFixed(3))
    requestAnimationFrame(() => {
      isAdjusting = false
      if (pending) {
        pending = false
        schedule()
      }
    })
  }

  const schedule = () => {
    if (reduceMotionQuery.matches) return
    if (isAdjusting) {
      pending = true
      return
    }
    if (rafId !== null) return
    rafId = requestAnimationFrame(() => {
      rafId = null
      applyScale()
    })
  }

  schedule()

  const handleResize = () => schedule()
  window.addEventListener('resize', handleResize)
  const bindMediaQuery = (mq: MediaQueryList | null) => {
    if (!mq) return
    if (typeof mq.addEventListener === 'function') {
      mq.addEventListener('change', handleResize)
    } else if (typeof mq.addListener === 'function') {
      mq.addListener(handleResize)
    }
  }
  bindMediaQuery(stackedLayoutQuery)
  bindMediaQuery(reduceMotionQuery)
  bindMediaQuery(graphlandHiddenQuery)

  const observer = new ResizeObserver(() => schedule())
  observer.observe(hero)
  observer.observe(heroLeft)
  if (heroRight) observer.observe(heroRight)
})()

// Initialize copy button functionality
enhanceInteractions()

