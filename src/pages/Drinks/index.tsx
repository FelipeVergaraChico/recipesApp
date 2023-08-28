import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Recipes from '../../components/Recipes';
import { RecipesContext } from '../../context/recipesContext';
import { Drink } from '../../types';

import styles from './drinks.module.css';

function Drinks() {
  const { recipes } = useContext(RecipesContext);
  const navigate = useNavigate();

  const drinks = recipes as Drink[];
  const renderDrinks = drinks.length < 12 ? drinks : drinks.slice(0, 12);

  return (
    <>
      <Recipes type="drinks" />
      <ul
        className={ styles.recipe_card_container }
      >
        {renderDrinks.map((recipe: Drink, index) => {
          const { idDrink, strDrinkThumb, strDrink } = recipe;
          return (
            <li
              key={ idDrink }
              data-testid={ `${index}-recipe-card` }
              className={ styles.recipe_card }

            >
              <button
                type="button"
                onClick={ () => navigate(`/drinks/${idDrink}`) }
                className={ styles.card_button }

              >
                <img
                  src={ strDrinkThumb }
                  alt={ strDrink }
                  data-testid={ `${index}-card-img` }
                />
                <p data-testid={ `${index}-card-name` }>{ strDrink }</p>
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Drinks;
