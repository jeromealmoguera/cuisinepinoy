import React, { Component } from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";

import Foods from "../const/Foods";
import * as Font from "expo-font";

export default class Favourites extends Component {
  state = {
    fontLoaded: false,
  };

  componentDidMount() {
    this.loadAssetsAsync();
  }

  async loadAssetsAsync() {
    await Font.loadAsync({
      Raleway: require("../assets/fonts/Raleway.ttf"),
      RalewayItalic: require("../assets/fonts/Raleway-Italic.ttf"),
      RalewayThin: require("../assets/fonts/Raleway-Thin.ttf"),
      RalewayLight: require("../assets/fonts/Raleway-Light.ttf"),
      RalewayMedium: require("../assets/fonts/Raleway-Medium.ttf"),
      RalewaySemiBold: require("../assets/fonts/Raleway-SemiBold.ttf"),
      RalewayBold: require("../assets/fonts/Raleway-Bold.ttf"),
      RalewayExtraBold: require("../assets/fonts/Raleway-ExtraBold.ttf"),
      RalewayBlack: require("../assets/fonts/Raleway-Black.ttf"),
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
          <Text style={styles.title}>MY FAVORITES</Text>
          <Text style={styles.subTitle}>CATEGORIES</Text>

          <View>
            <ScrollView
              horizontal
              style={styles.fixToText}
              showsHorizontalScrollIndicator={false}
            >
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  this.props.navigation.navigate("FoodList");
                }}
              >
                <Text style={styles.buttonText}>All</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  this.props.navigation.navigate("BreakfastList");
                }}
              >
                <Text style={styles.buttonText}>Breakfast</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  this.props.navigation.navigate("LunchList");
                }}
              >
                <Text style={styles.buttonText}>Lunch</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  this.props.navigation.navigate("SnackList");
                }}
              >
                <Text style={styles.buttonText}>Snack</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  this.props.navigation.navigate("DessertList");
                }}
              >
                <Text style={styles.buttonText}>Dessert</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>

          <FlatList
            data={Foods}
            style={styles.mainList}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate("RecipeList", {
                      name: item.name,
                      category: item.category,
                      description: item.description,
                      fullDescription: item.fullDescription,
                      image: item.image,
                      recipe: item.recipe,
                      ingredients: item.ingredients,
                    });
                  }}
                >
                  <View style={styles.itemContainer}>
                    <View style={styles.itemList}>
                      <Text style={styles.name}>{item.name}</Text>
                      <Text style={styles.category}>{item.category}</Text>
                      <Text style={styles.description}>{item.description}</Text>
                      <Image source={item.image} style={styles.image} />
                    </View>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  title: {
    fontSize: 30,
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
    top: 60,
  },

  fixToText: {
    flex: 1,
    position: "absolute",
    flexDirection: "row",
    top: 90,
  },

  button: {
    justifyContent: "space-between",
    width: 90,
    padding: 7,
    marginRight: 15,
    borderRadius: 100,
    backgroundColor: "#ffcf5c",
  },

  buttonText: {
    fontFamily: "Raleway",
    textAlign: "center",
    fontSize: 15,
    color: "white",
    justifyContent: "center",
  },

  itemContainer: {
    flex: 1,
  },

  itemList: {
    // height: "50%",
    margin: 5,
    padding: 5,
    borderRadius: 10,
    height: 150,
    backgroundColor: "#FEC633",
  },

  mainList: {
    flex: 1,
    top: 150,
    marginBottom: 130,
  },

  name: {
    width: "50%",
    fontSize: 20,
    fontFamily: "RalewayExtraBold",
  },

  category: {
    marginTop: 3,
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 25,
    fontSize: 12,
    alignContent: "center",
    justifyContent: "center",
    fontFamily: "Raleway",
    alignSelf: "flex-start",
    backgroundColor: "#f69250",
  },

  description: {
    marginTop: 5,
    width: "50%",
    fontSize: 10,
    fontFamily: "Raleway",
  },

  image: {
    width: "50%",
    height: 150,
    borderRadius: 10,
    position: "absolute",
    right: 0,
  },
});
