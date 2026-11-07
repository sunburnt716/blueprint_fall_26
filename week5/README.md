# Week 5: Completed Recipe App

Rutgers Blueprint - React Hooks and State Management  
Leads: Purva, Sophia, Om

This is the completed solution, not the starter. It includes comments explaining
key state, fetching, and context decisions.

## Run after cloning or downloading

Use Node.js 24 (recommended) or Node.js 22.12+. Open the folder containing
package.json, then run:

```bash
npm ci
npm run dev
```

Open the Local URL printed by Vite. Keep the terminal running. No API key,
backend, database, or environment variables are needed.

If this folder is inside a larger course repository, change into week-5 first.
With nvm installed, nvm install and nvm use read the included .nvmrc.

## Completed features

- Ingredient search filters and ranks recipe ideas as you type.
- A controlled contact form uses a typed state object, previews the submission,
  and clears the inputs. It does not send email.
- One useEffect in App fetches public/recipes.json with loading/error/data states
  and cleanup that ignores obsolete results.
- ThemeContext shares a light/dark theme. Nav toggles it and a nested RecipeCard
  reads it without forwarded theme props.
- Recipe cards link to Google cooking-instruction searches.
- LikesCounter is an optional stretch example; it is not mounted by default.

Try tomato,pasta,cheese or chicken,rice. Search uses exact singular ingredient
names; an empty query shows every sample recipe. These are local sample ideas,
not live Spoonacular results or full cooking instructions.

## Files

| File | Responsibility |
| --- | --- |
| src/main.tsx | React root and theme provider |
| src/App.tsx | Ingredient state, catalog fetch, loading/error/data rendering |
| src/types.ts | Recipe interfaces |
| public/recipes.json | Bundled sample catalog |
| src/ThemeContext.tsx | Shared theme state and toggle |
| src/components/Nav.tsx | Navigation and theme toggle |
| src/components/RecipeList.tsx | Matching, ranking, and list rendering |
| src/components/RecipeCard.tsx | One recipe, instructions link, and theme consumer |
| src/components/ContactForm.tsx | Controlled inputs, preview, and reset |
| src/components/LikesCounter.tsx | Optional likes example |
| src/styles.css | Layout and light/dark CSS variables |

## Build

```bash
npm run build
npm run preview
```

Build checks TypeScript and bundles the app. Preview serves the built app locally.

## Learning notes

The contact form's fields and submitted snapshot have separate state. The theme
lives in ThemeProvider. Search results are derived from props in RecipeList, so
there is no extra state or Effect to keep them synchronized. Fetching remains
in one App Effect for Week 6's custom-Hook refactor.

Cleanup ignores obsolete results rather than canceling the HTTP request.
StrictMode may run an extra setup/cleanup check in development. The interface
describes the expected JSON but does not validate it at runtime. The catalog is
a bundled file we control. Theme and form values reset on refresh.

## Troubleshooting

- Run commands inside the folder containing package.json.
- Use a supported Node version and run npm ci before npm run dev.
- Open Vite's Local URL rather than double-clicking index.html.
- On Windows, use Command Prompt or npm.cmd if PowerShell blocks npm.ps1.
- To see Loading..., throttle the browser Network tab and reload with cache disabled.

Commit source files and package-lock.json. Do not commit node_modules or dist.
