import React, { useEffect, useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import Card from "../components/Card";
import colors from "../config/colors";
import routes from "../navigation/routes";
import Screen from "./Screen";
import listingsApi from "../api/listings";
import ActivityIndicator from "../components/ActivityIndicator";
import useApi from "../hooks/useApi";

function ListingsScreen({ navigation }) {
  const [refreshing, setRefreshing] = useState(false);
  const [listings, setListings] = useState([]);
  const getListingsApi = useApi(listingsApi.getListings);

  const getListings = async () => {
    const response = await getListingsApi.request();
    if (!response.ok) return;
    setListings(response.data);
  };

  useEffect(() => {
    getListings();
  }, [getListingsApi.retries]);

  return (
    <>
      <ActivityIndicator visible={getListingsApi.loading} />
      <Screen>
        <View style={styles.container}>
          <FlatList
            data={listings}
            keyExtractor={(listing) => listing._id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <Card
                title={item.title}
                subTitle={item.price}
                imageUrl={item.images.length ? item.images[0].url : null}
                thumbnailUrl={
                  item.images.length ? item.images[0].thumbnailUrl : null
                }
                onPress={() =>
                  navigation.navigate(routes.LISTING_DETAILS, item)
                }
              />
            )}
            refreshing={refreshing}
            onRefresh={async () => {
              await getListingsApi.request();
              setRefreshing(false);
            }}
          />
        </View>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
