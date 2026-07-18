// components/contact.js
export function Contact() {
  const year = new Date().getFullYear();
  return `
    <section id="contact" class="contact">
      <div class="container">
        <div class="contact-card">
          <span class="eyebrow">Get in touch</span>
          <h2>Open for connecting.</h2>
          <p>The fastest way to reach me is LinkedIn — I check it daily.</p>
          <div class="hero-actions">
            <a href="https://www.linkedin.com/in/muhammad-hassan-khatri-3b9116331" target="_blank" rel="noopener" class="btn btn-primary">Connect on LinkedIn</a>
            <a href="https://github.com/hassankhatri17" target="_blank" rel="noopener" class="btn btn-ghost">See all repos</a>
          </div>
        </div>
      </div>
      <div class="container footer-bottom">
        <span>&copy; ${year} Muhammad Hassan Khatri</span>
        <span>BSCS · SZABIST University</span>
      </div>
    </section>
  `;
}
