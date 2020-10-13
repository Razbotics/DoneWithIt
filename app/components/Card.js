import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Image } from "react-native-expo-image-cache";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import AppText from "./AppText";

function Card({
  title,
  subTitle,
  imageUrl,
  onPress,
  thumbnailUrl,
  showDelete,
  onDeletePress,
}) {
  return (
    <View style={styles.card}>
      <TouchableWithoutFeedback onPress={onPress}>
        <Image
          style={styles.image}
          tint="light"
          preview={{ uri: thumbnailUrl }}
          uri={imageUrl}
        />
      </TouchableWithoutFeedback>
      <View style={styles.infoBar}>
        <View style={styles.detailsContainer}>
          <AppText numberOfLines={2} style={styles.title}>
            {title}
          </AppText>
          <AppText style={styles.subTitle}>{subTitle}$</AppText>
        </View>
        {showDelete && (
          <TouchableOpacity onPress={onDeletePress}>
            <MaterialCommunityIcons
              name="trash-can"
              size={35}
              color={colors.danger}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    backgroundColor: colors.white,
    marginTop: 15,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  infoBar: {
    flexDirection: "row",
    alignItems: "center",
  },
  detailsContainer: {
    padding: 20,
    flexBasis: "85%",
  },
  title: {
    marginBottom: 7,
    fontWeight: "200",
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
});

export default Card;
