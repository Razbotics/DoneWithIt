import React from "react";
import { Image, StyleSheet, View } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

function Card({ title, subTitle, image }) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
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
  detailsContainer: {
    padding: 20,
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
