import React from "react";
import { StatusBar, View, StyleSheet } from "react-native";

import Constants from "expo-constants";
import colors from "../config/colors";
import NetInfoBar from "../components/NetInfoBar";

function Screen({ children, style }) {
  return (
    <View tyle={styles.container}>
      <View style={[styles.childContainer, style]}>{children}</View>
      <NetInfoBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  childContainer: {
    width: "100%",
    height: "100%",
    paddingTop: Constants.statusBarHeight,
  },
});

export default Screen;
