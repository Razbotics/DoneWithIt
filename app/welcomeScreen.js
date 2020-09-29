import React from "react";
import { Image, View, StatusBar } from "react-native";

const WelcomeScreen = () => {
  return (
    <View
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: "#fff",
        flex: 1,
      }}
    >
      <Image
        style={{
          height: "80%",
          width: "100%",
        }}
        source={require("../assets/background.jpg")}
      />
      <Image
        style={{
          height: 100,
          width: 100,
          top: "10%",
          alignSelf: "center",
          position: "absolute",
        }}
        source={require("../assets/logo-red.png")}
      />

      <View
        style={{
          backgroundColor: "tomato",
          height: "10%",
          width: "100%",
        }}
      />
      <View
        style={{
          backgroundColor: "cyan",
          height: "10%",
          width: "100%",
        }}
      />
    </View>
  );
};

export default WelcomeScreen;
