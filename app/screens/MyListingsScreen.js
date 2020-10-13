import React, { useEffect, useState } from "react";
import { StyleSheet, View, FlatList, Alert } from "react-native";
import Card from "../components/Card";
import colors from "../config/colors";
import routes from "../navigation/routes";
import Screen from "./Screen";
import listingsApi from "../api/listings";
import ActivityIndicator from "../components/ActivityIndicator";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import useApi from "../hooks/useApi";
import useAuth from "../auth/useAuth";
import AppText from "../components/AppText";

function ListingsScreen({ navigation }) {
  const { user } = useAuth();
  const [refreshing, setRefreshing] = useState(false);
  const [update, setUpdate] = useState(0);
  const [listings, setListings] = useState([]);
  const getListingsApi = useApi(listingsApi.getListings);
  const deleteListingApi = useApi(listingsApi.deleteListing);

  const getListings = async () => {
    const response = await getListingsApi.request();
    if (!response.ok) return;
    const newListings = response.data.filter(
      (listing) => user._id === listing.userId
    );
    setListings(newListings);
  };

  const deleteListing = async (listingId) => {
    const response = await deleteListingApi.request(listingId);
    if (!response.ok) return;
    setUpdate(update + 1);
  };

  const handleOnDelete = (listingId) => {
    Alert.alert("Delete", "Are you sure, you want to delete this listing?", [
      {
        text: "Yes",
        onPress: () => deleteListing(listingId),
      },
      {
        text: "Cancel",
        onPress: () => {
          return null;
        },
      },
    ]);
  };

  useEffect(() => {
    getListings();
  }, [getListingsApi.retries, update]);

  return (
    <>
      <ActivityIndicator visible={getListingsApi.loading} />
      <Screen>
        {!listings.length ? (
          <View style={styles.emptyInbox}>
            <MaterialCommunityIcons
              name="inbox"
              size={80}
              color={colors.medium}
            />
            <AppText style={{ marginTop: 10, fontSize: 15 }}>
              No Listings found
            </AppText>
          </View>
        ) : (
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
                  showDelete={true}
                  onDeletePress={() => handleOnDelete(item._id)}
                />
              )}
              refreshing={refreshing}
              onRefresh={async () => {
                setUpdate(update + 1);
                setRefreshing(false);
              }}
            />
          </View>
        )}
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
  emptyInbox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ListingsScreen;
