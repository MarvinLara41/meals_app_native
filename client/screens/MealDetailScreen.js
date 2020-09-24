import React from 'react';
import {
	ScrollView,
	View,
	Image,
	Text,
	Button,
	StyleSheet,
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { MEALS } from '../data/data';
import DefaultText from '../components/DefaultText';

import HeaderButton from '../components/HeaderButton';

/**  */
const ListItem = (props) => {
	return (
		<View style={styles.listItem}>
			<DefaultText> {props.children}</DefaultText>
		</View>
	);
};

const MealDetailsScreen = (props) => {
	const mealId = props.navigation.getParam('mealId');

	const selectMeal = MEALS.find((meal) => meal.id === mealId);
	return (
		<ScrollView>
			<Image source={{ uri: selectMeal.imgUrl }} style={styles.image} />
			<View style={styles.details}>
				<DefaultText>Duration Time: {selectMeal.duration}</DefaultText>
				<DefaultText>
					Complexity of meal preparation:{selectMeal.complexity}
				</DefaultText>
				<DefaultText>Affordability: {selectMeal.affordability}</DefaultText>
			</View>
			<Text style={styles.title}>Ingredients</Text>
			{
				/** access the data via selectMeals, then listing the ingredients by mapping the ingredients array */
				selectMeal.ingredients.map((ingredient) => (
					<ListItem key={ingredient}>{ingredient} </ListItem>
				))
			}
			<Text style={styles.title}>Steps </Text>
			{
				/** access the data via selectMeals, then listing the steps by mapping the ingredients array */
				selectMeal.steps.map((step) => (
					<Text key={step}>{step} </Text>
				))
			}
			<Button
				title="Go Back to Categories"
				onPress={() => {
					props.navigation.popToTop();
				}}
			/>
		</ScrollView>
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
	image: {
		width: '100%',
		height: 200,
	},
	details: {
		flexDirection: 'row',
		padding: 15,
		justifyContent: 'space-around',
	},
	title: {
		fontFamily: 'open-sans-bold',
		fontSize: 16,
		textAlign: 'center',
	},
	listItem: {
		marginVertical: 5,
		marginHorizontal: 20,
		borderColor: '#ccc',
		padding: 10,
		borderWidth: 1,
		alignItems: 'center',
	},
});

export default MealDetailsScreen;
