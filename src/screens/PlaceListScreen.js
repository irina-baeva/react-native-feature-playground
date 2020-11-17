import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import HeaderButtonCustom from "../components/HeaderButton";
import PlaceItem from "../components/PlaceItem";
import { useSelector } from "react-redux";
import { FlatList } from "react-native-gesture-handler";

const PlaceListScreen = ({ navigation }) => {
	const places = useSelector((state) => state.places.places);
	return (
		<View style={styles.container}>
			<Button
				onPress={({}) => navigation.navigate("NewPlaceScreen")}
				title="Add Place"
			/>
			<FlatList
				data={places}
				keyExtractor={(item) => item.id}
				renderItem={(itemData) => (
					<PlaceItem
						image={null}
						title={itemData.item.title}
						address={null}
						onSelect={() => {
							navigation.navigate("PlaceDetailsScreen", {
								placeTitle: itemData.item.title,
								placeId: itemData.item.id,
							});
						}}
					/>
				)}
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
