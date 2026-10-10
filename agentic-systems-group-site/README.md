# Agentic Systems Group website

Static Astro site for https://agenticsystemsgroup.com.
The canonical deployment repository is
[Agentic-Systems-Group/asgweb](https://github.com/Agentic-Systems-Group/asgweb).
Public product source lives at [HumanDotPy/ThothTerminal](https://github.com/HumanDotPy/ThothTerminal).

## Development

Use Node 24 and run `npm ci`, then `npm run dev`.
`npm run build` writes the static site to `dist/`.

## Deployment

The deployment repository nests this site in `agentic-systems-group-site/`.
Its Worker serves the generated assets through the `ASSETS` binding. The
Cloudflare Workers Builds integration deploys pushes to `main` using the existing
`asgweb` build connection. GitHub Actions separately validates the Astro build
and dependency audit; it does not need Cloudflare credentials. Review deployment
status in the Worker's Builds dashboard. For local deployment, authenticate
Wrangler to the account that owns the site and deploy from the repository root.

## Editing

Pages are in `src/pages/`, navigation in `src/layouts/BaseLayout.astro`, and
styles in `public/styles/base.css`. Keep the design monochrome, spacious, and
fast; there are no external fonts or client libraries. Describe working
capabilities plainly and label development status accurately.
