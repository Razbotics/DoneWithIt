import React, { useEffect, useState } from "react";
import { StyleSheet, View, FlatList, Alert } from "react-native";
import Card from "../components/Card";
import colors from "../config/colors";
import routes from "../navigation/routes";
import Screen from "./Screen";
import listingsApi from "../api/listings";
import ActivityIndicator from "../components/ActivityIndicator";

function ListingsScreen({ navigation }) {
  const [listings, setListings] = useState([]);
  const [error, setError] = useState(false);
  const [retry, setRetry] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadListings();
  }, [retry]);

  const loadListings = async () => {
    setLoading(true);
    const response = await listingsApi.getListings();
    setLoading(false);

    if (!response.ok) return setError(true);

    setError(false);
    setListings(response.data);
  };

  const alertWindow = () => {
    if (error) {
      setError(false);
      Alert.alert(
        "Server Error",
        "Couldn't get listings from server!",
        [{ text: "Retry", onPress: () => setRetry(retry + 1) }],
        { cancelable: false }
      );
    }
  };

  return (
    <Screen>
      <View style={styles.container}>
        {alertWindow()}
        <FlatList
          data={listings}
          keyExtractor={(listing) => listing.id.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              subTitle={item.price}
              imageUrl={item.images[0].url}
              onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
            />
          )}
        />
      </View>
      <ActivityIndicator visible={loading} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    backgroundColor: colors.light,
  },
  loading: {
    flex: 1,
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ListingsScreen;
