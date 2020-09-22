import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { MEALS } from '../data/data';

import HeaderButton from '../components/HeaderButton';

const MealDetailsScreen = (props) => {
	const mealId = props.navigation.getParam('mealId');

	const selectMeal = MEALS.find((meal) => meal.id === mealId);
	return (
		<View style={styles.screen}>
			<Text> {selectMeal.title} </Text>
			<Button
				title="Go Back to Categories"
				onPress={() => {
					props.navigation.popToTop();
				}}
			/>
		</View>
	);
};

MealDetailsScreen.navigationOptions = (navigationData) => {
	const mealId = navigationData.navigation.getParam('mealId');

	const selectMeal = MEALS.find((meal) => meal.id === mealId);

	return {
		headerTitle: selectMeal.title,
		headerRight: (
			<HeaderButtons HeaderButtonComponent={HeaderButton}>
				<Item
					title="Favorite"
					iconName="ios-star-outline"
					onPress={() => {
						console.log('Mark as favorite');
					}}
				/>
			</HeaderButtons>
		),
	};
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default MealDetailsScreen;
