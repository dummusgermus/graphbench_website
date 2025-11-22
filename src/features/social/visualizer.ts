import ForceGraph from 'force-graph'

type Edge = {
  id: string
  source: number
  target: number
  createdAt: number
  lifetime: number
  type: 'quote' | 'reply' | 'repost'
}

type Node = {
  id: number
  x?: number
  y?: number
  vx?: number
  vy?: number
}

const INTERACTION_TYPES = ['quote', 'reply', 'repost'] as const
const MIN_LIFETIME = 5000
const MAX_LIFETIME = 32000
const NUM_NODES = 25
const EDGE_SPAWN_INTERVAL = 800
const MAX_EDGES = 35
const MIN_EDGES = 24


function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function randomChoice<T>(arr: readonly T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]
}

function randomLifetime(): number {
  return randomInt(MIN_LIFETIME, MAX_LIFETIME)
}

function createSocialIconImage(color: string, size: number = 32): HTMLCanvasElement {
  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size
  const ctx = canvas.getContext('2d')
  if (!ctx) return canvas

  ctx.fillStyle = color
  ctx.beginPath()
  ctx.arc(size / 2, size / 2, size / 2, 0, 2 * Math.PI)
  ctx.fill()

  ctx.strokeStyle = '#ffffff'
  ctx.fillStyle = '#ffffff'
  ctx.lineWidth = 1.5
  ctx.lineCap = 'round'
  ctx.lineJoin = 'round'

  ctx.beginPath()
  ctx.arc(size / 2, size * 0.35, size * 0.12, 0, 2 * Math.PI)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(size / 2, size * 0.75, size * 0.28, -Math.PI * 0.8, -Math.PI * 0.2)
  ctx.stroke()

  return canvas
}

export function initSocialNetworkVisualizer(opts: { mountEl: HTMLElement }) {
  const mount = opts.mountEl
  
  const container = document.createElement('div')
  container.className = 'social-viz'

  const graphWrap = document.createElement('div')
  graphWrap.className = 'social-graph'
  graphWrap.setAttribute('aria-label', 'Dynamic social network visualization')

  container.appendChild(graphWrap)
  mount.appendChild(container)

  const palette = getComputedStyle(document.documentElement)
  const accentFromMount = (getComputedStyle(mount).getPropertyValue('--accent') || '').trim()
  const nodeColor = (accentFromMount || palette.getPropertyValue('--ds-g1') || '#E75480').trim() || '#E75480'
  const bgColor = getComputedStyle(document.documentElement).getPropertyValue('--surface-0')?.trim() || '#ffffff'
  
  const edgeColors = {
    quote: nodeColor,
    reply: adjustColorBrightness(nodeColor, 0.8),
    repost: adjustColorBrightness(nodeColor, 0.6)
  }

  const nodes: Node[] = Array.from({ length: NUM_NODES }, (_, i) => ({ id: i }))
  let edges: Edge[] = []
  let edgeIdCounter = 0

  const nodeImage = createSocialIconImage(nodeColor, 20)

  const graph: any = (ForceGraph as any)()(graphWrap)
    .backgroundColor(bgColor)
    .width(600)
    .height(425)
    .nodeRelSize(2)
    .nodeVal(() => 6)
    .nodeCanvasObject((node: any, ctx: CanvasRenderingContext2D) => {
      const size = 12
      ctx.drawImage(nodeImage, node.x - size / 2, node.y - size / 2, size, size)
    })
    .nodePointerAreaPaint((node: any, color: string, ctx: CanvasRenderingContext2D) => {
      ctx.fillStyle = color
      ctx.beginPath()
      ctx.arc(node.x, node.y, 5, 0, 2 * Math.PI)
      ctx.fill()
    })
    .linkColor((link: any) => {
      const edge = edges.find(e => e.id === link.id)
      return edge ? edgeColors[edge.type] : nodeColor
    })
    .linkWidth(1)
    .linkDirectionalArrowLength(6)
    .linkDirectionalArrowRelPos(1)
    .linkCurvature(0)
    .d3VelocityDecay(0.92)
    .cooldownTicks(100)
    .onEngineStop(() => graph.d3ReheatSimulation())

  graph.graphData({ nodes, links: [] })

  const linkForce = graph.d3Force('link')
  if (linkForce) {
    linkForce.distance(40)
  }

  const chargeForce = graph.d3Force('charge')
  if (chargeForce) {
    chargeForce.strength(-60)
  }

  const boundaryForce = () => {
    const padding = 30
    const width = 600
    const height = 425
    const strength = 0.03
    
    nodes.forEach(node => {
      if (node.x !== undefined && node.vx !== undefined) {
        if (node.x < padding) {
          node.vx = node.vx + (padding - node.x) * strength
        } else if (node.x > width - padding) {
          node.vx = node.vx - (node.x - (width - padding)) * strength
        }
      }
      if (node.y !== undefined && node.vy !== undefined) {
        if (node.y < padding) {
          node.vy = node.vy + (padding - node.y) * strength
        } else if (node.y > height - padding) {
          node.vy = node.vy - (node.y - (height - padding)) * strength
        }
      }
    })
  }
  
  graph.d3Force('boundary', boundaryForce)

  const updateSize = () => {
    const w = Math.max(400, graphWrap.clientWidth || 600)
    const h = Math.max(400, graphWrap.clientHeight || 425)
    graph.width(w).height(h)
  }
  
  setTimeout(() => {
    updateSize()
    createInitialGraph()
  }, 100)

  const edgeExists = (s: number, t: number): boolean => {
    return edges.some(e => {
      const src = typeof e.source === 'object' ? (e.source as any).id : e.source
      const tgt = typeof e.target === 'object' ? (e.target as any).id : e.target
      return (src === s && tgt === t) || (src === t && tgt === s)
    })
  }

  const wouldDisconnect = (edgeToRemove: Edge): boolean => {
    const adj: Set<number>[] = Array.from({ length: NUM_NODES }, () => new Set())
    for (const e of edges) {
      if (e.id === edgeToRemove.id) continue
      const s = typeof e.source === 'object' ? (e.source as any).id : e.source
      const t = typeof e.target === 'object' ? (e.target as any).id : e.target
      adj[s].add(t)
      adj[t].add(s)
    }
    
    const visited = new Set<number>()
    const queue = [0]
    visited.add(0)
    
    while (queue.length > 0) {
      const node = queue.shift()!
      for (const neighbor of adj[node]) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor)
          queue.push(neighbor)
        }
      }
    }
    
    return visited.size < NUM_NODES
  }

  const addEdge = () => {
    if (edges.length >= MAX_EDGES) return

    const source = randomInt(0, NUM_NODES - 1)
    let target = randomInt(0, NUM_NODES - 1)
    
    let attempts = 0
    while ((target === source || edgeExists(source, target)) && attempts < 50) {
      target = randomInt(0, NUM_NODES - 1)
      attempts++
    }
    
    if (target === source || edgeExists(source, target)) return

    const edge: Edge = {
      id: `edge-${edgeIdCounter++}`,
      source,
      target,
      createdAt: Date.now(),
      lifetime: randomLifetime(),
      type: randomChoice(INTERACTION_TYPES)
    }

    edges.push(edge)
    updateGraph()
  }

  const pruneEdges = () => {
    const now = Date.now()
    const before = edges.length
    const expired = edges.filter(e => now - e.createdAt >= e.lifetime)
    
    for (const edge of expired) {
      if (edges.length <= MIN_EDGES) break
      
      if (wouldDisconnect(edge)) continue
      
      edges = edges.filter(e => e.id !== edge.id)
    }
    
    if (edges.length !== before) {
      updateGraph()
    }
  }

  const updateGraph = () => {
    graph.graphData({
      nodes,
      links: edges.map(e => ({
        id: e.id,
        source: e.source,
        target: e.target
      }))
    })
  }

  const spawnInterval = setInterval(() => {
    addEdge()
  }, EDGE_SPAWN_INTERVAL)

  const pruneInterval = setInterval(() => {
    pruneEdges()
  }, 1000)

  const createInitialGraph = () => {
    const connected = new Set([0])
    const unconnected = Array.from({ length: NUM_NODES - 1 }, (_, i) => i + 1)
    
    while (unconnected.length > 0) {
      const fromNode = randomChoice(Array.from(connected))
      const toIdx = randomInt(0, unconnected.length - 1)
      const toNode = unconnected[toIdx]
      
      const edge: Edge = {
        id: `edge-${edgeIdCounter++}`,
        source: fromNode,
        target: toNode,
        createdAt: Date.now(),
        lifetime: randomLifetime(),
        type: randomChoice(INTERACTION_TYPES)
      }
      edges.push(edge)
      
      connected.add(toNode)
      unconnected.splice(toIdx, 1)
    }
    
    for (let i = 0; i < 6; i++) {
      setTimeout(() => addEdge(), i * 300)
    }
    
    updateGraph()
  }

  let resizeTm: number | null = null
  const onResize = () => {
    if (resizeTm) window.clearTimeout(resizeTm)
    resizeTm = window.setTimeout(updateSize, 150)
  }
  window.addEventListener('resize', onResize, { passive: true })

  return () => {
    clearInterval(spawnInterval)
    clearInterval(pruneInterval)
    window.removeEventListener('resize', onResize)
  }
}

function adjustColorBrightness(color: string, factor: number): string {
  const hex = color.replace('#', '')
  const r = parseInt(hex.substring(0, 2), 16)
  const g = parseInt(hex.substring(2, 4), 16)
  const b = parseInt(hex.substring(4, 6), 16)
  
  const newR = Math.min(255, Math.floor(r * factor))
  const newG = Math.min(255, Math.floor(g * factor))
  const newB = Math.min(255, Math.floor(b * factor))
  
  return `#${newR.toString(16).padStart(2, '0')}${newG.toString(16).padStart(2, '0')}${newB.toString(16).padStart(2, '0')}`
}

