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
export default class FoodList extends Component {
  state = {
    fontLoaded: false,
  };

  componentDidMount() {
    this.loadAssetsAsync();
  }

  async loadAssetsAsync() {
    await Font.loadAsync({
      Raleway: require("../assets/fonts/Raleway.ttf"),
      Raleway2: require("../assets/fonts/Raleway-Black.ttf"),
      Raleway3: require("../assets/fonts/Raleway-Bold.ttf"),
      Raleway4: require("../assets/fonts/Raleway-SemiBold.ttf"),
      Raleway5: require("../assets/fonts/Raleway-Italic.ttf"),
      Raleway6: require("../assets/fonts/Raleway-Light.ttf"),
      Raleway7: require("../assets/fonts/Raleway-Thin.ttf"),
      Raleway8: require("../assets/fonts/Raleway-Medium.ttf"),
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    if (!this.state.fontLoaded) {
      return null; // render some progress indicator
    }
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF9E9" }}>
        <View
          style={{
            flex: 1,
            margin: 20,
          }}
        >
          {/* {renderRecipes()} */}
          <Text style={styles.title}>RECIPES</Text>
          <Text style={styles.subTitle}>CATEGORIES</Text>

          <View>
            <ScrollView
              horizontal
              style={styles.fixToText}
              showsHorizontalScrollIndicator={false}
            >
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>All</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Meal</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Lunch</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Snack</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Dessert</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>

          <FlatList
            style={styles.mainList}
            data={Foods}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate("RecipeList", {
                      name: item.name,
                      description: item.description,
                      image: item.image,
                    });
                  }}
                >
                  <View style={styles.itemContainer}>
                    <View style={styles.itemList}>
                      <Text style={styles.name}>{item.name}</Text>
                      <Text style={styles.description}>{item.description}</Text>
                      <Image source={item.image} style={styles.image} />
                    </View>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    color: "black",
    fontFamily: "Raleway2",
    position: "absolute",
  },
  subTitle: {
    fontFamily: "Raleway8",
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
    height: "50%",
    margin: 5,
    padding: 5,
    borderRadius: 10,
    height: 150,

    backgroundColor: "#FEC633",
  },
  mainList: {
    flex: 1,
    top: 150,
  },
  name: {
    width: "50%",
    fontSize: 15,

    fontFamily: "Raleway3",
  },
  description: {
    width: "50%",
    fontSize: 13,
    fontFamily: "Raleway",
  },
  image: {
    opacity: 0.99,
    width: "50%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 10,
    position: "absolute",
    bottom: 0,
    right: 0,
  },
});
