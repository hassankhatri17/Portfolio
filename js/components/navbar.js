// components/navbar.js
export function Navbar() {
  return `
    <header class="navbar">
      <div class="container">
        <a href="#top" class="nav-logo">Hassan<span>.</span>dev</a>
        <nav class="nav-links" aria-label="Primary">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <div class="nav-actions">
          <a href="https://www.linkedin.com/in/muhammad-hassan-khatri-3b9116331" target="_blank" rel="noopener" class="btn btn-ghost">LinkedIn</a>
          <a href="https://github.com/hassankhatri17" target="_blank" rel="noopener" class="btn btn-primary">GitHub</a>
        </div>
        <button class="nav-toggle" id="nav-toggle" aria-label="Open menu" aria-expanded="false">
          <svg id="nav-icon-open" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          <svg id="nav-icon-close" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" style="display:none"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </div>
      <nav class="mobile-menu" id="mobile-menu" aria-label="Mobile">
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <a href="https://www.linkedin.com/in/muhammad-hassan-khatri-3b9116331" target="_blank" rel="noopener">LinkedIn</a>
        <a href="https://github.com/hassankhatri17" target="_blank" rel="noopener" class="btn btn-primary">GitHub</a>
      </nav>
    </header>
  `;
}

export function mountNavbar() {
  const toggle = document.getElementById('nav-toggle');
  const menu = document.getElementById('mobile-menu');
  const iconOpen = document.getElementById('nav-icon-open');
  const iconClose = document.getElementById('nav-icon-close');

  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    iconOpen.style.display = isOpen ? 'none' : 'block';
    iconClose.style.display = isOpen ? 'block' : 'none';
  });

  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      iconOpen.style.display = 'block';
      iconClose.style.display = 'none';
    });
  });
}
