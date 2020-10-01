import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import Card from "../components/Card";
import Screen from "./Screen";

const listings = [
  {
    id: 1,
    title: "Red Jacket",
    price: "100$",
    image: require("../assets/red-jacket.jpg"),
  },
  {
    id: 2,
    title: "Denim Jacket",
    price: "200$",
    image: require("../assets/denim-jacket.jpg"),
  },
  {
    id: 3,
    title: "Couch in great condition",
    price: "1000$",
    image: require("../assets/couch.jpg"),
  },
];

function ListingsScreen() {
  return (
    <Screen>
      <View style={styles.container}>
        <FlatList
          data={listings}
          keyExtractor={(listing) => listing.id.toString()}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              subTitle={item.price}
              image={item.image}
              onPress={() => console.log(item.title)}
            />
          )}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
});

export default ListingsScreen;
