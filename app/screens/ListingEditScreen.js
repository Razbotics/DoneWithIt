import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { ScrollView, StyleSheet } from "react-native";
import Screen from "./Screen";
import listingsApi from "../api/listings";
import categoriesApi from "../api/categories";
import useApi from "../hooks/useApi";
import {
  AppForm,
  AppFormField,
  SubmitButton,
  AppFormPicker,
} from "../components/forms";

import CategoryPickerItem from "../components/CategoryPickerItem";
import FormImagePicker from "../components/forms/FormImagePicker";
import FormLocation from "../components/forms/FormLocation";
import ProgressBar from "../components/ProgressBar";
import ActivityIndicator from "../components/ActivityIndicator";
import useLocation from "../hooks/useLocation";

const validationSchema = Yup.object().shape({
  images: Yup.array().min(1, "Please selelct atleast 1 image"),
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  category: Yup.object().nullable().required().label("Category"),
  description: Yup.string().label("Description"),
  location: Yup.object().nullable(),
});

function ListingEditScreen() {
  const [percent, setPercent] = useState(0);
  const location = useLocation();
  const [categories, setCategories] = useState([]);
  const [uploadVisible, setUploadVisible] = useState(false);
  const postListingApi = useApi(listingsApi.postListing);
  const getCategoriesApi = useApi(categoriesApi.getCategories);

  useEffect(() => {
    getCategories();
  }, [getCategoriesApi.retries]);

  const getCategories = async () => {
    const response = await getCategoriesApi.request();
    if (!response.ok) return;
    setCategories(response.data);
  };

  const handleOnDone = () => {
    setUploadVisible(false);
  };

  const sendData = async (listing, { resetForm }) => {
    setPercent(0);
    setUploadVisible(true);

    const response = await postListingApi.request(listing, (progress) =>
      setPercent(progress)
    );

    if (!response.ok) {
      setUploadVisible(false);
      if (response.status && response.status < 402)
        alert("Listing post failed, try again later!");
      return;
    }

    resetForm();
  };

  return (
    <>
      <ActivityIndicator visible={getCategoriesApi.loading} />
      <Screen style={styles.container}>
        <AppForm
          initialValues={{
            images: [],
            title: "",
            price: "",
            category: null,
            description: "",
            location: location,
          }}
          onSubmit={sendData}
          validationSchema={validationSchema}
        >
          <ScrollView showsVerticalScrollIndicator={false}>
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
          </ScrollView>
        </AppForm>
        <ProgressBar
          visible={uploadVisible}
          percent={percent}
          onDone={handleOnDone}
        />
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    padding: 10,
  },
});

export default ListingEditScreen;
