import React from "react";
import { StatusBar, View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import colors from "../config/colors";

function Screen({ children }) {
  return (
    <View>
      <StatusBar
        backgroundColor={colors.primary}
        hidden={false}
        translucent={true}
      />
      <View style={styles.container}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    paddingTop: Constants.statusBarHeight,
  },
});

export default Screen;
