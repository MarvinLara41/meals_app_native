import React, { useEffect, useCallback } from 'react';
import { ScrollView, View, Image, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import DefaultText from '../components/DefaultText';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFavorite } from '../store/actions/meals';

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
	const availableMeals = useSelector((state) => state.meals.meals);

	const mealId = props.navigation.getParam('mealId');

	const selectMeal = availableMeals.find((meal) => meal.id === mealId);

	const dispatch = useDispatch();

	/**avoiding infinite loops using useCallback */
	const toggleFavoriteHandler = useCallback(() => {
		/**using dispatch to trigger the action, passing mealId to the action */
		dispatch(toggleFavorite(mealId));

		/**defining dependencies */
	}, [dispatch, mealId]);

	useEffect(() => {
		/**setting the toggleFav to be used by navigationOptions, toggleFave point to the action that will be taken */
		props.navigation.setParams({ toggleFav: toggleFavoriteHandler });
	}, [toggleFavoriteHandler]);

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
		</ScrollView>
	);
};

MealDetailsScreen.navigationOptions = (navigationData) => {
	const toggleFavorite = navigationData.navigation.getParam('toggleFav');

	const mealTitle = navigationData.navigation.getParam('mealTitle');

	return {
		headerTitle: mealTitle,
		headerRight: (
			<HeaderButtons HeaderButtonComponent={HeaderButton}>
				<Item
					title="Favorite"
					iconName="ios-star-outline"
					onPress={toggleFavorite}
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
