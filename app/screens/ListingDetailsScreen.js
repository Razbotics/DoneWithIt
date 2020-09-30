import React from "react";
import { Image, StyleSheet, View } from "react-native";
import colors from "../config/colors";
import AppText from "../components/AppText";
import ListItem from "../components/ListItem";
import Screen from "./Screen";

function ListingDetailsScreen() {
  return (
    <Screen>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("../assets/denim-jacket.jpg")}
        />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>Denim Jacket</AppText>
          <AppText style={styles.price}>$100</AppText>
        </View>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/my-image.png")}
            title="Shubhankar"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 5,
  },
  userContainer: {
    marginVertical: 0,
  },
});

export default ListingDetailsScreen;
