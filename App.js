import React from "react";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import AccountScreen from "./app/screens/AccountScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import AppTextInput from "./app/components/AppTextInput";
import Screen from "./app/screens/Screen";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterSceen";
import ListingEditScreen from "./app/screens/ListingEditScreen";

export default function App() {
  return (
    <ListingEditScreen />
    // <AccountScreen
    //   name="Shubhankar Das"
    //   email="razbotics@gmail.com"
    //   image={require("./app/assets/my-image.png")}
    // />
    // <Screen>
    //   <AppPicker
    //     selectedItem={category}
    //     onSelectItem={(item) => setCategory(item)}
    //     items={categories}
    //     placeholder="Category"
    //     icon="apps"
    //   />
    //   <AppTextInput placeholder="Email" icon="email" />
    // </Screen>
  );
}
