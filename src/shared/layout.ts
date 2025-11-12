export type PageKey = 'home' | 'quickstart' | 'datasets' | 'team' | 'updates'

type NavLink = { key?: PageKey; label: string; href: string; external?: boolean }

export function getRuntimeBase(): string {
  // Compute the site root path regardless of current page depth.
  // Examples:
  // - /index.html -> '/'
  // - / -> '/'
  // - /repo/ -> '/repo/'
  // - /repo/pages/datasets.html -> '/repo/'
  const path = window.location.pathname
  const pagesIdx = path.indexOf('/pages/')
  if (pagesIdx !== -1) {
    return path.slice(0, pagesIdx + 1)
  }
  // Otherwise return directory of current path (with trailing slash)
  const lastSlash = path.lastIndexOf('/')
  return lastSlash >= 0 ? path.slice(0, lastSlash + 1) : '/'
}

export const NAV_LINKS: NavLink[] = [
  { key: 'quickstart', label: 'Get Started', href: `./quickstart.html` },
  { key: 'datasets', label: 'Datasets', href: `./datasets.html` },
  { key: 'updates', label: 'Updates', href: `./updates.html` },
  { key: 'team', label: 'Team', href: `./team.html` },
  { label: 'Paper', href: 'https://arxiv.org/', external: true },
  { label: 'GitHub', href: 'https://github.com/chrsmrrs/graphbench', external: true },
]

export function renderLayout(active: PageKey, mainHtml: string, mainClass?: string): string {
  const navLinksHtml = NAV_LINKS.map(l => {
    if (l.external) {
      if (l.label === 'GitHub') {
        return `<a href="${l.href}" target="_blank" rel="noopener noreferrer"><img src="./github.svg" class="icon" alt="" aria-hidden="true"/> <span>${l.label}</span></a>`
      }
      return `<a href="${l.href}" target="_blank" rel="noopener noreferrer">${l.label}</a>`
    }
    return `<a href="${l.href}" ${l.key === active ? 'aria-current="page"' : ''}>${l.label}</a>`
  }).join('')

  const navDrawerLinksHtml = NAV_LINKS.map(l => {
    if (l.external) {
      return `<a href="${l.href}" target="_blank" rel="noopener noreferrer">${l.label}</a>`
    }
    return `<a href="${l.href}" ${l.key === active ? 'aria-current="page"' : ''}>${l.label}</a>`
  }).join('')

  return `
  <header id="site-header" class="${active !== 'home' ? 'header-elevated' : 'header-on-hero'}">
    <div class="container nav" role="navigation" aria-label="Primary">
      <a href="./" class="brand" aria-label="GraphBench home">
        <img src="./GraphBench_text.svg" alt="GraphBench" />
      </a>
      <button type="button" class="nav-toggle" data-nav-toggle aria-controls="nav-drawer" aria-expanded="false" aria-label="Toggle navigation">
        <span class="nav-toggle-bar"></span>
        <span class="nav-toggle-bar"></span>
        <span class="nav-toggle-bar"></span>
      </button>
      <nav class="nav-links" aria-label="Sections">
        ${navLinksHtml}
      </nav>
    </div>
  </header>
  <div class="nav-drawer" id="nav-drawer" data-nav-drawer hidden>
    <div class="nav-drawer-backdrop" data-nav-close></div>
    <div class="nav-drawer-panel" role="dialog" aria-modal="true" aria-label="Site navigation">
      <div class="nav-drawer-header">
        <a href="./" class="brand nav-drawer-brand" aria-label="GraphBench home">
          <img src="./GraphBench_text.svg" alt="GraphBench" />
        </a>
        <button type="button" class="nav-drawer-close" data-nav-close aria-label="Close navigation">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
      <nav class="nav-drawer-links" aria-label="Mobile site sections">
        ${navDrawerLinksHtml}
      </nav>
    </div>
  </div>
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

  const drawer = document.querySelector<HTMLElement>('[data-nav-drawer]')
  if (drawer) {
    const panel = drawer.querySelector<HTMLElement>('.nav-drawer-panel')
    const toggles = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-nav-toggle]'))
    const focusableSelector = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    let focusRestore: HTMLElement | null = null
    let closeTimeout: number | null = null

    const isDrawerOpen = (): boolean => !drawer.hasAttribute('hidden')

    const setToggleState = (expanded: boolean) => {
      toggles.forEach(btn => btn.setAttribute('aria-expanded', expanded.toString()))
    }

    const focusFirstElement = () => {
      if (!panel) return
      const first = panel.querySelector<HTMLElement>(focusableSelector)
      if (first) first.focus()
    }

    const openDrawer = () => {
      if (!panel || isDrawerOpen()) return
      if (closeTimeout !== null) {
        window.clearTimeout(closeTimeout)
        closeTimeout = null
      }
      focusRestore = document.activeElement instanceof HTMLElement ? document.activeElement : null
      drawer.removeAttribute('hidden')
      requestAnimationFrame(() => {
        drawer.classList.add('is-open')
      })
      document.body.classList.add('nav-drawer-open')
      setToggleState(true)
      focusFirstElement()
    }

    const restoreFocus = () => {
      if (focusRestore && typeof focusRestore.focus === 'function') {
        focusRestore.focus()
      }
      focusRestore = null
    }

    const closeDrawer = () => {
      if (!panel || !isDrawerOpen()) return
      drawer.classList.remove('is-open')
      document.body.classList.remove('nav-drawer-open')
      setToggleState(false)
      closeTimeout = window.setTimeout(() => {
        drawer.setAttribute('hidden', '')
        restoreFocus()
        closeTimeout = null
      }, 250)
    }

    toggles.forEach(btn => {
      btn.addEventListener('click', () => {
        if (isDrawerOpen()) {
          closeDrawer()
        } else {
          openDrawer()
        }
      })
    })

    drawer.addEventListener('click', event => {
      const target = event.target as HTMLElement
      if (target.closest('[data-nav-close]')) {
        closeDrawer()
      }
    })

    drawer.querySelectorAll<HTMLAnchorElement>('a').forEach(link => {
      link.addEventListener('click', () => {
        closeDrawer()
      })
    })

    const handleKeydown = (event: KeyboardEvent) => {
      if (!isDrawerOpen() || !panel) return
      if (event.key === 'Escape') {
        event.preventDefault()
        closeDrawer()
        return
      }
      if (event.key === 'Tab') {
        const focusable = Array.from(panel.querySelectorAll<HTMLElement>(focusableSelector))
          .filter(el => !el.hasAttribute('disabled') && !(el as HTMLButtonElement).disabled)
        if (focusable.length === 0) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKeydown)

    window.addEventListener('resize', () => {
      if (window.innerWidth > 480 && isDrawerOpen()) {
        closeDrawer()
      }
    })
  }
}


