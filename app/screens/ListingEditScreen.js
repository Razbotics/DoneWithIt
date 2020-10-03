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
  {
    value: 1,
    label: "Furniture",
    name: "floor-lamp",
    backgroundColor: "#fc5c65",
  },
  { value: 2, label: "Cars", name: "car", backgroundColor: "#fd9644" },
  { value: 3, label: "Cameras", name: "camera", backgroundColor: "#fed330" },
  { value: 4, label: "Games", name: "cards", backgroundColor: "#26de81" },
  {
    value: 5,
    label: "Clothing",
    name: "shoe-heel",
    backgroundColor: "#2bcbba",
  },
  { value: 6, label: "Sports", name: "basketball", backgroundColor: "#45aaf2" },
  {
    value: 7,
    label: "Movies & Music",
    name: "headphones",
    backgroundColor: "#4b7bec",
  },
  {
    value: 8,
    label: "Books",
    name: "book-open-variant",
    backgroundColor: "#6e5fb8",
  },
  {
    value: 9,
    label: "Others",
    name: "apps",
    backgroundColor: "#b3b2b8",
  },
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
