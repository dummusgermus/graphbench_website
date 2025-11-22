import ForceGraph3D from '3d-force-graph'
import * as THREE from 'three'

type Edge = [number, number]
type Graph = { numNodes: number; edges: Edge[] }

type GraphTypeId = 'rb' | 'er' | 'ba'
type SizeId = 'small' | 'large'

type GraphTypeDef = { id: GraphTypeId; label: string }

const GRAPH_TYPES: GraphTypeDef[] = [
  { id: 'rb', label: 'Random Bipartite' },
  { id: 'er', label: 'Erdős–Rényi' },
  { id: 'ba', label: 'Barabási–Albert' },
]

const SIZES: { id: SizeId; label: string; n: Record<GraphTypeId, number> }[] = [
  { id: 'small', label: 'SMALL', n: { rb: 200, er: 200, ba: 200 } },
  { id: 'large', label: 'LARGE', n: { rb: 800, er: 700, ba: 700 } },
]

type ParamMap = Record<GraphTypeId, Record<SizeId, Record<string, number>>>

const PARAMS: ParamMap = {
  rb: {
    small: { nodesPerClique: 5, cliques: 20, tightness: 0.3 },
    large: { nodesPerClique: 20, cliques: 40, tightness: 0.3 },
  },
  er: {
    small: { p: 0.15 },
    large: { p: 0.15 },
  },
  ba: {
    small: { m: 2 },
    large: { m: 2 },
  },
}

const randInt = (n: number) => Math.floor(Math.random() * n)
const choice = <T>(arr: T[]) => arr[randInt(arr.length)]

function genER(n: number, p: number): Graph {
  const edges: Edge[] = []
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (Math.random() < p) edges.push([i, j])
    }
  }
  return { numNodes: n, edges }
}

function genBA(n: number, m: number): Graph {
  const mm = Math.max(1, Math.min(n - 1, Math.floor(m)))
  const edges: Edge[] = []
  const degree = new Array<number>(n).fill(0)
  const init = mm + 1
  for (let i = 0; i < init; i++) {
    for (let j = i + 1; j < init; j++) {
      edges.push([i, j]); degree[i]++; degree[j]++
    }
  }
  const targets: number[] = []
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

function genRB(n: number, cliques: number, tightness: number): Graph {
  const edges: Edge[] = []
  const edgeSet = new Set<string>()
  
  const addEdge = (a: number, b: number) => {
    if (a === b) return
    const i = Math.min(a, b), j = Math.max(a, b)
    const key = `${i}-${j}`
    if (!edgeSet.has(key)) {
      edgeSet.add(key)
      edges.push([i, j])
    }
  }

  const nodeToClique = new Array<number>(n)
  for (let i = 0; i < n; i++) {
    nodeToClique[i] = Math.floor((i * cliques) / n)
  }

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (nodeToClique[i] === nodeToClique[j]) {
        if (Math.random() < tightness) {
          addEdge(i, j)
        }
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (nodeToClique[i] !== nodeToClique[j]) {
        if (Math.random() < 0.02) {
          addEdge(i, j)
        }
      }
    }
  }

  return { numNodes: n, edges }
}

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

function generateGraph(graphType: GraphTypeId, size: SizeId): Graph {
  const n = SIZES.find(s => s.id === size)!.n[graphType]
  const params = PARAMS[graphType][size]
  let g: Graph
  switch (graphType) {
    case 'er':
      g = genER(n, clamp01(params.p ?? 0.15))
      break
    case 'ba':
      g = genBA(n, Math.max(1, Math.floor(params.m ?? 2)))
      break
    case 'rb':
      g = genRB(
        n,
        Math.max(1, Math.floor(params.cliques ?? 20)),
        clamp01(params.tightness ?? 0.3)
      )
      break
  }
  return ensureConnected(g)
}

function clamp01(x: number) { return Math.max(0, Math.min(1, x)) }

type Dropdown = {
  wrap: HTMLDivElement
  value: () => string
  onChange: (cb: (v: string) => void) => void
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
  }
}

export function initCoGraphVisualizer(opts: { mountEl: HTMLElement }) {
  const mount = opts.mountEl
  const container = document.createElement('div')
  container.className = 'ar-viz'
  container.style.position = 'relative'
  container.classList.add('ar-viz-abs')

  const controls = document.createElement('div')
  controls.className = 'ar-ctrls'

  const graphTypeDD = buildDropdown(
    'co-graphtype',
    'Graph type',
    GRAPH_TYPES.map(g => ({ value: g.id, label: g.label })),
    'rb'
  )
  const sizeDD = buildDropdown(
    'co-size',
    'Size',
    SIZES.map(s => ({ value: s.id, label: s.label })),
    'small'
  )
  controls.appendChild(graphTypeDD.wrap)
  controls.appendChild(sizeDD.wrap)

  const graphWrap = document.createElement('div')
  graphWrap.className = 'ar-graph'
  graphWrap.style.overflow = 'hidden'
  graphWrap.setAttribute('aria-label', 'Generated 3D graph visualization')

  container.appendChild(graphWrap)
  container.appendChild(controls)
  mount.appendChild(container)

  const palette = getComputedStyle(document.documentElement)
  const accentFromMount = (getComputedStyle(mount).getPropertyValue('--accent') || '').trim()
  const edgeColor = (accentFromMount || palette.getPropertyValue('--ds-g3') || '#216C7B').trim() || '#216C7B'
  const nodeColor = edgeColor
  const bgColor = getComputedStyle(document.documentElement).getPropertyValue('--surface-0')?.trim() || '#ffffff'
  
  const SMALL_DIST = 400

  const ZOOMS: Record<GraphTypeId, Record<SizeId, number>> = {
    rb: { small: 650, large: 1000 },
    er: { small: 400, large: 600 },
    ba: { small: 800, large: 1000 },
  }
  
  const getZoomFor = (g: GraphTypeId, s: SizeId): number => {
    return ZOOMS[g]?.[s] ?? SMALL_DIST
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

  const NODE_RADIUS = 2.4
  fg
    .nodeThreeObject(() => {
      const geom = new THREE.SphereGeometry(NODE_RADIUS, 16, 16)
      const mat = new THREE.MeshPhongMaterial({ color: nodeColor, transparent: false, depthWrite: true, depthTest: true })
      return new THREE.Mesh(geom, mat)
    })
    .nodeThreeObjectExtend(false)

  fg.linkMaterial(() => new THREE.LineBasicMaterial({ color: edgeColor, transparent: true, opacity: 0.35, depthWrite: false, depthTest: true }))

  try {
    const initialDist = getZoomFor(graphTypeDD.value() as GraphTypeId, sizeDD.value() as SizeId)
    fg.cameraPosition({ x: 0, y: 0, z: initialDist }, { x: 0, y: 0, z: 0 }, 0)
    const ctrls: any = fg.controls?.()
    if (ctrls) {
      ctrls.minDistance = 120
      ctrls.maxDistance = 1500
    }
  } catch {}

  const regen = () => {
    const graphType = graphTypeDD.value() as GraphTypeId
    const size = sizeDD.value() as SizeId
    const g = generateGraph(graphType, size)
    const desiredH = Math.max(260, Math.floor(graphWrap.clientHeight || 340))
    fg.height(desiredH)
    const data = {
      nodes: Array.from({ length: g.numNodes }, (_, i) => ({ id: i })),
      links: g.edges.map(([s, t]) => ({ source: s, target: t }))
    }
    fg.graphData(data)
    const w = Math.max(320, Math.floor((graphWrap.clientWidth || mount.clientWidth || 520)))
    fg.width(w)
  }

  const applyConfiguredZoom = () => {
    const target = getZoomFor(graphTypeDD.value() as GraphTypeId, sizeDD.value() as SizeId)
    fg.cameraPosition({ x: 0, y: 0, z: target }, { x: 0, y: 0, z: 0 }, 0)
  }
  graphTypeDD.onChange(() => applyConfiguredZoom())
  sizeDD.onChange(() => applyConfiguredZoom())

  graphTypeDD.onChange(() => regen())
  sizeDD.onChange(() => regen())

  regen()

  let resizeTm: number | null = null
  const onResize = () => {
    if (resizeTm) window.clearTimeout(resizeTm)
    resizeTm = window.setTimeout(() => {
      const w = Math.max(320, Math.floor(graphWrap.clientWidth || mount.clientWidth || 520))
      fg.width(w)
      fg.height(Math.max(260, Math.floor(graphWrap.clientHeight || 340)))
    }, 150)
  }
  window.addEventListener('resize', onResize, { passive: true })
}

