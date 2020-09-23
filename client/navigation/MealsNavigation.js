import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';

import Colors from '../constants/colors';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

const defaultStackNavOptions = {
	headerStyle: {
		backgroundColor: Colors.primaryColor,
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

export default createAppContainer(MealsFavTabNavigator);
