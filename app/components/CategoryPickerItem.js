import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import AppText from "./AppText";
import Icon from "./Icon";

function CategoryPickerItem({ item, onPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Icon
          size={80}
          backgroundColor={item.backgroundColor}
          name={item.iconName}
        />
      </TouchableOpacity>
      <AppText numberOfLines={2} style={styles.text}>
        {item.label}
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: "center",
    width: "33%",
  },
  text: {
    fontSize: 14,
    marginTop: 5,
    textAlign: "center",
  },
});

export default CategoryPickerItem;
