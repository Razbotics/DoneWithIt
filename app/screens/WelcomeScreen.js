import React from "react";
import { Image, View, StyleSheet, ImageBackground, Text } from "react-native";
import AppButton from "../components/AppButton";
import Screen from "./Screen";
import colors from "../config/colors";

const WelcomeScreen = () => {
  return (
    <Screen>
      <ImageBackground
        blurRadius={1}
        style={styles.background}
        source={require("../assets/background.jpg")}
      >
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../assets/logo-red.png")}
          />

          <Text style={styles.tagline}>Sell What You Don't Need</Text>
        </View>
        <View style={styles.buttonContainer}>
          <AppButton
            title="Login"
            color={colors.primary}
            onPress={() => console.log("Login")}
          />
          <AppButton
            title="Sign Up"
            color={colors.secondary}
            onPress={() => console.log("Register")}
          />
        </View>
      </ImageBackground>
    </Screen>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonContainer: {
    width: "100%",
    padding: 10,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    height: 100,
    width: 100,
  },
  logoContainer: {
    top: "10%",
    position: "absolute",
    alignItems: "center",
  },
  tagline: {
    fontSize: 20,
    fontWeight: "900",
    paddingVertical: 5,
  },
});

export default WelcomeScreen;
