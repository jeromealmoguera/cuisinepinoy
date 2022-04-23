import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  FlatList,
  ScrollView,
  ImageBackground,
} from "react-native";
// import { createStackNavigator } from "@react-navigation/stack";

import Foods from "../const/Foods";
import * as Font from "expo-font";
// import Foodings from "../const/Foodings";
import { SafeAreaView } from "react-native-safe-area-context";

// const Stack = createStackNavigator();
export default class RecipeList extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF9E9" }}>
        <Text>{this.props.route.params.name}</Text>
        <Text style={styles.description}>
          {this.props.route.params.description}
        </Text>
        <ImageBackground>{this.props.route.params.image}</ImageBackground>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({});
