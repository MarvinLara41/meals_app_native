/**setting up unique idenitifier */
export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';

/**setting up the action,  */
export const toggleFavorite = (id) => {
	return {
		type: TOGGLE_FAVORITE,
		mealId: id,
	};
};
