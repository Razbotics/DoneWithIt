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

import CategoryPickerItem from "../components/CategoryPickerItem";
import FormImagePicker from "../components/forms/FormImagePicker";
import FormLocation from "../components/forms/FormLocation";

const categories = [
  {
    value: 1,
    label: "Furniture",
    iconName: "floor-lamp",
    backgroundColor: "#fc5c65",
  },
  { value: 2, label: "Cars", iconName: "car", backgroundColor: "#fd9644" },
  {
    value: 3,
    label: "Cameras",
    iconName: "camera",
    backgroundColor: "#fed330",
  },
  { value: 4, label: "Games", iconName: "cards", backgroundColor: "#26de81" },
  {
    value: 5,
    label: "Clothing",
    iconName: "shoe-heel",
    backgroundColor: "#2bcbba",
  },
  {
    value: 6,
    label: "Sports",
    iconName: "basketball",
    backgroundColor: "#45aaf2",
  },
  {
    value: 7,
    label: "Movies & Music",
    iconName: "headphones",
    backgroundColor: "#4b7bec",
  },
  {
    value: 8,
    label: "Books",
    iconName: "book-open-variant",
    backgroundColor: "#6e5fb8",
  },
  {
    value: 9,
    label: "Others",
    iconName: "apps",
    backgroundColor: "#b3b2b8",
  },
];

const validationSchema = Yup.object().shape({
  images: Yup.array().min(1, "Please selelct atleast 1 image"),
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  category: Yup.object().nullable().required().label("Category"),
  description: Yup.string().label("Description"),
  location: Yup.object().nullable(),
});

function ListingEditScreen() {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          images: [],
          title: "",
          price: "",
          category: null,
          description: "",
          location: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
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
          PickerItemComponent={CategoryPickerItem}
          numberOfColumns={3}
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
        <FormLocation name="location" />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 10,
  },
});

export default ListingEditScreen;
