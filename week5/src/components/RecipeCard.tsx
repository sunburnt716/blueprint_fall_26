import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
import type { Recipe } from '../types';

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('RecipeCard needs ThemeProvider');

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
      <p><small>This card reads the {context.theme} theme from context.</small></p>
    </article>
  );
}
