import type { Recipe } from '../types';

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  // TODO 3: Read ThemeContext here without receiving a theme prop.
  const searchUrl = 'https://www.google.com/search?q=' +
    encodeURIComponent(recipe.title + ' recipe cooking instructions');

  return (
    <article className="recipe-card">
      <h3>{recipe.title}</h3>
      <p>{recipe.description}</p>
      <p><strong>Ingredients:</strong> {recipe.ingredients.join(', ')}</p>
      <a href={searchUrl} target="_blank" rel="noopener noreferrer">
        Cooking instructions ↗
      </a>
      {/* TODO 3: Display the current context theme here. */}
    </article>
  );
}
