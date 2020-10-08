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
  const [refreshing, setRefreshing] = useState(false);
  const getListingsApi = useApi(listingsApi.getListings);

  const getListings = async () => {
    const response = await getListingsApi.request();
    if (!response.ok) getListingsApi.alertWindow();
  };

  useEffect(() => {
    getListings();
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
              imageUrl={item.images.length ? item.images[0].url : null}
              thumbnailUrl={
                item.images.length ? item.images[0].thumbnailUrl : null
              }
              onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
            />
          )}
          refreshing={refreshing}
          onRefresh={async () => {
            await getListingsApi.request();
            setRefreshing(false);
          }}
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
