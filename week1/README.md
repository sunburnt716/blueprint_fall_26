# Week 1 (10/8) — Introduction and HTML/CSS Fundamentals

**Leads:** Purva, Sophia, Om — _all VPs and EDs attend_
**Starts from:** nothing (fresh folder)
**Ends with:** `week-1/index.html`, `week-1/styles.css`

> **What changed from last year:** Last year's week 1 (basic page + nav) and week 2 (Flexbox, Grid, forms) are now **one week**. Responsive design is new. This is the most packed session of the semester, so see "Keeping it to time."

## Syllabus objectives

- [ ] Welcome and overview
- [ ] Dev environment: VS Code, Node.js, VS Code plugins, Git/GitHub basics
- [ ] HTML: elements, attributes, basic structure, forms, semantic HTML
- [ ] CSS: selectors, properties, box model, Flexbox, Grid, responsive design
- [ ] Build a simple static webpage

## Keeping it to time

- **Send setup instructions before 10/8** (install VS Code, Node LTS, Git, Live Server extension; make a GitHub account). In the meeting, only _verify_: `node -v`, `git --version`.
- Git in the meeting = clone the repo, make one commit, push. Nothing more.

## Live coding plan (~30 min)

### Segment 1 — Semantic skeleton (7 min)

Build `index.html` with `<nav>`, `<header>`, `<main>`, `<section id="about">`, `<footer>`.

- [ ] Explain _why_ semantic tags beat `<div>` everywhere (accessibility, readability)
- [ ] Nav links using `href="#about"` anchors
- **Checkpoint:** unstyled page opens with Live Server; clicking nav jumps to sections

### Segment 2 — Base CSS + box model (5 min)

Create `styles.css`, link it, style `body`, `header`, `nav`.

- [ ] Selectors: element, class, `:hover`
- [ ] Box model: show `margin` vs `padding` in DevTools
- **Checkpoint:** styled header and horizontal nav bar

### Segment 3 — Skills section with Flexbox (6 min)

Four `.skill-card`s (HTML, CSS, JavaScript, React) inside `.skills-container`.

- [ ] `display: flex`, `gap`, `justify-content`, `flex-wrap`
- **Checkpoint:** cards sit in a row and wrap when the window narrows

### Segment 4 — Services section with Grid (5 min)

Four `.service-item`s inside `.services-grid`.

- [ ] `display: grid`, `grid-template-columns: repeat(2, 1fr)`
- [ ] One sentence on when to pick Flexbox (1-D) vs Grid (2-D)

### Segment 5 — Contact form (4 min)

Name, email, message, submit button.

- [ ] `<label for>` / `id` pairing, `type="email"`, `required`, `placeholder`
- [ ] Note: the form doesn't _send_ anything yet. That's JavaScript next week.

### Segment 6 — Responsive (3 min) _(new this year)_

- [ ] Confirm `<meta name="viewport">` is present
- [ ] One media query: at `max-width: 600px`, grid goes to 1 column
- **Checkpoint:** DevTools device toolbar shows the layout stacking

### Wrap-up — First commit (2 min)

`git add . && git commit -m "week-1: static portfolio" && git push`

## IDs/classes the next weeks depend on

Keep these names so later weeks don't break: `#about`, `#skills`, `#services`, `#contact`, `.skills-container`, `.skill-card`, `.services-grid`, `.service-item`, `.contact-form`.

## Common pitfalls

- CSS not loading → wrong `href` path in `<link>`
- Opening the file directly instead of via Live Server (fine this week, matters in week 2)
- `for` on a label not matching the input's `id`

## Kahoot seeds

- Which tag is semantic: `<div>`, `<section>`, `<span>`?
- Padding vs margin: which is inside the border?
- Flexbox or Grid for a 2-D layout?
- What does the viewport meta tag do?

## TODO for EDs

- [ ] Pre-meeting setup message drafted and sent
- [ ] Finished code committed to `week-1/`
