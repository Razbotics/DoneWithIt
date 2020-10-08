import React from "react";
import { View, StyleSheet } from "react-native";
import * as Yup from "yup";
import {
  ErrorMessage,
  AppForm,
  AppFormField,
  SubmitButton,
} from "../components/forms";

const validationSchema = Yup.object().shape({
  message: Yup.string().required().label("Message"),
});

function SendMessage({ handleSubmit, sendFailed }) {
  return (
    <View style={styles.container}>
      <AppForm
        initialValues={{ message: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage error="Message send failed" visible={sendFailed} />
        <AppFormField
          autoCorrect={true}
          autoCompleteType="off"
          name="message"
          icon="android-messages"
          placeholder="Write a message"
          multiline
          numberOfLines={2}
        />
        <SubmitButton title="Send Message" />
      </AppForm>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 20,
    height: 300,
    alignItems: "center",
  },
});

export default SendMessage;
