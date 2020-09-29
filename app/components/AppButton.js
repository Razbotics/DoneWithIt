import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import colors from "../config/colors";

function AppButton({ title, color, onPress }) {
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, { backgroundColor: color }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    borderRadius: 25,
    marginVertical: 8,
    elevation: 20,
  },
  text: {
    color: colors.white,
    fontSize: 15,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default AppButton;
