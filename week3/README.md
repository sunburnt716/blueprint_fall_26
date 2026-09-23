# Week 3 (10/22) — Intro to TypeScript and JSON/Schemas

**Leads:** Purva, Sophia, Om
**Starts from:** `week-2/`
**Ends with:** a Vite **vanilla-ts** project in `week-3/`

> **What changed from last year:** Entirely new week. Last year went straight from JS to React. Now we add types, JSON data, and `fetch` first, so week 4 is only "learn React," not "learn React + types + data at once."

## Syllabus objectives

- [ ] TypeScript: static typing, typed variables, function params, return types
- [ ] JSON: reading its structure, schema fundamentals, why APIs/data matter
- [ ] Typing JSON with TS `interface`/`type`
- [ ] Fetching data, handling responses, basic error handling
- [ ] **Mini project:** convert the webpage's content into a JSON file, write a TS interface for its shape, fetch it dynamically

## Setup (do before the meeting, show briefly)

Browsers can't run `.ts` directly, so we use Vite to compile it:

```bash
npm create vite@latest week-3 -- --template vanilla-ts
cd week-3 && npm install && npm run dev
```

Move week 2's HTML into `index.html` and CSS into `src/style.css`. Replace `src/main.ts` contents.
This is also fellows' first look at Vite, which makes week 4 setup feel familiar.

## Target file layout

```
week-3/
├── index.html
├── public/
│   └── portfolio.json     ← data lives here
└── src/
    ├── main.ts            ← fetch + render + week 2 logic
    ├── types.ts           ← interfaces
    └── style.css
```

## Live coding plan (~30 min)

### Segment 1 — Why TypeScript (5 min)

- [ ] In `main.ts`, write `function add(a: number, b: number): number`
- [ ] Call it with a string → show the red squiggle. _That's the whole pitch._
- [ ] Typed variables, a union type (`"light" | "dark"`) for the theme

### Segment 2 — Port week 2 to TS (5 min)

- [ ] `document.getElementById("greetBtn")` is `HTMLElement | null` → handle null
- [ ] Use `as HTMLInputElement` for form inputs to access `.value`
- **Checkpoint:** week 2 features still work, now type-checked

### Segment 3 — Async warm-up (4 min) _(moved here from last year's week 3)_

- [ ] "Reveal message" with `setTimeout` → then rewrite as a Promise + `await`
- Bridge sentence: "`fetch` works the same way, but the wait is the network."

### Segment 4 — Content → JSON + interfaces (6 min)

- [ ] Create `public/portfolio.json` with `about`, `skills[]`, `services[]` (pull straight from the HTML)
- [ ] In `types.ts`:
  ```ts
  export interface Skill {
    name: string;
    description: string;
  }
  export interface Service {
    title: string;
    description: string;
  }
  export interface PortfolioData {
    about: string;
    skills: Skill[];
    services: Service[];
  }
  ```
- [ ] "Schema" = the agreed shape of the data. Mention JSON Schema exists for runtime validation; we're using TS types for now.

### Segment 5 — Fetch and render (8 min)

- [ ] `async function loadPortfolio(): Promise<PortfolioData>` using `fetch("/portfolio.json")`
- [ ] Check `response.ok`, `throw` on failure, `try/catch` in the caller
- [ ] Delete hardcoded skill/service cards from HTML; render them from data with `createElement`
- [ ] Show an error message in the page if the fetch fails (demo it by misspelling the URL)
- **Checkpoint:** editing `portfolio.json` changes the page with no HTML edits

### Key teaching point

**TS types disappear at runtime.** If the JSON doesn't match the interface, TypeScript won't catch it; the page just breaks. That's why error handling (and real schemas) matter. _(Stretch: write a tiny `isSkill(x): x is Skill` type guard.)_

## Heads-up for week 4 leads

`types.ts` and `portfolio.json` carry directly into the React project. Don't rename fields without posting in Discord.

## Common pitfalls

- JSON syntax errors: trailing commas, single quotes, unquoted keys
- Putting `portfolio.json` in `src/` instead of `public/` → 404
- Forgetting `await` → rendering a Promise
- Opening `index.html` directly instead of `npm run dev`

## Kahoot seeds

- What does `: number` after a function's parentheses mean?
- Is this valid JSON: `{ name: 'Sunny' }`?
- What does `response.ok` tell you?
- Do TypeScript types exist when the code runs in the browser?

## TODO for EDs

- [ ] Final `portfolio.json` shape agreed and posted in Discord for week 4
- [ ] Finished code committed to `week-3/`
- [ ] TS + JSON cheatsheet created (new this year)
