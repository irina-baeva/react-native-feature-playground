import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const MapScreen = ({ navigation }) => {
	return (
		<>
			<Text>MapScreen screen</Text>
			<Button
				title="Go to details"
				onPress={() => navigation.navigate("TrackDetailScreen")}
			/>
		</>
	);
};

const styles = StyleSheet.create({});

export default MapScreen;
