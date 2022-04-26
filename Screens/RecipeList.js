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
  componentDidMount() {
    console.log(this.props.route.params);
    if (this.props.route.recipe) {
      console.log(this.props.route.recipe);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={this.props.route.params.image} />
        <View style={styles.content}>
          <Text style={styles.name}>{this.props.route.params.name}</Text>
          <Text style={styles.description}>
            {this.props.route.params.description}
          </Text>
          <Text>{this.props.route.params.recipe}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    position: "absolute",
    // borderRadius: 20,
    height: "75%",
    bottom: 0,
    width: "100%",
    backgroundColor: "#F29B97",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  name: {
    marginTop: 130,
    width: "100%",
    fontSize: 30,
    fontFamily: "RalewayBold",
  },
  description: {
    width: "100%",
    fontSize: 15,
    fontFamily: "Raleway",
  },
  image: {
    width: "100%",
    height: 200,
    position: "absolute",
  },
});
