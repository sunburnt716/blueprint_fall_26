import { useState } from 'react';
import ContactForm from './components/ContactForm';
import Nav from './components/Nav';
import RecipeList from './components/RecipeList';
import recipeData from './data/recipes.json';
import type { RecipeData } from './types';

export default function App() {
  // Already working: ingredient search. Focus today's typing on the new Hooks.
  const [ingredient, setIngredient] = useState('');
  const data: RecipeData = recipeData;

  // TODO 2: Move src/data/recipes.json to public/recipes.json.
  // Remove the static import and data assignment above.
  // Add data/null, loading, and error state plus ONE fetching useEffect.
  // Keep the fetch code here for Week 6's custom-hook refactor.

  return (
    <>
      <Nav />
      <main>
        <section id="search">
          <h1>What can I cook?</h1>
          <p>Enter ingredients you have, separated by commas.</p>
          <label htmlFor="ingredient">Your ingredients</label>
          <input id="ingredient" value={ingredient}
            onChange={e => setIngredient(e.target.value)}
            placeholder="tomato, pasta, cheese" />
          <p>Results update as you type. Use singular names such as egg or tomato.</p>
          <small>Sample recipe ideas from a local JSON file.</small>
        </section>

        {/* TODO 2: Render Loading..., an error, and data-guarded results. */}
        <RecipeList recipes={data.recipes} ingredient={ingredient} />
        <ContactForm />
      </main>
    </>
  );
}
