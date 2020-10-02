import React from "react";
import { useFormikContext } from "formik";
import ErrorMessage from "./ErrorMessage";
import AppPicker from "../AppPicker";

function AppFormPicker({ name, categories, placeholder, ...otherProps }) {
  const { setFieldValue, errors, touched, values } = useFormikContext();

  return (
    <>
      <AppPicker
        selectedItem={values[name]}
        onSelectItem={(item) => setFieldValue(name, item)}
        items={categories}
        placeholder={placeholder}
        icon="apps"
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormPicker;
