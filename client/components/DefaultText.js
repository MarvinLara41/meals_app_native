import React from 'react';
import { Text, StyleSheet } from 'react-native';

/** Creating this file to organize the styling in the 'Text' component from react-native, instead of consistenly importing that component from RN and styling the text through the app I can just re-use this same component through out the application and not worry about text styling */

const DefaultText = (props) => {
	return <Text style={styles.text}> {props.children} </Text>;
};

const styles = StyleSheet.create({
	text: {
		fontFamily: 'open-sans',
		flexShrink: 1,
	},
});

export default DefaultText;
