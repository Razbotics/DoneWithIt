import React, { useEffect, useState } from "react";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import AccountScreen from "./app/screens/AccountScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterSceen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import PickerItem from "./app/components/CategoryPickerItem";
import Screen from "./app/screens/Screen";
import { ImageInput } from "./app/components/imagePicker";

export default function App() {
  const [imageUri, setImageUri] = useState();

  return (
    <Screen>
      <ImageInput
        imageUri={imageUri}
        onChangeImage={(uri) => setImageUri(uri)}
      />
    </Screen>
  );
}

// <AccountScreen
//   name="Shubhankar Das"
//   email="razbotics@gmail.com"
//   image={require("./app/assets/my-image.png")}
// />
