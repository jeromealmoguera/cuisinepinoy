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

import Foods from "../const/Foods";
import * as Font from "expo-font";
// import Foodings from "../const/Foodings";
import { SafeAreaView } from "react-native-safe-area-context";

// const Stack = createStackNavigator();
export default class Home extends Component {
  state = {
    fontLoaded: false,
  };

  componentDidMount() {
    this.loadAssetsAsync();
  }

  async loadAssetsAsync() {
    await Font.loadAsync({
      Raleway: require("../assets/fonts/Raleway.ttf"),
      RalewayBlack: require("../assets/fonts/Raleway-Black.ttf"),
      RalewayBold: require("../assets/fonts/Raleway-Bold.ttf"),
      RalewaySemiBold: require("../assets/fonts/Raleway-SemiBold.ttf"),
      RalewayItalic: require("../assets/fonts/Raleway-Italic.ttf"),
      RalewayLight: require("../assets/fonts/Raleway-Light.ttf"),
      RalewayThin: require("../assets/fonts/Raleway-Thin.ttf"),
      RalewayMedium: require("../assets/fonts/Raleway-Medium.ttf"),
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    if (!this.state.fontLoaded) {
      return null; // render some progress indicator
    }
    return (
      <View style={{ flex: 1, backgroundColor: "#FFF9E9" }}>
        <View
          style={{
            flex: 1,
            margin: 20,
          }}
        >
          {/* {renderRecipes()} */}
          <Text style={styles.title}>READY FOR COOKING?</Text>
          <Text style={styles.subTitle}>RECENTLY VIEWED</Text>

          <View>
            <ScrollView
              horizontal
              style={styles.fixToText}
              showsHorizontalScrollIndicator={false}
            >
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Tinolang Manok</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Pinakbet</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Salad</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Longsilog</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Buko Pie</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
          <Text style={styles.weekRecipe}>RECIPE OF THE WEEK</Text>
          <View>
              <TouchableOpacity style={styles.recipeWeek}>
              </TouchableOpacity>

          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    color: "black",
    fontFamily: "RalewayBlack",
    position: "absolute",
    top: 20,
  },
  subTitle: {
    fontFamily: "RalewayMedium",
    fontSize: 15,
    color: "black",
    position: "absolute",
    top: 160,
  },
  weekRecipe: {
    fontFamily: "RalewayMedium",
    fontSize: 15,
    color: "black",
    position: "absolute",
    top: 380,
  },
  fixToText: {
    flex: 1,
    position: "absolute",
    flexDirection: "row",
    top: 200,
  },
  button: {
    justifyContent: "space-between",
    width: 120,
    height: 128,
    padding: 7,
    marginRight: 15,
    borderRadius: 10,
    backgroundColor: "#ffcf5c",
  },
  buttonText: {
    fontFamily: "Raleway",
    textAlign: "center",
    fontSize: 15,
    color: "white",
    justifyContent: "center",
  },
  recipeWeek: {
    justifyContent: "space-between",
    width: 320,
    height: 200,
    padding: 7,
    marginRight: 15,
    borderRadius: 10,
    backgroundColor: "#ffcf5c",
    top: 420,
  },
}
);
