import React, { Component } from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  Button,
  StyleSheet,
} from "react-native";

export default class Favourites extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#FFF9E9" }}>
        <View
          style={{
            flex: 1,
            margin: 20,
          }}
        >
          <Text style={styles.title}>MY FAVORITES</Text>
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
});
