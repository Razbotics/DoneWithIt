import React, { useEffect, useState } from "react";
import {
  Dimensions,
  KeyboardAvoidingView,
  StyleSheet,
  View,
} from "react-native";
import { Image } from "react-native-expo-image-cache";
import colors from "../config/colors";
import AppText from "../components/AppText";
import { ListItem } from "../components/lists";
import Screen from "./Screen";
import usersApi from "../api/users";
import messageApi from "../api/message";
import useApi from "../hooks/useApi";
import AppMapView from "../components/AppMapView";
import ActivityIndicator from "../components/ActivityIndicator";
import SendMessage from "../components/SendMessage";
import useAuth from "../auth/useAuth";
import {
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import routes from "../navigation/routes";

function ListingDetailsScreen({ route, navigation }) {
  const listing = route.params;
  const { user } = useAuth();
  const getUserApi = useApi(usersApi.getUser);
  const sendMessageApi = useApi(messageApi.sendMessage);

  const [userInfo, setUserInfo] = useState();
  const [sendFailed, setSendFailed] = useState();
  const [iconPressed, setIconPressed] = useState(false);
  const [messageIconVisible, setMessageIconVisible] = useState(true);

  const getUserInfo = async () => {
    const response = await getUserApi.request(listing.userId);
    if (!response.ok) return getUserApi.alertWindow();
    setUserInfo(response.data);
    user._id === listing.userId
      ? setMessageIconVisible(false)
      : setMessageIconVisible(true);
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  const handleSubmit = async ({ message }) => {
    const response = await sendMessageApi.request({
      message,
      listingId: listing._id,
    });

    if (!response.ok) {
      if (response.status && response.status < 402) setSendFailed(true);
      return;
    }
    setIconPressed(false);
    setSendFailed(false);
  };

  return (
    <>
      <ActivityIndicator
        visible={getUserApi.loading || sendMessageApi.loading}
      />
      <Screen>
        <KeyboardAvoidingView style={styles.container} behavior="position">
          <ScrollView showsHorizontalScrollIndicator={false} horizontal>
            <View style={styles.imagesContainer}>
              {listing.images.map((image, index) => (
                <View key={index} style={styles.imageContainer}>
                  <TouchableWithoutFeedback
                    onPress={() =>
                      navigation.navigate(routes.VIEW_IMAGES, image)
                    }
                  >
                    <Image
                      style={styles.image}
                      tint="light"
                      preview={{ uri: image.thumbnailUrl }}
                      uri={image.url}
                    />
                  </TouchableWithoutFeedback>
                </View>
              ))}
            </View>
          </ScrollView>

          <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{listing.title}</AppText>
            <AppText style={styles.price}>{listing.price}$</AppText>
          </View>
          <View style={styles.userContainer}>
            <ListItem
              image={require("../assets/my-image.png")}
              title={userInfo && userInfo.name}
              subTitle={userInfo && `${userInfo.listings} Listings`}
              showChevrons={messageIconVisible}
              iconName="android-messages"
              onIconPress={() => setIconPressed(true)}
            />
          </View>
          {iconPressed ? (
            <SendMessage handleSubmit={handleSubmit} sendFailed={sendFailed} />
          ) : (
            <AppMapView
              customLocation={listing.location}
              style={{ height: 230 }}
            />
          )}
        </KeyboardAvoidingView>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  imagesContainer: {
    backgroundColor: colors.white,
    flexDirection: "row",
  },
  imageContainer: {
    width: Dimensions.get("window").width,
    height: 300,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  detailsContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 5,
  },
  userContainer: {
    width: "100%",
  },
});

export default ListingDetailsScreen;
