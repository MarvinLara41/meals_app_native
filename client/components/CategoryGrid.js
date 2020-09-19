import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

const CategoryGrid = (props) => {
	return (
		<TouchableOpacity onPress={props.onSelect} style={styles.gridItem}>
			<View
				style={{ ...styles.container, ...{ backgroundColor: props.color } }}
			>
				<Text style={styles.title}> {props.title} </Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	gridItem: {
		flex: 1,
		margin: 15,
	},
	container: {
		flex: 1,
		padding: 15,
		borderRadius: 50,
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		fontFamily: 'open-sans-bold',
		fontSize: 16,
		justifyContent: 'center',
	},
});

export default CategoryGrid;
