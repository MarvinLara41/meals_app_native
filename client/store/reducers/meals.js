import { MEALS } from '../../data/data';
import { TOGGLE_FAVORITE, SET_FILTERS } from '../actions/meals';

const intialState = {
	meals: MEALS,
	filteredMeals: MEALS,
	favoriteMeals: [],
};

/**describing the action */
const mealsReducer = (state = intialState, action) => {
	switch (action.type) {
		/**find if the meal with id is aprat of the aciton, if it is it will be removed, if not it will be added */
		case TOGGLE_FAVORITE:
			const existingIndex = state.favoriteMeals.findIndex(
				(meal) => meal.id === action.mealId
			);
			if (existingIndex >= 0) {
				/** if the favorite meal is already apart of favoriteMeals
				it will be removed */

				/**making a copy of the state and favoriteMeal array and storing it in updatedFavMeals */
				const updatedFavMeals = [...state.favoriteMeals];
				/** removing the selected favorite meal from the array */
				updatedFavMeals.splice(existingIndex, 1);

				return {
					...state,
					/** storing the new updatedFavMeal array into favoriteMeals with the removed favorite meal */
					favoriteMeals: updatedFavMeals,
				};
			} else {
				/** if the meal IS NOT apart of favoriteMeals it will be added */
				const meal = state.meals.find((meal) => meal.id === action.mealId);
				return {
					...state,
					favoriteMeals: state.favoriteMeals.concat(meal),
				};
			}

		case SET_FILTERS:
			const appliedFilters = action.filters;
			const updatedFilteredMeals = state.meals.filter((meal) => {
				if (appliedFilters.glutenFree && !meal.isGlutenFree) {
					return false;
				}
				if (appliedFilters.lactoseFree && !meal.isLactoseFree) {
					return false;
				}
				if (appliedFilters.vegetarian && !meal.isVegetarian) {
					return false;
				}
				if (appliedFilters.vegan && !meal.isVegan) {
					return false;
				}

				return true;
			});

			/**return the new state, and setting filteredMeals to the new updatedFilteredMeals*/
			return { ...state, filteredMeals: updatedFilteredMeals };
		default:
			return state;
	}
};

export default mealsReducer;
