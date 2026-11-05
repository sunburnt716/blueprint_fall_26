# Week 5: Recipe App Student Starter

Rutgers Blueprint — React Hooks and State Management  
Leads: Purva, Sophia, Om

This starter runs before you complete any TODOs. Recipe search, recipe cards,
sample data, and CSS are ready. You will add a controlled contact form, JSON
fetching, and a shared theme during the session.

## 1. Install Node.js

Use **Node.js 24 LTS** (or Node.js 22.12+). Node includes npm.

```bash
node --version
npm --version
```

If you already use nvm, run `nvm install` and `nvm use` in this folder. The
included .nvmrc selects Node 24. Installing nvm is optional.

## 2. Download or clone

Download the GitHub repository ZIP, extract it completely, and open the project
folder in VS Code. Do not work inside the ZIP viewer.

Alternatively, copy the actual clone URL from your course materials. Replace
YOUR_REPOSITORY_URL below with that URL:

```bash
git clone YOUR_REPOSITORY_URL week-5-starter
cd week-5-starter
```

If this is a week-5 subfolder in a larger course repository, open that subfolder
instead. **Your terminal must be in the folder containing package.json.** You do
not need to create a new Vite project.

## 3. Install and run

In a terminal in the project root:

```bash
npm ci
npm run dev
```

npm ci installs the exact versions in package-lock.json and needs internet for
the initial package download. Do not install React, TypeScript, or Vite globally.
Open the **Local** address printed in the terminal. If the default port is busy,
Vite may print another address; use that one. Keep the terminal running. Ctrl+C
stops the server. After the first install, future sessions only need npm run dev.

There is **no API key, environment setup, backend, database, or account** required.
Recipes are bundled locally. Google cooking-instruction links need internet.

## 4. Verify before editing

1. Recipe cards appear in light mode.
2. Search `tomato, pasta, cheese`: Tomato and Cheese Pasta ranks first.
3. Search `dragonfruit`: a no-matches message appears.
4. Clear search: all recipes return.
5. The theme button is disabled on purpose.
6. Contact fields are editable, but submission only prevents navigation.
   React-controlled values, submission preview, and reset are not implemented yet.

Use singular ingredient names from the samples, such as tomato or egg. These are
sample recipe ideas, not live Spoonacular results.

## 5. Live coding tasks

Find **TODO 1**, **TODO 2**, and **TODO 3** in your editor.

| Segment | Files | Task |
| --- | --- | --- |
| TODO 1: useState | src/components/ContactForm.tsx | Add a typed state object, controlled fields, submitted snapshot, and reset |
| TODO 2: useEffect | src/App.tsx and the JSON file | Replace the static import with one fetch Effect and loading/error/data states |
| TODO 3: useContext | src/ThemeContext.tsx, src/main.tsx, src/components/Nav.tsx, src/components/RecipeCard.tsx | Add shared theme, Nav toggle, and a deeper consumer |

For TODO 2, **move** src/data/recipes.json to public/recipes.json. Remove the
static import. Fetch `/recipes.json`, without `/public` in the URL. Keep this
one Effect in App for Week 6's custom-Hook refactor.

For TODO 3, replace main.tsx's fixed-light wrapper with ThemeProvider. Do not
keep an extra fixed-light wrapper inside or around the completed provider.

## Already prepared

- src/types.ts: recipe interfaces.
- src/data/recipes.json: catalog, initially statically imported.
- src/components/RecipeList.tsx: matching, ranking, and card rendering.
- src/styles.css: responsive layout and both theme palettes.
- src/components/LikesCounter.tsx: optional stretch, not rendered by default.
- ThemeContext.tsx initially contains an unused plain layout wrapper. It does
  not provide context until you implement TODO 3.

Keep supporting files unless the instructor asks you to change them. Completed
instructor solutions are not included in this student starter.

## Check the build

```bash
npm run build
npm run preview
```

Build checks TypeScript and creates dist. Preview serves that built result.

## Troubleshooting

| Problem | Fix |
| --- | --- |
| node or npm not found | Install Node, then restart VS Code and the terminal |
| package.json not found | Change into the extracted project root |
| Unsupported Node | Use Node 24 and check node --version |
| npm ci lockfile mismatch | Download the complete starter; do not mix package files from older examples |
| Missing React or Vite | Run npm ci in the project root |
| Blank page | Check terminal and browser console for the first error |
| Double-clicking index.html fails | Use npm run dev and its Local URL |
| PowerShell blocks npm.ps1 | Use Command Prompt or npm.cmd ci and npm.cmd run dev |
| Google links do not open offline | The app catalog is local, but external searches need internet |

Commit the source and package-lock.json. Do not commit node_modules or dist.
