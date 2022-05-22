import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
// import { createStackNavigator } from "@react-navigation/stack";

import { SafeAreaView } from "react-native-safe-area-context";
import { createStackNavigator } from "@react-navigation/stack";

import FoodList from "./FoodList";
import RecipeList from "./RecipeList";
<<<<<<< Updated upstream
=======
import Dummy from "./Dummy";
import LunchList from "./LunchList";
import BreakfastList from "./BreakfastList";
import SnackList from "./SnackList";
import DessertList from "./DessertList";

>>>>>>> Stashed changes

const Stack = createStackNavigator();

// const Stack = createStackNavigator();
export default class Recipes extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF9E9" }}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="FoodList" component={FoodList}></Stack.Screen>
          <Stack.Screen name="RecipeList" component={RecipeList}></Stack.Screen>
<<<<<<< Updated upstream
=======
          <Stack.Screen name="Dummy" component={Dummy}></Stack.Screen>
          <Stack.Screen name="LunchList" component={LunchList}></Stack.Screen>
          <Stack.Screen name="BreakfastList" component={BreakfastList}></Stack.Screen>
          <Stack.Screen name="SnackList" component={SnackList}></Stack.Screen>
          <Stack.Screen name="DessertList" component={DessertList}></Stack.Screen>
>>>>>>> Stashed changes
        </Stack.Navigator>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({});
