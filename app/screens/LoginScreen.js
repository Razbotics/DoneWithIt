import React, { useState } from "react";
import * as Yup from "yup";
import { Image, StyleSheet } from "react-native";

import Screen from "./Screen";
import {
  ErrorMessage,
  AppForm,
  AppFormField,
  SubmitButton,
} from "../components/forms";
import authApi from "../api/auth";
import useAuth from "../auth/useAuth";
import useApi from "../hooks/useApi";
import ActivityIndicator from "../components/ActivityIndicator";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen() {
  const auth = useAuth();
  const loginApi = useApi(authApi.login);
  const [loginFailed, setLoginFailed] = useState(false);

  const handleSubmit = async ({ email, password }) => {
    const response = await loginApi.request(email, password);

    if (!response.ok) {
      if (response.data) setLoginFailed(true);
      else {
        loginApi.alertWindow();
      }
      return;
    }

    setLoginFailed(false);
    auth.login(response.data);
  };

  return (
    <>
      <ActivityIndicator visible={loginApi.loading} />
      <Screen style={styles.container}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <AppForm
          initialValues={{ email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <ErrorMessage
            error="Invalid email or password"
            visible={loginFailed}
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
          <SubmitButton title="Login" />
        </AppForm>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginTop: 40,
    marginBottom: 40,
  },
});

export default LoginScreen;
