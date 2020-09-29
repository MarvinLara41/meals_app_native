import { MEALS } from '../../data/data';
import { TOGGLE_FAVORITE } from '../actions/meals';

const intialState = {
	meals: MEALS,
	filteredMeals: MEALS,
	favoriteMeals: [],
};

const mealsReducer = (state = intialState, action) => {
	switch (action.type) {
		case TOGGLE_FAVORITE:
			const existingIndex = state.favoriteMeals.findIndex(
				(meal) => meal.id === action.mealId
			);
			if (existingIndex >= 0) {
				const updatedFavMeals = [...state.favoriteMeals];
				updatedFavMeals.splice(existingIndex, 1);

				return {
					...state,
					favoriteMeals: updatedFavMeals,
				};
			} else {
				const meal = state.meals.find((meal) => meal.id === action.mealId);
				return {
					...state,
					favoriteMeals: state.favoriteMeals.concat(meal),
				};
			}

		default:
			return state;
	}
	return state;
};

export default mealsReducer;
