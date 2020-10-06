import React from "react";
import LottieView from "lottie-react-native";
import { StyleSheet } from "react-native";

function Doneindicator({ onDone }) {
  return (
    <LottieView
      style={styles.animation}
      autoPlay
      loop={false}
      onAnimationFinish={onDone}
      source={require("../assets/animations/done.json")}
    />
  );
}

const styles = StyleSheet.create({
  animation: {},
});
export default Doneindicator;
