import{r as e}from"./layout-CMBKSRRE.js";const n=document.querySelector("#app");n.innerHTML=e("team",`
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
      ${[{name:"Antoine Siraudin",image:"antoine_siraudin.png",institution:"RWTH Aachen University"},{name:"Chendi Qian",image:"chendi_qian.png",institution:"RWTH Aachen University"},{name:"Ben Finkelshtein",image:"ben_finkelshtein.png",institution:"University of Oxford"},{name:"Ali Parviz",image:"ali_parviz.png",institution:"Mila - Quebec AI Institute"},{name:"Darius Weber",image:"darius_weber.png",institution:"RWTH Aachen University"},{name:"Fabrizio Frasca",image:"fabrizio_frasca.png",institution:"Technion – Israel Institute of Technology"},{name:"Hadar Shavit",image:"hadar_shavit.png",institution:"RWTH Aachen University"},{name:"Timo Stoll",image:"timo_stoll.png",institution:"RWTH Aachen University"},{name:"Arman Mielke",image:"arman_mielke.png",institution:"University of Stuttgart"},{name:"Marie Anastacio",image:"marie_anastacio.png",institution:"RWTH Aachen University"},{name:"Erik Müller",image:"erik_muller.png",institution:"RWTH Aachen University"},{name:"Maya Bechler-Speicher",image:"maya_bechler_speicher.png",institution:"Meta"},{name:"Michael M. Bronstein",image:"michael_bronstein.png",institution:"University of Oxford"},{name:"Mikhail Galkin",image:"mikhail_galkin.png",institution:"Google Research"},{name:"Holger H. Hoos",image:"holger_hoos.png",institution:"RWTH Aachen University"},{name:"Mathias Niepert",image:"mathias_niepert.png",institution:"University of Stuttgart"},{name:"Bryan Perozzi",image:"bryan_perozzi.png",institution:"Google Research"},{name:"Jan Tönshoff",image:"jan_tonshoff.png",institution:"Microsoft Research"},{name:"Christopher Morris",image:"christopher_morris.png",institution:"RWTH Aachen University"}].map(i=>`
      <div class="team-item">
        <div class="team-avatar">
          <img src="/images/team/${i.image}" alt="${i.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';" />
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="display: none;"><circle cx="12" cy="8" r="4"/><path d="M6 20a6 6 0 0 1 12 0"/></svg>
        </div>
        <div class="team-name">${i.name}</div>
        <div class="team-inst">${i.institution}</div>
      </div>
      `).join("")}
    </div>
  </section>
`);
