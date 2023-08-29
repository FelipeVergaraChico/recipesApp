import { createContext, useEffect, useState } from 'react';
import {
  Drink,
  FavoriteType,
  Meal,
  RecipesContextType,
  RecipesProviderProps,
} from '../types';

export const RecipesContext = createContext({} as RecipesContextType);

export function RecipesProvider({ children }: RecipesProviderProps) {
  const [recipes, setRecipes] = useState<Meal[] | Drink[]>([]);
  const [favoriteRecipes, setFavoriteRecipes] = useState<FavoriteType[]>([]);

  useEffect(() => {
    const storedFavoriteRecipes = localStorage.getItem('favoriteRecipes');
    if (storedFavoriteRecipes) {
      const favoritedRecipes = JSON.parse(storedFavoriteRecipes);
      setFavoriteRecipes(favoritedRecipes);
    }
  }, []);

  const handleFavoriteRecipes = (newFavoriteRecipe:FavoriteType) => {
    setFavoriteRecipes([...favoriteRecipes, newFavoriteRecipe]);
    localStorage.setItem(
      'favoriteRecipes',
      JSON.stringify([...favoriteRecipes, newFavoriteRecipe]),
    );
  };

  const handleRemoveFavoriteRecipe = (recipeId:string) => {
    const updatedFavoriteRecipes = favoriteRecipes
      .filter((recipe) => recipe.id !== recipeId);
    setFavoriteRecipes(updatedFavoriteRecipes);
    localStorage.setItem('favoriteRecipes', JSON.stringify(updatedFavoriteRecipes));
  };

  const providerValues = {
    recipes,
    setRecipes,
    favoriteRecipes,
    handleFavoriteRecipes,
    handleRemoveFavoriteRecipe,
  };
  return (
    <RecipesContext.Provider value={ providerValues }>
      {children}
    </RecipesContext.Provider>
  );
}
