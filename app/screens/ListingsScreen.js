import React, { useEffect, useState } from "react";
import { StyleSheet, View, FlatList, Alert } from "react-native";
import Card from "../components/Card";
import colors from "../config/colors";
import routes from "../navigation/routes";
import Screen from "./Screen";
import listingsApi from "../api/listings";
import ActivityIndicator from "../components/ActivityIndicator";
import useApi from "../hooks/useApi";

function ListingsScreen({ navigation }) {
  const getListingsApi = useApi(listingsApi.getListings);

  useEffect(() => {
    getListingsApi.request();
  }, [getListingsApi.retries]);

  return (
    <Screen>
      <View style={styles.container}>
        <FlatList
          data={getListingsApi.data}
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
      <ActivityIndicator visible={getListingsApi.loading} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
