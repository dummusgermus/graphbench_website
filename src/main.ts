import './style.css'
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <header>
    <div class="container nav">
      <a class="brand" href="./">
        <img src="./GraphBench.svg" alt="GraphBench logo" />
        <strong>GraphBench</strong>
        <span class="chip" aria-hidden="true"><span class="dot"></span>prototype</span>
      </a>
      <nav class="nav-links">
        <a href="./quickstart.html">Get Started</a>
        <a href="./datasets.html">Datasets</a>
        <a href="./links.html">Links</a>
        <a href="./updates.html">Updates</a>
        <a href="./team.html">Team</a>
      </nav>
    </div>
  </header>
  <main id="main" class="hero">
    <div class="container">
      <h1>Welcome to GraphBench</h1>
      <p class="lead">Use the navigation to explore.</p>
    </div>
  </main>
  <footer>
    <div class="container">
      <span>© ${new Date().getFullYear()} GraphBench</span>
    </div>
  </footer>
`
