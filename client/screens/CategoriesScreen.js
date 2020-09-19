import React from 'react';
import {
	View,
	Text,
	Button,
	StyleSheet,
	FlatList,
	TouchableOpacity,
} from 'react-native';
import { CATEGORIES } from '../data/data';
import CategoryGrid from '../components/CategoryGrid';

const CategoriesScreen = (props) => {
	const renderGridItem = (itemData) => {
		return (
			<CategoryGrid
				title={itemData.item.title}
				color={itemData.item.color}
				onSelect={() => {
					props.navigation.navigate({
						routeName: 'CategoryMeals',
						params: { categoryId: itemData.item.id },
					});
				}}
			/>
		);
	};

	return (
		<FlatList data={CATEGORIES} renderItem={renderGridItem} numColumn={2} />
	);
};

CategoriesScreen.navigationOptions = {
	headerTitle: 'Meal Categories',
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default CategoriesScreen;
