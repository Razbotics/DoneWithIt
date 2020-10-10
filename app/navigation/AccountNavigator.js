import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MyAccountScreen from "../screens/AccountScreen";
import MessagesScreen from "../screens/MessagesScreen";
import MyListingsScreen from "../screens/MyListingsScreen";
import routes from "./routes";

const Stack = createStackNavigator();
const AccountNavigator = () => {
  return (
    <Stack.Navigator mode="card" screenOptions={{ headerShown: false }}>
      <Stack.Screen name={routes.ACCOUNT} component={MyAccountScreen} />
      <Stack.Screen name={routes.MYLISTINGS} component={MyListingsScreen} />
      <Stack.Screen name={routes.MESSAGES} component={MessagesScreen} />
    </Stack.Navigator>
  );
};

export default AccountNavigator;
