import React from "react";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function Icon({
  name,
  size = 40,
  backgroundColor = "#fff",
  iconColor = "#000",
}) {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor,
        width: size,
        height: size,
        borderRadius: parseInt(size / 2),
      }}
    >
      <MaterialCommunityIcons
        name={name}
        size={parseInt(size * 0.6)}
        color={iconColor}
      />
    </View>
  );
}

export default Icon;
