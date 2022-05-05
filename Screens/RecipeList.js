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
  Button,
} from "react-native";
// import { createStackNavigator } from "@react-navigation/stack";

import Foods from "../const/Foods";
import * as Font from "expo-font";
// import Foodings from "../const/Foodings";
import { SafeAreaView } from "react-native-safe-area-context";

// const Stack = createStackNavigator();
export default class RecipeList extends Component {
  componentDidMount() {
    if (this.props.route.recipe) {
      console.log(this.props.route.recipe);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={this.props.route.params.image} />
        <View style={styles.content}>
          <ScrollView
            style={styles.contentContainer}
            showsVerticalScrollIndicator={false}
          >
            <Text style={styles.name}>{this.props.route.params.name}</Text>

            <Text style={styles.about}>About the Food</Text>
            <Text style={styles.description}>
              {this.props.route.params.fullDescription}
            </Text>

            <Text style={styles.ingredientsTitle}>Ingredients</Text>
            <Text style={styles.ingredients}>
              {this.props.route.params.ingredients}
            </Text>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Cook Now</Text>
            </TouchableOpacity>
          </ScrollView>
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
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "#ffcf5c",
  },
  contentContainer: {
    margin: 20,
  },
  name: {
    marginTop: -20,
    width: "100%",
    fontSize: 50,
    color: "black",
    fontFamily: "RalewayExtraBold",
  },
  about: {
    fontSize: 15,
    marginTop: 10,
    fontFamily: "RalewayBold",
  },
  description: {
    width: "100%",
    fontSize: 15,
    fontFamily: "Raleway",
  },
  ingredientsTitle: {
    fontSize: 15,
    marginTop: 10,
    fontFamily: "RalewayBold",
  },
  ingredients: {
    width: "100%",
    fontSize: 15,
    fontFamily: "Raleway",
  },
  recipe: {
    width: "100%",
    fontSize: 15,
    fontFamily: "Raleway",
  },
  image: {
    width: "100%",
    height: 200,
    position: "absolute",
  },
  button: {
    display: "flex",
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: -30,
    marginTop: 30,
    height: 50,
    width: "70%",
    borderRadius: 25,
    // alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#F69250",
  },
  buttonText: {
    fontSize: 25,
    color: "white",
    textAlign: "center",
    fontFamily: "RalewayBold",
  },
});
