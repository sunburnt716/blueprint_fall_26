# Week 7 (11/19) — Final Project Workshop & Real-World Applications

**Leads:** Mahima, Sunny
**Starts from:** `week-6/`
**Ends with:** portfolio live on GitHub Pages

> **What changed from last year:** New week. Most of the session is final project work time, so live coding is short and focused on deployment.

## Syllabus objectives

- [ ] Deploy to GitHub Pages
- [ ] Real-world web app examples
- [ ] Different frameworks
- [ ] Server-side rendering
- [ ] Electron/Tauri and React Native/Expo
- [ ] AI-assisted development
- [ ] Final project work time

## Live coding plan (~20 min)

### Segment 1 — Deploy the portfolio (12 min)

- [ ] `vite.config.ts`: set `base: "/<repo-name>/"`
- [ ] Router fix agreed with week 6 leads (`HashRouter` or `basename` + `404.html`)
- [ ] Deploy method (pick one and write it here):
  - [ ] `gh-pages` package: `npm i -D gh-pages`, add `"deploy": "npm run build && gh-pages -d dist"`
  - [ ] GitHub Actions: Pages workflow for Vite
- [ ] Repo Settings → Pages → confirm the source
- **Checkpoint:** live URL works, including a refresh on a project detail page

### Segment 2 — AI-assisted development (8 min)

- [ ] Prompt an AI tool to generate a new component for the portfolio
- [ ] Review the output **live** with fellows: does it match our types? Our file structure? Any bugs?
- [ ] Point: AI writes drafts; you're responsible for understanding and verifying them

## Talk-only topics (slides, ~10 min)

- [ ] Frameworks: Next.js, Vue, Svelte, Angular: one line each on why they exist
- [ ] SSR vs our client-side SPA: what the browser receives in each case
- [ ] Desktop (Electron/Tauri) and mobile (React Native/Expo): React skills transfer
- [ ] 2–3 real apps and how they're likely built

## Final project workshop

- [ ] Groups get their project deployed early (a live "hello world" beats a perfect local build)
- [ ] EDs circulate: check component trees, state placement, Git workflow

## Common pitfalls

- Blank page after deploy → wrong `base` path
- 404 on refresh → router setup
- Assets referenced with absolute paths (`/portfolio.json`) break under the repo subpath → use `import.meta.env.BASE_URL`

## TODO

- [ ] Deploy method chosen and tested on a fresh repo
- [ ] Finished code committed to `week-7/`
