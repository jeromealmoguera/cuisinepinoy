import React, { Component } from "react";
import { Image, Dimensions, View, Text, TouchableOpacity } from "react-native";
import CountDown from "react-native-countdown-component";
import Swiper from "react-native-swiper/src";
import { Ionicons } from "@expo/vector-icons";
const { width } = Dimensions.get("window");

import Steps from "../const/tinola";

export default class Dummy extends Component {
  state = {
    currentIndex: 0,
    isAutoPlay: false,
    steps: [],
  };

  componentDidMount() {
    if (this.props.route.params.recipe) {
      this.setState({ steps: this.props.route.params.recipe });
    }
  }

  onIndexChanged(index) {
    this.setState({ currentIndex: index, isAutoPlay: false });
  }

  nextStep() {
    this.setState({ isAutoPlay: true });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Image style={styles.image} source={this.props.route.params.image} />
        <TouchableOpacity
          style={styles.backButton}
          title="Go to Recipes"
          onPress={() => this.props.navigation.goBack()}
        >
          <Ionicons name="chevron-back-outline" size={35} color="#000000" />
        </TouchableOpacity>

        <Swiper
          style={styles.wrapper}
          buttonStyle={{ color: "#000" }}
          renderPagination={renderPagination}
          loop={false}
          showsButtons={true}
          onIndexChanged={(i) => this.onIndexChanged(i)}
          autoplay={this.state.isAutoPlay}
          autoplayTimeout={1}
        >
          {this.state.steps.map((step, stepIndex) => {
            return (
              <View style={styles.slide}>
                <Text style={styles.text}>{step.content}</Text>
                {step.counter && stepIndex == this.state.currentIndex ? (
                  <CountDown
                    style={styles.timer}
                    until={step.counter.until}
                    size={25}
                    digitStyle={{
                      marginTop: 20,
                      width: 40,
                      height: 40,
                      borderRadius: 25,
                      backgroundColor: "#fff",
                    }}
                    digitTxtStyle={{
                      color: "#f69250",
                      fontSize: 20,
                      fontFamily: "Raleway",
                    }}
                    timeToShow={["M", "S"]}
                    timeLabels={{ m: "Min", s: "Sec" }}
                    timeLabelStyle={{ color: "#000", fontSize: 15 }}
                    onFinish={() => this.nextStep()}
                  />
                ) : null}
              </View>
            );
          })}
        </Swiper>
      </View>
    );
  }
}

const styles = {
  slide: {
    flex: 1,
    paddingTop: 30,
    alignItems: "center",
    height: "100%",
    backgroundColor: "#ffcf5c",
  },
  text: {
    width: "90%",
    textAlign: "center",
    fontFamily: "RalewayMedium",
    color: "#000",
    fontSize: 18,
  },
  timer: {
    position: "absolute",
    bottom: 10,
  },
  image: {
    marginTop: -50,
    width: "100%",
    height: "100%",
    flex: 1,
  },
  backButton: {
    position: "absolute",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 5,

    margin: 10,
    height: 40,
    width: 40,
    borderRadius: 25,
    justifyContent: "center",
    backgroundColor: "#fec633",
  },

  paginationStyle: {
    fontFamily: "RalewayExtraBold",
    position: "absolute",
    bottom: 10,
    right: 10,
  },
  paginationText: {
    fontFamily: "RalewayExtraBold",
    color: "black",
    fontSize: 30,
  },
};

const renderPagination = (index, total, context) => {
  return (
    <View style={styles.paginationStyle}>
      <Text style={{ color: "#1a1b26" }}>
        <Text style={styles.paginationText}>{index + 1}</Text>/{total}
      </Text>
    </View>
  );
};
