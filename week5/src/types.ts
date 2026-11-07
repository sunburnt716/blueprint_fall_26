export interface Recipe {
  id: number;
  title: string;
  description: string;
  ingredients: string[];
}

export interface RecipeData {
  recipes: Recipe[];
}
