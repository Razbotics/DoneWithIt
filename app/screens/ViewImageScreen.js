import React from "react";
import { Image, StyleSheet, View } from "react-native";
import Screen from "./Screen";

function ViewImageScreen({ route }) {
  const image = route.params;
  return (
    <Screen>
      <View style={styles.container}>
        <Image
          resizeMode={"contain"}
          style={styles.imageBox}
          source={{ uri: image.url }}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
    justifyContent: "center",
  },

  imageBox: {
    width: "100%",
    height: "100%",
  },
});

export default ViewImageScreen;
