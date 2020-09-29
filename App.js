import React from "react";
import { StyleSheet, Platform, StatusBar } from "react-native";
import WelcomeScreen from "./app/welcomeScreen";

export default function App() {
  return <WelcomeScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // justifyContent: "center",
    alignItems: "center",
    padding: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
