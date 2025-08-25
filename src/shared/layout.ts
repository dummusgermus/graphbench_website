export type PageKey = 'home' | 'quickstart' | 'datasets' | 'leaderboard' | 'updates'

type NavLink = { key?: PageKey; label: string; href: string; external?: boolean }

export const NAV_LINKS: NavLink[] = [
  { key: 'quickstart', label: 'Get Started', href: '/pages/quickstart.html' },
  { key: 'datasets', label: 'Datasets', href: '/pages/datasets.html' },
  { key: 'leaderboard', label: 'Leaderboard', href: '/pages/leaderboard.html' },
  { key: 'updates', label: 'Updates', href: '/pages/updates.html' },
  { label: 'Paper', href: 'https://arxiv.org/', external: true },
  { label: 'GitHub', href: 'https://github.com/chrsmrrs/graphbench', external: true },
]

export function renderLayout(active: PageKey, mainHtml: string, mainClass?: string): string {
  return `
  <header id="site-header" class="${active !== 'home' ? 'header-elevated' : 'header-on-hero'}">
    <div class="container nav" role="navigation" aria-label="Primary">
      <a href="/" class="brand" aria-label="GraphBench home">
        <img src="/GraphBench_text.svg" alt="GraphBench" />
      </a>
      <nav class="nav-links" aria-label="Sections">
        ${NAV_LINKS.map(l => {
          if (l.external) {
            if (l.label === 'GitHub') {
              return `<a href="${l.href}" target="_blank" rel="noopener noreferrer"><img src="/github.svg" class="icon" alt="" aria-hidden="true"/> <span>${l.label}</span></a>`
            }
            return `<a href="${l.href}" target="_blank" rel="noopener noreferrer">${l.label}</a>`
          }
          return `<a href="${l.href}" ${l.key === active ? 'aria-current="page"' : ''}>${l.label}</a>`
        }).join('')}
      </nav>
    </div>
  </header>
  <main id="main" ${mainClass ? `class="${mainClass}"` : ''}>${mainHtml}</main>
  `
}

export function enhanceInteractions(): void {
  document.querySelectorAll<HTMLButtonElement>('button[data-copy]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const text = btn.getAttribute('data-copy') || ''
      try {
        await navigator.clipboard.writeText(text)
        if (btn.classList.contains('copy-btn')) {
          const originalHtml = btn.innerHTML
          // Checkmark icon
          const checkSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>'
          btn.innerHTML = checkSvg
          setTimeout(() => { btn.innerHTML = originalHtml }, 1000)
        } else {
          const original = btn.textContent
          btn.textContent = 'Copied'
          setTimeout(() => { if (original) btn.textContent = original }, 1000)
        }
      } catch {
        // no-op
      }
    })
  })
}


