import{r as n,g as e,e as o}from"./layout-BPZ-ecsS.js";const s=document.querySelector("#app");s.innerHTML=n("team",`
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
      ${[{name:"Antoine Siraudin",image:"antoine_siraudin.png",institution:"RWTH Aachen University",domains:[{label:"Chip Design",colorClass:"team-domain-g2"}]},{name:"Chendi Qian",image:"chendi_qian.png",institution:"RWTH Aachen University",domains:[{label:"Combinatorial Optimization",colorClass:"team-domain-g3"}]},{name:"Ben Finkelshtein",image:"ben_finkelshtein.png",institution:"University of Oxford",domains:[{label:"Social Networks",colorClass:"team-domain-g1"}]},{name:"Ali Parviz",image:"ali_parviz.png",institution:"Mila - Quebec AI Institute",domains:[{label:"Electronic Circuits",colorClass:"team-domain-g2"}]},{name:"Darius Weber",image:"darius_weber.png",institution:"RWTH Aachen University",domains:[{label:"Chip Design",colorClass:"team-domain-g2"}]},{name:"Fabrizio Frasca",image:"fabrizio_frasca.png",institution:"Technion – Israel Institute of Technology",domains:[{label:"Social Networks",colorClass:"team-domain-g1"}]},{name:"Hadar Shavit",image:"hadar_shavit.png",institution:"RWTH Aachen University",domains:[{label:"SAT Solving",colorClass:"team-domain-g3"}]},{name:"Timo Stoll",image:"timo_stoll.png",institution:"RWTH Aachen University",domains:[{label:"Algorithmic Reasoning",colorClass:"team-domain-g3"},{label:"Weather Forecasting",colorClass:"team-domain-g4"}]},{name:"Arman Mielke",image:"arman_mielke.png",institution:"University of Stuttgart",domains:[{label:"Combinatorial Optimization",colorClass:"team-domain-g3"}]},{name:"Marie Anastacio",image:"marie_anastacio.png",institution:"RWTH Aachen University",domains:[{label:"SAT Solving",colorClass:"team-domain-g3"}]},{name:"Erik Müller",image:"erik_muller.png",institution:"RWTH Aachen University",domains:[{label:"Algorithmic Reasoning",colorClass:"team-domain-g3"},{label:"Weather Forecasting",colorClass:"team-domain-g4"}]},{name:"Maya Bechler-Speicher",image:"maya_bechler_speicher.png",institution:"Meta",domains:[{label:"Advisor",colorClass:"team-domain-senior"}]},{name:"Michael M. Bronstein",image:"michael_bronstein.png",institution:"University of Oxford",domains:[{label:"Advisor",colorClass:"team-domain-senior"}]},{name:"Mikhail Galkin",image:"mikhail_galkin.png",institution:"Google Research",domains:[{label:"Advisor",colorClass:"team-domain-senior"}]},{name:"Holger H. Hoos",image:"holger_hoos.png",institution:"RWTH Aachen University",domains:[{label:"Advisor",colorClass:"team-domain-senior"}]},{name:"Mathias Niepert",image:"mathias_niepert.png",institution:"University of Stuttgart",domains:[{label:"Advisor",colorClass:"team-domain-senior"}]},{name:"Bryan Perozzi",image:"bryan_perozzi.png",institution:"Google Research",domains:[{label:"Advisor",colorClass:"team-domain-senior"}]},{name:"Jan Tönshoff",image:"jan_tonshoff.png",institution:"Microsoft Research",domains:[{label:"Advisor",colorClass:"team-domain-senior"}]},{name:"Christopher Morris",image:"christopher_morris.png",institution:"RWTH Aachen University",domains:[{label:"Advisor",colorClass:"team-domain-senior"}]}].map(i=>`
      <div class="team-item">
        <div class="team-avatar">
          <img src="${e()}images/team/${i.image}" alt="${i.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';" />
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="display: none;"><circle cx="12" cy="8" r="4"/><path d="M6 20a6 6 0 0 1 12 0"/></svg>
        </div>
        <div class="team-name">${i.name}</div>
        <div class="team-inst">${i.institution}</div>
        ${i.domains&&i.domains.length>0?`<div class="team-domains">${i.domains.map(a=>`<span class="team-domain ${a.colorClass}">${a.label}</span>`).join('<span class="team-domain-separator">, </span>')}</div>`:""}
      </div>
      `).join("")}
    </div>
  </section>
`);o();
