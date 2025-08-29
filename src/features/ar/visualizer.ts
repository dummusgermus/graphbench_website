// In-browser graph generator and interactive 3D force graph visualizer for Algorithmic Reasoning
// Uses 3d-force-graph (Three.js + d3-force-3d) for rendering and physics

import ForceGraph3D from '3d-force-graph'
import * as THREE from 'three'

type Edge = [number, number]
type Graph = { numNodes: number; edges: Edge[] }

type DistributionId = 'er' | 'nws' | 'ba' | 'dba' | 'plc' | 'sbm'
type ProblemId = 'max_clique' | 'shortest_path' | 'max_spanning_tree' | 'steiner_tree' | 'max_flow' | 'bipartite_matching' | 'bridge_finding'

type SizeId = 'train' | 'test'

type DistDef = { id: DistributionId; label: string }
type ProblemDef = { id: ProblemId; label: string }

const DISTRIBUTIONS: DistDef[] = [
  { id: 'er', label: 'Erdős–Rényi' },
  { id: 'nws', label: 'Newman–Watts–Strogatz' },
  { id: 'ba', label: 'Barabási–Albert' },
  { id: 'dba', label: 'Dual Barabási–Albert' },
  { id: 'plc', label: 'Powerlaw–Cluster' },
  { id: 'sbm', label: 'Stochastic Block Model' },
]

const PROBLEMS: ProblemDef[] = [
  { id: 'max_clique', label: 'Maximum Clique' },
  { id: 'shortest_path', label: 'Shortest Path' },
  { id: 'max_spanning_tree', label: 'Maximum Spanning Tree' },
  { id: 'steiner_tree', label: 'Steiner Tree' },
  { id: 'max_flow', label: 'Maximum Flow' },
  { id: 'bipartite_matching', label: 'Bipartite Matching' },
  { id: 'bridge_finding', label: 'Bridge Finding' },
]

const SIZES: { id: SizeId; label: string; n: number }[] = [
  { id: 'train', label: 'Training (n = 16)', n: 16 },
  { id: 'test', label: 'Test (n = 128)', n: 128 },
]

// Parameter presets per problem and distribution (shared across sizes)
// These are reasonable demo defaults; they can be tuned later.
type ParamMap = Record<ProblemId, Partial<Record<DistributionId, Record<string, number>>>>

const PARAMS: ParamMap = {
  max_clique: {
    er: { p: 0.9 },
    nws: { k: 4, p: 0.6 },
    ba: { m: 8 },
    dba: { m1: 4, m2: 2, p: 0.3 },
    plc: { m: 9, p: 0.5 },
    sbm: { blocks: 2, pIn: 0.75, pOut: 0.75 },
  },
  shortest_path: {
    er: { p: 0.17 },
    nws: { k: 2, p: 0.15 },
    ba: { m: 2 },
    dba: { m1: 2, m2: 1, p: 0.05 },
    plc: { m: 1, p: 0.35 },
    sbm: { blocks: 2, pIn: 0.31, pOut: 0.01 },
  },
  max_spanning_tree: {
    er: { p: 0.19 },
    nws: { k: 4, p: 0.2 },
    ba: { m: 3 },
    dba: { m1: 4, m2: 2, p: 0.3 },
    plc: { m: 5, p: 0.4 },
    sbm: { blocks: 2, pIn: 0.4, pOut: 0.4 },
  },
  steiner_tree: {
    er: { p: 0.14 },
    nws: { k: 4, p: 0.12 },
    ba: { m: 2 },
    dba: { m1: 3, m2: 1, p: 0.4 },
    plc: { m: 3, p: 0.7 },
    sbm: { blocks: 2, pIn: 0.4, pOut: 0.4 },
  },
  max_flow: {
    er: { p: 0.16 },
    nws: { k: 4, p: 0.2 },
    ba: { m: 3 },
    dba: { m1: 4, m2: 2, p: 0.3 },
    plc: { m: 5, p: 0.4 },
    sbm: { blocks: 2, pIn: 0.35, pOut: 0.3 },
  },
  bipartite_matching: {
    er: { p: 0.08 },
    nws: { k: 6, p: 0.18 },
    ba: { m: 3 },
    dba: { m1: 4, m2: 2, p: 0.2 },
    plc: { m: 8, p: 0.5 },
    sbm: { blocks: 2, pIn: 0.31, pOut: 0.1 },
  },
  bridge_finding: {
    er: { p: 0.11 },
    nws: { k: 2, p: 0.02 },
    ba: { m: 1 },
    dba: { m1: 3, m2: 1, p: 0.07 },
    plc: { m: 1, p: 0.5 },
    sbm: { blocks: 2, pIn: 0.5, pOut: 0.01 },
  },
}

// Utilities
const randInt = (n: number) => Math.floor(Math.random() * n)
const choice = <T>(arr: T[]) => arr[randInt(arr.length)]

// Generators
function genER(n: number, p: number): Graph {
  const edges: Edge[] = []
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (Math.random() < p) edges.push([i, j])
    }
  }
  return { numNodes: n, edges }
}

function genNWS(n: number, k: number, p: number): Graph {
  const edgesSet = new Set<string>()
  const add = (a: number, b: number) => {
    if (a === b) return
    const i = Math.min(a, b), j = Math.max(a, b)
    edgesSet.add(`${i}-${j}`)
  }
  const kk = Math.max(0, Math.min(n - 1, Math.floor(k)))
  const half = Math.floor(kk / 2)
  for (let i = 0; i < n; i++) {
    for (let d = 1; d <= half; d++) {
      add(i, (i + d) % n)
      add(i, (i - d + n) % n)
    }
  }
  const potential: Edge[] = []
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const key = `${i}-${j}`
      if (!edgesSet.has(key)) potential.push([i, j])
    }
  }
  for (const [i, j] of potential) {
    if (Math.random() < p) edgesSet.add(`${i}-${j}`)
  }
  const edges: Edge[] = Array.from(edgesSet).map(s => s.split('-').map(Number) as Edge)
  return { numNodes: n, edges }
}

function genBA(n: number, m: number): Graph {
  const mm = Math.max(1, Math.min(n - 1, Math.floor(m)))
  const edges: Edge[] = []
  const degree = new Array<number>(n).fill(0)
  // start with a small connected core (complete graph of size mm+1)
  const init = mm + 1
  for (let i = 0; i < init; i++) {
    for (let j = i + 1; j < init; j++) {
      edges.push([i, j]); degree[i]++; degree[j]++
    }
  }
  const targets: number[] = [] // list of nodes with multiplicity = degree
  for (let i = 0; i < init; i++) {
    for (let t = 0; t < degree[i]; t++) targets.push(i)
  }
  for (let v = init; v < n; v++) {
    const chosen = new Set<number>()
    while (chosen.size < mm) {
      const pick = targets.length ? choice(targets) : randInt(v)
      if (pick === v || chosen.has(pick)) continue
      chosen.add(pick)
    }
    chosen.forEach(u => {
      edges.push([v, u]); degree[v]++; degree[u]++
      targets.push(v); targets.push(u)
    })
  }
  return { numNodes: n, edges }
}

function genDBA(n: number, m1: number, m2: number, p: number): Graph {
  const edges: Edge[] = []
  const degree = new Array<number>(n).fill(0)
  const mInit = Math.max(1, Math.min(n - 1, Math.floor(Math.max(m1, m2))))
  const init = mInit + 1
  for (let i = 0; i < init; i++) {
    for (let j = i + 1; j < init; j++) {
      edges.push([i, j]); degree[i]++; degree[j]++
    }
  }
  const targets: number[] = []
  for (let i = 0; i < init; i++) for (let t = 0; t < degree[i]; t++) targets.push(i)
  for (let v = init; v < n; v++) {
    const m = Math.random() < p ? Math.floor(m1) : Math.floor(m2)
    const mm = Math.max(1, Math.min(v, m))
    const chosen = new Set<number>()
    while (chosen.size < mm) {
      const pick = targets.length ? choice(targets) : randInt(v)
      if (pick === v || chosen.has(pick)) continue
      chosen.add(pick)
    }
    chosen.forEach(u => {
      edges.push([v, u]); degree[v]++; degree[u]++
      targets.push(v); targets.push(u)
    })
  }
  return { numNodes: n, edges }
}

function genPLC(n: number, m: number, p: number): Graph {
  // Holme–Kim model approximation
  const edges: Edge[] = []
  const neighbors: number[][] = Array.from({ length: n }, () => [])
  const degree = new Array<number>(n).fill(0)
  const init = Math.max(2, Math.min(n - 1, Math.floor(m) + 1))
  for (let i = 0; i < init; i++) {
    for (let j = i + 1; j < init; j++) {
      edges.push([i, j]); neighbors[i].push(j); neighbors[j].push(i); degree[i]++; degree[j]++
    }
  }
  const addEdge = (a: number, b: number) => {
    if (a === b) return false
    const i = Math.min(a, b), j = Math.max(a, b)
    // check existing
    for (const x of neighbors[i]) if (x === j) return false
    edges.push([i, j]); neighbors[i].push(j); neighbors[j].push(i); degree[i]++; degree[j]++
    return true
  }
  for (let v = init; v < n; v++) {
    const targets: number[] = []
    for (let u = 0; u < v; u++) for (let t = 0; t < degree[u]; t++) targets.push(u)
    const targetEdges = Math.min(Math.max(1, Math.floor(m)), v)
    let added = 0
    let safety = 0
    while (added < targetEdges && safety++ < 10000) {
      const u = targets.length ? choice(targets) : randInt(v)
      if (addEdge(v, u)) {
        added++
        if (added >= targetEdges) break
        if (Math.random() < p && neighbors[u].length > 0) {
          const w = choice(neighbors[u])
          if (addEdge(v, w)) {
            added++
          }
        }
      }
    }
  }
  return { numNodes: n, edges }
}

function genSBM(n: number, blocks: number, pIn: number, pOut: number): Graph {
  const k = Math.max(2, Math.floor(Math.min(blocks, n)))
  const edges: Edge[] = []
  const sizes: number[] = []
  let remaining = n
  for (let i = 0; i < k; i++) {
    const size = i === k - 1 ? remaining : Math.floor(n / k)
    sizes.push(size)
    remaining -= size
  }
  const start: number[] = []
  let acc = 0
  for (let i = 0; i < k; i++) { start.push(acc); acc += sizes[i] }
  const blockOf = (v: number) => {
    for (let b = 0; b < k; b++) {
      if (v >= start[b] && v < start[b] + sizes[b]) return b
    }
    return k - 1
  }
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const same = blockOf(i) === blockOf(j)
      const prob = same ? pIn : pOut
      if (Math.random() < prob) edges.push([i, j])
    }
  }
  return { numNodes: n, edges }
}

// Ensure the generated undirected graph is a single connected component
function ensureConnected(g: Graph): Graph {
  const n = g.numNodes
  if (n <= 1) return g
  const edges: Edge[] = g.edges.slice()
  const adj: number[][] = Array.from({ length: n }, () => [])
  const edgeKey = (a: number, b: number) => `${Math.min(a, b)}-${Math.max(a, b)}`
  const existing = new Set<string>()
  for (const [a, b] of edges) {
    adj[a].push(b)
    adj[b].push(a)
    existing.add(edgeKey(a, b))
  }
  const visited = new Array<boolean>(n).fill(false)
  const components: number[][] = []
  for (let i = 0; i < n; i++) {
    if (visited[i]) continue
    const stack = [i]
    visited[i] = true
    const comp: number[] = []
    while (stack.length) {
      const v = stack.pop() as number
      comp.push(v)
      for (const u of adj[v]) {
        if (!visited[u]) { visited[u] = true; stack.push(u) }
      }
    }
    components.push(comp)
  }
  if (components.length <= 1) return g
  components.sort((a, b) => b.length - a.length)
  const main = components[0]
  const pick = (arr: number[]) => arr[randInt(arr.length)]
  for (let k = 1; k < components.length; k++) {
    const u = pick(components[k])
    const v = pick(main)
    const key = edgeKey(u, v)
    if (!existing.has(key)) {
      existing.add(key)
      edges.push([u, v])
      adj[u].push(v)
      adj[v].push(u)
    }
  }
  return { numNodes: n, edges }
}

// 3D rendering handled by ForceGraph3D (internally uses d3-force-3d)

function generateGraph(dist: DistributionId, problem: ProblemId, n: number): Graph {
  const params = PARAMS[problem][dist] || {}
  let g: Graph
  switch (dist) {
    case 'er':
      g = genER(n, clamp01(params.p ?? 0.1))
      break
    case 'nws': {
      const k = Math.max(0, Math.floor(params.k ?? 4))
      const p = clamp01(params.p ?? 0.1)
      g = genNWS(n, k, p)
      break
    }
    case 'ba':
      g = genBA(n, Math.max(1, Math.floor(params.m ?? 2)))
      break
    case 'dba':
      g = genDBA(n, Math.max(1, Math.floor(params.m1 ?? 1)), Math.max(1, Math.floor(params.m2 ?? 3)), clamp01(params.p ?? 0.5))
      break
    case 'plc':
      g = genPLC(n, Math.max(1, Math.floor(params.m ?? 2)), clamp01(params.p ?? 0.1))
      break
    case 'sbm': {
      const blocks = Math.max(2, Math.floor(params.blocks ?? 4))
      const pIn = clamp01(params.pIn ?? 0.2)
      const pOut = clamp01(params.pOut ?? 0.02)
      g = genSBM(n, blocks, pIn, pOut)
      break
    }
  }
  return ensureConnected(g)
}

function clamp01(x: number) { return Math.max(0, Math.min(1, x)) }

type Dropdown = {
  wrap: HTMLDivElement
  value: () => string
  onChange: (cb: (v: string) => void) => void
  setVisible: (allowedValues: string[]) => void
}

function buildDropdown(id: string, labelText: string, options: { value: string; label: string }[], initial: string): Dropdown {
  const wrap = document.createElement('div')
  wrap.className = 'ar-sel'
  const label = document.createElement('label')
  label.setAttribute('for', id)
  label.textContent = labelText
  const root = document.createElement('div')
  root.className = 'ar-dd'
  const btn = document.createElement('button')
  btn.type = 'button'
  btn.className = 'ar-dd-trigger'
  btn.id = id
  const menu = document.createElement('div')
  menu.className = 'ar-dd-menu'
  menu.setAttribute('role', 'listbox')
  menu.setAttribute('tabindex', '-1')
  let current = initial
  const allOptions = options.slice()
  const setBtnText = () => {
    const cur = options.find(o => o.value === current) || options[0]
    btn.textContent = cur.label
  }
  const closeMenu = () => { menu.style.display = 'none'; btn.setAttribute('aria-expanded', 'false') }
  const openMenu = () => { menu.style.display = 'block'; btn.setAttribute('aria-expanded', 'true') }
  const buildItems = (opts: { value: string; label: string }[]) => {
    menu.innerHTML = ''
    opts.forEach(opt => {
      const item = document.createElement('div')
      item.className = 'ar-dd-item'
      item.setAttribute('role', 'option')
      item.setAttribute('data-value', opt.value)
      item.textContent = opt.label
      if (opt.value === current) item.classList.add('selected')
      item.addEventListener('click', (e) => {
        e.preventDefault()
        if (current !== opt.value) {
          const prev = menu.querySelector('.ar-dd-item.selected') as HTMLElement | null
          if (prev) prev.classList.remove('selected')
          current = opt.value
          item.classList.add('selected')
          setBtnText()
          listeners.forEach(cb => cb(current))
        }
        closeMenu()
      })
      menu.appendChild(item)
    })
  }
  buildItems(allOptions)
  setBtnText()
  btn.setAttribute('aria-haspopup', 'listbox')
  btn.setAttribute('aria-expanded', 'false')
  btn.addEventListener('click', (e) => {
    e.stopPropagation()
    if (menu.style.display === 'block') closeMenu(); else openMenu()
  })
  document.addEventListener('click', (e) => {
    if (!wrap.contains(e.target as Node)) closeMenu()
  })
  root.appendChild(btn)
  root.appendChild(menu)
  wrap.appendChild(label)
  wrap.appendChild(root)
  const listeners: Array<(v: string) => void> = []
  return {
    wrap,
    value: () => current,
    onChange: (cb) => { listeners.push(cb) },
    setVisible: (allowedValues: string[]) => {
      const allowed = allOptions.filter(o => allowedValues.includes(o.value))
      // If current not allowed, set to first allowed and notify
      const currentAllowed = allowed.some(o => o.value === current)
      buildItems(allowed)
      if (!currentAllowed && allowed.length > 0) {
        current = allowed[0].value
        setBtnText()
        listeners.forEach(cb => cb(current))
      } else {
        setBtnText()
      }
    }
  }
}

export function initArGraphVisualizer(opts: { mountEl: HTMLElement }) {
  const mount = opts.mountEl
  // Container
  const container = document.createElement('div')
  container.className = 'ar-viz'
  container.style.position = 'relative'
  container.classList.add('ar-viz-abs')

  // Controls
  const controls = document.createElement('div')
  controls.className = 'ar-ctrls'

  const distDD = buildDropdown(
    'ar-dist',
    'Graph type',
    DISTRIBUTIONS.map(d => ({ value: d.id, label: d.label })),
    'ba'
  )
  const sizeDD = buildDropdown(
    'ar-size',
    'Size',
    SIZES.map(s => ({ value: s.id, label: s.label })),
    'train'
  )
  const probDD = buildDropdown(
    'ar-prob',
    'Problem',
    PROBLEMS.map(p => ({ value: p.id, label: p.label })),
    'shortest_path'
  )
  controls.appendChild(distDD.wrap)
  controls.appendChild(sizeDD.wrap)
  controls.appendChild(probDD.wrap)

  // Graph container for 3D canvas
  const graphWrap = document.createElement('div')
  graphWrap.className = 'ar-graph'
  graphWrap.style.overflow = 'hidden'
  graphWrap.setAttribute('aria-label', 'Generated 3D graph visualization')

  container.appendChild(graphWrap)
  container.appendChild(controls)
  mount.appendChild(container)

  // Build ForceGraph3D instance
  const palette = getComputedStyle(document.documentElement)
  const accentFromMount = (getComputedStyle(mount).getPropertyValue('--accent') || '').trim()
  const edgeColor = (accentFromMount || palette.getPropertyValue('--ds-g3') || '#216C7B').trim() || '#216C7B'
  const nodeColor = edgeColor
  const bgColor = getComputedStyle(document.documentElement).getPropertyValue('--surface-0')?.trim() || '#ffffff'
  // Camera distance presets (edit these to tweak)
  const TRAIN_DIST = 240
  const TEST_DIST = 500
  // Optional per-combination zoom overrides (edit by eye as needed)
  const ZOOMS: Record<ProblemId, Partial<Record<DistributionId, { train: number; test: number }>>> = {
    max_clique: {
      er: { train: 150, test: 400 },
      nws: { train: 150, test: 400 },
      ba: { train: 150, test: 450 },
      dba: { train: 170, test: TEST_DIST },
      plc: { train: 150, test: 450 },
      sbm: { train: 150, test: 400 },
    },
    shortest_path: {
      er: { train: 270, test: 360 },
      nws: { train: 230, test: 360 },
      ba: { train: 220, test: TEST_DIST },
      dba: { train: TRAIN_DIST, test: 1000 },
      plc: { train: 240, test: 1000 },
      sbm: { train: 260, test: 600 },
    },
    max_spanning_tree: {
      er: { train: 230, test: 400 },
      nws: { train: 190, test: 400 },
      ba: { train: 190, test: TEST_DIST },
      dba: { train: 190, test: TEST_DIST },
      plc: { train: 190, test: TEST_DIST },
      sbm: { train: 190, test: 400 },
    },
    steiner_tree: {
      er: { train: 290, test: 400 },
      nws: { train: 220, test: 400 },
      ba: { train: 220, test: TEST_DIST },
      dba: { train: 250, test: 700 },
      plc: { train: 200, test: TEST_DIST },
      sbm: { train: 200, test: 400 },
    },
    max_flow: {
      er: { train: 280, test: 400 },
      nws: { train: 210, test: 400 },
      ba: { train: 210, test: TEST_DIST },
      dba: { train: 210, test: TEST_DIST },
      plc: { train: 210, test: TEST_DIST },
      sbm: { train: 210, test: 400 },
    },
    bipartite_matching: {
      er: { train: 260, test: 450 },
      nws: { train: 210, test: 450 },
      ba: { train: 220, test: TEST_DIST },
      dba: { train: 220, test: TEST_DIST },
      plc: { train: 180, test: 450 },
      sbm: { train: TRAIN_DIST, test: 400 },
    },
    bridge_finding: {
      er: { train: 270, test: 450 },
      nws: { train: TRAIN_DIST, test: TEST_DIST },
      ba: { train: 260, test: 1000 },
      dba: { train: 270, test: 1000 },
      plc: { train: 280, test: 1000 },
      sbm: { train: 270, test: 550 },
    },
  }
  const getZoomFor = (d: DistributionId, p: ProblemId, s: SizeId): number => {
    const o = ZOOMS[p]?.[d]
    if (o) return s === 'train' ? o.train : o.test
    return s === 'train' ? TRAIN_DIST : TEST_DIST
  }

  const fg: any = ForceGraph3D()(graphWrap)
    .backgroundColor(bgColor)
    .nodeRelSize(2.2)
    .linkOpacity(0.35)
    .enableNodeDrag(true)
    .nodeLabel((d: any) => `Node ${d.id}`)
    .nodeColor(() => nodeColor)
    .linkColor(() => edgeColor)
    .showNavInfo(false)

  // Solid, non-transparent, perfectly round nodes
  const NODE_RADIUS = 2.4
  fg
    .nodeThreeObject(() => {
      const geom = new THREE.SphereGeometry(NODE_RADIUS, 16, 16)
      const mat = new THREE.MeshPhongMaterial({ color: nodeColor, transparent: false, depthWrite: true, depthTest: true })
      return new THREE.Mesh(geom, mat)
    })
    .nodeThreeObjectExtend(false)

  // Softer, de-emphasized links that render behind nodes
  fg.linkMaterial(() => new THREE.LineBasicMaterial({ color: edgeColor, transparent: true, opacity: 0.35, depthWrite: false, depthTest: true }))

  // Set a reasonable initial zoom and clamp zoom range; do this ONCE
  try {
    const initialDist = getZoomFor(distDD.value() as DistributionId, probDD.value() as ProblemId, sizeDD.value() as SizeId)
    fg.cameraPosition({ x: 0, y: 0, z: initialDist }, { x: 0, y: 0, z: 0 }, 0)
    const ctrls: any = fg.controls?.()
    if (ctrls) {
      ctrls.minDistance = 120
      ctrls.maxDistance = 1200
    }
  } catch {}

  // Hook controls (no-op; we don't auto-reset camera on regen)
  try {
    const ctrls: any = fg.controls?.()
    if (ctrls && typeof ctrls.addEventListener === 'function') {
      // Keep in case we want to react to user interactions later
      ctrls.addEventListener('start', () => {})
    }
  } catch {}

  // Mutual exclusion: NWS <-> Bridge Finding
  const applyMutualExclusion = () => {
    const distVal = distDD.value() as DistributionId
    const probVal = probDD.value() as ProblemId
    if (distVal === 'nws') {
      // Hide bridge_finding
      probDD.setVisible(PROBLEMS.filter(p => p.id !== 'bridge_finding').map(p => p.id))
    } else if (probVal === 'bridge_finding') {
      // Hide nws
      distDD.setVisible(DISTRIBUTIONS.filter(d => d.id !== 'nws').map(d => d.id))
    } else {
      // Show all
      probDD.setVisible(PROBLEMS.map(p => p.id))
      distDD.setVisible(DISTRIBUTIONS.map(d => d.id))
    }
  }

  const regen = () => {
    const dist = distDD.value() as DistributionId
    const sizeId = sizeDD.value() as SizeId
    const problem = probDD.value() as ProblemId
    const n = SIZES.find(s => s.id === sizeId)!.n
    const g = generateGraph(dist, problem, n)
    // Set height from container CSS percentage
    const desiredH = Math.max(260, Math.floor(graphWrap.clientHeight || 340))
    fg.height(desiredH)
    const data = {
      nodes: Array.from({ length: g.numNodes }, (_, i) => ({ id: i })),
      links: g.edges.map(([s, t]) => ({ source: s, target: t }))
    }
    fg.graphData(data)
    // Ensure width fits parent; do not reset camera to preserve user zoom
    const w = Math.max(320, Math.floor((graphWrap.clientWidth || mount.clientWidth || 520)))
    fg.width(w)
  }

  // Apply configured zoom whenever selectors change
  const applyConfiguredZoom = () => {
    const target = getZoomFor(distDD.value() as DistributionId, probDD.value() as ProblemId, sizeDD.value() as SizeId)
    fg.cameraPosition({ x: 0, y: 0, z: target }, { x: 0, y: 0, z: 0 }, 0)
  }
  distDD.onChange(() => applyConfiguredZoom())
  probDD.onChange(() => applyConfiguredZoom())
  sizeDD.onChange(() => applyConfiguredZoom())

  // Wire events
  distDD.onChange(() => { applyMutualExclusion(); regen() })
  sizeDD.onChange(() => { applyMutualExclusion(); regen() })
  probDD.onChange(() => { applyMutualExclusion(); regen() })

  // Initial render
  applyMutualExclusion()
  regen()

  // Handle container resize
  let resizeTm: number | null = null
  const onResize = () => {
    if (resizeTm) window.clearTimeout(resizeTm)
    resizeTm = window.setTimeout(() => {
      const w = Math.max(320, Math.floor(graphWrap.clientWidth || mount.clientWidth || 520))
      fg.width(w)
      // Keep height fixed to CSS-defined box height to avoid jitter
      fg.height(Math.max(260, Math.floor(graphWrap.clientHeight || 340)))
    }, 150)
  }
  window.addEventListener('resize', onResize, { passive: true })

  // Remove dynamic observers to prevent laggy re-layout
}


