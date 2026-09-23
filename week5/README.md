# Week 5 (11/5) — React Hooks and State Management

**Leads:** Purva, Sophia, Om
**Starts from:** `week-4/`
**Ends with:** `week-5/` — portfolio fetches its data, has a controlled contact form, and a global theme

> **What changed from last year:** Last year covered `useState` (likes counter) and `useEffect` (console log). This year adds **`useContext`**, a **real** `useEffect` (data fetching), **system design basics**, and the **final project introduction + group finalization**. Budget time accordingly.

## Syllabus objectives

- [ ] React state and component lifecycle, in depth
- [ ] Hooks: `useState`, `useEffect`, `useContext`
- [ ] Build a dynamic React app
- [ ] System design basics
- [ ] Mini project using hooks
- [ ] Introduce final project; finalize groups (ED guide)

## Live coding plan (~28 min)

### Segment 1 — Controlled contact form with `useState` (7 min)

Resolves last year's "forms are tricky in React, we'll learn them later" comment.

- [ ] One state object: `useState<{ name: string; email: string; message: string }>`
- [ ] `value` + `onChange` on each input; `onSubmit` with `preventDefault`
- [ ] Type the handler: `(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)`
- [ ] Show submitted values below the form, then reset state
- **Checkpoint:** typing updates state live (log it or show it)

### Segment 2 — Fetching with `useEffect` (9 min)

Replaces week 4's static JSON import. Mirrors week 3's `fetch`, now the React way.

- [ ] Move `portfolio.json` back to `public/`
- [ ] State: `data: PortfolioData | null`, `loading: boolean`, `error: string | null`
- [ ] `useEffect(() => { ... }, [])` → explain the dependency array (empty = on mount)
- [ ] Render loading / error / data states
- [ ] Mention cleanup functions and why StrictMode runs effects twice in dev
- **Checkpoint:** page shows "Loading..." then content

### Segment 3 — Theme with `useContext` (8 min)

Rebuilds week 2's dark-mode toggle.

- [ ] `ThemeContext.tsx`: `createContext`, `ThemeProvider` holding `useState<"light" | "dark">`
- [ ] Wrap `<App />` in `main.tsx`
- [ ] Toggle button in `Nav`, and a component deep in the tree reads the theme, **no prop drilling**
- [ ] Contrast: passing `theme` through 3 levels of props vs context
- **Checkpoint:** toggle in the nav restyles the whole page

### Segment 4 _(stretch)_ — Likes counter

Last year's `useState` + `useEffect` demo. Use as a warm-up if the room needs it.

## System design basics (slides + whiteboard, ~5 min, outside live code)

- [ ] Draw the portfolio's component tree and where each piece of state lives
- [ ] "Lift state up" vs context vs fetching: when to use which
- [ ] Frame it as prep for planning the final project

## Final project introduction

- [ ] Present the final project brief (link: Final Project (Fall 2026) doc)
- [ ] Finalize groups of 3–4
- [ ] Groups sketch a component tree for their idea as homework

## Heads-up for week 6 leads

The fetch logic in `App.tsx` gets extracted into a custom hook next week. Keep it in one `useEffect` so the refactor is clean.

## Common pitfalls

- Missing dependency array → infinite fetch loop
- Mutating state (`form.name = ...`) instead of `setForm({ ...form, name })`
- Using context without the Provider → `undefined`
- Rendering `data.skills` before `data` loads → null check

## Kahoot seeds

- What does an empty dependency array `[]` mean?
- Why never mutate state directly?
- What problem does `useContext` solve?
- What's a controlled input?

## TODO for EDs

- [ ] Finished code committed to `week-5/`
- [ ] Hooks cheatsheet updated with `useContext`
- [ ] Final project brief ready to present
