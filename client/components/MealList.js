import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import MealItem from './MealItem';
import { useSelector } from 'react-redux';

const MealList = (props) => {
	/** accessing the global state */
	const favoriteMeals = useSelector((state) => state.meals.favoriteMeals);

	const renderMealItem = (itemData) => {
		const isFavorite = favoriteMeals.some(
			(meal) => meal.id === itemData.item.id
		);
		return (
			<MealItem
				title={itemData.item.title}
				duration={itemData.item.duration}
				complexity={itemData.item.complexity}
				affordability={itemData.item.affordability}
				image={itemData.item.imgUrl}
				onSelectMeal={() => {
					props.navigation.navigate({
						routeName: 'MealDetail',
						params: {
							/** accessing the paramaters set in the mealDetailsScreen, this renders these items beofre the screens load */
							mealId: itemData.item.id,
							mealTitle: itemData.item.title,
							isFav: isFavorite,
						},
					});
				}}
			/>
		);
	};

	return (
		<View style={styles.screen}>
			<FlatList
				data={props.listData}
				keyExtractor={(item, index) => item.id}
				renderItem={renderMealItem}
				style={{ width: '100%' }}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 15,
	},
});

export default MealList;
