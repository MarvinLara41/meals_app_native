import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { CATEGORIES, MEALS } from '../data/data';

const CategoryMealsScreen = (props) => {
	const renderMealItem = (itemData) => {
		return (
			<View>
				<Text>{itemData.item.title}</Text>
			</View>
		);
	};

	const catId = props.navigation.getParam('categoryId');

	const displayMeals = MEALS.filter(
		(meal) => meal.categoryId.indexOf(catId) >= 0
	);

	const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

	return (
		<View style={styles.screen}>
			<FlatList
				data={displayMeals}
				keyExtractor={(item, index) => item.id}
				renderItem={renderMealItem}
			/>
		</View>
	);
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
	const catId = navigationData.navigation.getParam('categoryId');
	const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

	return {
		headerTitle: selectedCategory.title,
	};
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default CategoryMealsScreen;
