import '../style.css'
import { renderLayout } from '../shared/layout'

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
    <div class="grid">
      <div class="card col-12">
        <h3>2025-01-10</h3>
        <p class="muted">Prototype UI released with datasets gallery and sample leaderboard.</p>
      </div>
      <div class="card col-12">
        <h3>2024-12-12</h3>
        <p class="muted">Initial project scaffolding and design tokens.</p>
      </div>
    </div>
  </section>
`)


