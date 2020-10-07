import React from "react";
import { useNetInfo } from "@react-native-community/netinfo";
import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import AppText from "../components/AppText";
import colors from "../config/colors";

function NetInfoBar() {
  const { isInternetReachable } = useNetInfo();
  return !isInternetReachable ? (
    <View style={styles.netInfo}>
      <AppText style={{ color: "white", fontSize: 15 }}>
        No Internet Connection
      </AppText>
    </View>
  ) : null;
}

const styles = StyleSheet.create({
  netInfo: {
    position: "absolute",
    marginTop: Constants.statusBarHeight + 5,
    padding: 5,
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
    opacity: 0.85,
  },
});

export default NetInfoBar;
