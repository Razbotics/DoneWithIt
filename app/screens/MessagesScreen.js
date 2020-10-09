import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import {
  ListItem,
  ListItemDeleteAction,
  ListItemSeparator,
} from "../components/lists";

import useAuth from "../auth/useAuth";
import useApi from "../hooks/useApi";
import messageApi from "../api/message";
import Screen from "./Screen";
import ActivityIndicator from "../components/ActivityIndicator";

function MessagesScreen() {
  const { user } = useAuth();
  const getMessagesApi = useApi(messageApi.getMessages);
  const [messages, setMessages] = useState([]);

  const getMessages = async () => {
    const response = await getMessagesApi.request(user);

    if (!response.ok) getMessagesApi.alertWindow();
    setMessages(response.data);
  };

  useEffect(() => {
    getMessages();
  }, [getMessagesApi.retries]);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <>
      <ActivityIndicator visible={getMessagesApi.loading} />
      <Screen>
        <FlatList
          data={messages}
          keyExtractor={(message) => message.id.toString()}
          renderItem={({ item }) => (
            <ListItem
              title={item.fromUser.name}
              subTitle={item.content}
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
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
