# Week 6 (11/12) — Advanced Hooks and Routing

**Leads:** Anvita, Adi, Cynthia
**Starts from:** `week-5/`
**Ends with:** `week-6/` — multi-page portfolio with typed routes and a projects page

> **What changed from last year:** No week 6 code existed in the template, so this is new. Routing is now **typed**. The syllabus leaves "advanced hooks" open; the picks below (custom hook, `useRef`) are a suggestion, so confirm with VPs if you want something else.

## Syllabus objectives

- [ ] More advanced React Hook techniques
- [ ] Typed React Router: route params, navigation
- [ ] Transform the previous project into a dynamic application using hooks

## Setup

```bash
npm install react-router
```

React Router v7 exports everything from `react-router`. Many tutorials still import from `react-router-dom` (v6). Tell fellows so they're not confused.

## Data change

Add a `projects` array to `public/portfolio.json` and a `Project` interface:

```ts
export interface Project {
  id: string;
  title: string;
  summary: string;
  details: string;
  tags: string[];
}
```

## Target structure

```
src/
├── hooks/usePortfolioData.ts
├── pages/
│   ├── Home.tsx           ← about, skills, services, contact
│   ├── Projects.tsx       ← list of project cards
│   ├── ProjectDetail.tsx  ← /projects/:id
│   └── NotFound.tsx
└── components/...
```

## Live coding plan (~30 min)

### Segment 1 — Custom hook (7 min)

- [ ] Move week 5's fetch/loading/error logic into `usePortfolioData(): { data, loading, error }`
- [ ] Type the return value explicitly
- [ ] Point: custom hooks are just functions that use hooks. Reuse without copy-paste.
- **Checkpoint:** `App.tsx` shrinks; page behaves identically

### Segment 2 — `useRef` (5 min)

- [ ] Contact page: auto-focus the name input on load (`useRef<HTMLInputElement>(null)` + `useEffect`)
- [ ] Contrast `useRef` (no re-render) vs `useState` (re-render)

### Segment 3 — Routes (8 min)

- [ ] `BrowserRouter` in `main.tsx` _(see deploy note below)_
- [ ] `<Routes>` with `/`, `/projects`, `/projects/:id`, `*` → `NotFound`
- [ ] Replace `<a href>` in `Nav` with `<Link to>`; show that the page doesn't reload (SPA callback to week 4)
- **Checkpoint:** navigating between pages with no full reload

### Segment 4 — Typed route params + navigation (8 min)

- [ ] `ProjectDetail`: `const { id } = useParams<{ id: string }>()`
- [ ] `id` is `string | undefined` → find the project, handle not-found
- [ ] "Back to projects" button with `useNavigate()`
- **Checkpoint:** clicking a project card opens its detail page; bad IDs show a fallback

### Segment 5 _(stretch)_ — `useMemo` tag filter on the Projects page

## Deploy note (coordinate with week 7)

GitHub Pages doesn't know about client-side routes, so refreshing `/projects/2` gives a 404 with `BrowserRouter`. Either switch to `HashRouter` in week 7 or set a `basename` plus a `404.html` redirect. **Agree with Mahima/Sunny which one before 11/19.**

## Common pitfalls

- Importing from both `react-router` and `react-router-dom`
- Using `<a href>` instead of `<Link>` → full page reload, state lost
- Forgetting the `*` catch-all route
- Calling hooks inside conditions or loops (rules of hooks)

## Kahoot seeds

- What makes a function a "custom hook"?
- Does updating a `useRef` value cause a re-render?
- `<Link>` vs `<a>`: what's the difference in an SPA?
- In `/projects/:id`, what is `id`?

## TODO for EDs

- [ ] Finished code committed to `week-6/`
- [ ] Router cheatsheet created
- [ ] Router/deploy decision posted for week 7
