import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Colors from '../constants/colors';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailScreen';

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

export default createAppContainer(MealsNavigator);
