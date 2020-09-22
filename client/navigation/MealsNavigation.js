import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';

import Colors from '../constants/colors';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

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
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor: Colors.primaryColor,
			},
		},
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
			},
		},
		Favorites: {
			screen: FavoritesScreen,
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

export default createAppContainer(MealsFavTabNavigator);
