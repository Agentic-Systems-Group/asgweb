# Agentic Systems Group — Website

Minimal, black-and-white, research-grade site built with [Astro], deployable on Cloudflare Pages.

## Stack
- Astro (static)
- TypeScript enabled
- Single global CSS (`public/styles/base.css`)
- No external fonts or JS libs
- Sitemap and robots.txt included

## Local development
```bash
# Node 20+ recommended
npm install
npm run dev
# open http://localhost:4321
```

Build
```bash
npm run build
npm run preview
```
Deploy (Cloudflare Pages)
Push this repo to GitHub.

In Cloudflare → Pages → Create project → Connect to GitHub repo.

Framework preset: Astro (or “None”)

Build command: npm run build

Build output directory: dist

Node version: 20+

Deploy. Add custom domain and enable HTTPS.

Update site in astro.config.mjs to your canonical domain for correct sitemap/OG URLs.

Customize
Title/description: Per page frontmatter in .astro files.

Navigation: src/layouts/BaseLayout.astro

Styles: public/styles/base.css (monochrome by design)

Email: Update src/pages/contact.astro

Robots/Sitemap: public/robots.txt, @astrojs/sitemap

Pages
/ — Home (hero, three cards)

/mneme — Product page (deep research, beyond naive RAG)

/research — Program overview (NuanceBench, CivSim, retrieval/verification)

/civsim — Program preview

/contact — Email & pilot scoping

/legal/privacy, /legal/terms

Custom 404

© Agentic Systems Group

---

## Post-creation tasks for the coding agent
1. Run `npm install`, then `npm run dev` to verify local.
2. Run `npm run build` and confirm `dist/` contains static assets.
3. Initialize a new Git repo, commit all files, push to a new GitHub repo.
4. Provide brief deploy notes confirming Cloudflare Pages configuration (build command/output directory) and that the site renders without external font/JS loads.

---

## Copy tone & visual principles (do not violate)
- **Tone:** research-grade, precise, no hype. Prefer understatement to marketing fluff.
- **Visuals:** black/white, spacious, thin borders, large type, no gradients or stock art.
- **Interactivity:** none beyond links/hover; keep it fast and quiet.

---

**Deliverables:** a working repository with the exact files and content above, ready to connect to Cloudflare  You can extrapolate from this, we want to build the entire website. We want to go with a more minimalist, research centered look. We do not want the typical purple gradient website you see nowadays. When people visit our website we want it to be memorable, and not for being over the top, but for being beautiful and unique.

