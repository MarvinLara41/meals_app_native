import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import Colors from '../constants/colors';

import { setFilters } from '../store/actions/meals';

const FilterSwitch = (props) => {
	return (
		<View style={styles.filterContainer}>
			<Text>{props.label}</Text>
			<Switch
				/**set the value of this switch to isGlutenFree(false),
				after setting the value use the onValueChange property and designate the new state to this switch with setIsGlutenFree, onValueChange is fired when the user clicks on the switch.
				 */
				trackColor={{ true: Colors.primaryColor }}
				value={props.state}
				onValueChange={props.onChange}
				thumbColor={props.onChange}
			/>
		</View>
	);
};

const FiltersScreen = (props) => {
	/**destructering and pulling out the navigation key from props */
	const { navigation } = props;

	const [isGlutenFree, setIsGlutenFree] = useState(false);
	const [isLactoseFree, setIsLactoseFree] = useState(false);
	const [isVegan, setVegan] = useState(false);
	const [isVegatarian, setVegatarian] = useState(false);

	const dispatch = useDispatch();

	const saveFilters = useCallback(() => {
		/**Step 1 to update filter states */
		const appliedFilters = {
			/**keys set up here are the keys that are looked for in the reducer */
			glutenFree: isGlutenFree,
			lactoseFree: isLactoseFree,
			vegan: isVegan,
			vegetarian: isVegatarian,
		};

		dispatch(setFilters(appliedFilters));
		/** Wrap useCallback around this function so saveFilters only updates when the state changes. In the array I specifiy which states will be tracked for change */
	}, [isGlutenFree, isLactoseFree, isVegatarian, isVegan, dispatch]);

	useEffect(
		() => {
			/**Step 2: accessing props.navigation and setParams will update the current state of each filter, setting 'save' to the saveFilters function. you can add as many params as you want.  */
			navigation.setParams({ save: saveFilters });
		},
		/**Step:4 set saveFilters as a dependency to the in the array and navigation in order to avoid constant rerending. Will only render onces the state updates*/ [
			saveFilters,
			navigation,
		]
	);

	return (
		<View style={styles.screen}>
			<Text style={styles.title}>Available Filters </Text>
			<FilterSwitch
				label="Gluten-Free"
				state={isGlutenFree}
				onChange={(newValue) => setIsGlutenFree(newValue)}
			/>
			<FilterSwitch
				label="Lactose-Free"
				state={isLactoseFree}
				onChange={(newValue) => setIsLactoseFree(newValue)}
			/>
			<FilterSwitch
				label="Vegan"
				state={isVegan}
				onChange={(newValue) => setVegan(newValue)}
			/>
			<FilterSwitch
				label="Vegetarian"
				state={isVegatarian}
				onChange={(newValue) => setVegatarian(newValue)}
			/>
		</View>
	);
};

FiltersScreen.navigationOptions = (navData) => {
	return {
		headerTitle: 'Filters',
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
		headerRight: (
			<HeaderButtons HeaderButtonComponent={HeaderButton}>
				<Item
					title="Save"
					iconName="ios-save"
					onPress={
						/** Step 3: using the getParam defining which param to get, I can retrieve the updated state of the filters*/
						navData.navigation.getParam('save')
					}
				/>
			</HeaderButtons>
		),
	};
};
const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	title: {
		fontFamily: 'open-sans-bold',
		fontSize: 22,
		margin: 20,
		textAlign: 'center',
	},
	filterContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '80%',
		marginVertical: 15,
	},
});

export default FiltersScreen;
