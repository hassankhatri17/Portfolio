// components/hero.js
export function Hero() {
  return `
    <section class="hero" id="top">
      <div class="container hero-grid">
        <div class="hero-copy">
          <span class="eyebrow">BSCS Student · SZABIST University</span>
          <h1>Muhammad Hassan Khatri</h1>
          <p>I build console systems and full-stack CRUD apps to actually learn the fundamentals — object-oriented C++, then PHP and MySQL underneath a real web app.</p>
          <div class="hero-actions">
            <a href="#work" class="btn btn-primary">View my work</a>
            <a href="https://www.linkedin.com/in/muhammad-hassan-khatri-3b9116331" target="_blank" rel="noopener" class="btn btn-ghost">Connect on LinkedIn</a>
          </div>
        </div>
        <div class="hero-visual" aria-hidden="true">
          <div class="terminal-card">
            <div class="terminal-head">
              <span class="dot"></span><span class="dot"></span><span class="dot"></span>
              <span class="terminal-title">status.log</span>
            </div>
            <div class="terminal-body">
              <p><span class="prompt">&gt;</span> whoami</p>
              <p class="out">hassan — BSCS, SZABIST</p>
              <p><span class="prompt">&gt;</span> stack --list</p>
              <p class="out">C++ · PHP · MySQL · JavaScript</p>
              <p><span class="prompt">&gt;</span> status</p>
              <p class="out ok">open for connecting</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
