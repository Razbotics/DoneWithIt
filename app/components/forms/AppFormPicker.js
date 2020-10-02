import React from "react";
import { useFormikContext } from "formik";
import ErrorMessage from "./ErrorMessage";
import AppPicker from "../AppPicker";

function AppFormPicker({ name, categories }) {
  const {
    setFieldValue,
    setFieldTouched,
    handleChange,
    errors,
    touched,
    values,
  } = useFormikContext();

  return (
    <>
      <AppPicker
        selectedItem={values[name]}
        onSelectItem={(item) => setFieldValue(name, item)}
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        items={categories}
        placeholder="Category"
        icon="apps"
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormPicker;
