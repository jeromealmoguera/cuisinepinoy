import React, { Component } from "react";
import { Image, Dimensions, View, Text } from "react-native";
import CountDown from "react-native-countdown-component";
import Swiper from "react-native-swiper/src";
const { width } = Dimensions.get("window");

import Steps from "../const/tinola";

export default class Dummy extends Component {
  state = {
    currentIndex: 0,
    isAutoPlay: false,
    steps: Steps,
  };

  componentDidMount() {}

  onIndexChanged(index) {
    this.setState({ currentIndex: index, isAutoPlay: false });
  }

  nextStep() {
    this.setState({ isAutoPlay: true });
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text style={{ fontSize: 30, color: "black" }}> Directions</Text>
        <Swiper
          style={styles.wrapper}
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
                <Text>{step.content}</Text>
                {step.counter && stepIndex == this.state.currentIndex ? (
                  <CountDown
                    until={step.counter.until}
                    size={step.counter.size}
                    digitStyle={step.counter.digitStyle}
                    digitTxtStyle={step.counter.digitTxtStyle}
                    timeToShow={step.counter.timeToShow}
                    timeLabels={step.counter.timeLabels}
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
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB",
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
  image: {
    width,
    flex: 1,
  },
  paginationStyle: {
    position: "absolute",
    bottom: 10,
    right: 10,
  },
  paginationText: {
    color: "white",
    fontSize: 20,
  },
};

const renderPagination = (index, total, context) => {
  return (
    <View style={styles.paginationStyle}>
      <Text style={{ color: "grey" }}>
        <Text style={styles.paginationText}>{index + 1}</Text>/{total}
      </Text>
    </View>
  );
};
