// components/projects.js
import { PROJECTS } from '../../data/projects.js';

function projectCard(p, index) {
  return `
    <article class="project-card">
      <div class="project-index">${String(index + 1).padStart(2, '0')}</div>
      <div class="project-body">
        <div class="project-top">
          <h3>${p.name}</h3>
          <span class="project-year">${p.year}</span>
        </div>
        <span class="project-stack">${p.stack}</span>
        <p>${p.desc}</p>
        <div class="project-tags">
          ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
        <div class="project-links">
          <a href="${p.repo}" target="_blank" rel="noopener" class="project-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-1-2.6c3 0 6-2 6-5.5.1-1.3-.4-2.6-1.3-3.6.4-1.2.4-2.6 0-3.9 0 0-1 0-3 1.3a12 12 0 0 0-6 0C8 2.6 7 2.6 7 2.6c-.4 1.3-.4 2.7 0 4a5.3 5.3 0 0 0-1.3 3.6c0 3.5 3 5.5 6 5.5a3.4 3.4 0 0 0-1 2.6V22"/></svg>
            View on GitHub
          </a>
        </div>
      </div>
    </article>
  `;
}

export function Projects() {
  return `
    <section id="work">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">Selected work</span>
          <h2>Projects</h2>
          <p>Three projects that cover the fundamentals: object-oriented C++ for two console systems, then a PHP/MySQL CRUD app to bring it onto the web.</p>
        </div>
        <div class="projects-grid">
          ${PROJECTS.map(projectCard).join('')}
        </div>
      </div>
    </section>
  `;
}
