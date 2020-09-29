import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import { CATEGORIES } from '../data/data';
import DefaultText from '../components/DefaultText';
import MealList from '../components/MealList';

const CategoryMealsScreen = (props) => {
	const catId = props.navigation.getParam('categoryId');

	/** useSelector retrieves data from the state and returns it,
filteredMeals is a state set in the reducer passed from the store
 */

	const availableMeals = useSelector((state) => state.meals.filteredMeals);

	const displayMeals = availableMeals.filter(
		(meal) => meal.categoryId.indexOf(catId) >= 0
	);

	const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

	if (displayMeals.length === 0) {
		return (
			<View style={styles.content}>
				<DefaultText>No meals found, maybe check your filters.</DefaultText>
			</View>
		);
	}

	return <MealList listData={displayMeals} navigation={props.navigation} />;
};

const styles = StyleSheet.create({
	content: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

CategoryMealsScreen.navigationOptions = (navigationData) => {
	const catId = navigationData.navigation.getParam('categoryId');
	const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

	return {
		headerTitle: selectedCategory.title,
	};
};

export default CategoryMealsScreen;
