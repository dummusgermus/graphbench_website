import Globe from 'globe.gl'
import * as THREE from 'three'

export type WeatherGlobeOptions = {
  mountEl: HTMLElement
  width?: number
  height?: number
  skin?: 'blue' | 'dark'
}

// Create a spinning earth using globe.gl and overlay a three.js sphere of nodes
export function initWeatherGlobe(options: WeatherGlobeOptions) {
  const { mountEl, skin = 'blue' } = options

  // Create container for Globe (globe.gl manages its own renderer)
  const globeContainer = document.createElement('div')
  globeContainer.className = 'wf-globe'
  mountEl.appendChild(globeContainer)

  // Use textures that are known to exist in three-globe examples
  const texture = skin === 'dark' ? 'earth-night.jpg' : 'earth-blue-marble.jpg'

  const globe = new (Globe as any)(globeContainer, { animateIn: true })
    .globeImageUrl(`//unpkg.com/three-globe/example/img/${texture}`)
    .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')
    .backgroundColor('rgba(0,0,0,0)')

  const globeScene = (globe as any).scene() as THREE.Scene
  const controls: any = (globe as any).controls()
  controls.autoRotate = true
  controls.autoRotateSpeed = 0.45
  globe.pointOfView({ lat: 10, lng: 10, altitude: 2.2 }, 0)

  // Add rotating transparent clouds sphere (based on globe.gl example)
  const CLOUDS_ALT = 0.1
  const CLOUDS_ROTATION_SPEED = -0.011 // deg/frame, slightly slower for subtle drift
  const CLOUDS_OPACITY = 0.9
  const cloudTextureUrls = [
    '/clouds.png',
    '//unpkg.com/three-globe/example/img/clouds.png',
    '//cdn.jsdelivr.net/npm/three-globe/example/img/clouds.png',
    'https://raw.githubusercontent.com/turban/webgl-earth/master/assets/images/earthcloudmaptrans.png'
  ]

  let clouds: THREE.Mesh | null = null
  let cloudsRafId = 0
  let destroyed = false

  const startCloudsRotation = () => {
    const rotate = () => {
      if (destroyed || !clouds) return
      clouds.rotation.y += (CLOUDS_ROTATION_SPEED * Math.PI) / 180
      cloudsRafId = requestAnimationFrame(rotate)
    }
    cloudsRafId = requestAnimationFrame(rotate)
  }

  const tryLoadClouds = (idx = 0) => {
    if (idx >= cloudTextureUrls.length) return
    new THREE.TextureLoader().load(
      cloudTextureUrls[idx],
      (cloudsTexture) => {
        const baseRadius = (globe as any).getGlobeRadius ? (globe as any).getGlobeRadius() : 100
        const geometry = new THREE.SphereGeometry(baseRadius * (1 + CLOUDS_ALT), 75, 75)
        const material = new THREE.MeshPhongMaterial({
          map: cloudsTexture,
          transparent: true,
          opacity: CLOUDS_OPACITY
        })
        clouds = new THREE.Mesh(geometry, material)
        globeScene.add(clouds)
        startCloudsRotation()
      },
      undefined,
      () => tryLoadClouds(idx + 1)
    )
  }
  tryLoadClouds()

  // Create overlay Three.js scene elements attached to the same renderer/camera
  const camera: THREE.PerspectiveCamera = (globe as any).camera()

  // Build a geodesic sphere of nodes using a refined icosahedron
  const group = new THREE.Group()
  const radius = 115
  const detail = 4 // increase for finer subdivision
  const ico = new THREE.IcosahedronGeometry(radius, detail)

  const pos = ico.getAttribute('position') as THREE.BufferAttribute
  const vertexCount = pos.count
  const vertices: THREE.Vector3[] = new Array(vertexCount)
  for (let i = 0; i < vertexCount; i++) {
    vertices[i] = new THREE.Vector3().fromBufferAttribute(pos, i)
  }

  // Create node meshes at each vertex
  const nodeMaterial = new THREE.MeshBasicMaterial({ color: 0x1F9274 })
  const nodeGeometry = new THREE.SphereGeometry(1.4, 12, 12)
  for (let i = 0; i < vertexCount; i++) {
    const mesh = new THREE.Mesh(nodeGeometry, nodeMaterial)
    const v = vertices[i]
    mesh.position.set(v.x, v.y, v.z)
    group.add(mesh)
  }

  // Draw edges by using a wireframe over the geodesic sphere
  const lineMaterial = new THREE.LineBasicMaterial({ color: 0x1F9274, opacity: 0.4, transparent: true })
  const wireGeom = new THREE.WireframeGeometry(ico)
  const lineMesh = new THREE.LineSegments(wireGeom, lineMaterial)
  group.add(lineMesh)

  globeScene.add(group)

  // Sync sizes
  const resize = () => {
    const rect = mountEl.getBoundingClientRect()
    const w = rect.width
    const h = rect.height
    ;(globe as any).width(w)
    ;(globe as any).height(h)
    // globe.gl updates renderer + camera; keep aspect in sync as well
    camera.aspect = w / Math.max(1, h)
    camera.updateProjectionMatrix()
  }
  resize()
  window.addEventListener('resize', resize)

  // Nodes rotate with the globe because the camera auto-rotates around the scene

  return {
    destroy() {
      destroyed = true
      if (cloudsRafId) cancelAnimationFrame(cloudsRafId)
      if (clouds) {
        globeScene.remove(clouds)
        const mat: any = (clouds as any).material
        const geo: any = (clouds as any).geometry
        if (mat && typeof mat.dispose === 'function') mat.dispose()
        if (geo && typeof geo.dispose === 'function') geo.dispose()
        clouds = null
      }
      window.removeEventListener('resize', resize)
      globeContainer.remove()
    }
  }
}


