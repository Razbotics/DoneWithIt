import React from "react";
import * as Yup from "yup";
import { StyleSheet } from "react-native";

import Screen from "./Screen";
import {
  AppForm,
  AppFormField,
  SubmitButton,
  AppFormPicker,
} from "../components/forms";

const categories = [
  { value: 1, label: "Furniture" },
  { value: 2, label: "Clothings" },
  { value: 3, label: "Electronics" },
];

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  category: Yup.object().nullable().required().label("Category"),
  description: Yup.string().label("Description"),
});

function ListingEditScreen() {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          category: null,
          description: "",
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          name="title"
          icon="format-title"
          maxLength={100}
          autoCorrect={false}
          autoCompleteType="off"
          placeholder="Title"
        />
        <AppFormField
          name="price"
          maxLength={8}
          fieldWidth="35%"
          icon="currency-usd"
          autoCompleteType="off"
          keyboardType="numeric"
          placeholder="Price"
        />
        <AppFormPicker
          name="category"
          categories={categories}
          fieldWidth="50%"
          placeholder="Category"
        />
        <AppFormField
          name="description"
          icon="card-text-outline"
          autoCorrect={true}
          multiline
          numberOfLines={3}
          maxLength={255}
          placeholder="Description ..."
        />
        <SubmitButton title="Post" />
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

export default ListingEditScreen;
