import{r as e}from"./layout-yOHGpJMP.js";const t=document.querySelector("#app");t.innerHTML=e("team",`
  <section class="page-header">
    <div class="container">
      <div class="title-row">
        <span class="page-icon" aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
        </span>
        <h2>Team</h2>
      </div>
      <p class="lead">Meet the people behind GraphBench.</p>
    </div>
  </section>

  <section class="container">
    <div class="team-grid">
      ${Array.from({length:10}).map(()=>`
      <div class="team-item">
        <div class="team-avatar">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M6 20a6 6 0 0 1 12 0"/></svg>
        </div>
        <div class="team-name">Sample Person</div>
        <div class="team-inst">Institution</div>
      </div>
      `).join("")}
    </div>
  </section>
`);
