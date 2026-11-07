import { useEffect, useState } from 'react';
import ContactForm from './components/ContactForm';
import Nav from './components/Nav';
import RecipeList from './components/RecipeList';
import type { RecipeData } from './types';

export default function App() {
  const [ingredient, setIngredient] = useState('');
  const [data, setData] = useState<RecipeData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Keep fetching here for Week 6's custom-hook refactor.
  useEffect(() => {
    let ignore = false;

    async function loadRecipes() {
      try {
        const response = await fetch('/recipes.json');
        if (!response.ok) throw new Error('Could not load recipes.');
        const recipes: RecipeData = await response.json();
        if (!ignore) setData(recipes);
      } catch (err) {
        if (!ignore) {
          setError(err instanceof Error ? err.message : 'Something went wrong.');
        }
      } finally {
        if (!ignore) setLoading(false);
      }
    }

    loadRecipes();
    // Cleanup prevents an obsolete setup from writing state; it does not abort fetch.
    return () => { ignore = true; };
  }, []);

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

        {loading && <p role="status">Loading...</p>}
        {error && <p role="alert">{error}</p>}
        {data && <RecipeList recipes={data.recipes} ingredient={ingredient} />}
        <ContactForm />
      </main>
    </>
  );
}
