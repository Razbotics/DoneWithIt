import React from "react";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import AccountScreen from "./app/screens/AccountScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterSceen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import PickerItem from "./app/components/PickerItem";
import Screen from "./app/screens/Screen";

export default function App() {
  return (
    <ListingEditScreen />
    // <AccountScreen
    //   name="Shubhankar Das"
    //   email="razbotics@gmail.com"
    //   image={require("./app/assets/my-image.png")}
    // />
  );
}
