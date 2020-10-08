import React from "react";
import { StyleSheet, View } from "react-native";
import { Image } from "react-native-expo-image-cache";
import colors from "../config/colors";
import AppText from "../components/AppText";
import { ListItem } from "../components/lists";
import Screen from "./Screen";
import AppMapView from "../components/AppMapView";

function ListingDetailsScreen({ route }) {
  const listing = route.params;
  return (
    <Screen>
      <View style={styles.container}>
        <Image
          style={styles.image}
          tint="light"
          preview={{ uri: listing.images[0].thumbnailUrl }}
          uri={listing.images[0].url}
        />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{listing.title}</AppText>
          <AppText style={styles.price}>{listing.price}$</AppText>
        </View>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/my-image.png")}
            title="Shubhankar"
            subTitle="5 Listings"
          />
        </View>
        <AppMapView customLocation={listing.location} style={{ height: 230 }} />
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
    paddingVertical: 10,
    paddingHorizontal: 20,
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
  userContainer: {},
});

export default ListingDetailsScreen;
