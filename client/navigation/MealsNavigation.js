import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from 'react-native';

import Colors from '../constants/colors';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';

const defaultStackNavOptions = {
	headerStyle: {
		/**headerStyle targets the background color header of the app, the title cannot be targeted with this method */
		backgroundColor: Colors.primaryColor,
	},
	headerTitleStyle: {
		/**headerTitleStlye changes the font of the header titles, it DOES NOT change the 'back' option font*/
		fontFamily: 'open-sans-bold',
	},
	headerBackTitleStyle: {
		/** headerBackTitleStyle targets the 'back' option in the header, this is needed in order to set the font.  */
		fontFamily: 'open-sans-bold',
	},
};

const MealsNavigator = createStackNavigator(
	{
		Categories: {
			screen: CategoriesScreen,
		},
		CategoryMeals: {
			screen: CategoryMealsScreen,
		},
		MealDetail: MealDetailsScreen,
	},
	{
		defaultNavigationOptions: defaultStackNavOptions,
	}
);

const FavNavigator = createStackNavigator(
	{
		Favorites: FavoritesScreen,
		MealDetail: MealDetailsScreen,
	},
	{
		defaultNavigationOptions: defaultStackNavOptions,
	}
);

const MealsFavTabNavigator = createBottomTabNavigator(
	{
		Meals: {
			screen: MealsNavigator,
			navigationOptions: {
				tabBarIcon: (tabInfo) => {
					return (
						<Ionicons
							name="ios-restaurant"
							size={25}
							color={tabInfo.tintColor}
						/>
					);
				},
				/**setting the style for the label */
				tabBarLabel: (
					<Text
						style={{ justifyContent: 'center', fontFamily: 'open-sans-bold' }}
					>
						Meals{' '}
					</Text>
				),
			},
		},
		Favorites: {
			screen: FavNavigator,
			navigationOptions: {
				tabBarIcon: (favInfo) => {
					return (
						<Ionicons name="ios-star" size={25} color={favInfo.tintColor} />
					);
				},
			},
		},
	},
	{
		tabBarOptions: {
			activeTintColor: Colors.primaryColor,
		},
	}
);

const FiltersNavigator = createStackNavigator(
	{
		Filters: FiltersScreen,
	},
	{
		defaultNavigationOptions: defaultStackNavOptions,
	}
);

const MainNavigator = createDrawerNavigator(
	{
		MealsFavs: {
			screen: MealsFavTabNavigator,
			/** Setting the name for MealsFavTabNavigator in the menu drawer */
			navigationOptions: {
				drawerLabel: 'Meals',
			},
		},
		Filters: FiltersNavigator,
	},
	{
		/**  setting colors inside the chosen options in the menu drawer */
		contentOptions: {
			activeTintColor: Colors.primaryColor,
			labelStyle: {
				/**setting the font style of the menu drawer */
				fontFamily: 'open-sans-bold',
			},
		},
	}
);
export default createAppContainer(MainNavigator);
