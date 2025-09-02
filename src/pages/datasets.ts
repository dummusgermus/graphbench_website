import '../style.css'
import { initWeatherGlobe } from '../features/weather/globe'
import { renderLayout } from '../shared/layout'
import { initArGraphVisualizer } from '../features/ar/visualizer'

type Ds = { id: string; name: string; group: number; regimes: string[] }
const items: Ds[] = [
  { id: 'social', name: 'Social Networks', group: 1, regimes: ['Node-level'] },
  { id: 'chip', name: 'Chip Design', group: 2, regimes: ['Generation'] },
  { id: 'circuits', name: 'Electronic Circuits', group: 2, regimes: ['Graph-level'] },
  { id: 'sat', name: 'SAT Solving', group: 3, regimes: ['Node-level','Edge-level','Graph-level'] },
  { id: 'co', name: 'Combinatorial Optimization', group: 3, regimes: ['Node-level','Edge-level','Graph-level'] },
  { id: 'ar', name: 'Algorithmic Reasoning', group: 3, regimes: ['Graph-level','Edge-level'] },
  { id: 'weather', name: 'Weather Forecasting', group: 4, regimes: ['Node-level'] },
]

const dsIcon = (id: string): string => {
  switch (id) {
    case 'social':
      // person (head and shoulders)
      return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="3"/><path d="M6 19c0-2.5 3-4 6-4s6 1.5 6 4"/></svg>'
    case 'chip':
      // microchip
      return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="7" y="7" width="10" height="10" rx="2"/><path d="M7 3v2M12 3v2M17 3v2M21 7h-2M21 12h-2M21 17h-2M3 7h2M3 12h2M3 17h2M7 21v-2M12 21v-2M17 21v-2"/></svg>'
    case 'circuits':
      // small PCB: three pads and orthogonal traces
      return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4.5" y="6.5" width="3" height="3" rx="0.5"/><rect x="16.5" y="6.5" width="3" height="3" rx="0.5"/><rect x="10.5" y="14.5" width="3" height="3" rx="0.5"/><path d="M7.5 8h6v4h3"/></svg>'
    case 'sat':
      // AND gate style
      return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 7h6a5 5 0 0 1 0 10H6z"/><path d="M6 9H3M6 15H3M17 12h4"/></svg>'
    case 'co':
      // graph cut: two partitions separated by dashed line, crossing edges cut
      return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 4v16" stroke-dasharray="3 3"/><circle cx="6" cy="8" r="2"/><circle cx="6" cy="16" r="2"/><circle cx="18" cy="8" r="2"/><circle cx="18" cy="16" r="2"/><path d="M8 9l3 2"/><path d="M13 11l3 2"/><path d="M8 15l3-2"/><path d="M13 13l3-2"/></svg>'
    case 'ar':
      // flowchart
      return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="6" height="4" rx="1"/><rect x="15" y="3" width="6" height="4" rx="1"/><rect x="9" y="17" width="6" height="4" rx="1"/><path d="M6 7v4h12V7M12 13v4"/></svg>'
    case 'weather':
      // cloud with rain
      return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 16.5a4.5 4.5 0 0 0-2-8.5 5 5 0 0 0-9.6 1.5A3.5 3.5 0 1 0 5 16"/><path d="M8 19v2M12 18v3M16 19v2"/></svg>'
    default:
      return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M2 12h3M19 12h3M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12"/></svg>'
  }
}

// regimeChip kept for the previous card-based layout

// legacy card renderer kept for reference (not used in table layout)

const dsUnifiedRows = (rows: Ds[], group: number, label: string) => {
  const accent = group === 1 ? 'accent-g1' : group === 2 ? 'accent-g2' : group === 3 ? 'accent-g3' : 'accent-g4'
  const secId = `ds-sec-${group}`
  const headerRow = `<tr id=\"${secId}\" class=\"group-sep-row section-anchor\"><td colspan=\"8\"><div class=\"group-sep-label\">${label}</div></td></tr>`
  const bodyRows = rows.map((r, idx) => {
    const isLast = idx === rows.length - 1
    const rowCls = `${accent}${isLast ? ' group-last' : ''}`
    const tags = r.regimes.map(x => {
      const cls = x === 'Generation' ? 'tag-gen' : (x === 'Node-level') ? 'tag-node' : ((x === 'Edge-level' || x === 'edge-level') ? 'tag-edge' : 'tag-graph')
      return `<span class=\"chip-sm ${cls}\">${x}</span>`
    }).join(' ')
    const graphs = r.id === 'weather' ? '93.544' : '90k'
    const nodes = r.id === 'weather' ? '4.610' : '16–256'
    const edges = r.id === 'weather' ? '7.928' : '16–2556'
    const size = r.id === 'weather' ? '60.6GB' : '1.2GB'
    return `
    <tr class=\"${rowCls}\"> 
      <td class="accent-cell"></td>
      <td class="ds-name"><span class="icon">${dsIcon(r.id)}</span>${r.name}</td>
      <td>${graphs}</td>
      <td>${nodes}</td>
      <td>${edges}</td>
      <td>${tags}</td>
      <td>${size}</td>
      <td style=\"text-align:right; white-space: nowrap;\"><a class=\"btn btn-primary\" href=\"#\" data-dsid=\"${r.id}\">Learn more</a></td>
    </tr>`
  }).join('')
  return headerRow + bodyRows
}

// Build per-dataset slide (accented layout)
const dsSlide = (r: Ds, idx: number, total: number): string => {
  const tags = r.regimes.map(x => {
    const cls = x === 'Generation' ? 'tag-gen' : (x === 'Node-level') ? 'tag-node' : ((x === 'Edge-level' || x === 'edge-level') ? 'tag-edge' : 'tag-graph')
    return `<span class=\"chip-sm ${cls}\">${x}</span>`
  }).join(' ')
  // Always render an up arrow so the first dataset slide can return to the table slide
  const upBtn = `
    <button aria-label="Previous dataset" class="arrow-btn arrow-up" data-direction="up" title="Previous dataset">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <polyline points="18 15 12 9 6 15"></polyline>
      </svg>
    </button>`
  const downBtn = idx < total - 1 ? `
    <button aria-label="Next dataset" class="arrow-btn arrow-down" data-direction="down" title="Next dataset">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    </button>` : ''
  const prevName = idx === 0 ? 'Overview' : items[idx - 1].name
  const nextName = idx < total - 1 ? items[idx + 1].name : ''
  const accentClass = r.group === 1 ? 'accent-g1' : r.group === 2 ? 'accent-g2' : r.group === 3 ? 'accent-g3' : 'accent-g4'
  const proseHtml = r.id === 'weather'
    ? `<p>We use reanalysis data from the <a class="accent-link" href="https://cds.climate.copernicus.eu/datasets/reanalysis-era5-single-levels" target="_blank" rel="noopener">ERA5</a> dataset, preprocessed via the <a class="accent-link" href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2023MS004019" target="_blank" rel="noopener">WeatherBench2</a> pipeline. Our dataset consists of a down-sampled version containing a <strong class="accent-num">64 × 32</strong> equiangular grid, mapped onto an icosahedron spanning the globe.</p>
       <p>Each datapoint contains <strong class="accent-num tip-link tip-enhanced" data-vars="Surface variables:\n2-m temperature (2T)\n10-m u wind component (10U)\n10-m v wind component (10V)\nMean sea level pressure (MSL)\nTotal precipitation (TP)\n\nAtmospheric variables:\nTemperature (T)\nU component of wind (U)\nV component of wind (V)\nGeopotential (Z)\nSpecific humidity (Q)\nVertical wind speed (W)" tabindex="0" role="button" aria-label="Show variables" style="--tip-accent: var(--ds-g4);">11</strong> different variables defined across <strong class="accent-num">13</strong> pressure levels. Via message passing on the icosahedron, we determine the <strong class="accent-num">12h</strong> residual change in the atmospheric variables.</p>`
    : `<p>Placeholder overview text about ${r.name}. Describe the domain, data sources, typical prediction targets, and important structural properties of the graphs. Mention how nodes and edges are defined and how the connectivity captures meaningful relationships.</p>
       <p>Explain, at a high level, how graphs are constructed, why the chosen regimes apply here, and what makes this dataset challenging such as scale, sparsity, or long-range dependencies.</p>`

  const graphsVal = r.id === 'weather' ? '93.544' : '90k'
  const nodesVal = r.id === 'weather' ? '4.610' : '16–256'
  const edgesVal = r.id === 'weather' ? '7.928' : '16–2556'
  const sizeVal = r.id === 'weather' ? '60.6GB' : '1.2GB'

  return `
  <section class="snap-section ds-slide section-white ds-accent ${accentClass}${r.id === 'ar' ? ' ds-ar-stretch' : ''}" id="ds-${r.id}" style="background:#fff;">
    <div class="container">
      <div class="grid">
        <div class="col-6" style="margin-left:1rem;">
          <div class="title-row" style="gap:.75rem; align-items:center; margin-bottom:.8rem; flex-wrap:nowrap;">
            <span class="page-icon" aria-hidden="true" style="color: var(--accent);">
              ${dsIcon(r.id)}
            </span>
            <h2 style="margin:0; color: var(--accent); font-size: clamp(1.7rem, 3.4vw, 2.2rem);">${r.name}</h2>
          </div>
          <div class="tags" style="margin-top:.2rem; display:flex; gap:.4rem; flex-wrap:wrap;">${tags}</div>
          <div class="prose" style="margin-top:1rem;">${proseHtml}</div>
          <div class="grid" style="margin-top:.8rem; row-gap:.6rem;">
            <div class="col-6">
              <div class="stat-big stat-plain"><div class="value">${graphsVal}</div><div class="label">Graphs</div></div>
            </div>
            <div class="col-6">
              <div class="stat-big stat-plain"><div class="value">${nodesVal}</div><div class="label">Nodes</div></div>
            </div>
            <div class="col-6">
              <div class="stat-big stat-plain"><div class="value">${edgesVal}</div><div class="label">Edges</div></div>
            </div>
            <div class="col-6">
              <div class="stat-big stat-plain"><div class="value">${sizeVal}</div><div class="label">Size</div></div>
            </div>
          </div>
        </div>
        <div class="col-6 ${r.id === 'weather' ? 'wf-right' : (r.id === 'ar' ? 'ar-right' : '')}" id="ds-side-${r.id}"></div>
      </div>
      ${upBtn}
      <div class="arrow-caption arrow-caption-up">${prevName}</div>
      ${downBtn}
      ${nextName ? `<div class=\"arrow-caption arrow-caption-down\">${nextName}</div>` : ''}
    </div>
  </section>`
}

const app = document.querySelector<HTMLDivElement>('#app')!
const slidesHtml = `
  <!-- Slide 0: Table + header -->
  <section class="snap-section section-white slide-top" style="background:#fff;">
    <div class="container">
      <div class="page-header tight">
        <div class="title-row">
          <span class="page-icon" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
          </span>
          <h2>Datasets</h2>
        </div>
        <p class="lead">Get an overview over GraphBench's datasets. Or scroll down to learn more about each one.</p>
      </div>
      <div class="ds-section ds-y-nudge" style="--ds-y:-8px;">
        <table class="ds-table" aria-label="Datasets table">
          <colgroup>
            <col class="accent-col" />
            <col class="name-col" />
            <col class="graphs-col" />
            <col class="nodes-col" />
            <col class="edges-col" />
            <col class="reg-col" />
            <col class="size-col" />
            <col class="action-col" />
          </colgroup>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>#Graphs</th>
              <th>#Nodes</th>
              <th>#Edges</th>
              <th>Regimes</th>
              <th>Size</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            ${dsUnifiedRows([items[0]], 1, 'Social Sciences')}
            ${dsUnifiedRows([items[1], items[2]], 2, 'Hardware Design')}
            ${dsUnifiedRows([items[3], items[4], items[5]], 3, 'Logic, Algorithms, Optimization')}
            ${dsUnifiedRows([items[6]], 4, 'Earth Systems')}
          </tbody>
        </table>
      </div>
      <button aria-label="Scroll down" class="arrow-btn arrow-down" data-direction="down" title="Scroll down">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
      <div class="arrow-caption arrow-caption-down">${items[0].name}</div>
    </div>
  </section>
  ${items.map((r, i) => dsSlide(r, i, items.length)).join('')}
`
app.innerHTML = renderLayout('datasets', slidesHtml, 'snap-container')

// Avoid double scrollbars when snap container is active
document.body.classList.add('no-body-scroll')
document.documentElement.classList.add('no-root-scroll')

// Arrow scroll to next/prev slide (use snap container scroll position)
const handleArrow = (btn: HTMLButtonElement) => {
  const direction = btn.getAttribute('data-direction') || 'down'
  const container = document.getElementById('main') as HTMLElement
  const slides = Array.from(document.querySelectorAll('.snap-section')) as HTMLElement[]
  const viewportTop = container.scrollTop
  const currentIndex = slides.reduce((best, el, idx) => {
    const y = el.offsetTop
    const dist = Math.abs(y - viewportTop)
    return dist < best.dist ? { idx, dist } : best
  }, { idx: 0, dist: Number.POSITIVE_INFINITY }).idx
  const nextIndex = direction === 'up' ? Math.max(0, currentIndex - 1) : Math.min(slides.length - 1, currentIndex + 1)
  slides[nextIndex].scrollIntoView({ behavior: 'smooth', block: 'start' })
}

document.querySelectorAll<HTMLButtonElement>('.arrow-btn[data-direction]').forEach(btn => {
  btn.addEventListener('click', () => handleArrow(btn))
})

  // Wheel-to-snap: translate wheel deltas into slide navigation on the snap container
  ; (function () {
    const container = document.getElementById('main') as HTMLElement | null
    if (!container) return
    let isLocked = false
    const navigate = (dir: 'up' | 'down') => {
      const fakeBtn = document.createElement('button')
      fakeBtn.setAttribute('data-direction', dir)
      handleArrow(fakeBtn as HTMLButtonElement)
    }
    const onWheel = (e: WheelEvent) => {
      e.preventDefault()
      if (isLocked) return
      const dir = (e.deltaY || 0) > 0 ? 'down' : 'up'
      isLocked = true
      navigate(dir)
      setTimeout(() => { isLocked = false }, 650)
    }
    container.addEventListener('wheel', onWheel, { passive: false })
    const header = document.getElementById('site-header') as HTMLElement | null
    if (header) header.addEventListener('wheel', onWheel, { passive: false })
  })()

// Learn more buttons in the table jump to the matching dataset slide
;(function () {
  const container = document.getElementById('main') as HTMLElement | null
  if (!container) return
  container.addEventListener('click', (e) => {
    const t = e.target as HTMLElement
    if (!t) return
    const link = (t.closest && t.closest('a[data-dsid]')) as HTMLAnchorElement | null
    if (!link) return
    e.preventDefault()
    const dsid = link.getAttribute('data-dsid')
    if (!dsid) return
    const target = document.getElementById(`ds-${dsid}`) as HTMLElement | null
    if (!target) return
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  })
})()


// Initialize weather globe on its slide after DOM is ready
;(function () {
  const mount = document.getElementById('ds-side-weather') as HTMLElement | null
  if (!mount) return
  try { initWeatherGlobe({ mountEl: mount, skin: 'blue' }) } catch {}
})()

  // Initialize algorithmic reasoning graph generator on its slide
  ; (function () {
    const mount = document.getElementById('ds-side-ar') as HTMLElement | null
    if (!mount) return
    try { initArGraphVisualizer({ mountEl: mount }) } catch { }
  })()

// Progressive enhancement: rich hover window for variable list
;(function () {
  const trigger = document.querySelector('.tip-link.tip-enhanced') as HTMLElement | null
  if (!trigger) return
  let fly: HTMLDivElement | null = null
  const build = () => {
    if (fly) return fly
    const data = (trigger.getAttribute('data-vars') || '').split('\n')
    fly = document.createElement('div')
    fly.className = 'tip-fly'
    try {
      const accent = getComputedStyle(trigger).getPropertyValue('--accent') || ''
      const fallback = getComputedStyle(document.documentElement).getPropertyValue('--brand-600') || ''
      fly.style.setProperty('--tip-accent', (accent || fallback).trim())
    } catch {}
    const mkSec = (title: string, items: string[]) => {
      const h = document.createElement('div'); h.className = 'tip-h'; h.textContent = title
      const ul = document.createElement('ul'); ul.className = 'tip-ul'
      items.forEach(t => { const li = document.createElement('li'); li.textContent = t; ul.appendChild(li) })
      fly!.appendChild(h); fly!.appendChild(ul)
    }
    const splitAt = data.findIndex(x => x.trim().toLowerCase().startsWith('atmospheric'))
    const surf = data.slice(1, splitAt).filter(Boolean)
    const atm = data.slice(splitAt + 1).filter(Boolean)
    mkSec('Surface variables', surf)
    mkSec('Atmospheric variables', atm)
    document.body.appendChild(fly)
    return fly
  }
  const place = () => {
    if (!fly) return
    const rect = trigger.getBoundingClientRect()
    const margin = 8
    const measuredH = fly.offsetHeight || 320
    let top = rect.top + window.scrollY - measuredH - margin // always above
    let left = rect.left + window.scrollX + 12 // nudge to the right
    // Clamp within page horizontally
    const maxLeft = window.scrollX + Math.max(0, document.documentElement.clientWidth - (fly.offsetWidth || 360) - margin)
    if (left > maxLeft) left = maxLeft
    if (left < window.scrollX + margin) left = window.scrollX + margin
    fly.style.top = `${top}px`
    fly.style.left = `${left}px`
  }
  const show = () => {
    build(); if (!fly) return;
    // Show invisibly to measure then position
    fly.style.display = 'block'; fly.style.visibility = 'hidden'
    place()
    fly.style.visibility = 'visible'; fly.style.display = 'block'
  }
  const hide = () => { if (fly) fly.style.display = 'none' }
  trigger.addEventListener('mouseenter', show)
  trigger.addEventListener('mouseleave', hide)
  trigger.addEventListener('focus', show)
  trigger.addEventListener('blur', hide)
  window.addEventListener('scroll', () => { if (fly && fly.style.display === 'block') place() }, { passive: true })
})()

