# Week 4 (10/29) — Intro to React, JSX, and Typed Components

**Leads:** Anvita, Adi, Cynthia
**Starts from:** `week-3/` (`types.ts`, `portfolio.json`, CSS)
**Ends with:** a Vite **react-ts** project in `week-4/`

> **What changed from last year:** Same core content, but in **TypeScript** (`.tsx`, typed props) and components render **from JSON data** instead of hardcoded markup. Last year's `week-4/README.md` was Vite boilerplate; this replaces it.

## Syllabus objectives

- [ ] Single Page Applications (SPAs): what they are, why React
- [ ] Components, props, state
- [ ] JSX syntax
- [ ] Typing props with `interface`/`type`
- [ ] Build a simple React app; convert the previous mini project into React

## Setup (before the meeting, show briefly)

```bash
npm create vite@latest week-4 -- --template react-ts
cd week-4 && npm install && npm run dev
```

Copy in `src/types.ts`, `public/portfolio.json`, and CSS from week 3. Delete `index.css` and `App.css` boilerplate.

## Target file layout

```
src/
├── App.tsx
├── main.tsx
├── types.ts
├── data/portfolio.json    ← copy here too for a static import this week
└── components/
    ├── Nav.tsx
    ├── SkillCard.tsx
    ├── ServiceItem.tsx
    └── ContactForm.tsx
```

## Live coding plan (~30 min)

### Segment 1 — SPA + JSX (6 min)

- [ ] 2-minute whiteboard: multi-page site vs SPA (one HTML file, JS swaps content)
- [ ] Paste week 3 HTML into `App.tsx`'s `return`, fix JSX errors together: `class` → `className`, `for` → `htmlFor`, self-closing `<input />`, comments as `{/* */}`
- **Checkpoint:** static page renders in React

### Segment 2 — First typed component (7 min)

- [ ] Extract `ServiceItem`:
  ```tsx
  interface ServiceItemProps { title: string; description: string; }
  export default function ServiceItem({ title, description }: ServiceItemProps) { ... }
  ```
- [ ] Omit a prop on purpose → show the TS error. _This is why we typed things last week._
- [ ] Reuse the `Service` type from `types.ts` instead (`props: Service`) to show one source of truth

### Segment 3 — Render from JSON with `.map` (7 min)

- [ ] `import data from "./data/portfolio.json"` (static import, no fetching until week 5)
- [ ] `data.services.map((s) => <ServiceItem key={s.title} {...s} />)`
- [ ] Explain `key` (show the console warning without it)
- [ ] Same for `SkillCard`
- **Checkpoint:** editing the JSON updates the page

### Segment 4 — First taste of state (6 min)

- [ ] Port the greeting button: `const [greeting, setGreeting] = useState("")`, `onClick`
- [ ] Contrast with week 2: no `getElementById`, no `textContent`. React re-renders from state.
- Keep this light; hooks get their own week.

### Segment 5 _(stretch)_ — Split `Nav` and `ContactForm` into components

## Heads-up for week 5 leads

Week 5 replaces the static JSON import with `fetch` + `useEffect`, and makes `ContactForm` controlled. Keep components in `src/components/`.

## Common pitfalls

- Returning two sibling elements without a wrapper/fragment (`<>...</>`)
- Components must start with a capital letter
- Missing `key` in lists
- `.jsx` vs `.tsx`: types only work in `.tsx`

## Kahoot seeds

- `class` in HTML is what in JSX?
- What are props?
- Why does a list item need a `key`?
- What's a Single Page Application?

## TODO for EDs

- [ ] Finished code committed to `week-4/`
- [ ] React cheatsheet updated for TS (typed props examples)
