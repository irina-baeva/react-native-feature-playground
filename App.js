import { StatusBar } from "expo-status-bar";
import React, { useContext } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import MapScreen from "./src/screens/MapScreen";
import NewPlaceScreen from "./src/screens/NewPlaceScreen";
import PlaceDetailsScreen from "./src/screens/PlaceDetailsScreen";
import PlaceListScreen from "./src/screens/PlaceListScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import placesReducer from './src/store/places.reducer'

const rootReducer = combineReducers({
places: placesReducer
})

const store = createStore( rootReducer, applyMiddleware(ReduxThunk))
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const PlacesStackNavigator = ({ navigation }) => {
	return (
		<Stack.Navigator>
			<Stack.Screen name="All places" component={PlaceListScreen} />
			<Stack.Screen name="MapScreen" component={MapScreen} />
			<Stack.Screen name="NewPlaceScreen" component={NewPlaceScreen} />
			<Stack.Screen name="PlaceDetailsScreen" component={PlaceDetailsScreen} />
		</Stack.Navigator>
	);
};

const App = () => {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<PlacesStackNavigator />
			</NavigationContainer>
		</Provider>
	);
};

export default () => {
	return <App />;
};
