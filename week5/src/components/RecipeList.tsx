import RecipeCard from './RecipeCard';
import type { Recipe } from '../types';

type Props = { recipes: Recipe[]; ingredient: string };

export default function RecipeList({ recipes, ingredient }: Props) {
  // Match exact ingredient names after removing capitalization and extra spaces.
  const terms = ingredient.toLowerCase().split(',')
    .map(term => term.trim()).filter(Boolean);

  // Derive results from existing props instead of storing duplicate state.
  const matches = recipes.map(recipe => ({
    recipe,
    count: recipe.ingredients.filter(item => terms.includes(item)).length,
  })).filter(item => terms.length === 0 || item.count > 0)
    .sort((a, b) => b.count - a.count);

  return (
    <section id="recipes">
      <h2>Recipe ideas</h2>
      {matches.length === 0 && <p>No matches. Try tomato, rice, or cheese.</p>}
      <div className="recipes">
        {matches.map(({ recipe, count }) => (
          <div key={recipe.id}>
            {terms.length > 0 && <p>Matches {count} entered ingredient(s)</p>}
            <RecipeCard recipe={recipe} />
          </div>
        ))}
      </div>
    </section>
  );
}
