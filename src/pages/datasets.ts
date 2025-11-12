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

const dsStats: Record<string, { graphs: string; nodes: string; edges: string; size: string }> = {
  social: { graphs: '3', nodes: '286K – 580K', edges: '3M – 17M', size: '' },
  chip: { graphs: '1.2M', nodes: '– 335', edges: '', size: '' },
  circuits: { graphs: '93,000', nodes: '13 – 24', edges: '30 – 56', size: '' },
  sat: { graphs: '208,788', nodes: '', edges: '', size: '' },
  co: { graphs: '300,000', nodes: '200 – 1,200', edges: '', size: '' },
  ar: { graphs: '21M', nodes: '16 – 512', edges: '15 – 7,319', size: '85GB' },
  weather: { graphs: '93,544', nodes: '4,610', edges: '7,928', size: '60.6GB' },
}

const dsIcon = (id: string): string => {
  switch (id) {
    case 'social':
      // person (head and shoulders)
      return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="3"/><path d="M6 19c0-2.5 3-4 6-4s6 1.5 6 4"/></svg>'
    case 'chip':
      // microchip
      return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="7" y="7" width="10" height="10" rx="2"/><path d="M7 3v2M12 3v2M17 3v2M21 7h-2M21 12h-2M21 17h-2M3 7h2M3 12h2M3 17h2M7 21v-2M12 21v-2M17 21v-2"/></svg>'
    case 'circuits':
      // circuit loop with components on the path
      return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="10" y="2" width="4" height="2" rx="0.5"/><rect x="20" y="10" width="2" height="4" rx="0.5"/><rect x="10" y="20" width="4" height="2" rx="0.5"/><rect x="2" y="10" width="2" height="4" rx="0.5"/><path d="M4 12h7v2h2h5"/></svg>'
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
    const stats = dsStats[r.id] || { graphs: '', nodes: '', edges: '', size: '' }
    const graphs = stats.graphs ?? ''
    const nodes = stats.nodes ?? ''
    const edges = stats.edges ?? ''
    const size = stats.size ?? ''
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
       <p>Each datapoint contains <strong class="accent-num tip-link tip-enhanced" data-vars="Surface variables:\n2-m temperature (2T)\n10-m u wind component (10U)\n10-m v wind component (10V)\nMean sea level pressure (MSL)\nTotal precipitation (TP)\n\nAtmospheric variables:\nTemperature (T)\nU component of wind (U)\nV component of wind (V)\nGeopotential (Z)\nSpecific humidity (Q)\nVertical wind speed (W)" tabindex="0" role="button" aria-label="Show variables" style="--tip-accent: var(--ds-g4);">11</strong> different variables defined across <strong class="accent-num tip-link tip-enhanced" data-vars="50 hPa\n100 hPa\n150 hPa\n200 hPa\n250 hPa\n300 hPa\n400 hPa\n500 hPa\n600 hPa\n700 hPa\n850 hPa\n925 hPa\n1,000 hPa" tabindex="0" role="button" aria-label="Show pressure levels" style="--tip-accent: var(--ds-g4);">13</strong> pressure levels. Via message passing on the icosahedron, we determine the <strong class="accent-num">12h</strong> residual change in the atmospheric variables.</p>`
    : r.id === 'sat'
      ? `<p>Our data spans <strong class="accent-num tip-link tip-enhanced" data-vars="<span style=&quot;color: var(--tip-accent);&quot;><strong>Kissat</strong></span> (Biere et al., 2023, 2024)\n<span style=&quot;color: var(--tip-accent);&quot;><strong>CaDiCaL</strong></span> (Biere et al., 2024)\n<span style=&quot;color: var(--tip-accent);&quot;><strong>Gimsatul</strong></span> (Biere et al., 2024)\n<span style=&quot;color: var(--tip-accent);&quot;><strong>IsaSAT</strong></span> (Biere et al., 2024)\n<span style=&quot;color: var(--tip-accent);&quot;><strong>Tabularasat</strong></span> (Biere et al., 2023)\n<span style=&quot;color: var(--tip-accent);&quot;><strong>BreakID-Kissat</strong></span> (Bogaerts et al., 2023, 2024)\n<span style=&quot;color: var(--tip-accent);&quot;><strong>SBVA-Kissat</strong></span> (Haberlandt &amp; Green, 2023)\n<span style=&quot;color: var(--tip-accent);&quot;><strong>SBVA-CaDiCaL</strong></span> (Haberlandt &amp; Green, 2023)\n<span style=&quot;color: var(--tip-accent);&quot;><strong>Kissat MAB Prop</strong></span> (Gao, 2023)\n<span style=&quot;color: var(--tip-accent);&quot;><strong>ESA Solvers</strong></span> (Li et al., 2024b)\n<span style=&quot;color: var(--tip-accent);&quot;><strong>AMSAT</strong></span> (Li et al., 2024b)" tabindex="0" role="button" aria-label="Show solver details" style="--tip-accent: var(--ds-g3);">11</strong> solvers and over <strong class="accent-num" style="--tip-accent: var(--ds-g3);">100K</strong> problem instances. Each instance is represented through <strong class="accent-num tip-link tip-enhanced" data-vars="Variable Graph\nVariable–Clause Graph\nLiteral–Clause Graph" tabindex="0" role="button" aria-label="Show graph encodings" style="--tip-accent: var(--ds-g3);">3</strong> graph encodings, capturing complementary structural views of SAT formulae.</p>
        <p>The dataset covers <strong class="accent-num tip-link tip-enhanced" data-vars="SMALL\nMEDIUM\nLARGE" tabindex="0" role="button" aria-label="Show scale tiers" style="--tip-accent: var(--ds-g3);">3</strong> scales from a few thousand to over <strong class="accent-num" style="--tip-accent: var(--ds-g3);">25M</strong> variables and <strong class="accent-num" style="--tip-accent: var(--ds-g3);">1.8B</strong> clauses, enabling evaluation under increasing computational hardness and assessing generalization across problem sizes.</p>`
    : r.id === 'social'
      ? `<p>We model user interactions on <a class="accent-link" href="https://bsky.app/" target="_blank" rel="noopener">Bluesky</a> as dynamic, directed graphs to predict future engagement on posts.</p>
        <p>Nodes represent users and edges capture <strong class="accent-num tip-link tip-enhanced" data-vars="Quotes\nReplies\nReposts" tabindex="0" role="button" aria-label="Show interaction types" style="--tip-accent: var(--ds-g1);">3</strong> interaction types, with temporal evolution reflecting shifting social behavior. Given past interactions and text embeddings, we predict a user’s expected engagement count in the next time window.</p>`
    : r.id === 'circuits'
      ? `<p>We model analog circuit topology design, where nodes encode electronic components and edges their electrical connections.</p>
        <p>Each graph corresponds to a real circuit, with the goal of predicting <strong class="accent-num tip-link tip-enhanced" data-vars="Voltage Conversion Ratio\nPower Conversion Efficiency" tabindex="0" role="button" aria-label="Show performance metrics" style="--tip-accent: var(--ds-g2);">2</strong> continuous performance metrics from the graph structure.</p>
        <p>We provide <strong class="accent-num tip-link tip-enhanced" data-vars="<span><strong style=&quot;color: var(--tip-accent); font-weight: 700;&quot;>5</strong>-component circuits</span>\n<span><strong style=&quot;color: var(--tip-accent); font-weight: 700;&quot;>7</strong>-component circuits</span>\n<span><strong style=&quot;color: var(--tip-accent); font-weight: 700;&quot;>10</strong>-component circuits</span>" tabindex="0" role="button" aria-label="Show dataset variants" style="--tip-accent: var(--ds-g2);">3</strong> datasets, allowing evaluation of structural generalization and transfer across circuit sizes. Circuits are sourced from a procedural generator following analog design rules.</p>`
    : r.id === 'chip'
      ? `<p>We focus on learning to generate small Boolean circuits. Each circuit is modeled as an and-inverter graph (<strong class="accent-num" style="--tip-accent: var(--ds-g2);">AIG</strong>) of logic gates, where nodes denote gates and edges represent signal connections.</p>
        <p>Given a set of Boolean functions, the model must learn to produce functionally equivalent, optimized circuits, targeting reductions in area, power, and delay.</p>`
    : r.id === 'co'
      ? `<p>We synthetically generate optimization problems across <strong class="accent-num tip-link tip-enhanced" data-vars="Erdős–Rényi\nBarabási–Albert\nRandom Regular" tabindex="0" role="button" aria-label="Show random graph families" style="--tip-accent: var(--ds-g3);">3</strong> random graph families — each available in <strong class="accent-num tip-link tip-enhanced" data-vars="SMALL\nLARGE" tabindex="0" role="button" aria-label="Show configurations" style="--tip-accent: var(--ds-g3);">2</strong> configurations.</p>
        <p>Every instance encodes one of <strong class="accent-num tip-link tip-enhanced" data-vars="Maximum Independent Set\nMaximum Cut\nGraph Coloring" tabindex="0" role="button" aria-label="Show NP-hard problems" style="--tip-accent: var(--ds-g3);">3</strong> NP-hard problems with ground-truth solutions computed via exact solvers.</p>
        <p>Models must learn to predict optimal solution costs or approximate combinatorial objectives, testing both supervised and unsupervised regimes.</p>`
    : r.id === 'ar'
      ? `<p>We synthetically generate unique graphs by sampling from <strong class="accent-num tip-link tip-enhanced" data-vars="Erdős–Rényi \nNewman–Watts–Strogatz \nBarabási–Albert \nDual Barabási–Albert \nPowerlaw Cluster \nStochastic Block Model" tabindex="0" role="button" aria-label="Show details" style="--tip-accent: var(--ds-g3);">6</strong> different generators. We then apply <strong class="accent-num tip-link tip-enhanced" data-vars="Maximum Clique\nTopological Sort\nMaximum Spanning Tree\nSteiner Tree\nMaximum Flow\nBipartite Matching\nBridge Finding" tabindex="0" role="button" aria-label="Show details" style="--tip-accent: var(--ds-g3);">7</strong> algorithmic reasoning tasks to these graphs, ensuring interesting results by choosing unique parameters for each combination. You can take a look at the resulting structures on the right.</p>
       <p>We use graphs of size <strong class="accent-num" style="--tip-accent: var(--ds-g3);">16</strong> for training, <strong class="accent-num" style="--tip-accent: var(--ds-g3);">128</strong> for testing and up to <strong class="accent-num" style="--tip-accent: var(--ds-g3);">2048</strong> for size generalization, offering datasets in <strong class="accent-num tip-link tip-enhanced" data-vars="Easy:\nTraining|Erdős–Rényi, Newman–Watts–Strogatz, Barabási–Albert, Dual Barabási–Albert, Powerlaw Cluster, Stochastic Block Model\nTest|Erdős–Rényi, Newman–Watts–Strogatz, Barabási–Albert, Dual Barabási–Albert, Powerlaw Cluster, Stochastic Block Model\n\nMedium:\nTraining|Erdős–Rényi, Barabási–Albert, Stochastic Block Model \nTest|Erdős–Rényi, Newman–Watts–Strogatz, Barabási–Albert, Dual Barabási–Albert, Powerlaw Cluster, Stochastic Block Model\n\nHard:\nTraining|Erdős–Rényi\nTest|Erdős–Rényi, Newman–Watts–Strogatz, Barabási–Albert, Dual Barabási–Albert, Powerlaw Cluster, Stochastic Block Model" tabindex="0" role="button" aria-label="Show details" style="--tip-accent: var(--ds-g3);">3</strong> difficulties, with different distribution shifts.</p>`
      : `<p>Placeholder overview text about <strong class="accent-num" style="color: var(--accent);">${r.name}</strong>. Describe what the dataset looks like, how it has been obtained/created and what you are doing with it. For reference, you can take a look at the <a class="accent-link" href="#ds-ar">Algorithmic Reasoning</a> and <a class="accent-link" href="#ds-weather">Weather Forecasting</a> section.</p>
        <p>Try to keep your description short and concise, focusing on a high-level outline of what we're working with. More information about certain aspects can be displayed like <strong class="accent-num tip-link tip-enhanced" data-vars="More information can be displayed here." tabindex="0" role="button" aria-label="Show more information" style="--tip-accent: var(--accent);">this</strong>.</p>`

  const slideStats = dsStats[r.id] || { graphs: '', nodes: '', edges: '', size: '' }
  const graphsVal = slideStats.graphs ?? ''
  const nodesVal = slideStats.nodes ?? ''
  const edgesVal = slideStats.edges ?? ''
  const sizeVal = slideStats.size ?? ''

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

  // While hovering the interactive 3D visualizations, prevent snap scrolling
  ; (function () {
    const blockWheel = (el: HTMLElement | null) => {
      if (!el) return
      el.addEventListener('wheel', (e: WheelEvent) => {
        // Allow three.js to receive the event first, then block scrolling/snap
        e.stopPropagation()
        e.preventDefault()
      }, { passive: false })
    }
    blockWheel(document.getElementById('ds-side-weather') as HTMLElement | null)
    blockWheel(document.getElementById('ds-side-ar') as HTMLElement | null)
  })()

// Progressive enhancement: rich hover window for variable list and numeric tips
;(function () {
  const triggers = Array.from(document.querySelectorAll('.tip-link.tip-enhanced')) as HTMLElement[]
  if (!triggers.length) return
  let fly: HTMLDivElement | null = null
  let activeTrigger: HTMLElement | null = null
  const build = () => {
    if (fly) return fly
    fly = document.createElement('div')
    fly.className = 'tip-fly'
    document.body.appendChild(fly)
    return fly
  }
  const fill = (seed: HTMLElement) => {
    if (!fly) return
    fly.innerHTML = ''
    try {
      const accent = getComputedStyle(seed).getPropertyValue('--accent') || ''
      const fallback = getComputedStyle(document.documentElement).getPropertyValue('--brand-600') || ''
      fly.style.setProperty('--tip-accent', (accent || fallback).trim())
    } catch {}
    const data = (seed.getAttribute('data-vars') || '').split('\n')
    // Determine layout type
    const splitAt = data.findIndex(x => x.trim().toLowerCase().startsWith('atmospheric'))
    const isWeather = splitAt !== -1
    const isDifficulty = data.some(x => x.includes('Training|') || x.includes('Test|'))
    // Width behavior
    if (isWeather) {
      fly.style.width = ''
    } else {
      fly.style.width = 'fit-content'
    }
    const itemsOnly = data.filter(Boolean)
    if (isWeather) {
      const mkSec = (title: string, items: string[]) => {
        const h = document.createElement('div'); h.className = 'tip-h'; h.textContent = title
        const ul = document.createElement('ul'); ul.className = 'tip-ul'
        items.forEach(t => { const li = document.createElement('li'); li.innerHTML = t; ul.appendChild(li) })
        fly!.appendChild(h); fly!.appendChild(ul)
      }
      const surf = data.slice(1, Math.max(1, splitAt)).filter(Boolean)
      const atm = splitAt >= 0 ? data.slice(splitAt + 1).filter(Boolean) : []
      if (surf.length) mkSec('Surface variables', surf)
      if (atm.length) mkSec('Atmospheric variables', atm)
    } else if (isDifficulty) {
      // Parse blocks separated by blank lines, each starting with a header ending with ':'
      const blocks: { title: string; train: string[]; test: string[] }[] = []
      let i = 0
      while (i < data.length) {
        const line = (data[i] || '').trim()
        if (!line) { i++; continue }
        if (line.endsWith(':')) {
          const title = line.replace(/:$/, '')
          let train: string[] = []
          let test: string[] = []
          i++
          for (; i < data.length; i++) {
            const l = (data[i] || '').trim()
            if (!l) break
            if (l.startsWith('Training|')) train = l.slice('Training|'.length).split(',').map(s => s.trim()).filter(Boolean)
            if (l.startsWith('Test|')) test = l.slice('Test|'.length).split(',').map(s => s.trim()).filter(Boolean)
          }
          blocks.push({ title, train, test })
        } else {
          i++
        }
      }
      blocks.forEach(b => {
        const h = document.createElement('div'); h.className = 'tip-h'; h.textContent = b.title
        fly!.appendChild(h)
        const grid = document.createElement('div')
        grid.style.display = 'grid'
        grid.style.gridTemplateColumns = '1fr 28px 1fr'
        grid.style.alignItems = 'stretch'
        grid.style.columnGap = '1.2rem'
        grid.style.marginBottom = '0.9rem'
        const mkCol = (label: string, items: string[]) => {
          const col = document.createElement('div')
          col.style.display = 'flex'
          col.style.flexDirection = 'column'
          col.style.justifyContent = 'flex-start'
          col.style.alignItems = 'flex-start'
          col.style.height = '100%'
          const lab = document.createElement('div')
          lab.className = 'tip-col-label'
          lab.textContent = label
          lab.style.fontWeight = '700'
          lab.style.fontSize = '.8rem'
          lab.style.margin = '0 0 .25rem'
          const body = document.createElement('div')
          body.style.display = 'flex'
          body.style.flexDirection = 'column'
          body.style.justifyContent = 'center'
          body.style.flex = '1'
          body.className = 'tip-col-body'
          const ul = document.createElement('ul'); ul.className = 'tip-ul'; ul.style.margin = '0'
          items.forEach(t => { const li = document.createElement('li'); li.innerHTML = t; ul.appendChild(li) })
          body.appendChild(ul)
          col.appendChild(lab); col.appendChild(body)
          return col
        }
        const left = mkCol('Training', b.train)
        const mid = document.createElement('div')
        mid.style.display = 'flex'; mid.style.alignItems = 'center'; mid.style.justifyContent = 'center'; mid.style.height = '100%'
        mid.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>'
        const right = mkCol('Test', b.test)
        grid.appendChild(left); grid.appendChild(mid); grid.appendChild(right)
        fly!.appendChild(grid)
        try {
          // Center arrow relative to list bodies (ignoring labels) and move it lower
          const leftLabH = (left.querySelector('.tip-col-label') as HTMLElement)?.offsetHeight || 0
          const rightLabH = (right.querySelector('.tip-col-label') as HTMLElement)?.offsetHeight || 0
          const shift = Math.max(leftLabH, rightLabH) / 2 + 7
          mid.style.transform = `translateY(${shift}px)`
        } catch { }
      })
    } else if (itemsOnly.length) {
      const ul = document.createElement('ul'); ul.className = 'tip-ul'
      itemsOnly.forEach(t => { const li = document.createElement('li'); li.innerHTML = t; ul.appendChild(li) })
      fly!.appendChild(ul)
    }
    return fly
  }
  const place = (trigger: HTMLElement) => {
    if (!fly) return
    const rect = trigger.getBoundingClientRect()
    const margin = 8
    const measuredH = fly.offsetHeight || 320
    // Default: show above. For difficulty tooltips (with Training|/Test|), center vertically but slightly higher
    const dataStr = trigger.getAttribute('data-vars') || ''
    const isDifficulty = /\bTraining\|/.test(dataStr) || /\bTest\|/.test(dataStr)
    let top = isDifficulty
      ? (rect.top + window.scrollY + (rect.height / 2) - (measuredH / 2) - 30)
      : (rect.top + window.scrollY - measuredH - margin)
    let left = rect.left + window.scrollX + 12
    const maxLeft = window.scrollX + Math.max(0, document.documentElement.clientWidth - (fly.offsetWidth || 360) - margin)
    if (left > maxLeft) left = maxLeft
    if (left < window.scrollX + margin) left = window.scrollX + margin
    fly.style.top = `${top}px`
    fly.style.left = `${left}px`
  }
  const adjustWidth = (trigger: HTMLElement) => {
    if (!fly) return
    const data = (trigger.getAttribute('data-vars') || '').split('\n')
    const splitAt = data.findIndex(x => x.trim().toLowerCase().startsWith('atmospheric'))
    const isWeather = splitAt !== -1
    if (isWeather) {
      fly.style.width = ''
      return
    }
    fly.style.width = 'fit-content'
    try {
      const ul = fly.querySelector('.tip-ul') as HTMLElement | null
      const padLeft = ul ? parseFloat(getComputedStyle(ul).paddingLeft || '0') : 0
      const measuredW = fly.offsetWidth || 0
      fly.style.width = `${measuredW + (isFinite(padLeft) ? padLeft : 0)}px`
    } catch {
      // fallback: keep fit-content
    }
  }
  const show = (trigger: HTMLElement) => {
    build(); if (!fly) return
    fill(trigger)
    activeTrigger = trigger
    fly.style.display = 'block'; fly.style.visibility = 'hidden'
    adjustWidth(trigger)
    place(trigger)
    fly.style.visibility = 'visible'; fly.style.display = 'block'
  }
  const hide = () => { if (fly) fly.style.display = 'none'; activeTrigger = null }
  triggers.forEach(t => {
    t.addEventListener('mouseenter', () => show(t))
    t.addEventListener('mouseleave', hide)
    t.addEventListener('focus', () => show(t))
    t.addEventListener('blur', hide)
  })
  window.addEventListener('scroll', () => { if (fly && fly.style.display === 'block' && activeTrigger) place(activeTrigger) }, { passive: true })
})()

  // First-time tooltip hint for dataset subsections
  ; (function () {
    const STORAGE_KEY = 'graphbench-tooltip-hint-seen'
    const HINT_DELAY = 2000

    // Check if hint was already shown
    if (localStorage.getItem(STORAGE_KEY)) return

    let hintEl: HTMLDivElement | null = null
    let timeoutId: number | null = null
    let hasShownHint = false // Track if hint has been shown in this session

    const createHint = (accentColor: string) => {
      if (hintEl) return hintEl

      hintEl = document.createElement('div')
      hintEl.className = 'tooltip-hint'
      hintEl.style.cssText = `
         position: fixed;
         top: 80px;
         right: -200px;
         background: var(--surface-0);
         color: var(--text-1);
         border: 1px solid var(--border);
         border-radius: 50px;
         padding: 0.8rem 1.2rem 0.8rem 1.5rem;
         box-shadow: var(--shadow-2);
         z-index: 150;
         font-size: 0.9rem;
         line-height: 1.4;
         width: 320px;
         transform: translateX(0);
         transition: transform 0.3s ease;
         white-space: nowrap;
       `

      const closeBtn = document.createElement('button')
      closeBtn.innerHTML = '×'
      closeBtn.style.cssText = `
         position: absolute;
         top: 10px;
         right: 35px;
         background: none;
         border: none;
         font-size: 1.2rem;
         color: var(--text-2);
         cursor: pointer;
         width: 24px;
         height: 24px;
         display: flex;
         align-items: center;
         justify-content: center;
         border-radius: 50%;
       `
      closeBtn.addEventListener('click', hideHint)
      closeBtn.addEventListener('mouseenter', () => {
        closeBtn.style.backgroundColor = 'var(--surface-1)'
      })
      closeBtn.addEventListener('mouseleave', () => {
        closeBtn.style.backgroundColor = 'transparent'
      })

      const cursorIcon = document.createElement('span')
      cursorIcon.style.cssText = `
      display: inline-block;
      width: 12px;
      height: 12px;
      background-color: ${accentColor};
      mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='black' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z'/%3E%3Cpath d='M13 13l6 6'/%3E%3C/svg%3E") no-repeat center;
      mask-size: contain;
      margin: 0 4px;
      vertical-align: middle;
    `

      const text = document.createElement('span')
      text.textContent = 'Hover over the '

      const endText = document.createElement('span')
      endText.textContent = ' to learn more!'

      hintEl.appendChild(closeBtn)
      hintEl.appendChild(text)
      hintEl.appendChild(cursorIcon)
      hintEl.appendChild(endText)

      document.body.appendChild(hintEl)
      return hintEl
    }

    const showHint = (accentColor: string) => {
      // Only show hint once per session
      if (hasShownHint) return

      const hint = createHint(accentColor)
      if (!hint) return

      // Update cursor color
      const cursorIcon = hint.querySelector('span[style*="mask"]') as HTMLElement
      if (cursorIcon) {
        cursorIcon.style.backgroundColor = accentColor
      }

      // Show with animation
      setTimeout(() => {
        hint.style.transform = 'translateX(-170px)'
      }, 100)

      hasShownHint = true
    }

    const hideHint = () => {
      if (!hintEl) return
      hintEl.style.transform = 'translateX(0)'
      setTimeout(() => {
        if (hintEl && hintEl.parentNode) {
          hintEl.parentNode.removeChild(hintEl)
          hintEl = null
        }
      }, 300)
      localStorage.setItem(STORAGE_KEY, 'true')
    }

    const scheduleHint = (accentColor: string) => {
      // Only schedule hint if it hasn't been shown yet
      if (hasShownHint) return

      if (timeoutId) clearTimeout(timeoutId)
      timeoutId = window.setTimeout(() => {
        showHint(accentColor)
      }, HINT_DELAY)
    }

    // Listen for dataset slide navigation
    const container = document.getElementById('main') as HTMLElement | null
    if (!container) return

    let currentSlide = 0
    const slides = Array.from(document.querySelectorAll('.snap-section')) as HTMLElement[]

    const checkSlide = () => {
      const viewportTop = container.scrollTop
      const newSlide = slides.reduce((best, el, idx) => {
        const y = el.offsetTop
        const dist = Math.abs(y - viewportTop)
        return dist < best.dist ? { idx, dist } : best
      }, { idx: 0, dist: Number.POSITIVE_INFINITY }).idx

      // Only show hint when first navigating to a dataset slide (not the overview table)
      if (newSlide !== currentSlide && newSlide > 0 && !hasShownHint) {
        currentSlide = newSlide
        const slideEl = slides[newSlide]
        const accentClass = slideEl.className.match(/accent-g[1-4]/)?.[0]
        if (accentClass) {
          const accentColor = getComputedStyle(document.documentElement).getPropertyValue(`--${accentClass}`) || '#666'
          scheduleHint(accentColor)
        }
      } else {
        currentSlide = newSlide
      }
    }

    // Check on scroll and initial load
    container.addEventListener('scroll', checkSlide, { passive: true })
    checkSlide()
})()

