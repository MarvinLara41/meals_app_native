import { MEALS } from '../../data/data';

const intialState = {
	meals: MEALS,
	filteredMeals: MEALS,
	favoriteMeals: [],
};

const mealsReducer = (state = intialState, action) => {
	return state;
};

export default mealsReducer;
