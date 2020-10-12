import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import {
  ListItem,
  ListItemDeleteAction,
  ListItemSeparator,
} from "../components/lists";

import useApi from "../hooks/useApi";
import messageApi from "../api/message";
import Screen from "./Screen";
import ActivityIndicator from "../components/ActivityIndicator";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import AppText from "../components/AppText";

function MessagesScreen() {
  const getMessagesApi = useApi(messageApi.getMessages);
  const deleteMessagesApi = useApi(messageApi.deleteMessage);
  const [messages, setMessages] = useState([]);

  const getMessages = async () => {
    const response = await getMessagesApi.request();
    if (!response.ok) return;
    setMessages(response.data);
  };

  useEffect(() => {
    getMessages();
  }, [getMessagesApi.retries]);

  const handleDelete = async (message) => {
    const response = await deleteMessagesApi.request(message._id);
    if (!response.ok) return;
    getMessages();
  };

  return (
    <>
      <ActivityIndicator visible={getMessagesApi.loading} />
      <Screen>
        {!messages.length ? (
          <View style={styles.emptyInbox}>
            <MaterialCommunityIcons
              name="inbox"
              size={80}
              color={colors.medium}
            />
            <AppText style={{ marginTop: 10, fontSize: 15 }}>
              No messages found
            </AppText>
          </View>
        ) : (
          <FlatList
            data={messages}
            keyExtractor={(message) => message._id}
            renderItem={({ item }) => (
              <ListItem
                title={item.fromUser.name}
                subTitle={item.message}
                image={require("../assets/my-image.png")}
                showChevrons
                onPress={() => console.log(item.listingId)}
                renderRightActions={() => (
                  <ListItemDeleteAction onPress={() => handleDelete(item)} />
                )}
              />
            )}
            ItemSeparatorComponent={ListItemSeparator}
            refreshing={getMessagesApi.loading}
            onRefresh={getMessages}
          />
        )}
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  emptyInbox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MessagesScreen;
