import React from 'react';
import { View, StyleSheet } from 'react-native';
import MealList from '../components/MealList';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';
import HeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';

const FavoritesScreen = (props) => {
	const favMeals = useSelector((state) => state.meals.favoriteMeals);

	if (favMeals.length === 0 || !favMeals) {
		return (
			<View style={styles.noFavs}>
				<DefaultText>No favorite meals added yet! </DefaultText>
			</View>
		);
	}

	return <MealList listData={favMeals} navigation={props.navigation} />;
};

const styles = StyleSheet.create({
	noFavs: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 10,
	},
});

FavoritesScreen.navigationOptions = (navData) => {
	return {
		headerTitle: 'Your Favorites',
		headerLeft: (
			<HeaderButtons HeaderButtonComponent={HeaderButton}>
				<Item
					title="Menu"
					iconName="ios-menu"
					onPress={() => {
						navData.navigation.toggleDrawer();
					}}
				/>
			</HeaderButtons>
		),
	};
};

export default FavoritesScreen;
