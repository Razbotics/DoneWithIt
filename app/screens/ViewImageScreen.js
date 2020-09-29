import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="keyboard-backspace" size={50} />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons name="delete" size={50} />
      </View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/chair.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.secondary,
    position: "absolute",
    top: 40,
    left: 30,
    justifyContent: "center",
    alignItems: "center",
    elevation: 20,
    borderRadius: 20,
  },
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
    position: "absolute",
    top: 40,
    right: 30,
    elevation: 20,
    borderRadius: 20,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ViewImageScreen;
