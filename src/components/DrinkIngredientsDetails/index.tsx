import { useCallback, useState } from 'react';
import styles from '../../pages/RecipeDetails/recipe.module.css';
import { Drink } from '../../types';

type DrinkRecipeProps = {
  drinkRecipe: Drink
  ingredients: string[]
  measure: string[]
};

function DrinkIngredientsDetails({
  drinkRecipe,
  ingredients,
  measure,
}:DrinkRecipeProps) {
  const [check, setCheck] = useState<{ [key: number]: boolean }>({});

  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = event.target;
    const { checked } = event.target;
    setCheck((prevCheck) => ({ ...prevCheck, [name]: checked }));
  }, []);
  return (
    <div>
      <section>
        <h2>Ingredients</h2>

        <ul className={ styles.ingredient_list }>
          {
            (ingredients && measure) && ingredients.map((ingredient, index) => (
              <li
                key={ drinkRecipe.idDrink }
                data-testid={ `${index}-ingredient-name-and-measure` }
              >
                <label
                  data-testid={ `${index}-ingredient-step` }
                  htmlFor="DrinkCheck"
                  className={ check[index] ? styles.check : '' }
                >
                  <input
                    type="checkbox"
                    name={ index.toString() }
                    id="DrinkCheck"
                    onChange={ handleChange }
                    checked={ check[index] || false }
                  />
                  {ingredient}
                  -
                  {measure[index]}
                </label>
              </li>
            ))
          }
        </ul>
      </section>
    </div>
  );
}

export default DrinkIngredientsDetails;
