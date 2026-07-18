// components/about.js
import { SKILLS } from '../../data/projects.js';

export function About() {
  return `
    <section id="about" class="about">
      <div class="container about-grid">
        <div class="about-copy">
          <span class="eyebrow">About</span>
          <h2>Learning by building the whole system, not just the demo.</h2>
          <p>I'm a BSCS student at SZABIST University. My projects start as console applications in C++ to get the fundamentals right — classes, control flow, file handling — before moving to full-stack work in PHP and MySQL, where the same logic has to hold up behind a real web interface with validation and a database.</p>
        </div>
        <div class="skills">
          ${SKILLS.map(s => `
            <div class="skill-group">
              <h4>${s.group}</h4>
              <div class="skill-tags">
                ${s.items.map(i => `<span class="tag">${i}</span>`).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
