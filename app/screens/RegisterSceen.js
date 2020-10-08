import React, { useState } from "react";
import * as Yup from "yup";
import { StyleSheet } from "react-native";

import Screen from "./Screen";
import {
  AppForm,
  AppFormField,
  ErrorMessage,
  SubmitButton,
} from "../components/forms";
import authApi from "../api/auth";
import useAuth from "../auth/useAuth";
import useApi from "../hooks/useApi";
import ActivityIndicator from "../components/ActivityIndicator";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(1).label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen() {
  const auth = useAuth();
  const registerApi = useApi(authApi.register);
  const loginApi = useApi(authApi.loginApi);

  const [errorText, setErrorText] = useState();
  const [registerFailed, setRegisterFailed] = useState(false);

  const handleSubmit = async ({ name, email, password }) => {
    let result;

    result = await registerApi.request({ name, email, password });

    if (!result.ok) {
      if (result.data) {
        setErrorText(result.data.error);
        setRegisterFailed(true);
      } else {
        registerApi.alertWindow();
      }
      return;
    }

    result = await loginApi.request(email, password);
    setErrorText(result.data.error);
    if (!result.ok) return setRegisterFailed(true);

    setRegisterFailed(false);
    auth.login(result.data);
  };

  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ActivityIndicator visible={registerApi.loading || loginApi.loading} />
        <ErrorMessage error={errorText} visible={registerFailed} />
        <AppFormField
          autoCorrect={false}
          autoCompleteType="off"
          name="name"
          icon="account"
          placeholder="Name"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          autoCompleteType="off"
          keyboardType="email-address"
          name="email"
          icon="email"
          placeholder="Email"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          name="password"
          icon="lock"
          placeholder="Password"
          textContentType="password"
          secureTextEntry
        />
        <SubmitButton title="Register" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    padding: 10,
  },
});

export default RegisterScreen;
