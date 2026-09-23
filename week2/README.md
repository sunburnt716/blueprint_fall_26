# Week 2 (10/15) — JavaScript

**Leads:** Anvita, Adi, Cynthia
**Starts from:** `week-1/` (copy it to `week-2/`)
**Ends with:** `week-2/index.html`, `styles.css`, `script.js`

> **What changed from last year:** This is last year's week 3 content, one week earlier. The `setTimeout` "reveal message" demo moves to **week 3** as a lead-in to async/fetch. New this year: form handling and a dark-mode toggle (which week 5 rebuilds with `useContext`).

## Syllabus objectives

- [ ] JS syntax, variables (`let`/`const`), control structures (`if`, loops)
- [ ] Event listeners and interactivity
- [ ] JavaScript in the browser: DOM manipulation

## Live coding plan (~28 min)

### Segment 1 — JS basics in the console (6 min)

Open DevTools → Console. No files yet.

- [ ] `const` vs `let`, strings, numbers, arrays
- [ ] `if/else` and a `for...of` loop over `["HTML", "CSS", "JavaScript"]`
- [ ] Arrow function: `const greet = (name) => \`Hello, ${name}!\``

### Segment 2 — Connect a script + greeting button (7 min)

- [ ] Create `script.js`, add `<script src="script.js" defer></script>` (explain `defer` vs putting it at the end of `<body>`)
- [ ] Add `<button id="greetBtn">` and `<p id="greetOutput">` in `#about`
- [ ] `getElementById` → `addEventListener("click", ...)` → set `textContent`
- **Checkpoint:** clicking shows "Hello, welcome to my portfolio!"

### Segment 3 — Contact form handling (8 min)

- [ ] `form.addEventListener("submit", (e) => { e.preventDefault(); ... })`
- [ ] Read `.value` from inputs, `if` check (e.g. message shorter than 10 chars → show an error)
- [ ] Show a success/error message in a `<p id="formStatus">`, then `form.reset()`
- **Checkpoint:** submitting no longer reloads the page; shows a message

### Segment 4 — Dark-mode toggle (5 min)

- [ ] Add a `.dark` class in CSS (body background + text color)
- [ ] Button toggles it with `document.body.classList.toggle("dark")`
- [ ] Update the button label with a ternary based on `classList.contains("dark")`
- **Checkpoint:** theme flips on click

### Segment 5 _(stretch)_ — Loop to build DOM

- [ ] Generate the skill cards from an array with `createElement` + `appendChild`
- This previews week 3 (data → UI) and week 4 (`.map` in React).

## Heads-up for week 3 leads

Keep IDs `greetBtn`, `greetOutput`, `formStatus`, and the theme toggle's ID stable. Week 3 ports this file to TypeScript.

## Common pitfalls

- `null` from `getElementById` → script ran before the HTML loaded (use `defer`)
- Forgetting `e.preventDefault()` → page reloads and the message vanishes
- `=` vs `===`

## Kahoot seeds

- `let` vs `const`: which can be reassigned?
- What does `e.preventDefault()` stop on a form submit?
- What does `classList.toggle` do?
- Where should the `<script>` tag go (or what does `defer` do)?

## TODO for EDs

- [ ] Finished code committed to `week-2/`
- [ ] JS cheatsheet updated (variables, DOM selectors, events)
