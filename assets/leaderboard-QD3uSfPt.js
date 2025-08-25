import{r as a}from"./layout-BKFLJM4_.js";const d=[{model:"GCN",dataset:"OGBN-Arxiv",metric:"Acc",score:.724},{model:"GraphSAGE",dataset:"OGBN-Products",metric:"Acc",score:.812},{model:"GAT",dataset:"Reddit",metric:"F1",score:.942},{model:"GIN",dataset:"PPI",metric:"Micro-F1",score:.989}],o=`
  <div class="card">
    <div style="overflow:auto">
      <table class="table" aria-label="Benchmark leaderboard">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Model</th>
            <th>Dataset</th>
            <th>Metric</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          ${d.map((t,e)=>`
            <tr>
              <td>${e+1}</td>
              <td>${t.model}</td>
              <td>${t.dataset}</td>
              <td>${t.metric}</td>
              <td>${t.score.toFixed(3)}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  </div>`,r=document.querySelector("#app");r.innerHTML=a("leaderboard",`
  <section class="page-header">
    <div class="container">
      <div class="title-row">
        <span class="page-icon" aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3h6v18H3zM15 9h6v12h-6z"/></svg>
        </span>
        <h2>Leaderboard</h2>
      </div>
      <p class="lead">Dummy results to illustrate ranking layout.</p>
    </div>
  </section>
  <section class="container">
    ${o}
  </section>
`);
