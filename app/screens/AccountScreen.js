import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import colors from "../config/colors";
import Screen from "./Screen";
import Icon from "../components/Icon";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  },
];

function MyAccountScreen({ image, name, email }) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem title={name} subTitle={email} image={image} />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              onPress={() => {}}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <View style={styles.container}>
        <ListItem
          title="Logout"
          onPress={() => {}}
          IconComponent={<Icon name="logout" backgroundColor={colors.yellow} />}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  screen: {
    backgroundColor: colors.light,
  },
});

export default MyAccountScreen;
