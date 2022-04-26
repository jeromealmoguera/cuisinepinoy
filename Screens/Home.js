import "react-native-gesture-handler";
import React, { Component } from "react";
import {
  View,
  Text,
  ImageBackground,
  Button,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
} from "react-native";
import { useFonts } from "expo-font";

export default class Home extends Component {
  render() {
    // const [loaded] = useFonts({
    //   Raleway: require("../assets/fonts/Raleway.ttf"),
    // });

    // if (!loaded) {
    //   return null;
    // }
    return (
      <View style={styles.container}>
        {/* TITLE */}
        <Text style={styles.title}>READY FOR COOKING?</Text>

        <Text style={styles.subtitle}>RECENTLY VIEWED</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF9E9",
  },
  title: {
    fontSize: 35,
    color: "black",
    position: "absolute",
    left: 22,
    top: 28,
    fontFamily: "RalewayBlack",
  },
  subtitle: {
    fontFamily: "RalewayMedium",
    fontSize: 15,
    color: "black",
    position: "absolute",
    left: 22,
    top: 132,
  },
});
