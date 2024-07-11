import { FiltersReturn } from '../../types';
import styles from '../Recipes/recipes.module.css';

type ButtonFiltersProps = {
  category: FiltersReturn
  handleClick: (category: string) => void
};

type IconKey =
  | 'Ordinary Drink'
  | 'Cocktail'
  | 'Shake'
  | 'Other / Unknown'
  | 'Cocoa'
  | 'Beef'
  | 'Breakfast'
  | 'Chicken'
  | 'Dessert'
  | 'Goat';

  type IconPaths = {
    [key in IconKey]: string;
  };

function ButtonFilters({ category, handleClick }:ButtonFiltersProps) {
  const icons:IconPaths = {
    'Ordinary Drink': '/images/OrdinaryDrink.svg',
    Cocktail: '/images/cocktail.svg',
    Shake: '/images/shake.svg',
    'Other / Unknown': '/images/other.svg',
    Cocoa: '/images/cocoa.svg',
    Beef: '/images/beefCategory.svg',
    Breakfast: '/images/breakfastCategory.svg',
    Chicken: '/images/chickenCategory.svg',
    Dessert: '/images/dessertCategory.svg',
    Goat: '/images/goatCategory.svg',
  };

  const icon = icons[category.strCategory as keyof IconPaths];
  return (
    <button
      onClick={ () => handleClick(category.strCategory) }
      type="button"
      key={ Date.now() }
      data-testid={ `${category.strCategory}-category-filter` }
      className={ styles.button_filter }
    >
      <img src={ icon } alt={ category.strCategory } />
      <span>
        {category.strCategory}
      </span>
    </button>
  );
}
export default ButtonFilters;
