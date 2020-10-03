import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import AppText from "./AppText";
import Icon from "./Icon";

function PickerItem({ label, onPress, ...otherProps }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Icon size={80} {...otherProps} />
        <View style={styles.text}>
          <AppText numberOfLines={2} style={styles.text}>
            {label}
          </AppText>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: 100,
    margin: 10,
    alignItems: "center",
  },
  text: {
    fontSize: 14,
    paddingTop: 5,
    textAlign: "center",
    width: "100%",
  },
});

export default PickerItem;
