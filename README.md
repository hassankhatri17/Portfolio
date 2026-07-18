# Muhammad Hassan Khatri — Portfolio

Personal portfolio for a BSCS student at SZABIST University, showcasing
three real GitHub projects.

## Framework choice

Plain **HTML / CSS / vanilla JS**, using native ES modules — no build
step, no framework. A portfolio with three static project cards and a
contact section doesn't need client-side state management; native
modules already give clean, reusable component boundaries (one file per
section) without any tooling to install or maintain.

## Structure

```
portfolio/
├── index.html                 # shell: fonts, CSS, js/main.js
├── css/
│   ├── tokens.css             # design tokens: color, type, spacing
│   └── styles.css             # base styles, components, responsive rules
├── data/
│   └── projects.js            # real project + skill data (single source of truth)
├── js/
│   ├── main.js                # composes + mounts components
│   └── components/
│       ├── navbar.js          # sticky nav + mobile menu
│       ├── hero.js            # intro + terminal-style signature visual
│       ├── projects.js        # project cards, pulled from data/projects.js
│       ├── about.js           # bio + skills
│       └── contact.js         # contact CTA + footer
└── README.md
```

Each component exports a render function returning an HTML string;
`main.js` imports them, joins the output into `#app`, and mounts the
nav's mobile-menu behavior. Project and skill content lives in
`data/projects.js` so updating a repo link, description, or adding a new
project never touches markup.

## Design system

Defined once in `css/tokens.css`:

- **Color** — a "systems notebook" palette instead of the common
  cream/terracotta portfolio default: paper-white background, near-black
  ink for text, deep circuit-green as the primary accent, a rust-orange
  "signal" color reserved for the one emphasis mark per section.
- **Type** — Fraunces (display serif, headings) / Inter (body) /
  JetBrains Mono (the terminal card, tags, project years) — so code-like
  content reads visually distinct from prose.
- **Spacing** — base-4px scale (`--sp-1`…`--sp-9`) for all layout rhythm.
- **Hierarchy** — one accent (signal/rust) marks the single most
  important element per section; the terminal-style hero card is the
  page's one deliberate visual risk, everything else stays quiet.

## Content

Project descriptions are adapted from the actual repository summaries at
[github.com/hassankhatri17](https://github.com/hassankhatri17):

- **Bank Management System** — C++ console banking app (deposit,
  withdraw, balance check).
- **Library Management System** — C++ console app for library catalog
  and borrowing records.
- **PHP CRUD User Management** — PHP/MySQL CRUD web app with
  prepared statements and server-side validation.

## Responsive breakpoints

| Breakpoint | Width | Key changes |
|---|---|---|
| Mobile (default) | < 640px | single column, hamburger nav, skills stack vertically |
| Tablet | ≥ 640px | skills lay out side by side, footer becomes a row |
| Desktop | ≥ 1024px | full nav bar, hero and about split into two columns |

## Running locally

```bash
python3 -m http.server 8080
```
Open `http://localhost:8080`. (Double-clicking `index.html` won't work —
the JS uses ES module imports, which browsers block over `file://`.)

## Deploying

**GitHub Pages**
```bash
git init
git add .
git commit -m "Initial commit: portfolio site"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```
Then: repo **Settings → Pages → Deploy from branch → main → / (root)**.

**Netlify / Vercel** — drag the `portfolio/` folder onto
app.netlify.com/drop, or run `vercel` / `netlify deploy` from inside the
folder. No build command needed.
