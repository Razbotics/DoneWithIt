import React from "react";
import { Image, StyleSheet, TouchableHighlight, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Swipeable from "react-native-gesture-handler/Swipeable";
import AppText from "../AppText";
import defaultStyles from "../../config/styles";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

function ListItem({
  title,
  subTitle,
  image,
  IconComponent,
  onPress,
  renderRightActions,
  showChevrons,
  iconName = "chevron-right",
  onIconPress,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight
        underlayColor={defaultStyles.colors.light}
        onPress={onPress}
      >
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <AppText numberOfLines={1} style={styles.title}>
              {title}
            </AppText>
            {subTitle && (
              <AppText numberOfLines={2} style={styles.subTitle}>
                {subTitle}
              </AppText>
            )}
          </View>
          {showChevrons && (
            <View style={styles.icon}>
              <TouchableWithoutFeedback onPress={onIconPress}>
                <MaterialCommunityIcons
                  name={iconName}
                  size={35}
                  color={defaultStyles.colors.meduim}
                />
              </TouchableWithoutFeedback>
            </View>
          )}
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    alignSelf: "baseline",
    backgroundColor: defaultStyles.colors.white,
    flexDirection: "row",
    padding: 15,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
  },
  subTitle: {
    fontSize: 14,
    color: defaultStyles.colors.medium,
  },
  icon: {
    paddingRight: 10,
  },
});

export default ListItem;
