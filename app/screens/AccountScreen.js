import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import colors from "../config/colors";
import Screen from "./Screen";
import Icon from "../components/Icon";
import { ListItem, ListItemSeparator } from "../components/lists";
import routes from "../navigation/routes";

const testAccount = {
  image: require("../assets/my-image.png"),
};

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
    targetScreen: routes.MYLISTINGS,
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
    targetScreen: routes.MESSAGES,
  },
];

function AccountScreen({ navigation }) {
  const { user, logOut } = useAuth();

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title={user.name}
          subTitle={user.email}
          image={testAccount.image}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              onPress={() => navigation.navigate(item.targetScreen)}
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
          onPress={() => logOut()}
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

export default AccountScreen;
