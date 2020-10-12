import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListingsScreen from "../screens/ListingsScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import ViewImageScreen from "../screens/ViewImageScreen";
import routes from "./routes";

const Stack = createStackNavigator();
const FeedNavigator = () => {
  return (
    <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
      <Stack.Screen name={routes.LISTINGS} component={ListingsScreen} />
      <Stack.Screen
        name={routes.LISTING_DETAILS}
        component={ListingDetailsScreen}
      />
      <Stack.Screen name={routes.VIEW_IMAGES} component={ViewImageScreen} />
    </Stack.Navigator>
  );
};

export default FeedNavigator;
