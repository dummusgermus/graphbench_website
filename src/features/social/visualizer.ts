// Dynamic 2D social network visualizer with temporal edges
// Edges appear randomly, persist for 5-32 seconds, then vanish
// Uses force-graph for 2D rendering with D3 force simulation

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
const MIN_LIFETIME = 5000  // 5 seconds
const MAX_LIFETIME = 32000 // 32 seconds
const NUM_NODES = 25
const EDGE_SPAWN_INTERVAL = 800 // Try to add new edge every 800ms
const MAX_EDGES = 35 // Maximum concurrent edges
const MIN_EDGES = 24 // Minimum edges to maintain connectivity


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

  // Draw background circle
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.arc(size / 2, size / 2, size / 2, 0, 2 * Math.PI)
  ctx.fill()

  // Draw icon
  ctx.strokeStyle = '#ffffff'
  ctx.fillStyle = '#ffffff'
  ctx.lineWidth = 1.5
  ctx.lineCap = 'round'
  ctx.lineJoin = 'round'

  // Head circle
  ctx.beginPath()
  ctx.arc(size / 2, size * 0.35, size * 0.12, 0, 2 * Math.PI)
  ctx.stroke()

  // Shoulders arc
  ctx.beginPath()
  ctx.arc(size / 2, size * 0.75, size * 0.28, -Math.PI * 0.8, -Math.PI * 0.2)
  ctx.stroke()

  return canvas
}

export function initSocialNetworkVisualizer(opts: { mountEl: HTMLElement }) {
  const mount = opts.mountEl
  
  // Container
  const container = document.createElement('div')
  container.className = 'social-viz'

  // Graph container for 2D canvas
  const graphWrap = document.createElement('div')
  graphWrap.className = 'social-graph'
  graphWrap.setAttribute('aria-label', 'Dynamic social network visualization')

  container.appendChild(graphWrap)
  mount.appendChild(container)

  // Get colors from CSS
  const palette = getComputedStyle(document.documentElement)
  const accentFromMount = (getComputedStyle(mount).getPropertyValue('--accent') || '').trim()
  const nodeColor = (accentFromMount || palette.getPropertyValue('--ds-g1') || '#E75480').trim() || '#E75480'
  const bgColor = getComputedStyle(document.documentElement).getPropertyValue('--surface-0')?.trim() || '#ffffff'
  
  // Edge colors per type
  const edgeColors = {
    quote: nodeColor,
    reply: adjustColorBrightness(nodeColor, 0.8),
    repost: adjustColorBrightness(nodeColor, 0.6)
  }

  // Initialize nodes
  const nodes: Node[] = Array.from({ length: NUM_NODES }, (_, i) => ({ id: i }))
  let edges: Edge[] = []
  let edgeIdCounter = 0

  // Create node image
  const nodeImage = createSocialIconImage(nodeColor, 20)

  // Initialize ForceGraph
  // @ts-ignore - force-graph library doesn't have proper type definitions
  const graph: any = ForceGraph()(graphWrap)
    .backgroundColor(bgColor)
    .width(600)
    .height(425)
    .nodeRelSize(2)
    .nodeVal(() => 6)  // Node radius for link/arrow calculations
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
    .linkDirectionalArrowRelPos(1)  // Position at link end, will stop at node edge based on nodeVal
    .linkCurvature(0)
    .d3VelocityDecay(0.92)  // Add damping to slow down node movement
    .cooldownTicks(100)
    .onEngineStop(() => graph.d3ReheatSimulation())

  // Set initial data
  graph.graphData({ nodes, links: [] })

  // Configure forces for tighter, more zoomed-in layout
  const linkForce = graph.d3Force('link')
  if (linkForce) {
    linkForce.distance(40)  // Shorter link distance = more zoomed in
  }

  const chargeForce = graph.d3Force('charge')
  if (chargeForce) {
    chargeForce.strength(-60)  // Reduced repulsion for tighter clustering
  }

  // Add boundary force to keep nodes within viewport
  const boundaryForce = () => {
    const padding = 30  // Safe zone from edges
    const width = 600
    const height = 425
    const strength = 0.03  // Gentle push back
    
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

  // Size the canvas
  const updateSize = () => {
    const w = Math.max(400, graphWrap.clientWidth || 600)
    const h = Math.max(400, graphWrap.clientHeight || 425)
    graph.width(w).height(h)
  }
  
  // Wait a tick for CSS to apply dimensions, then initialize connected graph
  setTimeout(() => {
    updateSize()
    createInitialGraph()
  }, 100)

  // Check if edge exists (in either direction)
  const edgeExists = (s: number, t: number): boolean => {
    return edges.some(e => {
      const src = typeof e.source === 'object' ? (e.source as any).id : e.source
      const tgt = typeof e.target === 'object' ? (e.target as any).id : e.target
      return (src === s && tgt === t) || (src === t && tgt === s)
    })
  }

  // Check if removing an edge would disconnect the graph
  const wouldDisconnect = (edgeToRemove: Edge): boolean => {
    // Build adjacency list without the edge to remove
    const adj: Set<number>[] = Array.from({ length: NUM_NODES }, () => new Set())
    for (const e of edges) {
      if (e.id === edgeToRemove.id) continue
      const s = typeof e.source === 'object' ? (e.source as any).id : e.source
      const t = typeof e.target === 'object' ? (e.target as any).id : e.target
      adj[s].add(t)
      adj[t].add(s)
    }
    
    // BFS to check connectivity
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

  // Add random edge
  const addEdge = () => {
    if (edges.length >= MAX_EDGES) return

    const source = randomInt(0, NUM_NODES - 1)
    let target = randomInt(0, NUM_NODES - 1)
    
    // Ensure source != target and edge doesn't exist
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

  // Remove expired edges (but maintain connectivity)
  const pruneEdges = () => {
    const now = Date.now()
    const before = edges.length
    const expired = edges.filter(e => now - e.createdAt >= e.lifetime)
    
    // Remove expired edges one by one, checking connectivity
    for (const edge of expired) {
      // Don't remove if we're at minimum edge count
      if (edges.length <= MIN_EDGES) break
      
      // Don't remove if it would disconnect the graph
      if (wouldDisconnect(edge)) continue
      
      edges = edges.filter(e => e.id !== edge.id)
    }
    
    if (edges.length !== before) {
      updateGraph()
    }
  }

  // Update graph with current edges
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

  // Spawn edges periodically
  const spawnInterval = setInterval(() => {
    addEdge()
  }, EDGE_SPAWN_INTERVAL)

  // Prune expired edges periodically
  const pruneInterval = setInterval(() => {
    pruneEdges()
  }, 1000)

  // Create initial connected graph (spanning tree + extra edges)
  const createInitialGraph = () => {
    // First create a spanning tree to ensure connectivity
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
    
    // Add some extra edges for visual interest
    for (let i = 0; i < 6; i++) {
      setTimeout(() => addEdge(), i * 300)
    }
    
    updateGraph()
  }

  // Handle resize
  let resizeTm: number | null = null
  const onResize = () => {
    if (resizeTm) window.clearTimeout(resizeTm)
    resizeTm = window.setTimeout(updateSize, 150)
  }
  window.addEventListener('resize', onResize, { passive: true })

  // Cleanup function (if needed)
  return () => {
    clearInterval(spawnInterval)
    clearInterval(pruneInterval)
    window.removeEventListener('resize', onResize)
  }
}

// Helper to adjust color brightness
function adjustColorBrightness(color: string, factor: number): string {
  // Parse hex color
  const hex = color.replace('#', '')
  const r = parseInt(hex.substring(0, 2), 16)
  const g = parseInt(hex.substring(2, 4), 16)
  const b = parseInt(hex.substring(4, 6), 16)
  
  // Adjust brightness
  const newR = Math.min(255, Math.floor(r * factor))
  const newG = Math.min(255, Math.floor(g * factor))
  const newB = Math.min(255, Math.floor(b * factor))
  
  // Convert back to hex
  return `#${newR.toString(16).padStart(2, '0')}${newG.toString(16).padStart(2, '0')}${newB.toString(16).padStart(2, '0')}`
}

