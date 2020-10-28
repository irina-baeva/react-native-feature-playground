import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import HeaderButtonCustom from '../components/HeaderButton'
import { useSelector } from 'react-redux'
const PlaceListScreen = ({navigation} ) => {
	const places = useSelector(state => state.places.places)
	return (
		<View style={styles.container}>
				 <Button
			 onPress={({}) => navigation.navigate('NewPlaceScreen')}
			 title='Add Place'
            />
		</View>
	);
};



const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		marginBottom: 250,
	},
});

export default PlaceListScreen;
