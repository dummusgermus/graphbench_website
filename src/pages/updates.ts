import '../style.css'
import { renderLayout, getRuntimeBase, enhanceInteractions } from '../shared/layout'

const app = document.querySelector<HTMLDivElement>('#app')!
app.innerHTML = renderLayout('updates', `
  <section class="page-header">
    <div class="container">
      <div class="title-row">
        <span class="page-icon" aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 4h18"/><path d="M8 8h13"/><path d="M3 12h18"/><path d="M8 16h13"/></svg>
        </span>
        <h2>Update Log</h2>
      </div>
    </div>
  </section>
  <section class="container">
    <div class="updates" id="updates-list"></div>
  </section>
`)

type UpdateItem = { date: string; version: string; text: string }
  ; (async () => {
    const mount = document.getElementById('updates-list') as HTMLDivElement | null
    if (!mount) return
    try {
      const base = getRuntimeBase()
      const res = await fetch(`${base}updates.json`)
      if (!res.ok) throw new Error('Failed to load updates')
      const items = (await res.json()) as UpdateItem[]
      items.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      const html = items.map(u => {
        const major = String(u.version || '').split('.')[0] || '1'
        const vClass = `v${major}`
        return `
      <div class="update">
        <div class="update-head">
          <h3 class="update-title"><span class="date">${u.date}</span><span class="version-tag ${vClass}" aria-label="Version">${u.version}</span></h3>
        </div>
        <div class="update-body">${u.text}</div>
      </div>`
      }).join('')
      mount.innerHTML = html
    } catch { }
  })()


enhanceInteractions()

