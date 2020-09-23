import React from 'react';
import { CATEGORIES, MEALS } from '../data/data';
import MealList from '../components/MealList';

const CategoryMealsScreen = (props) => {
	const catId = props.navigation.getParam('categoryId');

	const displayMeals = MEALS.filter(
		(meal) => meal.categoryId.indexOf(catId) >= 0
	);

	const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

	return <MealList listData={displayMeals} navigation={props.navigation} />;
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
	const catId = navigationData.navigation.getParam('categoryId');
	const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

	return {
		headerTitle: selectedCategory.title,
	};
};

export default CategoryMealsScreen;
